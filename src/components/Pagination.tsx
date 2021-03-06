/* eslint-disable tailwindcss/no-custom-classname */
import Link from 'next/link';
import type { FC, ReactElement } from 'react';

import { AppConfig } from '@/utils/AppConfig';

interface Props {
  pagenum: number;
  pages: number;
  cat: string;
  hideStats?: boolean;
}

export const Pagination: FC<Props> = ({
  pages,
  pagenum,
  cat,
}): ReactElement => {
  const max = Math.ceil(pages / 30);
  const curpage = Number(pagenum);
  const pagemap: { page: number; active: boolean }[] = new Array(max)
    .fill(0)
    .map((_, i) => {
      const p = i + 1;
      return { page: p, active: p === curpage };
    })
    .map((x) => {
      return x;
    })
    .filter(({ page }) => {
      let start = curpage - 4;
      let end = curpage + 4;
      if (start < 1) start = 1;
      end = start + 8;
      return page >= start && page <= end;
    });

  const prev = curpage - 1 > 0 ? curpage - 1 : 1;
  const next = curpage + 1 < max ? curpage + 1 : max;

  return (
    <div className='flex justify-center'>
      <nav className='btn-group block sm:hidden' aria-label='Pagination'>
        <Link
          href={`${AppConfig.link}${cat}/${prev === 1 ? '' : prev}`}
          passHref
        >
          <a className='btn'>Назад</a>
        </Link>
        <Link
          href={`${AppConfig.link}${cat}/${next === 1 ? '' : next}`}
          passHref
        >
          <a className='btn'>Напред</a>
        </Link>
      </nav>
      <nav className='btn-group hidden sm:block' aria-label='Pagination'>
        {pagemap[0].page !== 1 && (
          <>
            <Link href={`${AppConfig.link}${cat}`} passHref>
              <a className='btn'>1</a>
            </Link>

            <div className='btndisabled'>...</div>
          </>
        )}

        {pagemap.map(({ page, active }) => {
          return (
            <Link
              key={page}
              href={`${AppConfig.link}${cat}/${page === 1 ? '' : page}`}
              passHref
            >
              <a className={`btn ${active ? 'btn-active' : ''}`}>{page}</a>
            </Link>
          );
        })}

        {max - pagemap[0].page > 10 && (
          <>
            <div className='btndisabled'>...</div>

            <Link href={`${AppConfig.link}${cat}/${max}`} passHref>
              <a className='btn'>{max}</a>
            </Link>
          </>
        )}
      </nav>
    </div>
  );
};
