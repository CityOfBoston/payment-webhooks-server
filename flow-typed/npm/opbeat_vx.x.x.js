// flow-typed signature: 3cd3e5315e922a7cefe91ebfe5cf0701
// flow-typed version: <<STUB>>/opbeat_v4.14.0/flow_v0.47.0

/**
 * This is an autogenerated libdef stub for:
 *
 *   'opbeat'
 *
 * Fill this stub out by replacing all the `any` types.
 *
 * Once filled out, we encourage you to share your work with the
 * community by sending a pull request to:
 * https://github.com/flowtype/flow-typed
 */

declare module 'opbeat' {
  declare class Opbeat {
    captureError(err: Error): void,
    captureError(err: Error, options: Object): void,
    captureError(
      err: Error,
      options: Object,
      callback: (err: Error, url: string) => void,
    ): void,
  }

  declare module.exports: Opbeat;
}

declare module 'opbeat/start' {
  declare module.exports: $Exports<'opbeat'>;
}
