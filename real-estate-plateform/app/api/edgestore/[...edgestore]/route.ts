
import { initEdgeStore } from '@edgestore/server';
import { createEdgeStoreNextHandler } from '@edgestore/server/adapters/next/app';
 import {z} from "zod"
const es = initEdgeStore.create();
 
/**
 * This is the main router for the Edge Store buckets.
 */
const edgeStoreRouter = es.router({
  myPublicImages: es.imageBucket()
  // this input will be required for every upload request
  .input(
    z.object({
      type: z.enum(["property","profile"]),
    }),
  )
  .path(({input})=> [{type: input.type}])
  // e.g. /publicFiles/{category}/{author}
  // .path(({ ctx, input }) => [
  //   {type : input.type},
  //   // { category: input.category },
  //   // { author: ctx.userId },
  // ])
  // this metadata will be added to every file in this bucket
  // .metadata(({ ctx, input }) => ({
  //   userRole: ctx.userRole,
  // })),
  // publicFiles: es.imageBucket(),
});

const handler = createEdgeStoreNextHandler({
  router: edgeStoreRouter,
});
 
export { handler as GET, handler as POST };
 
/**
 * This type is used to create the type-safe client for the frontend.
 */
export type EdgeStoreRouter = typeof edgeStoreRouter;