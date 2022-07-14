/* eslint-disable no-underscore-dangle */
// import { useRouter } from 'next/router';

import { gql } from '@apollo/client'
import { shuffle } from 'lodash'
import dynamic from 'next/dynamic'

import { Main } from '@/components/Layouts/Main'
import { Meta } from '@/components/Layouts/Meta'
import NewsThumbnail from '@/components/NewsThumbnail'
import client from '@/data/client'
import type { RootNewsProps } from '@/pages/news/'

const NoSEO = dynamic(() => import('@/components/NoSEO'), {
  ssr: false,
})
const NewsItem = ({
  news,
  news_by_pk: { title, image, uid, content, slug, date },
  shuffled,
}: RootNewsProps): JSX.Element => {
  return (
    <Main
      hideFooter
      meta={
        <Meta
          title={title}
          description={content.description ? content.description : title}
          cat="Новини"
          imgtype="image/jpeg"
          image={content.image ? content.image : image}
          url={`https://kloun.lol/news/i/${slug}/${uid}`}
        />
      }
    >
      <div className="my-10 flex w-full flex-col">
        <div className="mx-auto leading-relaxed lg:w-2/3">
          <div className="flex flex-row">
            <img
              alt={title}
              className="h-48 w-48 rounded-lg object-cover"
              src={image}
            />
            <h1 className="ml-4  text-2xl font-bold">{title}</h1>
          </div>
          {date && <div className="ml-4 text-sm text-gray-600">{date}</div>}

          {shuffled && (
            <>
              <div>{content.html && <NoSEO content={content.html} />}</div>
              <div className="hidden">
                {shuffled.map((p: string, i: number) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </>
          )}
        </div>
        <div className="flex flex-wrap">
          {news.map((item) => (
            <NewsThumbnail key={item.uid} {...item} />
          ))}
        </div>
      </div>
    </Main>
  )
}

const DATA_QUERY = gql`
  query MyQuery($id: uuid!, $slug: String!) {
    news(limit: 15, where: { slug: { _regex: $slug } }) {
      title
      image
      slug
      uid
    }

    news_by_pk(uid: $id) {
      date
      title
      image
      slug
      content
    }
  }
`
export const getServerSideProps = async (context: {
  query: { id: any; slug: any }
}) => {
  const { id, slug } = context.query

  const regex = shuffle(slug!.split('-')).join('|')

  const { data } = await client.query({
    query: DATA_QUERY,
    variables: { id, slug: `(${regex})` },
  })
  const shufflprep = data.news_by_pk.content.html
    ? shuffle(
        data.news_by_pk.content.html
          .join(' ')
          .split('.')
          .map((p: string) => `${shuffle(p.split(' ')).join(' ')}.`)
      )
    : null
  const shuffled = shufflprep
    ?.map((p: string) => {
      const rid = Math.floor(Math.random() * 5)
      return `${p.charAt(0).toUpperCase() + p.slice(1)} ${
        rid === 0 ? '-=splitter=-' : ''
      }`
    })
    .join(' ')
    .split('-=splitter=-')

  return {
    props: {
      ...data,
      slug,
      shuffled,
    },
  }
}

export default NewsItem
