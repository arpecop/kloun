/* eslint-disable no-underscore-dangle */

import { gql } from '@apollo/client'
import type { GetServerSideProps } from 'next'

import { JokeThumbnail } from '@/components/JokeThumbnail'
import { Main } from '@/components/Layouts/Main'
import { Meta } from '@/components/Layouts/Meta'
import { Pagination } from '@/components/Pagination'
import client from '@/data/client'
import type { Doc } from '@/data/structure'

const CatPage = ({
  jokes,
  pages,
  pagenum,
  cat,
}: {
  jokes: Doc[]
  pages: number
  pagenum: number
  cat: string
}): JSX.Element => {
  return (
    <Main
      meta={
        <Meta
          title={`Вицове от ${cat} на страница ${pagenum}`}
          description={`Вицове от ${cat}${jokes[0]!.joke
            .replace(/\n/gi, ' ')
            .substring(0, 100)}`}
        />
      }
    >
      <div className="breadcrumbs top-3 text-sm">
        <ul>
          <li>
            <a>Начало</a>
          </li>
          <li>
            <a>{cat}</a>
          </li>
        </ul>
      </div>
      <Pagination pages={pages} pagenum={pagenum} cat={`/cat/${cat}`} />
      <div className="flex flex-wrap">
        {jokes.map((item) => (
          <JokeThumbnail
            item={item}
            key={item._id}
            showcats={false}
            short={true}
          />
        ))}
      </div>
      <div className="fixed bottom-0 left-0 z-10 flex w-full justify-center bg-black/30 backdrop-blur-sm">
        <Pagination
          pages={pages}
          pagenum={pagenum}
          cat={`/cat/${cat}`}
          hideStats
        />
      </div>
    </Main>
  )
}

export default CatPage

export const DATA_QUERY_CAT = gql`
  query MyQuery($cat: String!, $offset: Int!) {
    jokes_aggregate(where: { cat: { _eq: $cat } }) {
      aggregate {
        count
      }
    }
    jokes(where: { cat: { _eq: $cat } }, limit: 30, offset: $offset) {
      _id
      joke
    }
  }
`

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { cat } = context.query

  const { data } = await client.query({
    query: DATA_QUERY_CAT,
    variables: { pagenum: 1, offset: 0, cat },
  })

  return {
    props: {
      jokes: data.jokes,
      pagenum: 1,
      cat,
      pages: data.jokes_aggregate.aggregate.count,
    },
  }
}