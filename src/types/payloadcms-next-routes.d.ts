declare module '@payloadcms/next/routes' {
  import type { NextRequest } from 'next/server';

  type HandlerReturn = Response | Promise<Response> | void | Promise<void>;

  // Next expects the route context argument to be present.
  // Using a generic params shape makes specific generated params
  // like { slug: string[] } assignable.
  type RouteContext = {
    params: Promise<Record<string, unknown>>;
  };

  type PayloadHandler = (
    request: Request | NextRequest,
    context: RouteContext
  ) => HandlerReturn;

  export function REST_OPTIONS(config: unknown): PayloadHandler;
  export function REST_GET(config: unknown): PayloadHandler;
  export function REST_POST(config: unknown): PayloadHandler;
  export function REST_DELETE(config: unknown): PayloadHandler;
  export function REST_PATCH(config: unknown): PayloadHandler;
  export function REST_PUT(config: unknown): PayloadHandler;
  export function GRAPHQL_POST(config: unknown): PayloadHandler;
  export function GRAPHQL_PLAYGROUND_GET(config: unknown): PayloadHandler;
}