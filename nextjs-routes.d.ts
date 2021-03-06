// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
// Run `npx nextjs-routes` to regenerate this file.
/* eslint-disable */

// prettier-ignore
declare module "nextjs-routes" {
  export type Route = 
    | string
    | { pathname: "/.DS_Store"; query?: Query | undefined }
    | { pathname: "/api/.DS_Store"; query?: Query | undefined }
    | { pathname: "/api/img/[id]"; query: Query<{ id: string }> }
    | { pathname: "/api/joke/[id]"; query: Query<{ id: string }> }
    | { pathname: "/api/joke/random"; query?: Query | undefined }
    | { pathname: "/api/sitemap"; query?: Query | undefined }
    | { pathname: "/api/story/.DS_Store"; query?: Query | undefined }
    | { pathname: "/api/story/[id]"; query: Query<{ id: string }> }
    | { pathname: "/api/story/logobottom"; query?: Query | undefined }
    | { pathname: "/api/test"; query?: Query | undefined }
    | { pathname: "/business/[cat]/[pagenum]"; query: Query<{ cat: string; pagenum: string }> }
    | { pathname: "/business/[cat]"; query: Query<{ cat: string }> }
    | { pathname: "/business/_company/[id]"; query: Query<{ id: string }> }
    | { pathname: "/business"; query?: Query | undefined }
    | { pathname: "/cat/.DS_Store"; query?: Query | undefined }
    | { pathname: "/cat/[cat]/.DS_Store"; query: Query<{ cat: string }> }
    | { pathname: "/cat/[cat]/[pagenum]"; query: Query<{ cat: string; pagenum: string }> }
    | { pathname: "/cat/[cat]"; query: Query<{ cat: string }> }
    | { pathname: "/cat/all"; query?: Query | undefined }
    | { pathname: "/"; query?: Query | undefined }
    | { pathname: "/joke/[id]"; query: Query<{ id: string }> }
    | { pathname: "/news/[pagenum]"; query: Query<{ pagenum: string }> }
    | { pathname: "/news/i/[slug]/[id]"; query: Query<{ slug: string; id: string }> }
    | { pathname: "/news"; query?: Query | undefined }
    | { pathname: "/tw"; query?: Query | undefined };

  type Query<Params = {}> = Params & { [key: string]: string | string[] | undefined };
}

// prettier-ignore
declare module "next/link" {
  import type { Route } from "nextjs-routes";
  import type { LinkProps as NextLinkProps } from "next/dist/client/link";
  import type { PropsWithChildren, MouseEventHandler } from "react";
  export * from "next/dist/client/link";

  type RouteOrQuery = Route | { query?: { [key: string]: string | string[] | undefined } };

  export interface LinkProps extends Omit<NextLinkProps, "href"> {
    href: RouteOrQuery;
  }

  declare function Link(
    props: PropsWithChildren<LinkProps>
  ): DetailedReactHTMLElement<
    {
      onMouseEnter?: MouseEventHandler<Element> | undefined;
      onClick: MouseEventHandler;
      href?: string | undefined;
      ref?: any;
    },
    HTMLElement
  >;

  export default Link;
}

// prettier-ignore
declare module "next/router" {
  import type { Route } from "nextjs-routes";
  import type { NextRouter as Router } from "next/dist/client/router";
  export * from "next/dist/client/router";
  export { default } from "next/dist/client/router";

  type TransitionOptions = Parameters<Router["push"]>[2];

  type Pathname = Route["pathname"];

  type QueryForPathname = {
    [K in Route as K["pathname"]]: Exclude<K["query"], undefined>;
  };

  type RouteOrQuery = Route | { query: { [key: string]: string | string[] | undefined } };

  export interface NextRouter<P extends Pathname = Pathname>
    extends Omit<Router, "push" | "replace"> {
    pathname: P;
    route: P;
    query: QueryForPathname[P];
    push(
      url: RouteOrQuery,
      as?: string,
      options?: TransitionOptions
    ): Promise<boolean>;
    replace(
      url: RouteOrQuery,
      as?: string,
      options?: TransitionOptions
    ): Promise<boolean>;
  }

  export function useRouter<P extends Pathname>(): NextRouter<P>;
}
