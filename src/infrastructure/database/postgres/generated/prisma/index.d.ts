
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Pack
 * 
 */
export type Pack = $Result.DefaultSelection<Prisma.$PackPayload>
/**
 * Model Shader
 * 
 */
export type Shader = $Result.DefaultSelection<Prisma.$ShaderPayload>
/**
 * Model Mod
 * 
 */
export type Mod = $Result.DefaultSelection<Prisma.$ModPayload>
/**
 * Model Comment
 * 
 */
export type Comment = $Result.DefaultSelection<Prisma.$CommentPayload>
/**
 * Model Image
 * 
 */
export type Image = $Result.DefaultSelection<Prisma.$ImagePayload>
/**
 * Model Conflict
 * 
 */
export type Conflict = $Result.DefaultSelection<Prisma.$ConflictPayload>
/**
 * Model ModDependency
 * 
 */
export type ModDependency = $Result.DefaultSelection<Prisma.$ModDependencyPayload>
/**
 * Model ShaderDependecy
 * 
 */
export type ShaderDependecy = $Result.DefaultSelection<Prisma.$ShaderDependecyPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const VersionType: {
  FORGE: 'FORGE',
  OPTIFINE: 'OPTIFINE',
  JAVA: 'JAVA'
};

export type VersionType = (typeof VersionType)[keyof typeof VersionType]

}

export type VersionType = $Enums.VersionType

export const VersionType: typeof $Enums.VersionType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.PrismaClientConstructorArgs<ClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pack`: Exposes CRUD operations for the **Pack** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Packs
    * const packs = await prisma.pack.findMany()
    * ```
    */
  get pack(): Prisma.PackDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.shader`: Exposes CRUD operations for the **Shader** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Shaders
    * const shaders = await prisma.shader.findMany()
    * ```
    */
  get shader(): Prisma.ShaderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mod`: Exposes CRUD operations for the **Mod** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mods
    * const mods = await prisma.mod.findMany()
    * ```
    */
  get mod(): Prisma.ModDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comment`: Exposes CRUD operations for the **Comment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comment.findMany()
    * ```
    */
  get comment(): Prisma.CommentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.image`: Exposes CRUD operations for the **Image** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Images
    * const images = await prisma.image.findMany()
    * ```
    */
  get image(): Prisma.ImageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.conflict`: Exposes CRUD operations for the **Conflict** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Conflicts
    * const conflicts = await prisma.conflict.findMany()
    * ```
    */
  get conflict(): Prisma.ConflictDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.modDependency`: Exposes CRUD operations for the **ModDependency** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ModDependencies
    * const modDependencies = await prisma.modDependency.findMany()
    * ```
    */
  get modDependency(): Prisma.ModDependencyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.shaderDependecy`: Exposes CRUD operations for the **ShaderDependecy** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ShaderDependecies
    * const shaderDependecies = await prisma.shaderDependecy.findMany()
    * ```
    */
  get shaderDependecy(): Prisma.ShaderDependecyDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.9.0
   * Query Engine version: e922089b7d7502aff4249d5da3420f6fa55fc6ad
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * Resolved type of the argument passed to the `PrismaClient` constructor.
   *
   * When called without a narrower options type (the common case), this resolves
   * to `PrismaClientOptions` directly, which produces a clear TypeScript error
   * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
   * the argument is missing or incomplete. When the user supplies a narrower
   * options type (e.g. via a literal), it falls back to `Subset` to keep
   * filtering out unknown properties.
   */
  export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> =
    [PrismaClientOptions] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      ((Without<T, U> & U) | (Without<U, T> & T)) & object
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Pack: 'Pack',
    Shader: 'Shader',
    Mod: 'Mod',
    Comment: 'Comment',
    Image: 'Image',
    Conflict: 'Conflict',
    ModDependency: 'ModDependency',
    ShaderDependecy: 'ShaderDependecy'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "pack" | "shader" | "mod" | "comment" | "image" | "conflict" | "modDependency" | "shaderDependecy"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Pack: {
        payload: Prisma.$PackPayload<ExtArgs>
        fields: Prisma.PackFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PackFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PackFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackPayload>
          }
          findFirst: {
            args: Prisma.PackFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PackFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackPayload>
          }
          findMany: {
            args: Prisma.PackFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackPayload>[]
          }
          create: {
            args: Prisma.PackCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackPayload>
          }
          createMany: {
            args: Prisma.PackCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PackCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackPayload>[]
          }
          delete: {
            args: Prisma.PackDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackPayload>
          }
          update: {
            args: Prisma.PackUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackPayload>
          }
          deleteMany: {
            args: Prisma.PackDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PackUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PackUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackPayload>[]
          }
          upsert: {
            args: Prisma.PackUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackPayload>
          }
          aggregate: {
            args: Prisma.PackAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePack>
          }
          groupBy: {
            args: Prisma.PackGroupByArgs<ExtArgs>
            result: $Utils.Optional<PackGroupByOutputType>[]
          }
          count: {
            args: Prisma.PackCountArgs<ExtArgs>
            result: $Utils.Optional<PackCountAggregateOutputType> | number
          }
        }
      }
      Shader: {
        payload: Prisma.$ShaderPayload<ExtArgs>
        fields: Prisma.ShaderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShaderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShaderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShaderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShaderPayload>
          }
          findFirst: {
            args: Prisma.ShaderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShaderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShaderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShaderPayload>
          }
          findMany: {
            args: Prisma.ShaderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShaderPayload>[]
          }
          create: {
            args: Prisma.ShaderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShaderPayload>
          }
          createMany: {
            args: Prisma.ShaderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ShaderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShaderPayload>[]
          }
          delete: {
            args: Prisma.ShaderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShaderPayload>
          }
          update: {
            args: Prisma.ShaderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShaderPayload>
          }
          deleteMany: {
            args: Prisma.ShaderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShaderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ShaderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShaderPayload>[]
          }
          upsert: {
            args: Prisma.ShaderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShaderPayload>
          }
          aggregate: {
            args: Prisma.ShaderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShader>
          }
          groupBy: {
            args: Prisma.ShaderGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShaderGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShaderCountArgs<ExtArgs>
            result: $Utils.Optional<ShaderCountAggregateOutputType> | number
          }
        }
      }
      Mod: {
        payload: Prisma.$ModPayload<ExtArgs>
        fields: Prisma.ModFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ModFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ModFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModPayload>
          }
          findFirst: {
            args: Prisma.ModFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ModFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModPayload>
          }
          findMany: {
            args: Prisma.ModFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModPayload>[]
          }
          create: {
            args: Prisma.ModCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModPayload>
          }
          createMany: {
            args: Prisma.ModCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ModCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModPayload>[]
          }
          delete: {
            args: Prisma.ModDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModPayload>
          }
          update: {
            args: Prisma.ModUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModPayload>
          }
          deleteMany: {
            args: Prisma.ModDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ModUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ModUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModPayload>[]
          }
          upsert: {
            args: Prisma.ModUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModPayload>
          }
          aggregate: {
            args: Prisma.ModAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMod>
          }
          groupBy: {
            args: Prisma.ModGroupByArgs<ExtArgs>
            result: $Utils.Optional<ModGroupByOutputType>[]
          }
          count: {
            args: Prisma.ModCountArgs<ExtArgs>
            result: $Utils.Optional<ModCountAggregateOutputType> | number
          }
        }
      }
      Comment: {
        payload: Prisma.$CommentPayload<ExtArgs>
        fields: Prisma.CommentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findFirst: {
            args: Prisma.CommentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findMany: {
            args: Prisma.CommentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          create: {
            args: Prisma.CommentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          createMany: {
            args: Prisma.CommentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          delete: {
            args: Prisma.CommentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          update: {
            args: Prisma.CommentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          deleteMany: {
            args: Prisma.CommentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CommentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          upsert: {
            args: Prisma.CommentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          aggregate: {
            args: Prisma.CommentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComment>
          }
          groupBy: {
            args: Prisma.CommentGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommentGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommentCountArgs<ExtArgs>
            result: $Utils.Optional<CommentCountAggregateOutputType> | number
          }
        }
      }
      Image: {
        payload: Prisma.$ImagePayload<ExtArgs>
        fields: Prisma.ImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          findFirst: {
            args: Prisma.ImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          findMany: {
            args: Prisma.ImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>[]
          }
          create: {
            args: Prisma.ImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          createMany: {
            args: Prisma.ImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ImageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>[]
          }
          delete: {
            args: Prisma.ImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          update: {
            args: Prisma.ImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          deleteMany: {
            args: Prisma.ImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ImageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>[]
          }
          upsert: {
            args: Prisma.ImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          aggregate: {
            args: Prisma.ImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateImage>
          }
          groupBy: {
            args: Prisma.ImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ImageCountArgs<ExtArgs>
            result: $Utils.Optional<ImageCountAggregateOutputType> | number
          }
        }
      }
      Conflict: {
        payload: Prisma.$ConflictPayload<ExtArgs>
        fields: Prisma.ConflictFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConflictFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConflictPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConflictFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConflictPayload>
          }
          findFirst: {
            args: Prisma.ConflictFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConflictPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConflictFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConflictPayload>
          }
          findMany: {
            args: Prisma.ConflictFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConflictPayload>[]
          }
          create: {
            args: Prisma.ConflictCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConflictPayload>
          }
          createMany: {
            args: Prisma.ConflictCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConflictCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConflictPayload>[]
          }
          delete: {
            args: Prisma.ConflictDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConflictPayload>
          }
          update: {
            args: Prisma.ConflictUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConflictPayload>
          }
          deleteMany: {
            args: Prisma.ConflictDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConflictUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ConflictUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConflictPayload>[]
          }
          upsert: {
            args: Prisma.ConflictUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConflictPayload>
          }
          aggregate: {
            args: Prisma.ConflictAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConflict>
          }
          groupBy: {
            args: Prisma.ConflictGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConflictGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConflictCountArgs<ExtArgs>
            result: $Utils.Optional<ConflictCountAggregateOutputType> | number
          }
        }
      }
      ModDependency: {
        payload: Prisma.$ModDependencyPayload<ExtArgs>
        fields: Prisma.ModDependencyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ModDependencyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModDependencyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ModDependencyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModDependencyPayload>
          }
          findFirst: {
            args: Prisma.ModDependencyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModDependencyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ModDependencyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModDependencyPayload>
          }
          findMany: {
            args: Prisma.ModDependencyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModDependencyPayload>[]
          }
          create: {
            args: Prisma.ModDependencyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModDependencyPayload>
          }
          createMany: {
            args: Prisma.ModDependencyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ModDependencyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModDependencyPayload>[]
          }
          delete: {
            args: Prisma.ModDependencyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModDependencyPayload>
          }
          update: {
            args: Prisma.ModDependencyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModDependencyPayload>
          }
          deleteMany: {
            args: Prisma.ModDependencyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ModDependencyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ModDependencyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModDependencyPayload>[]
          }
          upsert: {
            args: Prisma.ModDependencyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModDependencyPayload>
          }
          aggregate: {
            args: Prisma.ModDependencyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateModDependency>
          }
          groupBy: {
            args: Prisma.ModDependencyGroupByArgs<ExtArgs>
            result: $Utils.Optional<ModDependencyGroupByOutputType>[]
          }
          count: {
            args: Prisma.ModDependencyCountArgs<ExtArgs>
            result: $Utils.Optional<ModDependencyCountAggregateOutputType> | number
          }
        }
      }
      ShaderDependecy: {
        payload: Prisma.$ShaderDependecyPayload<ExtArgs>
        fields: Prisma.ShaderDependecyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShaderDependecyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShaderDependecyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShaderDependecyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShaderDependecyPayload>
          }
          findFirst: {
            args: Prisma.ShaderDependecyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShaderDependecyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShaderDependecyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShaderDependecyPayload>
          }
          findMany: {
            args: Prisma.ShaderDependecyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShaderDependecyPayload>[]
          }
          create: {
            args: Prisma.ShaderDependecyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShaderDependecyPayload>
          }
          createMany: {
            args: Prisma.ShaderDependecyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ShaderDependecyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShaderDependecyPayload>[]
          }
          delete: {
            args: Prisma.ShaderDependecyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShaderDependecyPayload>
          }
          update: {
            args: Prisma.ShaderDependecyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShaderDependecyPayload>
          }
          deleteMany: {
            args: Prisma.ShaderDependecyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShaderDependecyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ShaderDependecyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShaderDependecyPayload>[]
          }
          upsert: {
            args: Prisma.ShaderDependecyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShaderDependecyPayload>
          }
          aggregate: {
            args: Prisma.ShaderDependecyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShaderDependecy>
          }
          groupBy: {
            args: Prisma.ShaderDependecyGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShaderDependecyGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShaderDependecyCountArgs<ExtArgs>
            result: $Utils.Optional<ShaderDependecyCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     * 
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     * 
     * Learn more: https://pris.ly/d/driver-adapters
     * 
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     * 
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     * 
     * Learn more: https://pris.ly/d/accelerate
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    pack?: PackOmit
    shader?: ShaderOmit
    mod?: ModOmit
    comment?: CommentOmit
    image?: ImageOmit
    conflict?: ConflictOmit
    modDependency?: ModDependencyOmit
    shaderDependecy?: ShaderDependecyOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    packs: number
    shaders: number
    mods: number
    comments: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    packs?: boolean | UserCountOutputTypeCountPacksArgs
    shaders?: boolean | UserCountOutputTypeCountShadersArgs
    mods?: boolean | UserCountOutputTypeCountModsArgs
    comments?: boolean | UserCountOutputTypeCountCommentsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPacksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PackWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountShadersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShaderWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountModsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }


  /**
   * Count Type PackCountOutputType
   */

  export type PackCountOutputType = {
    shaders: number
    mods: number
    comments: number
    images: number
  }

  export type PackCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shaders?: boolean | PackCountOutputTypeCountShadersArgs
    mods?: boolean | PackCountOutputTypeCountModsArgs
    comments?: boolean | PackCountOutputTypeCountCommentsArgs
    images?: boolean | PackCountOutputTypeCountImagesArgs
  }

  // Custom InputTypes
  /**
   * PackCountOutputType without action
   */
  export type PackCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackCountOutputType
     */
    select?: PackCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PackCountOutputType without action
   */
  export type PackCountOutputTypeCountShadersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShaderWhereInput
  }

  /**
   * PackCountOutputType without action
   */
  export type PackCountOutputTypeCountModsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModWhereInput
  }

  /**
   * PackCountOutputType without action
   */
  export type PackCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }

  /**
   * PackCountOutputType without action
   */
  export type PackCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImageWhereInput
  }


  /**
   * Count Type ShaderCountOutputType
   */

  export type ShaderCountOutputType = {
    packs: number
    comments: number
    images: number
    conflicts: number
    shaderDependecies: number
  }

  export type ShaderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    packs?: boolean | ShaderCountOutputTypeCountPacksArgs
    comments?: boolean | ShaderCountOutputTypeCountCommentsArgs
    images?: boolean | ShaderCountOutputTypeCountImagesArgs
    conflicts?: boolean | ShaderCountOutputTypeCountConflictsArgs
    shaderDependecies?: boolean | ShaderCountOutputTypeCountShaderDependeciesArgs
  }

  // Custom InputTypes
  /**
   * ShaderCountOutputType without action
   */
  export type ShaderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShaderCountOutputType
     */
    select?: ShaderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ShaderCountOutputType without action
   */
  export type ShaderCountOutputTypeCountPacksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PackWhereInput
  }

  /**
   * ShaderCountOutputType without action
   */
  export type ShaderCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }

  /**
   * ShaderCountOutputType without action
   */
  export type ShaderCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImageWhereInput
  }

  /**
   * ShaderCountOutputType without action
   */
  export type ShaderCountOutputTypeCountConflictsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConflictWhereInput
  }

  /**
   * ShaderCountOutputType without action
   */
  export type ShaderCountOutputTypeCountShaderDependeciesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShaderDependecyWhereInput
  }


  /**
   * Count Type ModCountOutputType
   */

  export type ModCountOutputType = {
    packs: number
    comments: number
    images: number
    conflictsFrom: number
    conflictsTo: number
    requiredBy: number
    modDependencies: number
    shaderDependecies: number
  }

  export type ModCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    packs?: boolean | ModCountOutputTypeCountPacksArgs
    comments?: boolean | ModCountOutputTypeCountCommentsArgs
    images?: boolean | ModCountOutputTypeCountImagesArgs
    conflictsFrom?: boolean | ModCountOutputTypeCountConflictsFromArgs
    conflictsTo?: boolean | ModCountOutputTypeCountConflictsToArgs
    requiredBy?: boolean | ModCountOutputTypeCountRequiredByArgs
    modDependencies?: boolean | ModCountOutputTypeCountModDependenciesArgs
    shaderDependecies?: boolean | ModCountOutputTypeCountShaderDependeciesArgs
  }

  // Custom InputTypes
  /**
   * ModCountOutputType without action
   */
  export type ModCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModCountOutputType
     */
    select?: ModCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ModCountOutputType without action
   */
  export type ModCountOutputTypeCountPacksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PackWhereInput
  }

  /**
   * ModCountOutputType without action
   */
  export type ModCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }

  /**
   * ModCountOutputType without action
   */
  export type ModCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImageWhereInput
  }

  /**
   * ModCountOutputType without action
   */
  export type ModCountOutputTypeCountConflictsFromArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConflictWhereInput
  }

  /**
   * ModCountOutputType without action
   */
  export type ModCountOutputTypeCountConflictsToArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConflictWhereInput
  }

  /**
   * ModCountOutputType without action
   */
  export type ModCountOutputTypeCountRequiredByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModDependencyWhereInput
  }

  /**
   * ModCountOutputType without action
   */
  export type ModCountOutputTypeCountModDependenciesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModDependencyWhereInput
  }

  /**
   * ModCountOutputType without action
   */
  export type ModCountOutputTypeCountShaderDependeciesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShaderDependecyWhereInput
  }


  /**
   * Count Type ImageCountOutputType
   */

  export type ImageCountOutputType = {
    users: number
    packsPrincipal: number
    shadersPrincipal: number
    modsPrincipal: number
  }

  export type ImageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | ImageCountOutputTypeCountUsersArgs
    packsPrincipal?: boolean | ImageCountOutputTypeCountPacksPrincipalArgs
    shadersPrincipal?: boolean | ImageCountOutputTypeCountShadersPrincipalArgs
    modsPrincipal?: boolean | ImageCountOutputTypeCountModsPrincipalArgs
  }

  // Custom InputTypes
  /**
   * ImageCountOutputType without action
   */
  export type ImageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageCountOutputType
     */
    select?: ImageCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ImageCountOutputType without action
   */
  export type ImageCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * ImageCountOutputType without action
   */
  export type ImageCountOutputTypeCountPacksPrincipalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PackWhereInput
  }

  /**
   * ImageCountOutputType without action
   */
  export type ImageCountOutputTypeCountShadersPrincipalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShaderWhereInput
  }

  /**
   * ImageCountOutputType without action
   */
  export type ImageCountOutputTypeCountModsPrincipalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    imageId: number | null
  }

  export type UserSumAggregateOutputType = {
    id: bigint | null
    imageId: bigint | null
  }

  export type UserMinAggregateOutputType = {
    id: bigint | null
    email: string | null
    nickname: string | null
    password: string | null
    recovery_key: string | null
    is_admin: boolean | null
    imageId: bigint | null
  }

  export type UserMaxAggregateOutputType = {
    id: bigint | null
    email: string | null
    nickname: string | null
    password: string | null
    recovery_key: string | null
    is_admin: boolean | null
    imageId: bigint | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    nickname: number
    password: number
    recovery_key: number
    is_admin: number
    imageId: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    imageId?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    imageId?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    nickname?: true
    password?: true
    recovery_key?: true
    is_admin?: true
    imageId?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    nickname?: true
    password?: true
    recovery_key?: true
    is_admin?: true
    imageId?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    nickname?: true
    password?: true
    recovery_key?: true
    is_admin?: true
    imageId?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: bigint
    email: string
    nickname: string
    password: string
    recovery_key: string | null
    is_admin: boolean
    imageId: bigint | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    nickname?: boolean
    password?: boolean
    recovery_key?: boolean
    is_admin?: boolean
    imageId?: boolean
    packs?: boolean | User$packsArgs<ExtArgs>
    shaders?: boolean | User$shadersArgs<ExtArgs>
    mods?: boolean | User$modsArgs<ExtArgs>
    comments?: boolean | User$commentsArgs<ExtArgs>
    image?: boolean | User$imageArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    nickname?: boolean
    password?: boolean
    recovery_key?: boolean
    is_admin?: boolean
    imageId?: boolean
    image?: boolean | User$imageArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    nickname?: boolean
    password?: boolean
    recovery_key?: boolean
    is_admin?: boolean
    imageId?: boolean
    image?: boolean | User$imageArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    nickname?: boolean
    password?: boolean
    recovery_key?: boolean
    is_admin?: boolean
    imageId?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "nickname" | "password" | "recovery_key" | "is_admin" | "imageId", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    packs?: boolean | User$packsArgs<ExtArgs>
    shaders?: boolean | User$shadersArgs<ExtArgs>
    mods?: boolean | User$modsArgs<ExtArgs>
    comments?: boolean | User$commentsArgs<ExtArgs>
    image?: boolean | User$imageArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    image?: boolean | User$imageArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    image?: boolean | User$imageArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      packs: Prisma.$PackPayload<ExtArgs>[]
      shaders: Prisma.$ShaderPayload<ExtArgs>[]
      mods: Prisma.$ModPayload<ExtArgs>[]
      comments: Prisma.$CommentPayload<ExtArgs>[]
      image: Prisma.$ImagePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      email: string
      nickname: string
      password: string
      recovery_key: string | null
      is_admin: boolean
      imageId: bigint | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    packs<T extends User$packsArgs<ExtArgs> = {}>(args?: Subset<T, User$packsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PackPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    shaders<T extends User$shadersArgs<ExtArgs> = {}>(args?: Subset<T, User$shadersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShaderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    mods<T extends User$modsArgs<ExtArgs> = {}>(args?: Subset<T, User$modsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comments<T extends User$commentsArgs<ExtArgs> = {}>(args?: Subset<T, User$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    image<T extends User$imageArgs<ExtArgs> = {}>(args?: Subset<T, User$imageArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'BigInt'>
    readonly email: FieldRef<"User", 'String'>
    readonly nickname: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly recovery_key: FieldRef<"User", 'String'>
    readonly is_admin: FieldRef<"User", 'Boolean'>
    readonly imageId: FieldRef<"User", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.packs
   */
  export type User$packsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pack
     */
    select?: PackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pack
     */
    omit?: PackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackInclude<ExtArgs> | null
    where?: PackWhereInput
    orderBy?: PackOrderByWithRelationInput | PackOrderByWithRelationInput[]
    cursor?: PackWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PackScalarFieldEnum | PackScalarFieldEnum[]
  }

  /**
   * User.shaders
   */
  export type User$shadersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shader
     */
    select?: ShaderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shader
     */
    omit?: ShaderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShaderInclude<ExtArgs> | null
    where?: ShaderWhereInput
    orderBy?: ShaderOrderByWithRelationInput | ShaderOrderByWithRelationInput[]
    cursor?: ShaderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShaderScalarFieldEnum | ShaderScalarFieldEnum[]
  }

  /**
   * User.mods
   */
  export type User$modsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mod
     */
    select?: ModSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mod
     */
    omit?: ModOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModInclude<ExtArgs> | null
    where?: ModWhereInput
    orderBy?: ModOrderByWithRelationInput | ModOrderByWithRelationInput[]
    cursor?: ModWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ModScalarFieldEnum | ModScalarFieldEnum[]
  }

  /**
   * User.comments
   */
  export type User$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * User.image
   */
  export type User$imageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    where?: ImageWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Pack
   */

  export type AggregatePack = {
    _count: PackCountAggregateOutputType | null
    _avg: PackAvgAggregateOutputType | null
    _sum: PackSumAggregateOutputType | null
    _min: PackMinAggregateOutputType | null
    _max: PackMaxAggregateOutputType | null
  }

  export type PackAvgAggregateOutputType = {
    id: number | null
    max_version: number | null
    min_version: number | null
    authorId: number | null
    principalImageId: number | null
  }

  export type PackSumAggregateOutputType = {
    id: bigint | null
    max_version: number | null
    min_version: number | null
    authorId: bigint | null
    principalImageId: bigint | null
  }

  export type PackMinAggregateOutputType = {
    id: bigint | null
    max_version: number | null
    min_version: number | null
    versionType: $Enums.VersionType | null
    name: string | null
    description: string | null
    authorId: bigint | null
    principalImageId: bigint | null
  }

  export type PackMaxAggregateOutputType = {
    id: bigint | null
    max_version: number | null
    min_version: number | null
    versionType: $Enums.VersionType | null
    name: string | null
    description: string | null
    authorId: bigint | null
    principalImageId: bigint | null
  }

  export type PackCountAggregateOutputType = {
    id: number
    max_version: number
    min_version: number
    versionType: number
    name: number
    description: number
    authorId: number
    principalImageId: number
    _all: number
  }


  export type PackAvgAggregateInputType = {
    id?: true
    max_version?: true
    min_version?: true
    authorId?: true
    principalImageId?: true
  }

  export type PackSumAggregateInputType = {
    id?: true
    max_version?: true
    min_version?: true
    authorId?: true
    principalImageId?: true
  }

  export type PackMinAggregateInputType = {
    id?: true
    max_version?: true
    min_version?: true
    versionType?: true
    name?: true
    description?: true
    authorId?: true
    principalImageId?: true
  }

  export type PackMaxAggregateInputType = {
    id?: true
    max_version?: true
    min_version?: true
    versionType?: true
    name?: true
    description?: true
    authorId?: true
    principalImageId?: true
  }

  export type PackCountAggregateInputType = {
    id?: true
    max_version?: true
    min_version?: true
    versionType?: true
    name?: true
    description?: true
    authorId?: true
    principalImageId?: true
    _all?: true
  }

  export type PackAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pack to aggregate.
     */
    where?: PackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Packs to fetch.
     */
    orderBy?: PackOrderByWithRelationInput | PackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Packs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Packs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Packs
    **/
    _count?: true | PackCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PackAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PackSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PackMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PackMaxAggregateInputType
  }

  export type GetPackAggregateType<T extends PackAggregateArgs> = {
        [P in keyof T & keyof AggregatePack]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePack[P]>
      : GetScalarType<T[P], AggregatePack[P]>
  }




  export type PackGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PackWhereInput
    orderBy?: PackOrderByWithAggregationInput | PackOrderByWithAggregationInput[]
    by: PackScalarFieldEnum[] | PackScalarFieldEnum
    having?: PackScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PackCountAggregateInputType | true
    _avg?: PackAvgAggregateInputType
    _sum?: PackSumAggregateInputType
    _min?: PackMinAggregateInputType
    _max?: PackMaxAggregateInputType
  }

  export type PackGroupByOutputType = {
    id: bigint
    max_version: number
    min_version: number
    versionType: $Enums.VersionType
    name: string
    description: string | null
    authorId: bigint
    principalImageId: bigint | null
    _count: PackCountAggregateOutputType | null
    _avg: PackAvgAggregateOutputType | null
    _sum: PackSumAggregateOutputType | null
    _min: PackMinAggregateOutputType | null
    _max: PackMaxAggregateOutputType | null
  }

  type GetPackGroupByPayload<T extends PackGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PackGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PackGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PackGroupByOutputType[P]>
            : GetScalarType<T[P], PackGroupByOutputType[P]>
        }
      >
    >


  export type PackSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    max_version?: boolean
    min_version?: boolean
    versionType?: boolean
    name?: boolean
    description?: boolean
    authorId?: boolean
    principalImageId?: boolean
    shaders?: boolean | Pack$shadersArgs<ExtArgs>
    mods?: boolean | Pack$modsArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
    comments?: boolean | Pack$commentsArgs<ExtArgs>
    images?: boolean | Pack$imagesArgs<ExtArgs>
    principalImage?: boolean | Pack$principalImageArgs<ExtArgs>
    _count?: boolean | PackCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pack"]>

  export type PackSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    max_version?: boolean
    min_version?: boolean
    versionType?: boolean
    name?: boolean
    description?: boolean
    authorId?: boolean
    principalImageId?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
    principalImage?: boolean | Pack$principalImageArgs<ExtArgs>
  }, ExtArgs["result"]["pack"]>

  export type PackSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    max_version?: boolean
    min_version?: boolean
    versionType?: boolean
    name?: boolean
    description?: boolean
    authorId?: boolean
    principalImageId?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
    principalImage?: boolean | Pack$principalImageArgs<ExtArgs>
  }, ExtArgs["result"]["pack"]>

  export type PackSelectScalar = {
    id?: boolean
    max_version?: boolean
    min_version?: boolean
    versionType?: boolean
    name?: boolean
    description?: boolean
    authorId?: boolean
    principalImageId?: boolean
  }

  export type PackOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "max_version" | "min_version" | "versionType" | "name" | "description" | "authorId" | "principalImageId", ExtArgs["result"]["pack"]>
  export type PackInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shaders?: boolean | Pack$shadersArgs<ExtArgs>
    mods?: boolean | Pack$modsArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
    comments?: boolean | Pack$commentsArgs<ExtArgs>
    images?: boolean | Pack$imagesArgs<ExtArgs>
    principalImage?: boolean | Pack$principalImageArgs<ExtArgs>
    _count?: boolean | PackCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PackIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
    principalImage?: boolean | Pack$principalImageArgs<ExtArgs>
  }
  export type PackIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
    principalImage?: boolean | Pack$principalImageArgs<ExtArgs>
  }

  export type $PackPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pack"
    objects: {
      shaders: Prisma.$ShaderPayload<ExtArgs>[]
      mods: Prisma.$ModPayload<ExtArgs>[]
      author: Prisma.$UserPayload<ExtArgs>
      comments: Prisma.$CommentPayload<ExtArgs>[]
      images: Prisma.$ImagePayload<ExtArgs>[]
      principalImage: Prisma.$ImagePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      max_version: number
      min_version: number
      versionType: $Enums.VersionType
      name: string
      description: string | null
      authorId: bigint
      principalImageId: bigint | null
    }, ExtArgs["result"]["pack"]>
    composites: {}
  }

  type PackGetPayload<S extends boolean | null | undefined | PackDefaultArgs> = $Result.GetResult<Prisma.$PackPayload, S>

  type PackCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PackFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PackCountAggregateInputType | true
    }

  export interface PackDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pack'], meta: { name: 'Pack' } }
    /**
     * Find zero or one Pack that matches the filter.
     * @param {PackFindUniqueArgs} args - Arguments to find a Pack
     * @example
     * // Get one Pack
     * const pack = await prisma.pack.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PackFindUniqueArgs>(args: SelectSubset<T, PackFindUniqueArgs<ExtArgs>>): Prisma__PackClient<$Result.GetResult<Prisma.$PackPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pack that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PackFindUniqueOrThrowArgs} args - Arguments to find a Pack
     * @example
     * // Get one Pack
     * const pack = await prisma.pack.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PackFindUniqueOrThrowArgs>(args: SelectSubset<T, PackFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PackClient<$Result.GetResult<Prisma.$PackPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pack that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackFindFirstArgs} args - Arguments to find a Pack
     * @example
     * // Get one Pack
     * const pack = await prisma.pack.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PackFindFirstArgs>(args?: SelectSubset<T, PackFindFirstArgs<ExtArgs>>): Prisma__PackClient<$Result.GetResult<Prisma.$PackPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pack that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackFindFirstOrThrowArgs} args - Arguments to find a Pack
     * @example
     * // Get one Pack
     * const pack = await prisma.pack.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PackFindFirstOrThrowArgs>(args?: SelectSubset<T, PackFindFirstOrThrowArgs<ExtArgs>>): Prisma__PackClient<$Result.GetResult<Prisma.$PackPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Packs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Packs
     * const packs = await prisma.pack.findMany()
     * 
     * // Get first 10 Packs
     * const packs = await prisma.pack.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const packWithIdOnly = await prisma.pack.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PackFindManyArgs>(args?: SelectSubset<T, PackFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PackPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pack.
     * @param {PackCreateArgs} args - Arguments to create a Pack.
     * @example
     * // Create one Pack
     * const Pack = await prisma.pack.create({
     *   data: {
     *     // ... data to create a Pack
     *   }
     * })
     * 
     */
    create<T extends PackCreateArgs>(args: SelectSubset<T, PackCreateArgs<ExtArgs>>): Prisma__PackClient<$Result.GetResult<Prisma.$PackPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Packs.
     * @param {PackCreateManyArgs} args - Arguments to create many Packs.
     * @example
     * // Create many Packs
     * const pack = await prisma.pack.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PackCreateManyArgs>(args?: SelectSubset<T, PackCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Packs and returns the data saved in the database.
     * @param {PackCreateManyAndReturnArgs} args - Arguments to create many Packs.
     * @example
     * // Create many Packs
     * const pack = await prisma.pack.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Packs and only return the `id`
     * const packWithIdOnly = await prisma.pack.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PackCreateManyAndReturnArgs>(args?: SelectSubset<T, PackCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PackPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pack.
     * @param {PackDeleteArgs} args - Arguments to delete one Pack.
     * @example
     * // Delete one Pack
     * const Pack = await prisma.pack.delete({
     *   where: {
     *     // ... filter to delete one Pack
     *   }
     * })
     * 
     */
    delete<T extends PackDeleteArgs>(args: SelectSubset<T, PackDeleteArgs<ExtArgs>>): Prisma__PackClient<$Result.GetResult<Prisma.$PackPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pack.
     * @param {PackUpdateArgs} args - Arguments to update one Pack.
     * @example
     * // Update one Pack
     * const pack = await prisma.pack.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PackUpdateArgs>(args: SelectSubset<T, PackUpdateArgs<ExtArgs>>): Prisma__PackClient<$Result.GetResult<Prisma.$PackPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Packs.
     * @param {PackDeleteManyArgs} args - Arguments to filter Packs to delete.
     * @example
     * // Delete a few Packs
     * const { count } = await prisma.pack.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PackDeleteManyArgs>(args?: SelectSubset<T, PackDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Packs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Packs
     * const pack = await prisma.pack.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PackUpdateManyArgs>(args: SelectSubset<T, PackUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Packs and returns the data updated in the database.
     * @param {PackUpdateManyAndReturnArgs} args - Arguments to update many Packs.
     * @example
     * // Update many Packs
     * const pack = await prisma.pack.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Packs and only return the `id`
     * const packWithIdOnly = await prisma.pack.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PackUpdateManyAndReturnArgs>(args: SelectSubset<T, PackUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PackPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pack.
     * @param {PackUpsertArgs} args - Arguments to update or create a Pack.
     * @example
     * // Update or create a Pack
     * const pack = await prisma.pack.upsert({
     *   create: {
     *     // ... data to create a Pack
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pack we want to update
     *   }
     * })
     */
    upsert<T extends PackUpsertArgs>(args: SelectSubset<T, PackUpsertArgs<ExtArgs>>): Prisma__PackClient<$Result.GetResult<Prisma.$PackPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Packs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackCountArgs} args - Arguments to filter Packs to count.
     * @example
     * // Count the number of Packs
     * const count = await prisma.pack.count({
     *   where: {
     *     // ... the filter for the Packs we want to count
     *   }
     * })
    **/
    count<T extends PackCountArgs>(
      args?: Subset<T, PackCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PackCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pack.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PackAggregateArgs>(args: Subset<T, PackAggregateArgs>): Prisma.PrismaPromise<GetPackAggregateType<T>>

    /**
     * Group by Pack.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PackGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PackGroupByArgs['orderBy'] }
        : { orderBy?: PackGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PackGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPackGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pack model
   */
  readonly fields: PackFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pack.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PackClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    shaders<T extends Pack$shadersArgs<ExtArgs> = {}>(args?: Subset<T, Pack$shadersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShaderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    mods<T extends Pack$modsArgs<ExtArgs> = {}>(args?: Subset<T, Pack$modsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    author<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    comments<T extends Pack$commentsArgs<ExtArgs> = {}>(args?: Subset<T, Pack$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    images<T extends Pack$imagesArgs<ExtArgs> = {}>(args?: Subset<T, Pack$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    principalImage<T extends Pack$principalImageArgs<ExtArgs> = {}>(args?: Subset<T, Pack$principalImageArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Pack model
   */
  interface PackFieldRefs {
    readonly id: FieldRef<"Pack", 'BigInt'>
    readonly max_version: FieldRef<"Pack", 'Int'>
    readonly min_version: FieldRef<"Pack", 'Int'>
    readonly versionType: FieldRef<"Pack", 'VersionType'>
    readonly name: FieldRef<"Pack", 'String'>
    readonly description: FieldRef<"Pack", 'String'>
    readonly authorId: FieldRef<"Pack", 'BigInt'>
    readonly principalImageId: FieldRef<"Pack", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * Pack findUnique
   */
  export type PackFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pack
     */
    select?: PackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pack
     */
    omit?: PackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackInclude<ExtArgs> | null
    /**
     * Filter, which Pack to fetch.
     */
    where: PackWhereUniqueInput
  }

  /**
   * Pack findUniqueOrThrow
   */
  export type PackFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pack
     */
    select?: PackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pack
     */
    omit?: PackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackInclude<ExtArgs> | null
    /**
     * Filter, which Pack to fetch.
     */
    where: PackWhereUniqueInput
  }

  /**
   * Pack findFirst
   */
  export type PackFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pack
     */
    select?: PackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pack
     */
    omit?: PackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackInclude<ExtArgs> | null
    /**
     * Filter, which Pack to fetch.
     */
    where?: PackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Packs to fetch.
     */
    orderBy?: PackOrderByWithRelationInput | PackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Packs.
     */
    cursor?: PackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Packs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Packs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Packs.
     */
    distinct?: PackScalarFieldEnum | PackScalarFieldEnum[]
  }

  /**
   * Pack findFirstOrThrow
   */
  export type PackFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pack
     */
    select?: PackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pack
     */
    omit?: PackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackInclude<ExtArgs> | null
    /**
     * Filter, which Pack to fetch.
     */
    where?: PackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Packs to fetch.
     */
    orderBy?: PackOrderByWithRelationInput | PackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Packs.
     */
    cursor?: PackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Packs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Packs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Packs.
     */
    distinct?: PackScalarFieldEnum | PackScalarFieldEnum[]
  }

  /**
   * Pack findMany
   */
  export type PackFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pack
     */
    select?: PackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pack
     */
    omit?: PackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackInclude<ExtArgs> | null
    /**
     * Filter, which Packs to fetch.
     */
    where?: PackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Packs to fetch.
     */
    orderBy?: PackOrderByWithRelationInput | PackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Packs.
     */
    cursor?: PackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Packs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Packs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Packs.
     */
    distinct?: PackScalarFieldEnum | PackScalarFieldEnum[]
  }

  /**
   * Pack create
   */
  export type PackCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pack
     */
    select?: PackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pack
     */
    omit?: PackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackInclude<ExtArgs> | null
    /**
     * The data needed to create a Pack.
     */
    data: XOR<PackCreateInput, PackUncheckedCreateInput>
  }

  /**
   * Pack createMany
   */
  export type PackCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Packs.
     */
    data: PackCreateManyInput | PackCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pack createManyAndReturn
   */
  export type PackCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pack
     */
    select?: PackSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pack
     */
    omit?: PackOmit<ExtArgs> | null
    /**
     * The data used to create many Packs.
     */
    data: PackCreateManyInput | PackCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pack update
   */
  export type PackUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pack
     */
    select?: PackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pack
     */
    omit?: PackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackInclude<ExtArgs> | null
    /**
     * The data needed to update a Pack.
     */
    data: XOR<PackUpdateInput, PackUncheckedUpdateInput>
    /**
     * Choose, which Pack to update.
     */
    where: PackWhereUniqueInput
  }

  /**
   * Pack updateMany
   */
  export type PackUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Packs.
     */
    data: XOR<PackUpdateManyMutationInput, PackUncheckedUpdateManyInput>
    /**
     * Filter which Packs to update
     */
    where?: PackWhereInput
    /**
     * Limit how many Packs to update.
     */
    limit?: number
  }

  /**
   * Pack updateManyAndReturn
   */
  export type PackUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pack
     */
    select?: PackSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pack
     */
    omit?: PackOmit<ExtArgs> | null
    /**
     * The data used to update Packs.
     */
    data: XOR<PackUpdateManyMutationInput, PackUncheckedUpdateManyInput>
    /**
     * Filter which Packs to update
     */
    where?: PackWhereInput
    /**
     * Limit how many Packs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pack upsert
   */
  export type PackUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pack
     */
    select?: PackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pack
     */
    omit?: PackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackInclude<ExtArgs> | null
    /**
     * The filter to search for the Pack to update in case it exists.
     */
    where: PackWhereUniqueInput
    /**
     * In case the Pack found by the `where` argument doesn't exist, create a new Pack with this data.
     */
    create: XOR<PackCreateInput, PackUncheckedCreateInput>
    /**
     * In case the Pack was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PackUpdateInput, PackUncheckedUpdateInput>
  }

  /**
   * Pack delete
   */
  export type PackDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pack
     */
    select?: PackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pack
     */
    omit?: PackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackInclude<ExtArgs> | null
    /**
     * Filter which Pack to delete.
     */
    where: PackWhereUniqueInput
  }

  /**
   * Pack deleteMany
   */
  export type PackDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Packs to delete
     */
    where?: PackWhereInput
    /**
     * Limit how many Packs to delete.
     */
    limit?: number
  }

  /**
   * Pack.shaders
   */
  export type Pack$shadersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shader
     */
    select?: ShaderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shader
     */
    omit?: ShaderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShaderInclude<ExtArgs> | null
    where?: ShaderWhereInput
    orderBy?: ShaderOrderByWithRelationInput | ShaderOrderByWithRelationInput[]
    cursor?: ShaderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShaderScalarFieldEnum | ShaderScalarFieldEnum[]
  }

  /**
   * Pack.mods
   */
  export type Pack$modsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mod
     */
    select?: ModSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mod
     */
    omit?: ModOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModInclude<ExtArgs> | null
    where?: ModWhereInput
    orderBy?: ModOrderByWithRelationInput | ModOrderByWithRelationInput[]
    cursor?: ModWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ModScalarFieldEnum | ModScalarFieldEnum[]
  }

  /**
   * Pack.comments
   */
  export type Pack$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Pack.images
   */
  export type Pack$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    where?: ImageWhereInput
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    cursor?: ImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Pack.principalImage
   */
  export type Pack$principalImageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    where?: ImageWhereInput
  }

  /**
   * Pack without action
   */
  export type PackDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pack
     */
    select?: PackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pack
     */
    omit?: PackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackInclude<ExtArgs> | null
  }


  /**
   * Model Shader
   */

  export type AggregateShader = {
    _count: ShaderCountAggregateOutputType | null
    _avg: ShaderAvgAggregateOutputType | null
    _sum: ShaderSumAggregateOutputType | null
    _min: ShaderMinAggregateOutputType | null
    _max: ShaderMaxAggregateOutputType | null
  }

  export type ShaderAvgAggregateOutputType = {
    id: number | null
    weight: number | null
    authorId: number | null
    principalImageId: number | null
  }

  export type ShaderSumAggregateOutputType = {
    id: bigint | null
    weight: number | null
    authorId: bigint | null
    principalImageId: bigint | null
  }

  export type ShaderMinAggregateOutputType = {
    id: bigint | null
    name: string | null
    description: string | null
    weight: number | null
    src: string | null
    authorId: bigint | null
    versionType: $Enums.VersionType | null
    principalImageId: bigint | null
  }

  export type ShaderMaxAggregateOutputType = {
    id: bigint | null
    name: string | null
    description: string | null
    weight: number | null
    src: string | null
    authorId: bigint | null
    versionType: $Enums.VersionType | null
    principalImageId: bigint | null
  }

  export type ShaderCountAggregateOutputType = {
    id: number
    name: number
    description: number
    weight: number
    src: number
    authorId: number
    versionType: number
    principalImageId: number
    _all: number
  }


  export type ShaderAvgAggregateInputType = {
    id?: true
    weight?: true
    authorId?: true
    principalImageId?: true
  }

  export type ShaderSumAggregateInputType = {
    id?: true
    weight?: true
    authorId?: true
    principalImageId?: true
  }

  export type ShaderMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    weight?: true
    src?: true
    authorId?: true
    versionType?: true
    principalImageId?: true
  }

  export type ShaderMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    weight?: true
    src?: true
    authorId?: true
    versionType?: true
    principalImageId?: true
  }

  export type ShaderCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    weight?: true
    src?: true
    authorId?: true
    versionType?: true
    principalImageId?: true
    _all?: true
  }

  export type ShaderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Shader to aggregate.
     */
    where?: ShaderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shaders to fetch.
     */
    orderBy?: ShaderOrderByWithRelationInput | ShaderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShaderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shaders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shaders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Shaders
    **/
    _count?: true | ShaderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ShaderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ShaderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShaderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShaderMaxAggregateInputType
  }

  export type GetShaderAggregateType<T extends ShaderAggregateArgs> = {
        [P in keyof T & keyof AggregateShader]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShader[P]>
      : GetScalarType<T[P], AggregateShader[P]>
  }




  export type ShaderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShaderWhereInput
    orderBy?: ShaderOrderByWithAggregationInput | ShaderOrderByWithAggregationInput[]
    by: ShaderScalarFieldEnum[] | ShaderScalarFieldEnum
    having?: ShaderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShaderCountAggregateInputType | true
    _avg?: ShaderAvgAggregateInputType
    _sum?: ShaderSumAggregateInputType
    _min?: ShaderMinAggregateInputType
    _max?: ShaderMaxAggregateInputType
  }

  export type ShaderGroupByOutputType = {
    id: bigint
    name: string
    description: string
    weight: number
    src: string
    authorId: bigint
    versionType: $Enums.VersionType
    principalImageId: bigint | null
    _count: ShaderCountAggregateOutputType | null
    _avg: ShaderAvgAggregateOutputType | null
    _sum: ShaderSumAggregateOutputType | null
    _min: ShaderMinAggregateOutputType | null
    _max: ShaderMaxAggregateOutputType | null
  }

  type GetShaderGroupByPayload<T extends ShaderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShaderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShaderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShaderGroupByOutputType[P]>
            : GetScalarType<T[P], ShaderGroupByOutputType[P]>
        }
      >
    >


  export type ShaderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    weight?: boolean
    src?: boolean
    authorId?: boolean
    versionType?: boolean
    principalImageId?: boolean
    packs?: boolean | Shader$packsArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
    comments?: boolean | Shader$commentsArgs<ExtArgs>
    images?: boolean | Shader$imagesArgs<ExtArgs>
    conflicts?: boolean | Shader$conflictsArgs<ExtArgs>
    shaderDependecies?: boolean | Shader$shaderDependeciesArgs<ExtArgs>
    principalImage?: boolean | Shader$principalImageArgs<ExtArgs>
    _count?: boolean | ShaderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shader"]>

  export type ShaderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    weight?: boolean
    src?: boolean
    authorId?: boolean
    versionType?: boolean
    principalImageId?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
    principalImage?: boolean | Shader$principalImageArgs<ExtArgs>
  }, ExtArgs["result"]["shader"]>

  export type ShaderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    weight?: boolean
    src?: boolean
    authorId?: boolean
    versionType?: boolean
    principalImageId?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
    principalImage?: boolean | Shader$principalImageArgs<ExtArgs>
  }, ExtArgs["result"]["shader"]>

  export type ShaderSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    weight?: boolean
    src?: boolean
    authorId?: boolean
    versionType?: boolean
    principalImageId?: boolean
  }

  export type ShaderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "weight" | "src" | "authorId" | "versionType" | "principalImageId", ExtArgs["result"]["shader"]>
  export type ShaderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    packs?: boolean | Shader$packsArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
    comments?: boolean | Shader$commentsArgs<ExtArgs>
    images?: boolean | Shader$imagesArgs<ExtArgs>
    conflicts?: boolean | Shader$conflictsArgs<ExtArgs>
    shaderDependecies?: boolean | Shader$shaderDependeciesArgs<ExtArgs>
    principalImage?: boolean | Shader$principalImageArgs<ExtArgs>
    _count?: boolean | ShaderCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ShaderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
    principalImage?: boolean | Shader$principalImageArgs<ExtArgs>
  }
  export type ShaderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
    principalImage?: boolean | Shader$principalImageArgs<ExtArgs>
  }

  export type $ShaderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Shader"
    objects: {
      packs: Prisma.$PackPayload<ExtArgs>[]
      author: Prisma.$UserPayload<ExtArgs>
      comments: Prisma.$CommentPayload<ExtArgs>[]
      images: Prisma.$ImagePayload<ExtArgs>[]
      conflicts: Prisma.$ConflictPayload<ExtArgs>[]
      shaderDependecies: Prisma.$ShaderDependecyPayload<ExtArgs>[]
      principalImage: Prisma.$ImagePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      name: string
      description: string
      weight: number
      src: string
      authorId: bigint
      versionType: $Enums.VersionType
      principalImageId: bigint | null
    }, ExtArgs["result"]["shader"]>
    composites: {}
  }

  type ShaderGetPayload<S extends boolean | null | undefined | ShaderDefaultArgs> = $Result.GetResult<Prisma.$ShaderPayload, S>

  type ShaderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ShaderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShaderCountAggregateInputType | true
    }

  export interface ShaderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Shader'], meta: { name: 'Shader' } }
    /**
     * Find zero or one Shader that matches the filter.
     * @param {ShaderFindUniqueArgs} args - Arguments to find a Shader
     * @example
     * // Get one Shader
     * const shader = await prisma.shader.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShaderFindUniqueArgs>(args: SelectSubset<T, ShaderFindUniqueArgs<ExtArgs>>): Prisma__ShaderClient<$Result.GetResult<Prisma.$ShaderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Shader that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShaderFindUniqueOrThrowArgs} args - Arguments to find a Shader
     * @example
     * // Get one Shader
     * const shader = await prisma.shader.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShaderFindUniqueOrThrowArgs>(args: SelectSubset<T, ShaderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShaderClient<$Result.GetResult<Prisma.$ShaderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Shader that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShaderFindFirstArgs} args - Arguments to find a Shader
     * @example
     * // Get one Shader
     * const shader = await prisma.shader.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShaderFindFirstArgs>(args?: SelectSubset<T, ShaderFindFirstArgs<ExtArgs>>): Prisma__ShaderClient<$Result.GetResult<Prisma.$ShaderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Shader that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShaderFindFirstOrThrowArgs} args - Arguments to find a Shader
     * @example
     * // Get one Shader
     * const shader = await prisma.shader.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShaderFindFirstOrThrowArgs>(args?: SelectSubset<T, ShaderFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShaderClient<$Result.GetResult<Prisma.$ShaderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Shaders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShaderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Shaders
     * const shaders = await prisma.shader.findMany()
     * 
     * // Get first 10 Shaders
     * const shaders = await prisma.shader.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shaderWithIdOnly = await prisma.shader.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ShaderFindManyArgs>(args?: SelectSubset<T, ShaderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShaderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Shader.
     * @param {ShaderCreateArgs} args - Arguments to create a Shader.
     * @example
     * // Create one Shader
     * const Shader = await prisma.shader.create({
     *   data: {
     *     // ... data to create a Shader
     *   }
     * })
     * 
     */
    create<T extends ShaderCreateArgs>(args: SelectSubset<T, ShaderCreateArgs<ExtArgs>>): Prisma__ShaderClient<$Result.GetResult<Prisma.$ShaderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Shaders.
     * @param {ShaderCreateManyArgs} args - Arguments to create many Shaders.
     * @example
     * // Create many Shaders
     * const shader = await prisma.shader.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShaderCreateManyArgs>(args?: SelectSubset<T, ShaderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Shaders and returns the data saved in the database.
     * @param {ShaderCreateManyAndReturnArgs} args - Arguments to create many Shaders.
     * @example
     * // Create many Shaders
     * const shader = await prisma.shader.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Shaders and only return the `id`
     * const shaderWithIdOnly = await prisma.shader.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ShaderCreateManyAndReturnArgs>(args?: SelectSubset<T, ShaderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShaderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Shader.
     * @param {ShaderDeleteArgs} args - Arguments to delete one Shader.
     * @example
     * // Delete one Shader
     * const Shader = await prisma.shader.delete({
     *   where: {
     *     // ... filter to delete one Shader
     *   }
     * })
     * 
     */
    delete<T extends ShaderDeleteArgs>(args: SelectSubset<T, ShaderDeleteArgs<ExtArgs>>): Prisma__ShaderClient<$Result.GetResult<Prisma.$ShaderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Shader.
     * @param {ShaderUpdateArgs} args - Arguments to update one Shader.
     * @example
     * // Update one Shader
     * const shader = await prisma.shader.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShaderUpdateArgs>(args: SelectSubset<T, ShaderUpdateArgs<ExtArgs>>): Prisma__ShaderClient<$Result.GetResult<Prisma.$ShaderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Shaders.
     * @param {ShaderDeleteManyArgs} args - Arguments to filter Shaders to delete.
     * @example
     * // Delete a few Shaders
     * const { count } = await prisma.shader.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShaderDeleteManyArgs>(args?: SelectSubset<T, ShaderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Shaders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShaderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Shaders
     * const shader = await prisma.shader.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShaderUpdateManyArgs>(args: SelectSubset<T, ShaderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Shaders and returns the data updated in the database.
     * @param {ShaderUpdateManyAndReturnArgs} args - Arguments to update many Shaders.
     * @example
     * // Update many Shaders
     * const shader = await prisma.shader.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Shaders and only return the `id`
     * const shaderWithIdOnly = await prisma.shader.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ShaderUpdateManyAndReturnArgs>(args: SelectSubset<T, ShaderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShaderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Shader.
     * @param {ShaderUpsertArgs} args - Arguments to update or create a Shader.
     * @example
     * // Update or create a Shader
     * const shader = await prisma.shader.upsert({
     *   create: {
     *     // ... data to create a Shader
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Shader we want to update
     *   }
     * })
     */
    upsert<T extends ShaderUpsertArgs>(args: SelectSubset<T, ShaderUpsertArgs<ExtArgs>>): Prisma__ShaderClient<$Result.GetResult<Prisma.$ShaderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Shaders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShaderCountArgs} args - Arguments to filter Shaders to count.
     * @example
     * // Count the number of Shaders
     * const count = await prisma.shader.count({
     *   where: {
     *     // ... the filter for the Shaders we want to count
     *   }
     * })
    **/
    count<T extends ShaderCountArgs>(
      args?: Subset<T, ShaderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShaderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Shader.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShaderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ShaderAggregateArgs>(args: Subset<T, ShaderAggregateArgs>): Prisma.PrismaPromise<GetShaderAggregateType<T>>

    /**
     * Group by Shader.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShaderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ShaderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShaderGroupByArgs['orderBy'] }
        : { orderBy?: ShaderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ShaderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShaderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Shader model
   */
  readonly fields: ShaderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Shader.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShaderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    packs<T extends Shader$packsArgs<ExtArgs> = {}>(args?: Subset<T, Shader$packsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PackPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    author<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    comments<T extends Shader$commentsArgs<ExtArgs> = {}>(args?: Subset<T, Shader$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    images<T extends Shader$imagesArgs<ExtArgs> = {}>(args?: Subset<T, Shader$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    conflicts<T extends Shader$conflictsArgs<ExtArgs> = {}>(args?: Subset<T, Shader$conflictsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConflictPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    shaderDependecies<T extends Shader$shaderDependeciesArgs<ExtArgs> = {}>(args?: Subset<T, Shader$shaderDependeciesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShaderDependecyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    principalImage<T extends Shader$principalImageArgs<ExtArgs> = {}>(args?: Subset<T, Shader$principalImageArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Shader model
   */
  interface ShaderFieldRefs {
    readonly id: FieldRef<"Shader", 'BigInt'>
    readonly name: FieldRef<"Shader", 'String'>
    readonly description: FieldRef<"Shader", 'String'>
    readonly weight: FieldRef<"Shader", 'Int'>
    readonly src: FieldRef<"Shader", 'String'>
    readonly authorId: FieldRef<"Shader", 'BigInt'>
    readonly versionType: FieldRef<"Shader", 'VersionType'>
    readonly principalImageId: FieldRef<"Shader", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * Shader findUnique
   */
  export type ShaderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shader
     */
    select?: ShaderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shader
     */
    omit?: ShaderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShaderInclude<ExtArgs> | null
    /**
     * Filter, which Shader to fetch.
     */
    where: ShaderWhereUniqueInput
  }

  /**
   * Shader findUniqueOrThrow
   */
  export type ShaderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shader
     */
    select?: ShaderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shader
     */
    omit?: ShaderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShaderInclude<ExtArgs> | null
    /**
     * Filter, which Shader to fetch.
     */
    where: ShaderWhereUniqueInput
  }

  /**
   * Shader findFirst
   */
  export type ShaderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shader
     */
    select?: ShaderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shader
     */
    omit?: ShaderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShaderInclude<ExtArgs> | null
    /**
     * Filter, which Shader to fetch.
     */
    where?: ShaderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shaders to fetch.
     */
    orderBy?: ShaderOrderByWithRelationInput | ShaderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Shaders.
     */
    cursor?: ShaderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shaders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shaders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shaders.
     */
    distinct?: ShaderScalarFieldEnum | ShaderScalarFieldEnum[]
  }

  /**
   * Shader findFirstOrThrow
   */
  export type ShaderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shader
     */
    select?: ShaderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shader
     */
    omit?: ShaderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShaderInclude<ExtArgs> | null
    /**
     * Filter, which Shader to fetch.
     */
    where?: ShaderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shaders to fetch.
     */
    orderBy?: ShaderOrderByWithRelationInput | ShaderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Shaders.
     */
    cursor?: ShaderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shaders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shaders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shaders.
     */
    distinct?: ShaderScalarFieldEnum | ShaderScalarFieldEnum[]
  }

  /**
   * Shader findMany
   */
  export type ShaderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shader
     */
    select?: ShaderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shader
     */
    omit?: ShaderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShaderInclude<ExtArgs> | null
    /**
     * Filter, which Shaders to fetch.
     */
    where?: ShaderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shaders to fetch.
     */
    orderBy?: ShaderOrderByWithRelationInput | ShaderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Shaders.
     */
    cursor?: ShaderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shaders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shaders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shaders.
     */
    distinct?: ShaderScalarFieldEnum | ShaderScalarFieldEnum[]
  }

  /**
   * Shader create
   */
  export type ShaderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shader
     */
    select?: ShaderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shader
     */
    omit?: ShaderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShaderInclude<ExtArgs> | null
    /**
     * The data needed to create a Shader.
     */
    data: XOR<ShaderCreateInput, ShaderUncheckedCreateInput>
  }

  /**
   * Shader createMany
   */
  export type ShaderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Shaders.
     */
    data: ShaderCreateManyInput | ShaderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Shader createManyAndReturn
   */
  export type ShaderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shader
     */
    select?: ShaderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Shader
     */
    omit?: ShaderOmit<ExtArgs> | null
    /**
     * The data used to create many Shaders.
     */
    data: ShaderCreateManyInput | ShaderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShaderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Shader update
   */
  export type ShaderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shader
     */
    select?: ShaderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shader
     */
    omit?: ShaderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShaderInclude<ExtArgs> | null
    /**
     * The data needed to update a Shader.
     */
    data: XOR<ShaderUpdateInput, ShaderUncheckedUpdateInput>
    /**
     * Choose, which Shader to update.
     */
    where: ShaderWhereUniqueInput
  }

  /**
   * Shader updateMany
   */
  export type ShaderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Shaders.
     */
    data: XOR<ShaderUpdateManyMutationInput, ShaderUncheckedUpdateManyInput>
    /**
     * Filter which Shaders to update
     */
    where?: ShaderWhereInput
    /**
     * Limit how many Shaders to update.
     */
    limit?: number
  }

  /**
   * Shader updateManyAndReturn
   */
  export type ShaderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shader
     */
    select?: ShaderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Shader
     */
    omit?: ShaderOmit<ExtArgs> | null
    /**
     * The data used to update Shaders.
     */
    data: XOR<ShaderUpdateManyMutationInput, ShaderUncheckedUpdateManyInput>
    /**
     * Filter which Shaders to update
     */
    where?: ShaderWhereInput
    /**
     * Limit how many Shaders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShaderIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Shader upsert
   */
  export type ShaderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shader
     */
    select?: ShaderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shader
     */
    omit?: ShaderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShaderInclude<ExtArgs> | null
    /**
     * The filter to search for the Shader to update in case it exists.
     */
    where: ShaderWhereUniqueInput
    /**
     * In case the Shader found by the `where` argument doesn't exist, create a new Shader with this data.
     */
    create: XOR<ShaderCreateInput, ShaderUncheckedCreateInput>
    /**
     * In case the Shader was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShaderUpdateInput, ShaderUncheckedUpdateInput>
  }

  /**
   * Shader delete
   */
  export type ShaderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shader
     */
    select?: ShaderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shader
     */
    omit?: ShaderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShaderInclude<ExtArgs> | null
    /**
     * Filter which Shader to delete.
     */
    where: ShaderWhereUniqueInput
  }

  /**
   * Shader deleteMany
   */
  export type ShaderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Shaders to delete
     */
    where?: ShaderWhereInput
    /**
     * Limit how many Shaders to delete.
     */
    limit?: number
  }

  /**
   * Shader.packs
   */
  export type Shader$packsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pack
     */
    select?: PackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pack
     */
    omit?: PackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackInclude<ExtArgs> | null
    where?: PackWhereInput
    orderBy?: PackOrderByWithRelationInput | PackOrderByWithRelationInput[]
    cursor?: PackWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PackScalarFieldEnum | PackScalarFieldEnum[]
  }

  /**
   * Shader.comments
   */
  export type Shader$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Shader.images
   */
  export type Shader$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    where?: ImageWhereInput
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    cursor?: ImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Shader.conflicts
   */
  export type Shader$conflictsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conflict
     */
    select?: ConflictSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conflict
     */
    omit?: ConflictOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConflictInclude<ExtArgs> | null
    where?: ConflictWhereInput
    orderBy?: ConflictOrderByWithRelationInput | ConflictOrderByWithRelationInput[]
    cursor?: ConflictWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConflictScalarFieldEnum | ConflictScalarFieldEnum[]
  }

  /**
   * Shader.shaderDependecies
   */
  export type Shader$shaderDependeciesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShaderDependecy
     */
    select?: ShaderDependecySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShaderDependecy
     */
    omit?: ShaderDependecyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShaderDependecyInclude<ExtArgs> | null
    where?: ShaderDependecyWhereInput
    orderBy?: ShaderDependecyOrderByWithRelationInput | ShaderDependecyOrderByWithRelationInput[]
    cursor?: ShaderDependecyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShaderDependecyScalarFieldEnum | ShaderDependecyScalarFieldEnum[]
  }

  /**
   * Shader.principalImage
   */
  export type Shader$principalImageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    where?: ImageWhereInput
  }

  /**
   * Shader without action
   */
  export type ShaderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shader
     */
    select?: ShaderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shader
     */
    omit?: ShaderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShaderInclude<ExtArgs> | null
  }


  /**
   * Model Mod
   */

  export type AggregateMod = {
    _count: ModCountAggregateOutputType | null
    _avg: ModAvgAggregateOutputType | null
    _sum: ModSumAggregateOutputType | null
    _min: ModMinAggregateOutputType | null
    _max: ModMaxAggregateOutputType | null
  }

  export type ModAvgAggregateOutputType = {
    id: number | null
    min_version: number | null
    max_version: number | null
    weight: number | null
    authorId: number | null
    principalImageId: number | null
  }

  export type ModSumAggregateOutputType = {
    id: bigint | null
    min_version: number | null
    max_version: number | null
    weight: number | null
    authorId: bigint | null
    principalImageId: bigint | null
  }

  export type ModMinAggregateOutputType = {
    id: bigint | null
    name: string | null
    description: string | null
    min_version: number | null
    max_version: number | null
    src: string | null
    weight: number | null
    authorId: bigint | null
    versionType: $Enums.VersionType | null
    principalImageId: bigint | null
  }

  export type ModMaxAggregateOutputType = {
    id: bigint | null
    name: string | null
    description: string | null
    min_version: number | null
    max_version: number | null
    src: string | null
    weight: number | null
    authorId: bigint | null
    versionType: $Enums.VersionType | null
    principalImageId: bigint | null
  }

  export type ModCountAggregateOutputType = {
    id: number
    name: number
    description: number
    min_version: number
    max_version: number
    src: number
    weight: number
    authorId: number
    versionType: number
    principalImageId: number
    _all: number
  }


  export type ModAvgAggregateInputType = {
    id?: true
    min_version?: true
    max_version?: true
    weight?: true
    authorId?: true
    principalImageId?: true
  }

  export type ModSumAggregateInputType = {
    id?: true
    min_version?: true
    max_version?: true
    weight?: true
    authorId?: true
    principalImageId?: true
  }

  export type ModMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    min_version?: true
    max_version?: true
    src?: true
    weight?: true
    authorId?: true
    versionType?: true
    principalImageId?: true
  }

  export type ModMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    min_version?: true
    max_version?: true
    src?: true
    weight?: true
    authorId?: true
    versionType?: true
    principalImageId?: true
  }

  export type ModCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    min_version?: true
    max_version?: true
    src?: true
    weight?: true
    authorId?: true
    versionType?: true
    principalImageId?: true
    _all?: true
  }

  export type ModAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mod to aggregate.
     */
    where?: ModWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mods to fetch.
     */
    orderBy?: ModOrderByWithRelationInput | ModOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ModWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Mods
    **/
    _count?: true | ModCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ModAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ModSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ModMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ModMaxAggregateInputType
  }

  export type GetModAggregateType<T extends ModAggregateArgs> = {
        [P in keyof T & keyof AggregateMod]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMod[P]>
      : GetScalarType<T[P], AggregateMod[P]>
  }




  export type ModGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModWhereInput
    orderBy?: ModOrderByWithAggregationInput | ModOrderByWithAggregationInput[]
    by: ModScalarFieldEnum[] | ModScalarFieldEnum
    having?: ModScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ModCountAggregateInputType | true
    _avg?: ModAvgAggregateInputType
    _sum?: ModSumAggregateInputType
    _min?: ModMinAggregateInputType
    _max?: ModMaxAggregateInputType
  }

  export type ModGroupByOutputType = {
    id: bigint
    name: string
    description: string
    min_version: number
    max_version: number
    src: string
    weight: number
    authorId: bigint
    versionType: $Enums.VersionType
    principalImageId: bigint | null
    _count: ModCountAggregateOutputType | null
    _avg: ModAvgAggregateOutputType | null
    _sum: ModSumAggregateOutputType | null
    _min: ModMinAggregateOutputType | null
    _max: ModMaxAggregateOutputType | null
  }

  type GetModGroupByPayload<T extends ModGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ModGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ModGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ModGroupByOutputType[P]>
            : GetScalarType<T[P], ModGroupByOutputType[P]>
        }
      >
    >


  export type ModSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    min_version?: boolean
    max_version?: boolean
    src?: boolean
    weight?: boolean
    authorId?: boolean
    versionType?: boolean
    principalImageId?: boolean
    packs?: boolean | Mod$packsArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
    comments?: boolean | Mod$commentsArgs<ExtArgs>
    images?: boolean | Mod$imagesArgs<ExtArgs>
    conflictsFrom?: boolean | Mod$conflictsFromArgs<ExtArgs>
    conflictsTo?: boolean | Mod$conflictsToArgs<ExtArgs>
    requiredBy?: boolean | Mod$requiredByArgs<ExtArgs>
    modDependencies?: boolean | Mod$modDependenciesArgs<ExtArgs>
    shaderDependecies?: boolean | Mod$shaderDependeciesArgs<ExtArgs>
    principalImage?: boolean | Mod$principalImageArgs<ExtArgs>
    _count?: boolean | ModCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mod"]>

  export type ModSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    min_version?: boolean
    max_version?: boolean
    src?: boolean
    weight?: boolean
    authorId?: boolean
    versionType?: boolean
    principalImageId?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
    principalImage?: boolean | Mod$principalImageArgs<ExtArgs>
  }, ExtArgs["result"]["mod"]>

  export type ModSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    min_version?: boolean
    max_version?: boolean
    src?: boolean
    weight?: boolean
    authorId?: boolean
    versionType?: boolean
    principalImageId?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
    principalImage?: boolean | Mod$principalImageArgs<ExtArgs>
  }, ExtArgs["result"]["mod"]>

  export type ModSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    min_version?: boolean
    max_version?: boolean
    src?: boolean
    weight?: boolean
    authorId?: boolean
    versionType?: boolean
    principalImageId?: boolean
  }

  export type ModOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "min_version" | "max_version" | "src" | "weight" | "authorId" | "versionType" | "principalImageId", ExtArgs["result"]["mod"]>
  export type ModInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    packs?: boolean | Mod$packsArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
    comments?: boolean | Mod$commentsArgs<ExtArgs>
    images?: boolean | Mod$imagesArgs<ExtArgs>
    conflictsFrom?: boolean | Mod$conflictsFromArgs<ExtArgs>
    conflictsTo?: boolean | Mod$conflictsToArgs<ExtArgs>
    requiredBy?: boolean | Mod$requiredByArgs<ExtArgs>
    modDependencies?: boolean | Mod$modDependenciesArgs<ExtArgs>
    shaderDependecies?: boolean | Mod$shaderDependeciesArgs<ExtArgs>
    principalImage?: boolean | Mod$principalImageArgs<ExtArgs>
    _count?: boolean | ModCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ModIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
    principalImage?: boolean | Mod$principalImageArgs<ExtArgs>
  }
  export type ModIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
    principalImage?: boolean | Mod$principalImageArgs<ExtArgs>
  }

  export type $ModPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Mod"
    objects: {
      packs: Prisma.$PackPayload<ExtArgs>[]
      author: Prisma.$UserPayload<ExtArgs>
      comments: Prisma.$CommentPayload<ExtArgs>[]
      images: Prisma.$ImagePayload<ExtArgs>[]
      conflictsFrom: Prisma.$ConflictPayload<ExtArgs>[]
      conflictsTo: Prisma.$ConflictPayload<ExtArgs>[]
      requiredBy: Prisma.$ModDependencyPayload<ExtArgs>[]
      modDependencies: Prisma.$ModDependencyPayload<ExtArgs>[]
      shaderDependecies: Prisma.$ShaderDependecyPayload<ExtArgs>[]
      principalImage: Prisma.$ImagePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      name: string
      description: string
      min_version: number
      max_version: number
      src: string
      weight: number
      authorId: bigint
      versionType: $Enums.VersionType
      principalImageId: bigint | null
    }, ExtArgs["result"]["mod"]>
    composites: {}
  }

  type ModGetPayload<S extends boolean | null | undefined | ModDefaultArgs> = $Result.GetResult<Prisma.$ModPayload, S>

  type ModCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ModFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ModCountAggregateInputType | true
    }

  export interface ModDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Mod'], meta: { name: 'Mod' } }
    /**
     * Find zero or one Mod that matches the filter.
     * @param {ModFindUniqueArgs} args - Arguments to find a Mod
     * @example
     * // Get one Mod
     * const mod = await prisma.mod.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ModFindUniqueArgs>(args: SelectSubset<T, ModFindUniqueArgs<ExtArgs>>): Prisma__ModClient<$Result.GetResult<Prisma.$ModPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Mod that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ModFindUniqueOrThrowArgs} args - Arguments to find a Mod
     * @example
     * // Get one Mod
     * const mod = await prisma.mod.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ModFindUniqueOrThrowArgs>(args: SelectSubset<T, ModFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ModClient<$Result.GetResult<Prisma.$ModPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mod that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModFindFirstArgs} args - Arguments to find a Mod
     * @example
     * // Get one Mod
     * const mod = await prisma.mod.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ModFindFirstArgs>(args?: SelectSubset<T, ModFindFirstArgs<ExtArgs>>): Prisma__ModClient<$Result.GetResult<Prisma.$ModPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mod that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModFindFirstOrThrowArgs} args - Arguments to find a Mod
     * @example
     * // Get one Mod
     * const mod = await prisma.mod.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ModFindFirstOrThrowArgs>(args?: SelectSubset<T, ModFindFirstOrThrowArgs<ExtArgs>>): Prisma__ModClient<$Result.GetResult<Prisma.$ModPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Mods that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mods
     * const mods = await prisma.mod.findMany()
     * 
     * // Get first 10 Mods
     * const mods = await prisma.mod.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const modWithIdOnly = await prisma.mod.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ModFindManyArgs>(args?: SelectSubset<T, ModFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Mod.
     * @param {ModCreateArgs} args - Arguments to create a Mod.
     * @example
     * // Create one Mod
     * const Mod = await prisma.mod.create({
     *   data: {
     *     // ... data to create a Mod
     *   }
     * })
     * 
     */
    create<T extends ModCreateArgs>(args: SelectSubset<T, ModCreateArgs<ExtArgs>>): Prisma__ModClient<$Result.GetResult<Prisma.$ModPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Mods.
     * @param {ModCreateManyArgs} args - Arguments to create many Mods.
     * @example
     * // Create many Mods
     * const mod = await prisma.mod.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ModCreateManyArgs>(args?: SelectSubset<T, ModCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Mods and returns the data saved in the database.
     * @param {ModCreateManyAndReturnArgs} args - Arguments to create many Mods.
     * @example
     * // Create many Mods
     * const mod = await prisma.mod.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Mods and only return the `id`
     * const modWithIdOnly = await prisma.mod.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ModCreateManyAndReturnArgs>(args?: SelectSubset<T, ModCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Mod.
     * @param {ModDeleteArgs} args - Arguments to delete one Mod.
     * @example
     * // Delete one Mod
     * const Mod = await prisma.mod.delete({
     *   where: {
     *     // ... filter to delete one Mod
     *   }
     * })
     * 
     */
    delete<T extends ModDeleteArgs>(args: SelectSubset<T, ModDeleteArgs<ExtArgs>>): Prisma__ModClient<$Result.GetResult<Prisma.$ModPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Mod.
     * @param {ModUpdateArgs} args - Arguments to update one Mod.
     * @example
     * // Update one Mod
     * const mod = await prisma.mod.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ModUpdateArgs>(args: SelectSubset<T, ModUpdateArgs<ExtArgs>>): Prisma__ModClient<$Result.GetResult<Prisma.$ModPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Mods.
     * @param {ModDeleteManyArgs} args - Arguments to filter Mods to delete.
     * @example
     * // Delete a few Mods
     * const { count } = await prisma.mod.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ModDeleteManyArgs>(args?: SelectSubset<T, ModDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mods
     * const mod = await prisma.mod.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ModUpdateManyArgs>(args: SelectSubset<T, ModUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mods and returns the data updated in the database.
     * @param {ModUpdateManyAndReturnArgs} args - Arguments to update many Mods.
     * @example
     * // Update many Mods
     * const mod = await prisma.mod.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Mods and only return the `id`
     * const modWithIdOnly = await prisma.mod.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ModUpdateManyAndReturnArgs>(args: SelectSubset<T, ModUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Mod.
     * @param {ModUpsertArgs} args - Arguments to update or create a Mod.
     * @example
     * // Update or create a Mod
     * const mod = await prisma.mod.upsert({
     *   create: {
     *     // ... data to create a Mod
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mod we want to update
     *   }
     * })
     */
    upsert<T extends ModUpsertArgs>(args: SelectSubset<T, ModUpsertArgs<ExtArgs>>): Prisma__ModClient<$Result.GetResult<Prisma.$ModPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Mods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModCountArgs} args - Arguments to filter Mods to count.
     * @example
     * // Count the number of Mods
     * const count = await prisma.mod.count({
     *   where: {
     *     // ... the filter for the Mods we want to count
     *   }
     * })
    **/
    count<T extends ModCountArgs>(
      args?: Subset<T, ModCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ModCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mod.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ModAggregateArgs>(args: Subset<T, ModAggregateArgs>): Prisma.PrismaPromise<GetModAggregateType<T>>

    /**
     * Group by Mod.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ModGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ModGroupByArgs['orderBy'] }
        : { orderBy?: ModGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ModGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetModGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Mod model
   */
  readonly fields: ModFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Mod.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ModClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    packs<T extends Mod$packsArgs<ExtArgs> = {}>(args?: Subset<T, Mod$packsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PackPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    author<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    comments<T extends Mod$commentsArgs<ExtArgs> = {}>(args?: Subset<T, Mod$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    images<T extends Mod$imagesArgs<ExtArgs> = {}>(args?: Subset<T, Mod$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    conflictsFrom<T extends Mod$conflictsFromArgs<ExtArgs> = {}>(args?: Subset<T, Mod$conflictsFromArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConflictPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    conflictsTo<T extends Mod$conflictsToArgs<ExtArgs> = {}>(args?: Subset<T, Mod$conflictsToArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConflictPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    requiredBy<T extends Mod$requiredByArgs<ExtArgs> = {}>(args?: Subset<T, Mod$requiredByArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModDependencyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    modDependencies<T extends Mod$modDependenciesArgs<ExtArgs> = {}>(args?: Subset<T, Mod$modDependenciesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModDependencyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    shaderDependecies<T extends Mod$shaderDependeciesArgs<ExtArgs> = {}>(args?: Subset<T, Mod$shaderDependeciesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShaderDependecyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    principalImage<T extends Mod$principalImageArgs<ExtArgs> = {}>(args?: Subset<T, Mod$principalImageArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Mod model
   */
  interface ModFieldRefs {
    readonly id: FieldRef<"Mod", 'BigInt'>
    readonly name: FieldRef<"Mod", 'String'>
    readonly description: FieldRef<"Mod", 'String'>
    readonly min_version: FieldRef<"Mod", 'Int'>
    readonly max_version: FieldRef<"Mod", 'Int'>
    readonly src: FieldRef<"Mod", 'String'>
    readonly weight: FieldRef<"Mod", 'Int'>
    readonly authorId: FieldRef<"Mod", 'BigInt'>
    readonly versionType: FieldRef<"Mod", 'VersionType'>
    readonly principalImageId: FieldRef<"Mod", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * Mod findUnique
   */
  export type ModFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mod
     */
    select?: ModSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mod
     */
    omit?: ModOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModInclude<ExtArgs> | null
    /**
     * Filter, which Mod to fetch.
     */
    where: ModWhereUniqueInput
  }

  /**
   * Mod findUniqueOrThrow
   */
  export type ModFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mod
     */
    select?: ModSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mod
     */
    omit?: ModOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModInclude<ExtArgs> | null
    /**
     * Filter, which Mod to fetch.
     */
    where: ModWhereUniqueInput
  }

  /**
   * Mod findFirst
   */
  export type ModFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mod
     */
    select?: ModSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mod
     */
    omit?: ModOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModInclude<ExtArgs> | null
    /**
     * Filter, which Mod to fetch.
     */
    where?: ModWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mods to fetch.
     */
    orderBy?: ModOrderByWithRelationInput | ModOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mods.
     */
    cursor?: ModWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mods.
     */
    distinct?: ModScalarFieldEnum | ModScalarFieldEnum[]
  }

  /**
   * Mod findFirstOrThrow
   */
  export type ModFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mod
     */
    select?: ModSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mod
     */
    omit?: ModOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModInclude<ExtArgs> | null
    /**
     * Filter, which Mod to fetch.
     */
    where?: ModWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mods to fetch.
     */
    orderBy?: ModOrderByWithRelationInput | ModOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mods.
     */
    cursor?: ModWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mods.
     */
    distinct?: ModScalarFieldEnum | ModScalarFieldEnum[]
  }

  /**
   * Mod findMany
   */
  export type ModFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mod
     */
    select?: ModSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mod
     */
    omit?: ModOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModInclude<ExtArgs> | null
    /**
     * Filter, which Mods to fetch.
     */
    where?: ModWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mods to fetch.
     */
    orderBy?: ModOrderByWithRelationInput | ModOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Mods.
     */
    cursor?: ModWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mods.
     */
    distinct?: ModScalarFieldEnum | ModScalarFieldEnum[]
  }

  /**
   * Mod create
   */
  export type ModCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mod
     */
    select?: ModSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mod
     */
    omit?: ModOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModInclude<ExtArgs> | null
    /**
     * The data needed to create a Mod.
     */
    data: XOR<ModCreateInput, ModUncheckedCreateInput>
  }

  /**
   * Mod createMany
   */
  export type ModCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Mods.
     */
    data: ModCreateManyInput | ModCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Mod createManyAndReturn
   */
  export type ModCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mod
     */
    select?: ModSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Mod
     */
    omit?: ModOmit<ExtArgs> | null
    /**
     * The data used to create many Mods.
     */
    data: ModCreateManyInput | ModCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Mod update
   */
  export type ModUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mod
     */
    select?: ModSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mod
     */
    omit?: ModOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModInclude<ExtArgs> | null
    /**
     * The data needed to update a Mod.
     */
    data: XOR<ModUpdateInput, ModUncheckedUpdateInput>
    /**
     * Choose, which Mod to update.
     */
    where: ModWhereUniqueInput
  }

  /**
   * Mod updateMany
   */
  export type ModUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Mods.
     */
    data: XOR<ModUpdateManyMutationInput, ModUncheckedUpdateManyInput>
    /**
     * Filter which Mods to update
     */
    where?: ModWhereInput
    /**
     * Limit how many Mods to update.
     */
    limit?: number
  }

  /**
   * Mod updateManyAndReturn
   */
  export type ModUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mod
     */
    select?: ModSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Mod
     */
    omit?: ModOmit<ExtArgs> | null
    /**
     * The data used to update Mods.
     */
    data: XOR<ModUpdateManyMutationInput, ModUncheckedUpdateManyInput>
    /**
     * Filter which Mods to update
     */
    where?: ModWhereInput
    /**
     * Limit how many Mods to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Mod upsert
   */
  export type ModUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mod
     */
    select?: ModSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mod
     */
    omit?: ModOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModInclude<ExtArgs> | null
    /**
     * The filter to search for the Mod to update in case it exists.
     */
    where: ModWhereUniqueInput
    /**
     * In case the Mod found by the `where` argument doesn't exist, create a new Mod with this data.
     */
    create: XOR<ModCreateInput, ModUncheckedCreateInput>
    /**
     * In case the Mod was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ModUpdateInput, ModUncheckedUpdateInput>
  }

  /**
   * Mod delete
   */
  export type ModDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mod
     */
    select?: ModSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mod
     */
    omit?: ModOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModInclude<ExtArgs> | null
    /**
     * Filter which Mod to delete.
     */
    where: ModWhereUniqueInput
  }

  /**
   * Mod deleteMany
   */
  export type ModDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mods to delete
     */
    where?: ModWhereInput
    /**
     * Limit how many Mods to delete.
     */
    limit?: number
  }

  /**
   * Mod.packs
   */
  export type Mod$packsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pack
     */
    select?: PackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pack
     */
    omit?: PackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackInclude<ExtArgs> | null
    where?: PackWhereInput
    orderBy?: PackOrderByWithRelationInput | PackOrderByWithRelationInput[]
    cursor?: PackWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PackScalarFieldEnum | PackScalarFieldEnum[]
  }

  /**
   * Mod.comments
   */
  export type Mod$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Mod.images
   */
  export type Mod$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    where?: ImageWhereInput
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    cursor?: ImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Mod.conflictsFrom
   */
  export type Mod$conflictsFromArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conflict
     */
    select?: ConflictSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conflict
     */
    omit?: ConflictOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConflictInclude<ExtArgs> | null
    where?: ConflictWhereInput
    orderBy?: ConflictOrderByWithRelationInput | ConflictOrderByWithRelationInput[]
    cursor?: ConflictWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConflictScalarFieldEnum | ConflictScalarFieldEnum[]
  }

  /**
   * Mod.conflictsTo
   */
  export type Mod$conflictsToArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conflict
     */
    select?: ConflictSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conflict
     */
    omit?: ConflictOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConflictInclude<ExtArgs> | null
    where?: ConflictWhereInput
    orderBy?: ConflictOrderByWithRelationInput | ConflictOrderByWithRelationInput[]
    cursor?: ConflictWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConflictScalarFieldEnum | ConflictScalarFieldEnum[]
  }

  /**
   * Mod.requiredBy
   */
  export type Mod$requiredByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModDependency
     */
    select?: ModDependencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModDependency
     */
    omit?: ModDependencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModDependencyInclude<ExtArgs> | null
    where?: ModDependencyWhereInput
    orderBy?: ModDependencyOrderByWithRelationInput | ModDependencyOrderByWithRelationInput[]
    cursor?: ModDependencyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ModDependencyScalarFieldEnum | ModDependencyScalarFieldEnum[]
  }

  /**
   * Mod.modDependencies
   */
  export type Mod$modDependenciesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModDependency
     */
    select?: ModDependencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModDependency
     */
    omit?: ModDependencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModDependencyInclude<ExtArgs> | null
    where?: ModDependencyWhereInput
    orderBy?: ModDependencyOrderByWithRelationInput | ModDependencyOrderByWithRelationInput[]
    cursor?: ModDependencyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ModDependencyScalarFieldEnum | ModDependencyScalarFieldEnum[]
  }

  /**
   * Mod.shaderDependecies
   */
  export type Mod$shaderDependeciesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShaderDependecy
     */
    select?: ShaderDependecySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShaderDependecy
     */
    omit?: ShaderDependecyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShaderDependecyInclude<ExtArgs> | null
    where?: ShaderDependecyWhereInput
    orderBy?: ShaderDependecyOrderByWithRelationInput | ShaderDependecyOrderByWithRelationInput[]
    cursor?: ShaderDependecyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShaderDependecyScalarFieldEnum | ShaderDependecyScalarFieldEnum[]
  }

  /**
   * Mod.principalImage
   */
  export type Mod$principalImageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    where?: ImageWhereInput
  }

  /**
   * Mod without action
   */
  export type ModDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mod
     */
    select?: ModSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mod
     */
    omit?: ModOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModInclude<ExtArgs> | null
  }


  /**
   * Model Comment
   */

  export type AggregateComment = {
    _count: CommentCountAggregateOutputType | null
    _avg: CommentAvgAggregateOutputType | null
    _sum: CommentSumAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  export type CommentAvgAggregateOutputType = {
    id: number | null
    authorId: number | null
    packId: number | null
    shaderId: number | null
    modId: number | null
  }

  export type CommentSumAggregateOutputType = {
    id: bigint | null
    authorId: bigint | null
    packId: bigint | null
    shaderId: bigint | null
    modId: bigint | null
  }

  export type CommentMinAggregateOutputType = {
    id: bigint | null
    text: string | null
    authorId: bigint | null
    packId: bigint | null
    shaderId: bigint | null
    modId: bigint | null
  }

  export type CommentMaxAggregateOutputType = {
    id: bigint | null
    text: string | null
    authorId: bigint | null
    packId: bigint | null
    shaderId: bigint | null
    modId: bigint | null
  }

  export type CommentCountAggregateOutputType = {
    id: number
    text: number
    authorId: number
    packId: number
    shaderId: number
    modId: number
    _all: number
  }


  export type CommentAvgAggregateInputType = {
    id?: true
    authorId?: true
    packId?: true
    shaderId?: true
    modId?: true
  }

  export type CommentSumAggregateInputType = {
    id?: true
    authorId?: true
    packId?: true
    shaderId?: true
    modId?: true
  }

  export type CommentMinAggregateInputType = {
    id?: true
    text?: true
    authorId?: true
    packId?: true
    shaderId?: true
    modId?: true
  }

  export type CommentMaxAggregateInputType = {
    id?: true
    text?: true
    authorId?: true
    packId?: true
    shaderId?: true
    modId?: true
  }

  export type CommentCountAggregateInputType = {
    id?: true
    text?: true
    authorId?: true
    packId?: true
    shaderId?: true
    modId?: true
    _all?: true
  }

  export type CommentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comment to aggregate.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comments
    **/
    _count?: true | CommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentMaxAggregateInputType
  }

  export type GetCommentAggregateType<T extends CommentAggregateArgs> = {
        [P in keyof T & keyof AggregateComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComment[P]>
      : GetScalarType<T[P], AggregateComment[P]>
  }




  export type CommentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithAggregationInput | CommentOrderByWithAggregationInput[]
    by: CommentScalarFieldEnum[] | CommentScalarFieldEnum
    having?: CommentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentCountAggregateInputType | true
    _avg?: CommentAvgAggregateInputType
    _sum?: CommentSumAggregateInputType
    _min?: CommentMinAggregateInputType
    _max?: CommentMaxAggregateInputType
  }

  export type CommentGroupByOutputType = {
    id: bigint
    text: string
    authorId: bigint
    packId: bigint | null
    shaderId: bigint | null
    modId: bigint | null
    _count: CommentCountAggregateOutputType | null
    _avg: CommentAvgAggregateOutputType | null
    _sum: CommentSumAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  type GetCommentGroupByPayload<T extends CommentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentGroupByOutputType[P]>
            : GetScalarType<T[P], CommentGroupByOutputType[P]>
        }
      >
    >


  export type CommentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    authorId?: boolean
    packId?: boolean
    shaderId?: boolean
    modId?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
    pack?: boolean | Comment$packArgs<ExtArgs>
    shader?: boolean | Comment$shaderArgs<ExtArgs>
    mod?: boolean | Comment$modArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    authorId?: boolean
    packId?: boolean
    shaderId?: boolean
    modId?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
    pack?: boolean | Comment$packArgs<ExtArgs>
    shader?: boolean | Comment$shaderArgs<ExtArgs>
    mod?: boolean | Comment$modArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    authorId?: boolean
    packId?: boolean
    shaderId?: boolean
    modId?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
    pack?: boolean | Comment$packArgs<ExtArgs>
    shader?: boolean | Comment$shaderArgs<ExtArgs>
    mod?: boolean | Comment$modArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectScalar = {
    id?: boolean
    text?: boolean
    authorId?: boolean
    packId?: boolean
    shaderId?: boolean
    modId?: boolean
  }

  export type CommentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "text" | "authorId" | "packId" | "shaderId" | "modId", ExtArgs["result"]["comment"]>
  export type CommentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
    pack?: boolean | Comment$packArgs<ExtArgs>
    shader?: boolean | Comment$shaderArgs<ExtArgs>
    mod?: boolean | Comment$modArgs<ExtArgs>
  }
  export type CommentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
    pack?: boolean | Comment$packArgs<ExtArgs>
    shader?: boolean | Comment$shaderArgs<ExtArgs>
    mod?: boolean | Comment$modArgs<ExtArgs>
  }
  export type CommentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
    pack?: boolean | Comment$packArgs<ExtArgs>
    shader?: boolean | Comment$shaderArgs<ExtArgs>
    mod?: boolean | Comment$modArgs<ExtArgs>
  }

  export type $CommentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comment"
    objects: {
      author: Prisma.$UserPayload<ExtArgs>
      pack: Prisma.$PackPayload<ExtArgs> | null
      shader: Prisma.$ShaderPayload<ExtArgs> | null
      mod: Prisma.$ModPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      text: string
      authorId: bigint
      packId: bigint | null
      shaderId: bigint | null
      modId: bigint | null
    }, ExtArgs["result"]["comment"]>
    composites: {}
  }

  type CommentGetPayload<S extends boolean | null | undefined | CommentDefaultArgs> = $Result.GetResult<Prisma.$CommentPayload, S>

  type CommentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommentCountAggregateInputType | true
    }

  export interface CommentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comment'], meta: { name: 'Comment' } }
    /**
     * Find zero or one Comment that matches the filter.
     * @param {CommentFindUniqueArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommentFindUniqueArgs>(args: SelectSubset<T, CommentFindUniqueArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommentFindUniqueOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommentFindUniqueOrThrowArgs>(args: SelectSubset<T, CommentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommentFindFirstArgs>(args?: SelectSubset<T, CommentFindFirstArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommentFindFirstOrThrowArgs>(args?: SelectSubset<T, CommentFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comment.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentWithIdOnly = await prisma.comment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommentFindManyArgs>(args?: SelectSubset<T, CommentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comment.
     * @param {CommentCreateArgs} args - Arguments to create a Comment.
     * @example
     * // Create one Comment
     * const Comment = await prisma.comment.create({
     *   data: {
     *     // ... data to create a Comment
     *   }
     * })
     * 
     */
    create<T extends CommentCreateArgs>(args: SelectSubset<T, CommentCreateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comments.
     * @param {CommentCreateManyArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommentCreateManyArgs>(args?: SelectSubset<T, CommentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Comments and returns the data saved in the database.
     * @param {CommentCreateManyAndReturnArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Comments and only return the `id`
     * const commentWithIdOnly = await prisma.comment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommentCreateManyAndReturnArgs>(args?: SelectSubset<T, CommentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Comment.
     * @param {CommentDeleteArgs} args - Arguments to delete one Comment.
     * @example
     * // Delete one Comment
     * const Comment = await prisma.comment.delete({
     *   where: {
     *     // ... filter to delete one Comment
     *   }
     * })
     * 
     */
    delete<T extends CommentDeleteArgs>(args: SelectSubset<T, CommentDeleteArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comment.
     * @param {CommentUpdateArgs} args - Arguments to update one Comment.
     * @example
     * // Update one Comment
     * const comment = await prisma.comment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommentUpdateArgs>(args: SelectSubset<T, CommentUpdateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comments.
     * @param {CommentDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommentDeleteManyArgs>(args?: SelectSubset<T, CommentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommentUpdateManyArgs>(args: SelectSubset<T, CommentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments and returns the data updated in the database.
     * @param {CommentUpdateManyAndReturnArgs} args - Arguments to update many Comments.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Comments and only return the `id`
     * const commentWithIdOnly = await prisma.comment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CommentUpdateManyAndReturnArgs>(args: SelectSubset<T, CommentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Comment.
     * @param {CommentUpsertArgs} args - Arguments to update or create a Comment.
     * @example
     * // Update or create a Comment
     * const comment = await prisma.comment.upsert({
     *   create: {
     *     // ... data to create a Comment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comment we want to update
     *   }
     * })
     */
    upsert<T extends CommentUpsertArgs>(args: SelectSubset<T, CommentUpsertArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comment.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends CommentCountArgs>(
      args?: Subset<T, CommentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CommentAggregateArgs>(args: Subset<T, CommentAggregateArgs>): Prisma.PrismaPromise<GetCommentAggregateType<T>>

    /**
     * Group by Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentGroupByArgs['orderBy'] }
        : { orderBy?: CommentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Comment model
   */
  readonly fields: CommentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    author<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    pack<T extends Comment$packArgs<ExtArgs> = {}>(args?: Subset<T, Comment$packArgs<ExtArgs>>): Prisma__PackClient<$Result.GetResult<Prisma.$PackPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    shader<T extends Comment$shaderArgs<ExtArgs> = {}>(args?: Subset<T, Comment$shaderArgs<ExtArgs>>): Prisma__ShaderClient<$Result.GetResult<Prisma.$ShaderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    mod<T extends Comment$modArgs<ExtArgs> = {}>(args?: Subset<T, Comment$modArgs<ExtArgs>>): Prisma__ModClient<$Result.GetResult<Prisma.$ModPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Comment model
   */
  interface CommentFieldRefs {
    readonly id: FieldRef<"Comment", 'BigInt'>
    readonly text: FieldRef<"Comment", 'String'>
    readonly authorId: FieldRef<"Comment", 'BigInt'>
    readonly packId: FieldRef<"Comment", 'BigInt'>
    readonly shaderId: FieldRef<"Comment", 'BigInt'>
    readonly modId: FieldRef<"Comment", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * Comment findUnique
   */
  export type CommentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findUniqueOrThrow
   */
  export type CommentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findFirst
   */
  export type CommentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findFirstOrThrow
   */
  export type CommentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findMany
   */
  export type CommentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment create
   */
  export type CommentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to create a Comment.
     */
    data: XOR<CommentCreateInput, CommentUncheckedCreateInput>
  }

  /**
   * Comment createMany
   */
  export type CommentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Comment createManyAndReturn
   */
  export type CommentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comment update
   */
  export type CommentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to update a Comment.
     */
    data: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
    /**
     * Choose, which Comment to update.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment updateMany
   */
  export type CommentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
  }

  /**
   * Comment updateManyAndReturn
   */
  export type CommentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comment upsert
   */
  export type CommentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The filter to search for the Comment to update in case it exists.
     */
    where: CommentWhereUniqueInput
    /**
     * In case the Comment found by the `where` argument doesn't exist, create a new Comment with this data.
     */
    create: XOR<CommentCreateInput, CommentUncheckedCreateInput>
    /**
     * In case the Comment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
  }

  /**
   * Comment delete
   */
  export type CommentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter which Comment to delete.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment deleteMany
   */
  export type CommentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comments to delete
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to delete.
     */
    limit?: number
  }

  /**
   * Comment.pack
   */
  export type Comment$packArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pack
     */
    select?: PackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pack
     */
    omit?: PackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackInclude<ExtArgs> | null
    where?: PackWhereInput
  }

  /**
   * Comment.shader
   */
  export type Comment$shaderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shader
     */
    select?: ShaderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shader
     */
    omit?: ShaderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShaderInclude<ExtArgs> | null
    where?: ShaderWhereInput
  }

  /**
   * Comment.mod
   */
  export type Comment$modArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mod
     */
    select?: ModSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mod
     */
    omit?: ModOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModInclude<ExtArgs> | null
    where?: ModWhereInput
  }

  /**
   * Comment without action
   */
  export type CommentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
  }


  /**
   * Model Image
   */

  export type AggregateImage = {
    _count: ImageCountAggregateOutputType | null
    _avg: ImageAvgAggregateOutputType | null
    _sum: ImageSumAggregateOutputType | null
    _min: ImageMinAggregateOutputType | null
    _max: ImageMaxAggregateOutputType | null
  }

  export type ImageAvgAggregateOutputType = {
    id: number | null
    modId: number | null
    shaderId: number | null
    packId: number | null
  }

  export type ImageSumAggregateOutputType = {
    id: bigint | null
    modId: bigint | null
    shaderId: bigint | null
    packId: bigint | null
  }

  export type ImageMinAggregateOutputType = {
    id: bigint | null
    src: string | null
    basePath: string | null
    modId: bigint | null
    shaderId: bigint | null
    packId: bigint | null
  }

  export type ImageMaxAggregateOutputType = {
    id: bigint | null
    src: string | null
    basePath: string | null
    modId: bigint | null
    shaderId: bigint | null
    packId: bigint | null
  }

  export type ImageCountAggregateOutputType = {
    id: number
    src: number
    basePath: number
    modId: number
    shaderId: number
    packId: number
    _all: number
  }


  export type ImageAvgAggregateInputType = {
    id?: true
    modId?: true
    shaderId?: true
    packId?: true
  }

  export type ImageSumAggregateInputType = {
    id?: true
    modId?: true
    shaderId?: true
    packId?: true
  }

  export type ImageMinAggregateInputType = {
    id?: true
    src?: true
    basePath?: true
    modId?: true
    shaderId?: true
    packId?: true
  }

  export type ImageMaxAggregateInputType = {
    id?: true
    src?: true
    basePath?: true
    modId?: true
    shaderId?: true
    packId?: true
  }

  export type ImageCountAggregateInputType = {
    id?: true
    src?: true
    basePath?: true
    modId?: true
    shaderId?: true
    packId?: true
    _all?: true
  }

  export type ImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Image to aggregate.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Images
    **/
    _count?: true | ImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ImageMaxAggregateInputType
  }

  export type GetImageAggregateType<T extends ImageAggregateArgs> = {
        [P in keyof T & keyof AggregateImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImage[P]>
      : GetScalarType<T[P], AggregateImage[P]>
  }




  export type ImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImageWhereInput
    orderBy?: ImageOrderByWithAggregationInput | ImageOrderByWithAggregationInput[]
    by: ImageScalarFieldEnum[] | ImageScalarFieldEnum
    having?: ImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ImageCountAggregateInputType | true
    _avg?: ImageAvgAggregateInputType
    _sum?: ImageSumAggregateInputType
    _min?: ImageMinAggregateInputType
    _max?: ImageMaxAggregateInputType
  }

  export type ImageGroupByOutputType = {
    id: bigint
    src: string
    basePath: string
    modId: bigint | null
    shaderId: bigint | null
    packId: bigint | null
    _count: ImageCountAggregateOutputType | null
    _avg: ImageAvgAggregateOutputType | null
    _sum: ImageSumAggregateOutputType | null
    _min: ImageMinAggregateOutputType | null
    _max: ImageMaxAggregateOutputType | null
  }

  type GetImageGroupByPayload<T extends ImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImageGroupByOutputType[P]>
            : GetScalarType<T[P], ImageGroupByOutputType[P]>
        }
      >
    >


  export type ImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    src?: boolean
    basePath?: boolean
    modId?: boolean
    shaderId?: boolean
    packId?: boolean
    mod?: boolean | Image$modArgs<ExtArgs>
    shader?: boolean | Image$shaderArgs<ExtArgs>
    pack?: boolean | Image$packArgs<ExtArgs>
    users?: boolean | Image$usersArgs<ExtArgs>
    packsPrincipal?: boolean | Image$packsPrincipalArgs<ExtArgs>
    shadersPrincipal?: boolean | Image$shadersPrincipalArgs<ExtArgs>
    modsPrincipal?: boolean | Image$modsPrincipalArgs<ExtArgs>
    _count?: boolean | ImageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["image"]>

  export type ImageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    src?: boolean
    basePath?: boolean
    modId?: boolean
    shaderId?: boolean
    packId?: boolean
    mod?: boolean | Image$modArgs<ExtArgs>
    shader?: boolean | Image$shaderArgs<ExtArgs>
    pack?: boolean | Image$packArgs<ExtArgs>
  }, ExtArgs["result"]["image"]>

  export type ImageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    src?: boolean
    basePath?: boolean
    modId?: boolean
    shaderId?: boolean
    packId?: boolean
    mod?: boolean | Image$modArgs<ExtArgs>
    shader?: boolean | Image$shaderArgs<ExtArgs>
    pack?: boolean | Image$packArgs<ExtArgs>
  }, ExtArgs["result"]["image"]>

  export type ImageSelectScalar = {
    id?: boolean
    src?: boolean
    basePath?: boolean
    modId?: boolean
    shaderId?: boolean
    packId?: boolean
  }

  export type ImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "src" | "basePath" | "modId" | "shaderId" | "packId", ExtArgs["result"]["image"]>
  export type ImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mod?: boolean | Image$modArgs<ExtArgs>
    shader?: boolean | Image$shaderArgs<ExtArgs>
    pack?: boolean | Image$packArgs<ExtArgs>
    users?: boolean | Image$usersArgs<ExtArgs>
    packsPrincipal?: boolean | Image$packsPrincipalArgs<ExtArgs>
    shadersPrincipal?: boolean | Image$shadersPrincipalArgs<ExtArgs>
    modsPrincipal?: boolean | Image$modsPrincipalArgs<ExtArgs>
    _count?: boolean | ImageCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ImageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mod?: boolean | Image$modArgs<ExtArgs>
    shader?: boolean | Image$shaderArgs<ExtArgs>
    pack?: boolean | Image$packArgs<ExtArgs>
  }
  export type ImageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mod?: boolean | Image$modArgs<ExtArgs>
    shader?: boolean | Image$shaderArgs<ExtArgs>
    pack?: boolean | Image$packArgs<ExtArgs>
  }

  export type $ImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Image"
    objects: {
      mod: Prisma.$ModPayload<ExtArgs> | null
      shader: Prisma.$ShaderPayload<ExtArgs> | null
      pack: Prisma.$PackPayload<ExtArgs> | null
      users: Prisma.$UserPayload<ExtArgs>[]
      packsPrincipal: Prisma.$PackPayload<ExtArgs>[]
      shadersPrincipal: Prisma.$ShaderPayload<ExtArgs>[]
      modsPrincipal: Prisma.$ModPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      src: string
      basePath: string
      modId: bigint | null
      shaderId: bigint | null
      packId: bigint | null
    }, ExtArgs["result"]["image"]>
    composites: {}
  }

  type ImageGetPayload<S extends boolean | null | undefined | ImageDefaultArgs> = $Result.GetResult<Prisma.$ImagePayload, S>

  type ImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ImageCountAggregateInputType | true
    }

  export interface ImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Image'], meta: { name: 'Image' } }
    /**
     * Find zero or one Image that matches the filter.
     * @param {ImageFindUniqueArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ImageFindUniqueArgs>(args: SelectSubset<T, ImageFindUniqueArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Image that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ImageFindUniqueOrThrowArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ImageFindUniqueOrThrowArgs>(args: SelectSubset<T, ImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Image that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindFirstArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ImageFindFirstArgs>(args?: SelectSubset<T, ImageFindFirstArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Image that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindFirstOrThrowArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ImageFindFirstOrThrowArgs>(args?: SelectSubset<T, ImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Images
     * const images = await prisma.image.findMany()
     * 
     * // Get first 10 Images
     * const images = await prisma.image.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const imageWithIdOnly = await prisma.image.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ImageFindManyArgs>(args?: SelectSubset<T, ImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Image.
     * @param {ImageCreateArgs} args - Arguments to create a Image.
     * @example
     * // Create one Image
     * const Image = await prisma.image.create({
     *   data: {
     *     // ... data to create a Image
     *   }
     * })
     * 
     */
    create<T extends ImageCreateArgs>(args: SelectSubset<T, ImageCreateArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Images.
     * @param {ImageCreateManyArgs} args - Arguments to create many Images.
     * @example
     * // Create many Images
     * const image = await prisma.image.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ImageCreateManyArgs>(args?: SelectSubset<T, ImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Images and returns the data saved in the database.
     * @param {ImageCreateManyAndReturnArgs} args - Arguments to create many Images.
     * @example
     * // Create many Images
     * const image = await prisma.image.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Images and only return the `id`
     * const imageWithIdOnly = await prisma.image.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ImageCreateManyAndReturnArgs>(args?: SelectSubset<T, ImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Image.
     * @param {ImageDeleteArgs} args - Arguments to delete one Image.
     * @example
     * // Delete one Image
     * const Image = await prisma.image.delete({
     *   where: {
     *     // ... filter to delete one Image
     *   }
     * })
     * 
     */
    delete<T extends ImageDeleteArgs>(args: SelectSubset<T, ImageDeleteArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Image.
     * @param {ImageUpdateArgs} args - Arguments to update one Image.
     * @example
     * // Update one Image
     * const image = await prisma.image.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ImageUpdateArgs>(args: SelectSubset<T, ImageUpdateArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Images.
     * @param {ImageDeleteManyArgs} args - Arguments to filter Images to delete.
     * @example
     * // Delete a few Images
     * const { count } = await prisma.image.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ImageDeleteManyArgs>(args?: SelectSubset<T, ImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Images
     * const image = await prisma.image.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ImageUpdateManyArgs>(args: SelectSubset<T, ImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Images and returns the data updated in the database.
     * @param {ImageUpdateManyAndReturnArgs} args - Arguments to update many Images.
     * @example
     * // Update many Images
     * const image = await prisma.image.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Images and only return the `id`
     * const imageWithIdOnly = await prisma.image.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ImageUpdateManyAndReturnArgs>(args: SelectSubset<T, ImageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Image.
     * @param {ImageUpsertArgs} args - Arguments to update or create a Image.
     * @example
     * // Update or create a Image
     * const image = await prisma.image.upsert({
     *   create: {
     *     // ... data to create a Image
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Image we want to update
     *   }
     * })
     */
    upsert<T extends ImageUpsertArgs>(args: SelectSubset<T, ImageUpsertArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageCountArgs} args - Arguments to filter Images to count.
     * @example
     * // Count the number of Images
     * const count = await prisma.image.count({
     *   where: {
     *     // ... the filter for the Images we want to count
     *   }
     * })
    **/
    count<T extends ImageCountArgs>(
      args?: Subset<T, ImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ImageAggregateArgs>(args: Subset<T, ImageAggregateArgs>): Prisma.PrismaPromise<GetImageAggregateType<T>>

    /**
     * Group by Image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ImageGroupByArgs['orderBy'] }
        : { orderBy?: ImageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Image model
   */
  readonly fields: ImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Image.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mod<T extends Image$modArgs<ExtArgs> = {}>(args?: Subset<T, Image$modArgs<ExtArgs>>): Prisma__ModClient<$Result.GetResult<Prisma.$ModPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    shader<T extends Image$shaderArgs<ExtArgs> = {}>(args?: Subset<T, Image$shaderArgs<ExtArgs>>): Prisma__ShaderClient<$Result.GetResult<Prisma.$ShaderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    pack<T extends Image$packArgs<ExtArgs> = {}>(args?: Subset<T, Image$packArgs<ExtArgs>>): Prisma__PackClient<$Result.GetResult<Prisma.$PackPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    users<T extends Image$usersArgs<ExtArgs> = {}>(args?: Subset<T, Image$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    packsPrincipal<T extends Image$packsPrincipalArgs<ExtArgs> = {}>(args?: Subset<T, Image$packsPrincipalArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PackPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    shadersPrincipal<T extends Image$shadersPrincipalArgs<ExtArgs> = {}>(args?: Subset<T, Image$shadersPrincipalArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShaderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    modsPrincipal<T extends Image$modsPrincipalArgs<ExtArgs> = {}>(args?: Subset<T, Image$modsPrincipalArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Image model
   */
  interface ImageFieldRefs {
    readonly id: FieldRef<"Image", 'BigInt'>
    readonly src: FieldRef<"Image", 'String'>
    readonly basePath: FieldRef<"Image", 'String'>
    readonly modId: FieldRef<"Image", 'BigInt'>
    readonly shaderId: FieldRef<"Image", 'BigInt'>
    readonly packId: FieldRef<"Image", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * Image findUnique
   */
  export type ImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image findUniqueOrThrow
   */
  export type ImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image findFirst
   */
  export type ImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Images.
     */
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Image findFirstOrThrow
   */
  export type ImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Images.
     */
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Image findMany
   */
  export type ImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Images to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Images.
     */
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Image create
   */
  export type ImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * The data needed to create a Image.
     */
    data: XOR<ImageCreateInput, ImageUncheckedCreateInput>
  }

  /**
   * Image createMany
   */
  export type ImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Images.
     */
    data: ImageCreateManyInput | ImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Image createManyAndReturn
   */
  export type ImageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * The data used to create many Images.
     */
    data: ImageCreateManyInput | ImageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Image update
   */
  export type ImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * The data needed to update a Image.
     */
    data: XOR<ImageUpdateInput, ImageUncheckedUpdateInput>
    /**
     * Choose, which Image to update.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image updateMany
   */
  export type ImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Images.
     */
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyInput>
    /**
     * Filter which Images to update
     */
    where?: ImageWhereInput
    /**
     * Limit how many Images to update.
     */
    limit?: number
  }

  /**
   * Image updateManyAndReturn
   */
  export type ImageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * The data used to update Images.
     */
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyInput>
    /**
     * Filter which Images to update
     */
    where?: ImageWhereInput
    /**
     * Limit how many Images to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Image upsert
   */
  export type ImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * The filter to search for the Image to update in case it exists.
     */
    where: ImageWhereUniqueInput
    /**
     * In case the Image found by the `where` argument doesn't exist, create a new Image with this data.
     */
    create: XOR<ImageCreateInput, ImageUncheckedCreateInput>
    /**
     * In case the Image was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ImageUpdateInput, ImageUncheckedUpdateInput>
  }

  /**
   * Image delete
   */
  export type ImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter which Image to delete.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image deleteMany
   */
  export type ImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Images to delete
     */
    where?: ImageWhereInput
    /**
     * Limit how many Images to delete.
     */
    limit?: number
  }

  /**
   * Image.mod
   */
  export type Image$modArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mod
     */
    select?: ModSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mod
     */
    omit?: ModOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModInclude<ExtArgs> | null
    where?: ModWhereInput
  }

  /**
   * Image.shader
   */
  export type Image$shaderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shader
     */
    select?: ShaderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shader
     */
    omit?: ShaderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShaderInclude<ExtArgs> | null
    where?: ShaderWhereInput
  }

  /**
   * Image.pack
   */
  export type Image$packArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pack
     */
    select?: PackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pack
     */
    omit?: PackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackInclude<ExtArgs> | null
    where?: PackWhereInput
  }

  /**
   * Image.users
   */
  export type Image$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Image.packsPrincipal
   */
  export type Image$packsPrincipalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pack
     */
    select?: PackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pack
     */
    omit?: PackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackInclude<ExtArgs> | null
    where?: PackWhereInput
    orderBy?: PackOrderByWithRelationInput | PackOrderByWithRelationInput[]
    cursor?: PackWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PackScalarFieldEnum | PackScalarFieldEnum[]
  }

  /**
   * Image.shadersPrincipal
   */
  export type Image$shadersPrincipalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shader
     */
    select?: ShaderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shader
     */
    omit?: ShaderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShaderInclude<ExtArgs> | null
    where?: ShaderWhereInput
    orderBy?: ShaderOrderByWithRelationInput | ShaderOrderByWithRelationInput[]
    cursor?: ShaderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShaderScalarFieldEnum | ShaderScalarFieldEnum[]
  }

  /**
   * Image.modsPrincipal
   */
  export type Image$modsPrincipalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mod
     */
    select?: ModSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mod
     */
    omit?: ModOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModInclude<ExtArgs> | null
    where?: ModWhereInput
    orderBy?: ModOrderByWithRelationInput | ModOrderByWithRelationInput[]
    cursor?: ModWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ModScalarFieldEnum | ModScalarFieldEnum[]
  }

  /**
   * Image without action
   */
  export type ImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
  }


  /**
   * Model Conflict
   */

  export type AggregateConflict = {
    _count: ConflictCountAggregateOutputType | null
    _avg: ConflictAvgAggregateOutputType | null
    _sum: ConflictSumAggregateOutputType | null
    _min: ConflictMinAggregateOutputType | null
    _max: ConflictMaxAggregateOutputType | null
  }

  export type ConflictAvgAggregateOutputType = {
    id: number | null
    conflictshaderId: number | null
    modId: number | null
    conflictModId: number | null
  }

  export type ConflictSumAggregateOutputType = {
    id: bigint | null
    conflictshaderId: bigint | null
    modId: bigint | null
    conflictModId: bigint | null
  }

  export type ConflictMinAggregateOutputType = {
    id: bigint | null
    conflictshaderId: bigint | null
    modId: bigint | null
    conflictModId: bigint | null
  }

  export type ConflictMaxAggregateOutputType = {
    id: bigint | null
    conflictshaderId: bigint | null
    modId: bigint | null
    conflictModId: bigint | null
  }

  export type ConflictCountAggregateOutputType = {
    id: number
    conflictshaderId: number
    modId: number
    conflictModId: number
    _all: number
  }


  export type ConflictAvgAggregateInputType = {
    id?: true
    conflictshaderId?: true
    modId?: true
    conflictModId?: true
  }

  export type ConflictSumAggregateInputType = {
    id?: true
    conflictshaderId?: true
    modId?: true
    conflictModId?: true
  }

  export type ConflictMinAggregateInputType = {
    id?: true
    conflictshaderId?: true
    modId?: true
    conflictModId?: true
  }

  export type ConflictMaxAggregateInputType = {
    id?: true
    conflictshaderId?: true
    modId?: true
    conflictModId?: true
  }

  export type ConflictCountAggregateInputType = {
    id?: true
    conflictshaderId?: true
    modId?: true
    conflictModId?: true
    _all?: true
  }

  export type ConflictAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Conflict to aggregate.
     */
    where?: ConflictWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conflicts to fetch.
     */
    orderBy?: ConflictOrderByWithRelationInput | ConflictOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConflictWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conflicts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conflicts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Conflicts
    **/
    _count?: true | ConflictCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ConflictAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ConflictSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConflictMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConflictMaxAggregateInputType
  }

  export type GetConflictAggregateType<T extends ConflictAggregateArgs> = {
        [P in keyof T & keyof AggregateConflict]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConflict[P]>
      : GetScalarType<T[P], AggregateConflict[P]>
  }




  export type ConflictGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConflictWhereInput
    orderBy?: ConflictOrderByWithAggregationInput | ConflictOrderByWithAggregationInput[]
    by: ConflictScalarFieldEnum[] | ConflictScalarFieldEnum
    having?: ConflictScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConflictCountAggregateInputType | true
    _avg?: ConflictAvgAggregateInputType
    _sum?: ConflictSumAggregateInputType
    _min?: ConflictMinAggregateInputType
    _max?: ConflictMaxAggregateInputType
  }

  export type ConflictGroupByOutputType = {
    id: bigint
    conflictshaderId: bigint | null
    modId: bigint
    conflictModId: bigint | null
    _count: ConflictCountAggregateOutputType | null
    _avg: ConflictAvgAggregateOutputType | null
    _sum: ConflictSumAggregateOutputType | null
    _min: ConflictMinAggregateOutputType | null
    _max: ConflictMaxAggregateOutputType | null
  }

  type GetConflictGroupByPayload<T extends ConflictGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConflictGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConflictGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConflictGroupByOutputType[P]>
            : GetScalarType<T[P], ConflictGroupByOutputType[P]>
        }
      >
    >


  export type ConflictSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    conflictshaderId?: boolean
    modId?: boolean
    conflictModId?: boolean
    conflictShader?: boolean | Conflict$conflictShaderArgs<ExtArgs>
    mod?: boolean | ModDefaultArgs<ExtArgs>
    conflictMod?: boolean | Conflict$conflictModArgs<ExtArgs>
  }, ExtArgs["result"]["conflict"]>

  export type ConflictSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    conflictshaderId?: boolean
    modId?: boolean
    conflictModId?: boolean
    conflictShader?: boolean | Conflict$conflictShaderArgs<ExtArgs>
    mod?: boolean | ModDefaultArgs<ExtArgs>
    conflictMod?: boolean | Conflict$conflictModArgs<ExtArgs>
  }, ExtArgs["result"]["conflict"]>

  export type ConflictSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    conflictshaderId?: boolean
    modId?: boolean
    conflictModId?: boolean
    conflictShader?: boolean | Conflict$conflictShaderArgs<ExtArgs>
    mod?: boolean | ModDefaultArgs<ExtArgs>
    conflictMod?: boolean | Conflict$conflictModArgs<ExtArgs>
  }, ExtArgs["result"]["conflict"]>

  export type ConflictSelectScalar = {
    id?: boolean
    conflictshaderId?: boolean
    modId?: boolean
    conflictModId?: boolean
  }

  export type ConflictOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "conflictshaderId" | "modId" | "conflictModId", ExtArgs["result"]["conflict"]>
  export type ConflictInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conflictShader?: boolean | Conflict$conflictShaderArgs<ExtArgs>
    mod?: boolean | ModDefaultArgs<ExtArgs>
    conflictMod?: boolean | Conflict$conflictModArgs<ExtArgs>
  }
  export type ConflictIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conflictShader?: boolean | Conflict$conflictShaderArgs<ExtArgs>
    mod?: boolean | ModDefaultArgs<ExtArgs>
    conflictMod?: boolean | Conflict$conflictModArgs<ExtArgs>
  }
  export type ConflictIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conflictShader?: boolean | Conflict$conflictShaderArgs<ExtArgs>
    mod?: boolean | ModDefaultArgs<ExtArgs>
    conflictMod?: boolean | Conflict$conflictModArgs<ExtArgs>
  }

  export type $ConflictPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Conflict"
    objects: {
      conflictShader: Prisma.$ShaderPayload<ExtArgs> | null
      mod: Prisma.$ModPayload<ExtArgs>
      conflictMod: Prisma.$ModPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      conflictshaderId: bigint | null
      modId: bigint
      conflictModId: bigint | null
    }, ExtArgs["result"]["conflict"]>
    composites: {}
  }

  type ConflictGetPayload<S extends boolean | null | undefined | ConflictDefaultArgs> = $Result.GetResult<Prisma.$ConflictPayload, S>

  type ConflictCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConflictFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConflictCountAggregateInputType | true
    }

  export interface ConflictDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Conflict'], meta: { name: 'Conflict' } }
    /**
     * Find zero or one Conflict that matches the filter.
     * @param {ConflictFindUniqueArgs} args - Arguments to find a Conflict
     * @example
     * // Get one Conflict
     * const conflict = await prisma.conflict.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConflictFindUniqueArgs>(args: SelectSubset<T, ConflictFindUniqueArgs<ExtArgs>>): Prisma__ConflictClient<$Result.GetResult<Prisma.$ConflictPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Conflict that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConflictFindUniqueOrThrowArgs} args - Arguments to find a Conflict
     * @example
     * // Get one Conflict
     * const conflict = await prisma.conflict.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConflictFindUniqueOrThrowArgs>(args: SelectSubset<T, ConflictFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConflictClient<$Result.GetResult<Prisma.$ConflictPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Conflict that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConflictFindFirstArgs} args - Arguments to find a Conflict
     * @example
     * // Get one Conflict
     * const conflict = await prisma.conflict.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConflictFindFirstArgs>(args?: SelectSubset<T, ConflictFindFirstArgs<ExtArgs>>): Prisma__ConflictClient<$Result.GetResult<Prisma.$ConflictPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Conflict that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConflictFindFirstOrThrowArgs} args - Arguments to find a Conflict
     * @example
     * // Get one Conflict
     * const conflict = await prisma.conflict.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConflictFindFirstOrThrowArgs>(args?: SelectSubset<T, ConflictFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConflictClient<$Result.GetResult<Prisma.$ConflictPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Conflicts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConflictFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Conflicts
     * const conflicts = await prisma.conflict.findMany()
     * 
     * // Get first 10 Conflicts
     * const conflicts = await prisma.conflict.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const conflictWithIdOnly = await prisma.conflict.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConflictFindManyArgs>(args?: SelectSubset<T, ConflictFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConflictPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Conflict.
     * @param {ConflictCreateArgs} args - Arguments to create a Conflict.
     * @example
     * // Create one Conflict
     * const Conflict = await prisma.conflict.create({
     *   data: {
     *     // ... data to create a Conflict
     *   }
     * })
     * 
     */
    create<T extends ConflictCreateArgs>(args: SelectSubset<T, ConflictCreateArgs<ExtArgs>>): Prisma__ConflictClient<$Result.GetResult<Prisma.$ConflictPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Conflicts.
     * @param {ConflictCreateManyArgs} args - Arguments to create many Conflicts.
     * @example
     * // Create many Conflicts
     * const conflict = await prisma.conflict.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConflictCreateManyArgs>(args?: SelectSubset<T, ConflictCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Conflicts and returns the data saved in the database.
     * @param {ConflictCreateManyAndReturnArgs} args - Arguments to create many Conflicts.
     * @example
     * // Create many Conflicts
     * const conflict = await prisma.conflict.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Conflicts and only return the `id`
     * const conflictWithIdOnly = await prisma.conflict.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ConflictCreateManyAndReturnArgs>(args?: SelectSubset<T, ConflictCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConflictPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Conflict.
     * @param {ConflictDeleteArgs} args - Arguments to delete one Conflict.
     * @example
     * // Delete one Conflict
     * const Conflict = await prisma.conflict.delete({
     *   where: {
     *     // ... filter to delete one Conflict
     *   }
     * })
     * 
     */
    delete<T extends ConflictDeleteArgs>(args: SelectSubset<T, ConflictDeleteArgs<ExtArgs>>): Prisma__ConflictClient<$Result.GetResult<Prisma.$ConflictPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Conflict.
     * @param {ConflictUpdateArgs} args - Arguments to update one Conflict.
     * @example
     * // Update one Conflict
     * const conflict = await prisma.conflict.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConflictUpdateArgs>(args: SelectSubset<T, ConflictUpdateArgs<ExtArgs>>): Prisma__ConflictClient<$Result.GetResult<Prisma.$ConflictPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Conflicts.
     * @param {ConflictDeleteManyArgs} args - Arguments to filter Conflicts to delete.
     * @example
     * // Delete a few Conflicts
     * const { count } = await prisma.conflict.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConflictDeleteManyArgs>(args?: SelectSubset<T, ConflictDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Conflicts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConflictUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Conflicts
     * const conflict = await prisma.conflict.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConflictUpdateManyArgs>(args: SelectSubset<T, ConflictUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Conflicts and returns the data updated in the database.
     * @param {ConflictUpdateManyAndReturnArgs} args - Arguments to update many Conflicts.
     * @example
     * // Update many Conflicts
     * const conflict = await prisma.conflict.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Conflicts and only return the `id`
     * const conflictWithIdOnly = await prisma.conflict.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ConflictUpdateManyAndReturnArgs>(args: SelectSubset<T, ConflictUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConflictPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Conflict.
     * @param {ConflictUpsertArgs} args - Arguments to update or create a Conflict.
     * @example
     * // Update or create a Conflict
     * const conflict = await prisma.conflict.upsert({
     *   create: {
     *     // ... data to create a Conflict
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Conflict we want to update
     *   }
     * })
     */
    upsert<T extends ConflictUpsertArgs>(args: SelectSubset<T, ConflictUpsertArgs<ExtArgs>>): Prisma__ConflictClient<$Result.GetResult<Prisma.$ConflictPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Conflicts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConflictCountArgs} args - Arguments to filter Conflicts to count.
     * @example
     * // Count the number of Conflicts
     * const count = await prisma.conflict.count({
     *   where: {
     *     // ... the filter for the Conflicts we want to count
     *   }
     * })
    **/
    count<T extends ConflictCountArgs>(
      args?: Subset<T, ConflictCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConflictCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Conflict.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConflictAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ConflictAggregateArgs>(args: Subset<T, ConflictAggregateArgs>): Prisma.PrismaPromise<GetConflictAggregateType<T>>

    /**
     * Group by Conflict.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConflictGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ConflictGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConflictGroupByArgs['orderBy'] }
        : { orderBy?: ConflictGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ConflictGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConflictGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Conflict model
   */
  readonly fields: ConflictFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Conflict.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConflictClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    conflictShader<T extends Conflict$conflictShaderArgs<ExtArgs> = {}>(args?: Subset<T, Conflict$conflictShaderArgs<ExtArgs>>): Prisma__ShaderClient<$Result.GetResult<Prisma.$ShaderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    mod<T extends ModDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ModDefaultArgs<ExtArgs>>): Prisma__ModClient<$Result.GetResult<Prisma.$ModPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    conflictMod<T extends Conflict$conflictModArgs<ExtArgs> = {}>(args?: Subset<T, Conflict$conflictModArgs<ExtArgs>>): Prisma__ModClient<$Result.GetResult<Prisma.$ModPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Conflict model
   */
  interface ConflictFieldRefs {
    readonly id: FieldRef<"Conflict", 'BigInt'>
    readonly conflictshaderId: FieldRef<"Conflict", 'BigInt'>
    readonly modId: FieldRef<"Conflict", 'BigInt'>
    readonly conflictModId: FieldRef<"Conflict", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * Conflict findUnique
   */
  export type ConflictFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conflict
     */
    select?: ConflictSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conflict
     */
    omit?: ConflictOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConflictInclude<ExtArgs> | null
    /**
     * Filter, which Conflict to fetch.
     */
    where: ConflictWhereUniqueInput
  }

  /**
   * Conflict findUniqueOrThrow
   */
  export type ConflictFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conflict
     */
    select?: ConflictSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conflict
     */
    omit?: ConflictOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConflictInclude<ExtArgs> | null
    /**
     * Filter, which Conflict to fetch.
     */
    where: ConflictWhereUniqueInput
  }

  /**
   * Conflict findFirst
   */
  export type ConflictFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conflict
     */
    select?: ConflictSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conflict
     */
    omit?: ConflictOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConflictInclude<ExtArgs> | null
    /**
     * Filter, which Conflict to fetch.
     */
    where?: ConflictWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conflicts to fetch.
     */
    orderBy?: ConflictOrderByWithRelationInput | ConflictOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Conflicts.
     */
    cursor?: ConflictWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conflicts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conflicts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Conflicts.
     */
    distinct?: ConflictScalarFieldEnum | ConflictScalarFieldEnum[]
  }

  /**
   * Conflict findFirstOrThrow
   */
  export type ConflictFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conflict
     */
    select?: ConflictSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conflict
     */
    omit?: ConflictOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConflictInclude<ExtArgs> | null
    /**
     * Filter, which Conflict to fetch.
     */
    where?: ConflictWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conflicts to fetch.
     */
    orderBy?: ConflictOrderByWithRelationInput | ConflictOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Conflicts.
     */
    cursor?: ConflictWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conflicts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conflicts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Conflicts.
     */
    distinct?: ConflictScalarFieldEnum | ConflictScalarFieldEnum[]
  }

  /**
   * Conflict findMany
   */
  export type ConflictFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conflict
     */
    select?: ConflictSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conflict
     */
    omit?: ConflictOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConflictInclude<ExtArgs> | null
    /**
     * Filter, which Conflicts to fetch.
     */
    where?: ConflictWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conflicts to fetch.
     */
    orderBy?: ConflictOrderByWithRelationInput | ConflictOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Conflicts.
     */
    cursor?: ConflictWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conflicts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conflicts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Conflicts.
     */
    distinct?: ConflictScalarFieldEnum | ConflictScalarFieldEnum[]
  }

  /**
   * Conflict create
   */
  export type ConflictCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conflict
     */
    select?: ConflictSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conflict
     */
    omit?: ConflictOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConflictInclude<ExtArgs> | null
    /**
     * The data needed to create a Conflict.
     */
    data: XOR<ConflictCreateInput, ConflictUncheckedCreateInput>
  }

  /**
   * Conflict createMany
   */
  export type ConflictCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Conflicts.
     */
    data: ConflictCreateManyInput | ConflictCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Conflict createManyAndReturn
   */
  export type ConflictCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conflict
     */
    select?: ConflictSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Conflict
     */
    omit?: ConflictOmit<ExtArgs> | null
    /**
     * The data used to create many Conflicts.
     */
    data: ConflictCreateManyInput | ConflictCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConflictIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Conflict update
   */
  export type ConflictUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conflict
     */
    select?: ConflictSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conflict
     */
    omit?: ConflictOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConflictInclude<ExtArgs> | null
    /**
     * The data needed to update a Conflict.
     */
    data: XOR<ConflictUpdateInput, ConflictUncheckedUpdateInput>
    /**
     * Choose, which Conflict to update.
     */
    where: ConflictWhereUniqueInput
  }

  /**
   * Conflict updateMany
   */
  export type ConflictUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Conflicts.
     */
    data: XOR<ConflictUpdateManyMutationInput, ConflictUncheckedUpdateManyInput>
    /**
     * Filter which Conflicts to update
     */
    where?: ConflictWhereInput
    /**
     * Limit how many Conflicts to update.
     */
    limit?: number
  }

  /**
   * Conflict updateManyAndReturn
   */
  export type ConflictUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conflict
     */
    select?: ConflictSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Conflict
     */
    omit?: ConflictOmit<ExtArgs> | null
    /**
     * The data used to update Conflicts.
     */
    data: XOR<ConflictUpdateManyMutationInput, ConflictUncheckedUpdateManyInput>
    /**
     * Filter which Conflicts to update
     */
    where?: ConflictWhereInput
    /**
     * Limit how many Conflicts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConflictIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Conflict upsert
   */
  export type ConflictUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conflict
     */
    select?: ConflictSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conflict
     */
    omit?: ConflictOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConflictInclude<ExtArgs> | null
    /**
     * The filter to search for the Conflict to update in case it exists.
     */
    where: ConflictWhereUniqueInput
    /**
     * In case the Conflict found by the `where` argument doesn't exist, create a new Conflict with this data.
     */
    create: XOR<ConflictCreateInput, ConflictUncheckedCreateInput>
    /**
     * In case the Conflict was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConflictUpdateInput, ConflictUncheckedUpdateInput>
  }

  /**
   * Conflict delete
   */
  export type ConflictDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conflict
     */
    select?: ConflictSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conflict
     */
    omit?: ConflictOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConflictInclude<ExtArgs> | null
    /**
     * Filter which Conflict to delete.
     */
    where: ConflictWhereUniqueInput
  }

  /**
   * Conflict deleteMany
   */
  export type ConflictDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Conflicts to delete
     */
    where?: ConflictWhereInput
    /**
     * Limit how many Conflicts to delete.
     */
    limit?: number
  }

  /**
   * Conflict.conflictShader
   */
  export type Conflict$conflictShaderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shader
     */
    select?: ShaderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shader
     */
    omit?: ShaderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShaderInclude<ExtArgs> | null
    where?: ShaderWhereInput
  }

  /**
   * Conflict.conflictMod
   */
  export type Conflict$conflictModArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mod
     */
    select?: ModSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mod
     */
    omit?: ModOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModInclude<ExtArgs> | null
    where?: ModWhereInput
  }

  /**
   * Conflict without action
   */
  export type ConflictDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conflict
     */
    select?: ConflictSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conflict
     */
    omit?: ConflictOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConflictInclude<ExtArgs> | null
  }


  /**
   * Model ModDependency
   */

  export type AggregateModDependency = {
    _count: ModDependencyCountAggregateOutputType | null
    _avg: ModDependencyAvgAggregateOutputType | null
    _sum: ModDependencySumAggregateOutputType | null
    _min: ModDependencyMinAggregateOutputType | null
    _max: ModDependencyMaxAggregateOutputType | null
  }

  export type ModDependencyAvgAggregateOutputType = {
    modId: number | null
    dependencyId: number | null
  }

  export type ModDependencySumAggregateOutputType = {
    modId: bigint | null
    dependencyId: bigint | null
  }

  export type ModDependencyMinAggregateOutputType = {
    modId: bigint | null
    dependencyId: bigint | null
  }

  export type ModDependencyMaxAggregateOutputType = {
    modId: bigint | null
    dependencyId: bigint | null
  }

  export type ModDependencyCountAggregateOutputType = {
    modId: number
    dependencyId: number
    _all: number
  }


  export type ModDependencyAvgAggregateInputType = {
    modId?: true
    dependencyId?: true
  }

  export type ModDependencySumAggregateInputType = {
    modId?: true
    dependencyId?: true
  }

  export type ModDependencyMinAggregateInputType = {
    modId?: true
    dependencyId?: true
  }

  export type ModDependencyMaxAggregateInputType = {
    modId?: true
    dependencyId?: true
  }

  export type ModDependencyCountAggregateInputType = {
    modId?: true
    dependencyId?: true
    _all?: true
  }

  export type ModDependencyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ModDependency to aggregate.
     */
    where?: ModDependencyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModDependencies to fetch.
     */
    orderBy?: ModDependencyOrderByWithRelationInput | ModDependencyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ModDependencyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModDependencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModDependencies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ModDependencies
    **/
    _count?: true | ModDependencyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ModDependencyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ModDependencySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ModDependencyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ModDependencyMaxAggregateInputType
  }

  export type GetModDependencyAggregateType<T extends ModDependencyAggregateArgs> = {
        [P in keyof T & keyof AggregateModDependency]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateModDependency[P]>
      : GetScalarType<T[P], AggregateModDependency[P]>
  }




  export type ModDependencyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModDependencyWhereInput
    orderBy?: ModDependencyOrderByWithAggregationInput | ModDependencyOrderByWithAggregationInput[]
    by: ModDependencyScalarFieldEnum[] | ModDependencyScalarFieldEnum
    having?: ModDependencyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ModDependencyCountAggregateInputType | true
    _avg?: ModDependencyAvgAggregateInputType
    _sum?: ModDependencySumAggregateInputType
    _min?: ModDependencyMinAggregateInputType
    _max?: ModDependencyMaxAggregateInputType
  }

  export type ModDependencyGroupByOutputType = {
    modId: bigint
    dependencyId: bigint
    _count: ModDependencyCountAggregateOutputType | null
    _avg: ModDependencyAvgAggregateOutputType | null
    _sum: ModDependencySumAggregateOutputType | null
    _min: ModDependencyMinAggregateOutputType | null
    _max: ModDependencyMaxAggregateOutputType | null
  }

  type GetModDependencyGroupByPayload<T extends ModDependencyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ModDependencyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ModDependencyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ModDependencyGroupByOutputType[P]>
            : GetScalarType<T[P], ModDependencyGroupByOutputType[P]>
        }
      >
    >


  export type ModDependencySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    modId?: boolean
    dependencyId?: boolean
    mod?: boolean | ModDefaultArgs<ExtArgs>
    dependency?: boolean | ModDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["modDependency"]>

  export type ModDependencySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    modId?: boolean
    dependencyId?: boolean
    mod?: boolean | ModDefaultArgs<ExtArgs>
    dependency?: boolean | ModDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["modDependency"]>

  export type ModDependencySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    modId?: boolean
    dependencyId?: boolean
    mod?: boolean | ModDefaultArgs<ExtArgs>
    dependency?: boolean | ModDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["modDependency"]>

  export type ModDependencySelectScalar = {
    modId?: boolean
    dependencyId?: boolean
  }

  export type ModDependencyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"modId" | "dependencyId", ExtArgs["result"]["modDependency"]>
  export type ModDependencyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mod?: boolean | ModDefaultArgs<ExtArgs>
    dependency?: boolean | ModDefaultArgs<ExtArgs>
  }
  export type ModDependencyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mod?: boolean | ModDefaultArgs<ExtArgs>
    dependency?: boolean | ModDefaultArgs<ExtArgs>
  }
  export type ModDependencyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mod?: boolean | ModDefaultArgs<ExtArgs>
    dependency?: boolean | ModDefaultArgs<ExtArgs>
  }

  export type $ModDependencyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ModDependency"
    objects: {
      mod: Prisma.$ModPayload<ExtArgs>
      dependency: Prisma.$ModPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      modId: bigint
      dependencyId: bigint
    }, ExtArgs["result"]["modDependency"]>
    composites: {}
  }

  type ModDependencyGetPayload<S extends boolean | null | undefined | ModDependencyDefaultArgs> = $Result.GetResult<Prisma.$ModDependencyPayload, S>

  type ModDependencyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ModDependencyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ModDependencyCountAggregateInputType | true
    }

  export interface ModDependencyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ModDependency'], meta: { name: 'ModDependency' } }
    /**
     * Find zero or one ModDependency that matches the filter.
     * @param {ModDependencyFindUniqueArgs} args - Arguments to find a ModDependency
     * @example
     * // Get one ModDependency
     * const modDependency = await prisma.modDependency.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ModDependencyFindUniqueArgs>(args: SelectSubset<T, ModDependencyFindUniqueArgs<ExtArgs>>): Prisma__ModDependencyClient<$Result.GetResult<Prisma.$ModDependencyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ModDependency that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ModDependencyFindUniqueOrThrowArgs} args - Arguments to find a ModDependency
     * @example
     * // Get one ModDependency
     * const modDependency = await prisma.modDependency.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ModDependencyFindUniqueOrThrowArgs>(args: SelectSubset<T, ModDependencyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ModDependencyClient<$Result.GetResult<Prisma.$ModDependencyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ModDependency that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModDependencyFindFirstArgs} args - Arguments to find a ModDependency
     * @example
     * // Get one ModDependency
     * const modDependency = await prisma.modDependency.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ModDependencyFindFirstArgs>(args?: SelectSubset<T, ModDependencyFindFirstArgs<ExtArgs>>): Prisma__ModDependencyClient<$Result.GetResult<Prisma.$ModDependencyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ModDependency that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModDependencyFindFirstOrThrowArgs} args - Arguments to find a ModDependency
     * @example
     * // Get one ModDependency
     * const modDependency = await prisma.modDependency.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ModDependencyFindFirstOrThrowArgs>(args?: SelectSubset<T, ModDependencyFindFirstOrThrowArgs<ExtArgs>>): Prisma__ModDependencyClient<$Result.GetResult<Prisma.$ModDependencyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ModDependencies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModDependencyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ModDependencies
     * const modDependencies = await prisma.modDependency.findMany()
     * 
     * // Get first 10 ModDependencies
     * const modDependencies = await prisma.modDependency.findMany({ take: 10 })
     * 
     * // Only select the `modId`
     * const modDependencyWithModIdOnly = await prisma.modDependency.findMany({ select: { modId: true } })
     * 
     */
    findMany<T extends ModDependencyFindManyArgs>(args?: SelectSubset<T, ModDependencyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModDependencyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ModDependency.
     * @param {ModDependencyCreateArgs} args - Arguments to create a ModDependency.
     * @example
     * // Create one ModDependency
     * const ModDependency = await prisma.modDependency.create({
     *   data: {
     *     // ... data to create a ModDependency
     *   }
     * })
     * 
     */
    create<T extends ModDependencyCreateArgs>(args: SelectSubset<T, ModDependencyCreateArgs<ExtArgs>>): Prisma__ModDependencyClient<$Result.GetResult<Prisma.$ModDependencyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ModDependencies.
     * @param {ModDependencyCreateManyArgs} args - Arguments to create many ModDependencies.
     * @example
     * // Create many ModDependencies
     * const modDependency = await prisma.modDependency.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ModDependencyCreateManyArgs>(args?: SelectSubset<T, ModDependencyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ModDependencies and returns the data saved in the database.
     * @param {ModDependencyCreateManyAndReturnArgs} args - Arguments to create many ModDependencies.
     * @example
     * // Create many ModDependencies
     * const modDependency = await prisma.modDependency.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ModDependencies and only return the `modId`
     * const modDependencyWithModIdOnly = await prisma.modDependency.createManyAndReturn({
     *   select: { modId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ModDependencyCreateManyAndReturnArgs>(args?: SelectSubset<T, ModDependencyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModDependencyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ModDependency.
     * @param {ModDependencyDeleteArgs} args - Arguments to delete one ModDependency.
     * @example
     * // Delete one ModDependency
     * const ModDependency = await prisma.modDependency.delete({
     *   where: {
     *     // ... filter to delete one ModDependency
     *   }
     * })
     * 
     */
    delete<T extends ModDependencyDeleteArgs>(args: SelectSubset<T, ModDependencyDeleteArgs<ExtArgs>>): Prisma__ModDependencyClient<$Result.GetResult<Prisma.$ModDependencyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ModDependency.
     * @param {ModDependencyUpdateArgs} args - Arguments to update one ModDependency.
     * @example
     * // Update one ModDependency
     * const modDependency = await prisma.modDependency.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ModDependencyUpdateArgs>(args: SelectSubset<T, ModDependencyUpdateArgs<ExtArgs>>): Prisma__ModDependencyClient<$Result.GetResult<Prisma.$ModDependencyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ModDependencies.
     * @param {ModDependencyDeleteManyArgs} args - Arguments to filter ModDependencies to delete.
     * @example
     * // Delete a few ModDependencies
     * const { count } = await prisma.modDependency.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ModDependencyDeleteManyArgs>(args?: SelectSubset<T, ModDependencyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ModDependencies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModDependencyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ModDependencies
     * const modDependency = await prisma.modDependency.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ModDependencyUpdateManyArgs>(args: SelectSubset<T, ModDependencyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ModDependencies and returns the data updated in the database.
     * @param {ModDependencyUpdateManyAndReturnArgs} args - Arguments to update many ModDependencies.
     * @example
     * // Update many ModDependencies
     * const modDependency = await prisma.modDependency.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ModDependencies and only return the `modId`
     * const modDependencyWithModIdOnly = await prisma.modDependency.updateManyAndReturn({
     *   select: { modId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ModDependencyUpdateManyAndReturnArgs>(args: SelectSubset<T, ModDependencyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModDependencyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ModDependency.
     * @param {ModDependencyUpsertArgs} args - Arguments to update or create a ModDependency.
     * @example
     * // Update or create a ModDependency
     * const modDependency = await prisma.modDependency.upsert({
     *   create: {
     *     // ... data to create a ModDependency
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ModDependency we want to update
     *   }
     * })
     */
    upsert<T extends ModDependencyUpsertArgs>(args: SelectSubset<T, ModDependencyUpsertArgs<ExtArgs>>): Prisma__ModDependencyClient<$Result.GetResult<Prisma.$ModDependencyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ModDependencies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModDependencyCountArgs} args - Arguments to filter ModDependencies to count.
     * @example
     * // Count the number of ModDependencies
     * const count = await prisma.modDependency.count({
     *   where: {
     *     // ... the filter for the ModDependencies we want to count
     *   }
     * })
    **/
    count<T extends ModDependencyCountArgs>(
      args?: Subset<T, ModDependencyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ModDependencyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ModDependency.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModDependencyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ModDependencyAggregateArgs>(args: Subset<T, ModDependencyAggregateArgs>): Prisma.PrismaPromise<GetModDependencyAggregateType<T>>

    /**
     * Group by ModDependency.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModDependencyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ModDependencyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ModDependencyGroupByArgs['orderBy'] }
        : { orderBy?: ModDependencyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ModDependencyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetModDependencyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ModDependency model
   */
  readonly fields: ModDependencyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ModDependency.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ModDependencyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mod<T extends ModDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ModDefaultArgs<ExtArgs>>): Prisma__ModClient<$Result.GetResult<Prisma.$ModPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    dependency<T extends ModDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ModDefaultArgs<ExtArgs>>): Prisma__ModClient<$Result.GetResult<Prisma.$ModPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ModDependency model
   */
  interface ModDependencyFieldRefs {
    readonly modId: FieldRef<"ModDependency", 'BigInt'>
    readonly dependencyId: FieldRef<"ModDependency", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * ModDependency findUnique
   */
  export type ModDependencyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModDependency
     */
    select?: ModDependencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModDependency
     */
    omit?: ModDependencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModDependencyInclude<ExtArgs> | null
    /**
     * Filter, which ModDependency to fetch.
     */
    where: ModDependencyWhereUniqueInput
  }

  /**
   * ModDependency findUniqueOrThrow
   */
  export type ModDependencyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModDependency
     */
    select?: ModDependencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModDependency
     */
    omit?: ModDependencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModDependencyInclude<ExtArgs> | null
    /**
     * Filter, which ModDependency to fetch.
     */
    where: ModDependencyWhereUniqueInput
  }

  /**
   * ModDependency findFirst
   */
  export type ModDependencyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModDependency
     */
    select?: ModDependencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModDependency
     */
    omit?: ModDependencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModDependencyInclude<ExtArgs> | null
    /**
     * Filter, which ModDependency to fetch.
     */
    where?: ModDependencyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModDependencies to fetch.
     */
    orderBy?: ModDependencyOrderByWithRelationInput | ModDependencyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ModDependencies.
     */
    cursor?: ModDependencyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModDependencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModDependencies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ModDependencies.
     */
    distinct?: ModDependencyScalarFieldEnum | ModDependencyScalarFieldEnum[]
  }

  /**
   * ModDependency findFirstOrThrow
   */
  export type ModDependencyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModDependency
     */
    select?: ModDependencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModDependency
     */
    omit?: ModDependencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModDependencyInclude<ExtArgs> | null
    /**
     * Filter, which ModDependency to fetch.
     */
    where?: ModDependencyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModDependencies to fetch.
     */
    orderBy?: ModDependencyOrderByWithRelationInput | ModDependencyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ModDependencies.
     */
    cursor?: ModDependencyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModDependencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModDependencies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ModDependencies.
     */
    distinct?: ModDependencyScalarFieldEnum | ModDependencyScalarFieldEnum[]
  }

  /**
   * ModDependency findMany
   */
  export type ModDependencyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModDependency
     */
    select?: ModDependencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModDependency
     */
    omit?: ModDependencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModDependencyInclude<ExtArgs> | null
    /**
     * Filter, which ModDependencies to fetch.
     */
    where?: ModDependencyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModDependencies to fetch.
     */
    orderBy?: ModDependencyOrderByWithRelationInput | ModDependencyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ModDependencies.
     */
    cursor?: ModDependencyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModDependencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModDependencies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ModDependencies.
     */
    distinct?: ModDependencyScalarFieldEnum | ModDependencyScalarFieldEnum[]
  }

  /**
   * ModDependency create
   */
  export type ModDependencyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModDependency
     */
    select?: ModDependencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModDependency
     */
    omit?: ModDependencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModDependencyInclude<ExtArgs> | null
    /**
     * The data needed to create a ModDependency.
     */
    data: XOR<ModDependencyCreateInput, ModDependencyUncheckedCreateInput>
  }

  /**
   * ModDependency createMany
   */
  export type ModDependencyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ModDependencies.
     */
    data: ModDependencyCreateManyInput | ModDependencyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ModDependency createManyAndReturn
   */
  export type ModDependencyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModDependency
     */
    select?: ModDependencySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ModDependency
     */
    omit?: ModDependencyOmit<ExtArgs> | null
    /**
     * The data used to create many ModDependencies.
     */
    data: ModDependencyCreateManyInput | ModDependencyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModDependencyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ModDependency update
   */
  export type ModDependencyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModDependency
     */
    select?: ModDependencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModDependency
     */
    omit?: ModDependencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModDependencyInclude<ExtArgs> | null
    /**
     * The data needed to update a ModDependency.
     */
    data: XOR<ModDependencyUpdateInput, ModDependencyUncheckedUpdateInput>
    /**
     * Choose, which ModDependency to update.
     */
    where: ModDependencyWhereUniqueInput
  }

  /**
   * ModDependency updateMany
   */
  export type ModDependencyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ModDependencies.
     */
    data: XOR<ModDependencyUpdateManyMutationInput, ModDependencyUncheckedUpdateManyInput>
    /**
     * Filter which ModDependencies to update
     */
    where?: ModDependencyWhereInput
    /**
     * Limit how many ModDependencies to update.
     */
    limit?: number
  }

  /**
   * ModDependency updateManyAndReturn
   */
  export type ModDependencyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModDependency
     */
    select?: ModDependencySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ModDependency
     */
    omit?: ModDependencyOmit<ExtArgs> | null
    /**
     * The data used to update ModDependencies.
     */
    data: XOR<ModDependencyUpdateManyMutationInput, ModDependencyUncheckedUpdateManyInput>
    /**
     * Filter which ModDependencies to update
     */
    where?: ModDependencyWhereInput
    /**
     * Limit how many ModDependencies to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModDependencyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ModDependency upsert
   */
  export type ModDependencyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModDependency
     */
    select?: ModDependencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModDependency
     */
    omit?: ModDependencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModDependencyInclude<ExtArgs> | null
    /**
     * The filter to search for the ModDependency to update in case it exists.
     */
    where: ModDependencyWhereUniqueInput
    /**
     * In case the ModDependency found by the `where` argument doesn't exist, create a new ModDependency with this data.
     */
    create: XOR<ModDependencyCreateInput, ModDependencyUncheckedCreateInput>
    /**
     * In case the ModDependency was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ModDependencyUpdateInput, ModDependencyUncheckedUpdateInput>
  }

  /**
   * ModDependency delete
   */
  export type ModDependencyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModDependency
     */
    select?: ModDependencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModDependency
     */
    omit?: ModDependencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModDependencyInclude<ExtArgs> | null
    /**
     * Filter which ModDependency to delete.
     */
    where: ModDependencyWhereUniqueInput
  }

  /**
   * ModDependency deleteMany
   */
  export type ModDependencyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ModDependencies to delete
     */
    where?: ModDependencyWhereInput
    /**
     * Limit how many ModDependencies to delete.
     */
    limit?: number
  }

  /**
   * ModDependency without action
   */
  export type ModDependencyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModDependency
     */
    select?: ModDependencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModDependency
     */
    omit?: ModDependencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModDependencyInclude<ExtArgs> | null
  }


  /**
   * Model ShaderDependecy
   */

  export type AggregateShaderDependecy = {
    _count: ShaderDependecyCountAggregateOutputType | null
    _avg: ShaderDependecyAvgAggregateOutputType | null
    _sum: ShaderDependecySumAggregateOutputType | null
    _min: ShaderDependecyMinAggregateOutputType | null
    _max: ShaderDependecyMaxAggregateOutputType | null
  }

  export type ShaderDependecyAvgAggregateOutputType = {
    shaderId: number | null
    modId: number | null
  }

  export type ShaderDependecySumAggregateOutputType = {
    shaderId: bigint | null
    modId: bigint | null
  }

  export type ShaderDependecyMinAggregateOutputType = {
    shaderId: bigint | null
    modId: bigint | null
  }

  export type ShaderDependecyMaxAggregateOutputType = {
    shaderId: bigint | null
    modId: bigint | null
  }

  export type ShaderDependecyCountAggregateOutputType = {
    shaderId: number
    modId: number
    _all: number
  }


  export type ShaderDependecyAvgAggregateInputType = {
    shaderId?: true
    modId?: true
  }

  export type ShaderDependecySumAggregateInputType = {
    shaderId?: true
    modId?: true
  }

  export type ShaderDependecyMinAggregateInputType = {
    shaderId?: true
    modId?: true
  }

  export type ShaderDependecyMaxAggregateInputType = {
    shaderId?: true
    modId?: true
  }

  export type ShaderDependecyCountAggregateInputType = {
    shaderId?: true
    modId?: true
    _all?: true
  }

  export type ShaderDependecyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShaderDependecy to aggregate.
     */
    where?: ShaderDependecyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShaderDependecies to fetch.
     */
    orderBy?: ShaderDependecyOrderByWithRelationInput | ShaderDependecyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShaderDependecyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShaderDependecies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShaderDependecies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ShaderDependecies
    **/
    _count?: true | ShaderDependecyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ShaderDependecyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ShaderDependecySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShaderDependecyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShaderDependecyMaxAggregateInputType
  }

  export type GetShaderDependecyAggregateType<T extends ShaderDependecyAggregateArgs> = {
        [P in keyof T & keyof AggregateShaderDependecy]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShaderDependecy[P]>
      : GetScalarType<T[P], AggregateShaderDependecy[P]>
  }




  export type ShaderDependecyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShaderDependecyWhereInput
    orderBy?: ShaderDependecyOrderByWithAggregationInput | ShaderDependecyOrderByWithAggregationInput[]
    by: ShaderDependecyScalarFieldEnum[] | ShaderDependecyScalarFieldEnum
    having?: ShaderDependecyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShaderDependecyCountAggregateInputType | true
    _avg?: ShaderDependecyAvgAggregateInputType
    _sum?: ShaderDependecySumAggregateInputType
    _min?: ShaderDependecyMinAggregateInputType
    _max?: ShaderDependecyMaxAggregateInputType
  }

  export type ShaderDependecyGroupByOutputType = {
    shaderId: bigint
    modId: bigint
    _count: ShaderDependecyCountAggregateOutputType | null
    _avg: ShaderDependecyAvgAggregateOutputType | null
    _sum: ShaderDependecySumAggregateOutputType | null
    _min: ShaderDependecyMinAggregateOutputType | null
    _max: ShaderDependecyMaxAggregateOutputType | null
  }

  type GetShaderDependecyGroupByPayload<T extends ShaderDependecyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShaderDependecyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShaderDependecyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShaderDependecyGroupByOutputType[P]>
            : GetScalarType<T[P], ShaderDependecyGroupByOutputType[P]>
        }
      >
    >


  export type ShaderDependecySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    shaderId?: boolean
    modId?: boolean
    shader?: boolean | ShaderDefaultArgs<ExtArgs>
    mod?: boolean | ModDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shaderDependecy"]>

  export type ShaderDependecySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    shaderId?: boolean
    modId?: boolean
    shader?: boolean | ShaderDefaultArgs<ExtArgs>
    mod?: boolean | ModDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shaderDependecy"]>

  export type ShaderDependecySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    shaderId?: boolean
    modId?: boolean
    shader?: boolean | ShaderDefaultArgs<ExtArgs>
    mod?: boolean | ModDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shaderDependecy"]>

  export type ShaderDependecySelectScalar = {
    shaderId?: boolean
    modId?: boolean
  }

  export type ShaderDependecyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"shaderId" | "modId", ExtArgs["result"]["shaderDependecy"]>
  export type ShaderDependecyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shader?: boolean | ShaderDefaultArgs<ExtArgs>
    mod?: boolean | ModDefaultArgs<ExtArgs>
  }
  export type ShaderDependecyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shader?: boolean | ShaderDefaultArgs<ExtArgs>
    mod?: boolean | ModDefaultArgs<ExtArgs>
  }
  export type ShaderDependecyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shader?: boolean | ShaderDefaultArgs<ExtArgs>
    mod?: boolean | ModDefaultArgs<ExtArgs>
  }

  export type $ShaderDependecyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ShaderDependecy"
    objects: {
      shader: Prisma.$ShaderPayload<ExtArgs>
      mod: Prisma.$ModPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      shaderId: bigint
      modId: bigint
    }, ExtArgs["result"]["shaderDependecy"]>
    composites: {}
  }

  type ShaderDependecyGetPayload<S extends boolean | null | undefined | ShaderDependecyDefaultArgs> = $Result.GetResult<Prisma.$ShaderDependecyPayload, S>

  type ShaderDependecyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ShaderDependecyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShaderDependecyCountAggregateInputType | true
    }

  export interface ShaderDependecyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ShaderDependecy'], meta: { name: 'ShaderDependecy' } }
    /**
     * Find zero or one ShaderDependecy that matches the filter.
     * @param {ShaderDependecyFindUniqueArgs} args - Arguments to find a ShaderDependecy
     * @example
     * // Get one ShaderDependecy
     * const shaderDependecy = await prisma.shaderDependecy.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShaderDependecyFindUniqueArgs>(args: SelectSubset<T, ShaderDependecyFindUniqueArgs<ExtArgs>>): Prisma__ShaderDependecyClient<$Result.GetResult<Prisma.$ShaderDependecyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ShaderDependecy that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShaderDependecyFindUniqueOrThrowArgs} args - Arguments to find a ShaderDependecy
     * @example
     * // Get one ShaderDependecy
     * const shaderDependecy = await prisma.shaderDependecy.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShaderDependecyFindUniqueOrThrowArgs>(args: SelectSubset<T, ShaderDependecyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShaderDependecyClient<$Result.GetResult<Prisma.$ShaderDependecyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShaderDependecy that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShaderDependecyFindFirstArgs} args - Arguments to find a ShaderDependecy
     * @example
     * // Get one ShaderDependecy
     * const shaderDependecy = await prisma.shaderDependecy.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShaderDependecyFindFirstArgs>(args?: SelectSubset<T, ShaderDependecyFindFirstArgs<ExtArgs>>): Prisma__ShaderDependecyClient<$Result.GetResult<Prisma.$ShaderDependecyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShaderDependecy that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShaderDependecyFindFirstOrThrowArgs} args - Arguments to find a ShaderDependecy
     * @example
     * // Get one ShaderDependecy
     * const shaderDependecy = await prisma.shaderDependecy.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShaderDependecyFindFirstOrThrowArgs>(args?: SelectSubset<T, ShaderDependecyFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShaderDependecyClient<$Result.GetResult<Prisma.$ShaderDependecyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ShaderDependecies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShaderDependecyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ShaderDependecies
     * const shaderDependecies = await prisma.shaderDependecy.findMany()
     * 
     * // Get first 10 ShaderDependecies
     * const shaderDependecies = await prisma.shaderDependecy.findMany({ take: 10 })
     * 
     * // Only select the `shaderId`
     * const shaderDependecyWithShaderIdOnly = await prisma.shaderDependecy.findMany({ select: { shaderId: true } })
     * 
     */
    findMany<T extends ShaderDependecyFindManyArgs>(args?: SelectSubset<T, ShaderDependecyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShaderDependecyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ShaderDependecy.
     * @param {ShaderDependecyCreateArgs} args - Arguments to create a ShaderDependecy.
     * @example
     * // Create one ShaderDependecy
     * const ShaderDependecy = await prisma.shaderDependecy.create({
     *   data: {
     *     // ... data to create a ShaderDependecy
     *   }
     * })
     * 
     */
    create<T extends ShaderDependecyCreateArgs>(args: SelectSubset<T, ShaderDependecyCreateArgs<ExtArgs>>): Prisma__ShaderDependecyClient<$Result.GetResult<Prisma.$ShaderDependecyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ShaderDependecies.
     * @param {ShaderDependecyCreateManyArgs} args - Arguments to create many ShaderDependecies.
     * @example
     * // Create many ShaderDependecies
     * const shaderDependecy = await prisma.shaderDependecy.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShaderDependecyCreateManyArgs>(args?: SelectSubset<T, ShaderDependecyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ShaderDependecies and returns the data saved in the database.
     * @param {ShaderDependecyCreateManyAndReturnArgs} args - Arguments to create many ShaderDependecies.
     * @example
     * // Create many ShaderDependecies
     * const shaderDependecy = await prisma.shaderDependecy.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ShaderDependecies and only return the `shaderId`
     * const shaderDependecyWithShaderIdOnly = await prisma.shaderDependecy.createManyAndReturn({
     *   select: { shaderId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ShaderDependecyCreateManyAndReturnArgs>(args?: SelectSubset<T, ShaderDependecyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShaderDependecyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ShaderDependecy.
     * @param {ShaderDependecyDeleteArgs} args - Arguments to delete one ShaderDependecy.
     * @example
     * // Delete one ShaderDependecy
     * const ShaderDependecy = await prisma.shaderDependecy.delete({
     *   where: {
     *     // ... filter to delete one ShaderDependecy
     *   }
     * })
     * 
     */
    delete<T extends ShaderDependecyDeleteArgs>(args: SelectSubset<T, ShaderDependecyDeleteArgs<ExtArgs>>): Prisma__ShaderDependecyClient<$Result.GetResult<Prisma.$ShaderDependecyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ShaderDependecy.
     * @param {ShaderDependecyUpdateArgs} args - Arguments to update one ShaderDependecy.
     * @example
     * // Update one ShaderDependecy
     * const shaderDependecy = await prisma.shaderDependecy.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShaderDependecyUpdateArgs>(args: SelectSubset<T, ShaderDependecyUpdateArgs<ExtArgs>>): Prisma__ShaderDependecyClient<$Result.GetResult<Prisma.$ShaderDependecyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ShaderDependecies.
     * @param {ShaderDependecyDeleteManyArgs} args - Arguments to filter ShaderDependecies to delete.
     * @example
     * // Delete a few ShaderDependecies
     * const { count } = await prisma.shaderDependecy.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShaderDependecyDeleteManyArgs>(args?: SelectSubset<T, ShaderDependecyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShaderDependecies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShaderDependecyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ShaderDependecies
     * const shaderDependecy = await prisma.shaderDependecy.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShaderDependecyUpdateManyArgs>(args: SelectSubset<T, ShaderDependecyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShaderDependecies and returns the data updated in the database.
     * @param {ShaderDependecyUpdateManyAndReturnArgs} args - Arguments to update many ShaderDependecies.
     * @example
     * // Update many ShaderDependecies
     * const shaderDependecy = await prisma.shaderDependecy.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ShaderDependecies and only return the `shaderId`
     * const shaderDependecyWithShaderIdOnly = await prisma.shaderDependecy.updateManyAndReturn({
     *   select: { shaderId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ShaderDependecyUpdateManyAndReturnArgs>(args: SelectSubset<T, ShaderDependecyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShaderDependecyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ShaderDependecy.
     * @param {ShaderDependecyUpsertArgs} args - Arguments to update or create a ShaderDependecy.
     * @example
     * // Update or create a ShaderDependecy
     * const shaderDependecy = await prisma.shaderDependecy.upsert({
     *   create: {
     *     // ... data to create a ShaderDependecy
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ShaderDependecy we want to update
     *   }
     * })
     */
    upsert<T extends ShaderDependecyUpsertArgs>(args: SelectSubset<T, ShaderDependecyUpsertArgs<ExtArgs>>): Prisma__ShaderDependecyClient<$Result.GetResult<Prisma.$ShaderDependecyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ShaderDependecies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShaderDependecyCountArgs} args - Arguments to filter ShaderDependecies to count.
     * @example
     * // Count the number of ShaderDependecies
     * const count = await prisma.shaderDependecy.count({
     *   where: {
     *     // ... the filter for the ShaderDependecies we want to count
     *   }
     * })
    **/
    count<T extends ShaderDependecyCountArgs>(
      args?: Subset<T, ShaderDependecyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShaderDependecyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ShaderDependecy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShaderDependecyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ShaderDependecyAggregateArgs>(args: Subset<T, ShaderDependecyAggregateArgs>): Prisma.PrismaPromise<GetShaderDependecyAggregateType<T>>

    /**
     * Group by ShaderDependecy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShaderDependecyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ShaderDependecyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShaderDependecyGroupByArgs['orderBy'] }
        : { orderBy?: ShaderDependecyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ShaderDependecyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShaderDependecyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ShaderDependecy model
   */
  readonly fields: ShaderDependecyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ShaderDependecy.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShaderDependecyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    shader<T extends ShaderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShaderDefaultArgs<ExtArgs>>): Prisma__ShaderClient<$Result.GetResult<Prisma.$ShaderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    mod<T extends ModDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ModDefaultArgs<ExtArgs>>): Prisma__ModClient<$Result.GetResult<Prisma.$ModPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ShaderDependecy model
   */
  interface ShaderDependecyFieldRefs {
    readonly shaderId: FieldRef<"ShaderDependecy", 'BigInt'>
    readonly modId: FieldRef<"ShaderDependecy", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * ShaderDependecy findUnique
   */
  export type ShaderDependecyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShaderDependecy
     */
    select?: ShaderDependecySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShaderDependecy
     */
    omit?: ShaderDependecyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShaderDependecyInclude<ExtArgs> | null
    /**
     * Filter, which ShaderDependecy to fetch.
     */
    where: ShaderDependecyWhereUniqueInput
  }

  /**
   * ShaderDependecy findUniqueOrThrow
   */
  export type ShaderDependecyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShaderDependecy
     */
    select?: ShaderDependecySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShaderDependecy
     */
    omit?: ShaderDependecyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShaderDependecyInclude<ExtArgs> | null
    /**
     * Filter, which ShaderDependecy to fetch.
     */
    where: ShaderDependecyWhereUniqueInput
  }

  /**
   * ShaderDependecy findFirst
   */
  export type ShaderDependecyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShaderDependecy
     */
    select?: ShaderDependecySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShaderDependecy
     */
    omit?: ShaderDependecyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShaderDependecyInclude<ExtArgs> | null
    /**
     * Filter, which ShaderDependecy to fetch.
     */
    where?: ShaderDependecyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShaderDependecies to fetch.
     */
    orderBy?: ShaderDependecyOrderByWithRelationInput | ShaderDependecyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShaderDependecies.
     */
    cursor?: ShaderDependecyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShaderDependecies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShaderDependecies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShaderDependecies.
     */
    distinct?: ShaderDependecyScalarFieldEnum | ShaderDependecyScalarFieldEnum[]
  }

  /**
   * ShaderDependecy findFirstOrThrow
   */
  export type ShaderDependecyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShaderDependecy
     */
    select?: ShaderDependecySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShaderDependecy
     */
    omit?: ShaderDependecyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShaderDependecyInclude<ExtArgs> | null
    /**
     * Filter, which ShaderDependecy to fetch.
     */
    where?: ShaderDependecyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShaderDependecies to fetch.
     */
    orderBy?: ShaderDependecyOrderByWithRelationInput | ShaderDependecyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShaderDependecies.
     */
    cursor?: ShaderDependecyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShaderDependecies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShaderDependecies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShaderDependecies.
     */
    distinct?: ShaderDependecyScalarFieldEnum | ShaderDependecyScalarFieldEnum[]
  }

  /**
   * ShaderDependecy findMany
   */
  export type ShaderDependecyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShaderDependecy
     */
    select?: ShaderDependecySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShaderDependecy
     */
    omit?: ShaderDependecyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShaderDependecyInclude<ExtArgs> | null
    /**
     * Filter, which ShaderDependecies to fetch.
     */
    where?: ShaderDependecyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShaderDependecies to fetch.
     */
    orderBy?: ShaderDependecyOrderByWithRelationInput | ShaderDependecyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ShaderDependecies.
     */
    cursor?: ShaderDependecyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShaderDependecies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShaderDependecies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShaderDependecies.
     */
    distinct?: ShaderDependecyScalarFieldEnum | ShaderDependecyScalarFieldEnum[]
  }

  /**
   * ShaderDependecy create
   */
  export type ShaderDependecyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShaderDependecy
     */
    select?: ShaderDependecySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShaderDependecy
     */
    omit?: ShaderDependecyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShaderDependecyInclude<ExtArgs> | null
    /**
     * The data needed to create a ShaderDependecy.
     */
    data: XOR<ShaderDependecyCreateInput, ShaderDependecyUncheckedCreateInput>
  }

  /**
   * ShaderDependecy createMany
   */
  export type ShaderDependecyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ShaderDependecies.
     */
    data: ShaderDependecyCreateManyInput | ShaderDependecyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ShaderDependecy createManyAndReturn
   */
  export type ShaderDependecyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShaderDependecy
     */
    select?: ShaderDependecySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ShaderDependecy
     */
    omit?: ShaderDependecyOmit<ExtArgs> | null
    /**
     * The data used to create many ShaderDependecies.
     */
    data: ShaderDependecyCreateManyInput | ShaderDependecyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShaderDependecyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ShaderDependecy update
   */
  export type ShaderDependecyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShaderDependecy
     */
    select?: ShaderDependecySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShaderDependecy
     */
    omit?: ShaderDependecyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShaderDependecyInclude<ExtArgs> | null
    /**
     * The data needed to update a ShaderDependecy.
     */
    data: XOR<ShaderDependecyUpdateInput, ShaderDependecyUncheckedUpdateInput>
    /**
     * Choose, which ShaderDependecy to update.
     */
    where: ShaderDependecyWhereUniqueInput
  }

  /**
   * ShaderDependecy updateMany
   */
  export type ShaderDependecyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ShaderDependecies.
     */
    data: XOR<ShaderDependecyUpdateManyMutationInput, ShaderDependecyUncheckedUpdateManyInput>
    /**
     * Filter which ShaderDependecies to update
     */
    where?: ShaderDependecyWhereInput
    /**
     * Limit how many ShaderDependecies to update.
     */
    limit?: number
  }

  /**
   * ShaderDependecy updateManyAndReturn
   */
  export type ShaderDependecyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShaderDependecy
     */
    select?: ShaderDependecySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ShaderDependecy
     */
    omit?: ShaderDependecyOmit<ExtArgs> | null
    /**
     * The data used to update ShaderDependecies.
     */
    data: XOR<ShaderDependecyUpdateManyMutationInput, ShaderDependecyUncheckedUpdateManyInput>
    /**
     * Filter which ShaderDependecies to update
     */
    where?: ShaderDependecyWhereInput
    /**
     * Limit how many ShaderDependecies to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShaderDependecyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ShaderDependecy upsert
   */
  export type ShaderDependecyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShaderDependecy
     */
    select?: ShaderDependecySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShaderDependecy
     */
    omit?: ShaderDependecyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShaderDependecyInclude<ExtArgs> | null
    /**
     * The filter to search for the ShaderDependecy to update in case it exists.
     */
    where: ShaderDependecyWhereUniqueInput
    /**
     * In case the ShaderDependecy found by the `where` argument doesn't exist, create a new ShaderDependecy with this data.
     */
    create: XOR<ShaderDependecyCreateInput, ShaderDependecyUncheckedCreateInput>
    /**
     * In case the ShaderDependecy was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShaderDependecyUpdateInput, ShaderDependecyUncheckedUpdateInput>
  }

  /**
   * ShaderDependecy delete
   */
  export type ShaderDependecyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShaderDependecy
     */
    select?: ShaderDependecySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShaderDependecy
     */
    omit?: ShaderDependecyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShaderDependecyInclude<ExtArgs> | null
    /**
     * Filter which ShaderDependecy to delete.
     */
    where: ShaderDependecyWhereUniqueInput
  }

  /**
   * ShaderDependecy deleteMany
   */
  export type ShaderDependecyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShaderDependecies to delete
     */
    where?: ShaderDependecyWhereInput
    /**
     * Limit how many ShaderDependecies to delete.
     */
    limit?: number
  }

  /**
   * ShaderDependecy without action
   */
  export type ShaderDependecyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShaderDependecy
     */
    select?: ShaderDependecySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShaderDependecy
     */
    omit?: ShaderDependecyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShaderDependecyInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    nickname: 'nickname',
    password: 'password',
    recovery_key: 'recovery_key',
    is_admin: 'is_admin',
    imageId: 'imageId'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PackScalarFieldEnum: {
    id: 'id',
    max_version: 'max_version',
    min_version: 'min_version',
    versionType: 'versionType',
    name: 'name',
    description: 'description',
    authorId: 'authorId',
    principalImageId: 'principalImageId'
  };

  export type PackScalarFieldEnum = (typeof PackScalarFieldEnum)[keyof typeof PackScalarFieldEnum]


  export const ShaderScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    weight: 'weight',
    src: 'src',
    authorId: 'authorId',
    versionType: 'versionType',
    principalImageId: 'principalImageId'
  };

  export type ShaderScalarFieldEnum = (typeof ShaderScalarFieldEnum)[keyof typeof ShaderScalarFieldEnum]


  export const ModScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    min_version: 'min_version',
    max_version: 'max_version',
    src: 'src',
    weight: 'weight',
    authorId: 'authorId',
    versionType: 'versionType',
    principalImageId: 'principalImageId'
  };

  export type ModScalarFieldEnum = (typeof ModScalarFieldEnum)[keyof typeof ModScalarFieldEnum]


  export const CommentScalarFieldEnum: {
    id: 'id',
    text: 'text',
    authorId: 'authorId',
    packId: 'packId',
    shaderId: 'shaderId',
    modId: 'modId'
  };

  export type CommentScalarFieldEnum = (typeof CommentScalarFieldEnum)[keyof typeof CommentScalarFieldEnum]


  export const ImageScalarFieldEnum: {
    id: 'id',
    src: 'src',
    basePath: 'basePath',
    modId: 'modId',
    shaderId: 'shaderId',
    packId: 'packId'
  };

  export type ImageScalarFieldEnum = (typeof ImageScalarFieldEnum)[keyof typeof ImageScalarFieldEnum]


  export const ConflictScalarFieldEnum: {
    id: 'id',
    conflictshaderId: 'conflictshaderId',
    modId: 'modId',
    conflictModId: 'conflictModId'
  };

  export type ConflictScalarFieldEnum = (typeof ConflictScalarFieldEnum)[keyof typeof ConflictScalarFieldEnum]


  export const ModDependencyScalarFieldEnum: {
    modId: 'modId',
    dependencyId: 'dependencyId'
  };

  export type ModDependencyScalarFieldEnum = (typeof ModDependencyScalarFieldEnum)[keyof typeof ModDependencyScalarFieldEnum]


  export const ShaderDependecyScalarFieldEnum: {
    shaderId: 'shaderId',
    modId: 'modId'
  };

  export type ShaderDependecyScalarFieldEnum = (typeof ShaderDependecyScalarFieldEnum)[keyof typeof ShaderDependecyScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const UserOrderByRelevanceFieldEnum: {
    email: 'email',
    nickname: 'nickname',
    password: 'password',
    recovery_key: 'recovery_key'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const PackOrderByRelevanceFieldEnum: {
    name: 'name',
    description: 'description'
  };

  export type PackOrderByRelevanceFieldEnum = (typeof PackOrderByRelevanceFieldEnum)[keyof typeof PackOrderByRelevanceFieldEnum]


  export const ShaderOrderByRelevanceFieldEnum: {
    name: 'name',
    description: 'description',
    src: 'src'
  };

  export type ShaderOrderByRelevanceFieldEnum = (typeof ShaderOrderByRelevanceFieldEnum)[keyof typeof ShaderOrderByRelevanceFieldEnum]


  export const ModOrderByRelevanceFieldEnum: {
    name: 'name',
    description: 'description',
    src: 'src'
  };

  export type ModOrderByRelevanceFieldEnum = (typeof ModOrderByRelevanceFieldEnum)[keyof typeof ModOrderByRelevanceFieldEnum]


  export const CommentOrderByRelevanceFieldEnum: {
    text: 'text'
  };

  export type CommentOrderByRelevanceFieldEnum = (typeof CommentOrderByRelevanceFieldEnum)[keyof typeof CommentOrderByRelevanceFieldEnum]


  export const ImageOrderByRelevanceFieldEnum: {
    src: 'src',
    basePath: 'basePath'
  };

  export type ImageOrderByRelevanceFieldEnum = (typeof ImageOrderByRelevanceFieldEnum)[keyof typeof ImageOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'VersionType'
   */
  export type EnumVersionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VersionType'>
    


  /**
   * Reference to a field of type 'VersionType[]'
   */
  export type ListEnumVersionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VersionType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: BigIntFilter<"User"> | bigint | number
    email?: StringFilter<"User"> | string
    nickname?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    recovery_key?: StringNullableFilter<"User"> | string | null
    is_admin?: BoolFilter<"User"> | boolean
    imageId?: BigIntNullableFilter<"User"> | bigint | number | null
    packs?: PackListRelationFilter
    shaders?: ShaderListRelationFilter
    mods?: ModListRelationFilter
    comments?: CommentListRelationFilter
    image?: XOR<ImageNullableScalarRelationFilter, ImageWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    nickname?: SortOrder
    password?: SortOrder
    recovery_key?: SortOrderInput | SortOrder
    is_admin?: SortOrder
    imageId?: SortOrderInput | SortOrder
    packs?: PackOrderByRelationAggregateInput
    shaders?: ShaderOrderByRelationAggregateInput
    mods?: ModOrderByRelationAggregateInput
    comments?: CommentOrderByRelationAggregateInput
    image?: ImageOrderByWithRelationInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    nickname?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    recovery_key?: StringNullableFilter<"User"> | string | null
    is_admin?: BoolFilter<"User"> | boolean
    imageId?: BigIntNullableFilter<"User"> | bigint | number | null
    packs?: PackListRelationFilter
    shaders?: ShaderListRelationFilter
    mods?: ModListRelationFilter
    comments?: CommentListRelationFilter
    image?: XOR<ImageNullableScalarRelationFilter, ImageWhereInput> | null
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    nickname?: SortOrder
    password?: SortOrder
    recovery_key?: SortOrderInput | SortOrder
    is_admin?: SortOrder
    imageId?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"User"> | bigint | number
    email?: StringWithAggregatesFilter<"User"> | string
    nickname?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    recovery_key?: StringNullableWithAggregatesFilter<"User"> | string | null
    is_admin?: BoolWithAggregatesFilter<"User"> | boolean
    imageId?: BigIntNullableWithAggregatesFilter<"User"> | bigint | number | null
  }

  export type PackWhereInput = {
    AND?: PackWhereInput | PackWhereInput[]
    OR?: PackWhereInput[]
    NOT?: PackWhereInput | PackWhereInput[]
    id?: BigIntFilter<"Pack"> | bigint | number
    max_version?: IntFilter<"Pack"> | number
    min_version?: IntFilter<"Pack"> | number
    versionType?: EnumVersionTypeFilter<"Pack"> | $Enums.VersionType
    name?: StringFilter<"Pack"> | string
    description?: StringNullableFilter<"Pack"> | string | null
    authorId?: BigIntFilter<"Pack"> | bigint | number
    principalImageId?: BigIntNullableFilter<"Pack"> | bigint | number | null
    shaders?: ShaderListRelationFilter
    mods?: ModListRelationFilter
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    comments?: CommentListRelationFilter
    images?: ImageListRelationFilter
    principalImage?: XOR<ImageNullableScalarRelationFilter, ImageWhereInput> | null
  }

  export type PackOrderByWithRelationInput = {
    id?: SortOrder
    max_version?: SortOrder
    min_version?: SortOrder
    versionType?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    authorId?: SortOrder
    principalImageId?: SortOrderInput | SortOrder
    shaders?: ShaderOrderByRelationAggregateInput
    mods?: ModOrderByRelationAggregateInput
    author?: UserOrderByWithRelationInput
    comments?: CommentOrderByRelationAggregateInput
    images?: ImageOrderByRelationAggregateInput
    principalImage?: ImageOrderByWithRelationInput
    _relevance?: PackOrderByRelevanceInput
  }

  export type PackWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: PackWhereInput | PackWhereInput[]
    OR?: PackWhereInput[]
    NOT?: PackWhereInput | PackWhereInput[]
    max_version?: IntFilter<"Pack"> | number
    min_version?: IntFilter<"Pack"> | number
    versionType?: EnumVersionTypeFilter<"Pack"> | $Enums.VersionType
    name?: StringFilter<"Pack"> | string
    description?: StringNullableFilter<"Pack"> | string | null
    authorId?: BigIntFilter<"Pack"> | bigint | number
    principalImageId?: BigIntNullableFilter<"Pack"> | bigint | number | null
    shaders?: ShaderListRelationFilter
    mods?: ModListRelationFilter
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    comments?: CommentListRelationFilter
    images?: ImageListRelationFilter
    principalImage?: XOR<ImageNullableScalarRelationFilter, ImageWhereInput> | null
  }, "id">

  export type PackOrderByWithAggregationInput = {
    id?: SortOrder
    max_version?: SortOrder
    min_version?: SortOrder
    versionType?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    authorId?: SortOrder
    principalImageId?: SortOrderInput | SortOrder
    _count?: PackCountOrderByAggregateInput
    _avg?: PackAvgOrderByAggregateInput
    _max?: PackMaxOrderByAggregateInput
    _min?: PackMinOrderByAggregateInput
    _sum?: PackSumOrderByAggregateInput
  }

  export type PackScalarWhereWithAggregatesInput = {
    AND?: PackScalarWhereWithAggregatesInput | PackScalarWhereWithAggregatesInput[]
    OR?: PackScalarWhereWithAggregatesInput[]
    NOT?: PackScalarWhereWithAggregatesInput | PackScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Pack"> | bigint | number
    max_version?: IntWithAggregatesFilter<"Pack"> | number
    min_version?: IntWithAggregatesFilter<"Pack"> | number
    versionType?: EnumVersionTypeWithAggregatesFilter<"Pack"> | $Enums.VersionType
    name?: StringWithAggregatesFilter<"Pack"> | string
    description?: StringNullableWithAggregatesFilter<"Pack"> | string | null
    authorId?: BigIntWithAggregatesFilter<"Pack"> | bigint | number
    principalImageId?: BigIntNullableWithAggregatesFilter<"Pack"> | bigint | number | null
  }

  export type ShaderWhereInput = {
    AND?: ShaderWhereInput | ShaderWhereInput[]
    OR?: ShaderWhereInput[]
    NOT?: ShaderWhereInput | ShaderWhereInput[]
    id?: BigIntFilter<"Shader"> | bigint | number
    name?: StringFilter<"Shader"> | string
    description?: StringFilter<"Shader"> | string
    weight?: IntFilter<"Shader"> | number
    src?: StringFilter<"Shader"> | string
    authorId?: BigIntFilter<"Shader"> | bigint | number
    versionType?: EnumVersionTypeFilter<"Shader"> | $Enums.VersionType
    principalImageId?: BigIntNullableFilter<"Shader"> | bigint | number | null
    packs?: PackListRelationFilter
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    comments?: CommentListRelationFilter
    images?: ImageListRelationFilter
    conflicts?: ConflictListRelationFilter
    shaderDependecies?: ShaderDependecyListRelationFilter
    principalImage?: XOR<ImageNullableScalarRelationFilter, ImageWhereInput> | null
  }

  export type ShaderOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    weight?: SortOrder
    src?: SortOrder
    authorId?: SortOrder
    versionType?: SortOrder
    principalImageId?: SortOrderInput | SortOrder
    packs?: PackOrderByRelationAggregateInput
    author?: UserOrderByWithRelationInput
    comments?: CommentOrderByRelationAggregateInput
    images?: ImageOrderByRelationAggregateInput
    conflicts?: ConflictOrderByRelationAggregateInput
    shaderDependecies?: ShaderDependecyOrderByRelationAggregateInput
    principalImage?: ImageOrderByWithRelationInput
    _relevance?: ShaderOrderByRelevanceInput
  }

  export type ShaderWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: ShaderWhereInput | ShaderWhereInput[]
    OR?: ShaderWhereInput[]
    NOT?: ShaderWhereInput | ShaderWhereInput[]
    name?: StringFilter<"Shader"> | string
    description?: StringFilter<"Shader"> | string
    weight?: IntFilter<"Shader"> | number
    src?: StringFilter<"Shader"> | string
    authorId?: BigIntFilter<"Shader"> | bigint | number
    versionType?: EnumVersionTypeFilter<"Shader"> | $Enums.VersionType
    principalImageId?: BigIntNullableFilter<"Shader"> | bigint | number | null
    packs?: PackListRelationFilter
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    comments?: CommentListRelationFilter
    images?: ImageListRelationFilter
    conflicts?: ConflictListRelationFilter
    shaderDependecies?: ShaderDependecyListRelationFilter
    principalImage?: XOR<ImageNullableScalarRelationFilter, ImageWhereInput> | null
  }, "id">

  export type ShaderOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    weight?: SortOrder
    src?: SortOrder
    authorId?: SortOrder
    versionType?: SortOrder
    principalImageId?: SortOrderInput | SortOrder
    _count?: ShaderCountOrderByAggregateInput
    _avg?: ShaderAvgOrderByAggregateInput
    _max?: ShaderMaxOrderByAggregateInput
    _min?: ShaderMinOrderByAggregateInput
    _sum?: ShaderSumOrderByAggregateInput
  }

  export type ShaderScalarWhereWithAggregatesInput = {
    AND?: ShaderScalarWhereWithAggregatesInput | ShaderScalarWhereWithAggregatesInput[]
    OR?: ShaderScalarWhereWithAggregatesInput[]
    NOT?: ShaderScalarWhereWithAggregatesInput | ShaderScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Shader"> | bigint | number
    name?: StringWithAggregatesFilter<"Shader"> | string
    description?: StringWithAggregatesFilter<"Shader"> | string
    weight?: IntWithAggregatesFilter<"Shader"> | number
    src?: StringWithAggregatesFilter<"Shader"> | string
    authorId?: BigIntWithAggregatesFilter<"Shader"> | bigint | number
    versionType?: EnumVersionTypeWithAggregatesFilter<"Shader"> | $Enums.VersionType
    principalImageId?: BigIntNullableWithAggregatesFilter<"Shader"> | bigint | number | null
  }

  export type ModWhereInput = {
    AND?: ModWhereInput | ModWhereInput[]
    OR?: ModWhereInput[]
    NOT?: ModWhereInput | ModWhereInput[]
    id?: BigIntFilter<"Mod"> | bigint | number
    name?: StringFilter<"Mod"> | string
    description?: StringFilter<"Mod"> | string
    min_version?: IntFilter<"Mod"> | number
    max_version?: IntFilter<"Mod"> | number
    src?: StringFilter<"Mod"> | string
    weight?: IntFilter<"Mod"> | number
    authorId?: BigIntFilter<"Mod"> | bigint | number
    versionType?: EnumVersionTypeFilter<"Mod"> | $Enums.VersionType
    principalImageId?: BigIntNullableFilter<"Mod"> | bigint | number | null
    packs?: PackListRelationFilter
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    comments?: CommentListRelationFilter
    images?: ImageListRelationFilter
    conflictsFrom?: ConflictListRelationFilter
    conflictsTo?: ConflictListRelationFilter
    requiredBy?: ModDependencyListRelationFilter
    modDependencies?: ModDependencyListRelationFilter
    shaderDependecies?: ShaderDependecyListRelationFilter
    principalImage?: XOR<ImageNullableScalarRelationFilter, ImageWhereInput> | null
  }

  export type ModOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    min_version?: SortOrder
    max_version?: SortOrder
    src?: SortOrder
    weight?: SortOrder
    authorId?: SortOrder
    versionType?: SortOrder
    principalImageId?: SortOrderInput | SortOrder
    packs?: PackOrderByRelationAggregateInput
    author?: UserOrderByWithRelationInput
    comments?: CommentOrderByRelationAggregateInput
    images?: ImageOrderByRelationAggregateInput
    conflictsFrom?: ConflictOrderByRelationAggregateInput
    conflictsTo?: ConflictOrderByRelationAggregateInput
    requiredBy?: ModDependencyOrderByRelationAggregateInput
    modDependencies?: ModDependencyOrderByRelationAggregateInput
    shaderDependecies?: ShaderDependecyOrderByRelationAggregateInput
    principalImage?: ImageOrderByWithRelationInput
    _relevance?: ModOrderByRelevanceInput
  }

  export type ModWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: ModWhereInput | ModWhereInput[]
    OR?: ModWhereInput[]
    NOT?: ModWhereInput | ModWhereInput[]
    name?: StringFilter<"Mod"> | string
    description?: StringFilter<"Mod"> | string
    min_version?: IntFilter<"Mod"> | number
    max_version?: IntFilter<"Mod"> | number
    src?: StringFilter<"Mod"> | string
    weight?: IntFilter<"Mod"> | number
    authorId?: BigIntFilter<"Mod"> | bigint | number
    versionType?: EnumVersionTypeFilter<"Mod"> | $Enums.VersionType
    principalImageId?: BigIntNullableFilter<"Mod"> | bigint | number | null
    packs?: PackListRelationFilter
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    comments?: CommentListRelationFilter
    images?: ImageListRelationFilter
    conflictsFrom?: ConflictListRelationFilter
    conflictsTo?: ConflictListRelationFilter
    requiredBy?: ModDependencyListRelationFilter
    modDependencies?: ModDependencyListRelationFilter
    shaderDependecies?: ShaderDependecyListRelationFilter
    principalImage?: XOR<ImageNullableScalarRelationFilter, ImageWhereInput> | null
  }, "id">

  export type ModOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    min_version?: SortOrder
    max_version?: SortOrder
    src?: SortOrder
    weight?: SortOrder
    authorId?: SortOrder
    versionType?: SortOrder
    principalImageId?: SortOrderInput | SortOrder
    _count?: ModCountOrderByAggregateInput
    _avg?: ModAvgOrderByAggregateInput
    _max?: ModMaxOrderByAggregateInput
    _min?: ModMinOrderByAggregateInput
    _sum?: ModSumOrderByAggregateInput
  }

  export type ModScalarWhereWithAggregatesInput = {
    AND?: ModScalarWhereWithAggregatesInput | ModScalarWhereWithAggregatesInput[]
    OR?: ModScalarWhereWithAggregatesInput[]
    NOT?: ModScalarWhereWithAggregatesInput | ModScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Mod"> | bigint | number
    name?: StringWithAggregatesFilter<"Mod"> | string
    description?: StringWithAggregatesFilter<"Mod"> | string
    min_version?: IntWithAggregatesFilter<"Mod"> | number
    max_version?: IntWithAggregatesFilter<"Mod"> | number
    src?: StringWithAggregatesFilter<"Mod"> | string
    weight?: IntWithAggregatesFilter<"Mod"> | number
    authorId?: BigIntWithAggregatesFilter<"Mod"> | bigint | number
    versionType?: EnumVersionTypeWithAggregatesFilter<"Mod"> | $Enums.VersionType
    principalImageId?: BigIntNullableWithAggregatesFilter<"Mod"> | bigint | number | null
  }

  export type CommentWhereInput = {
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    id?: BigIntFilter<"Comment"> | bigint | number
    text?: StringFilter<"Comment"> | string
    authorId?: BigIntFilter<"Comment"> | bigint | number
    packId?: BigIntNullableFilter<"Comment"> | bigint | number | null
    shaderId?: BigIntNullableFilter<"Comment"> | bigint | number | null
    modId?: BigIntNullableFilter<"Comment"> | bigint | number | null
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    pack?: XOR<PackNullableScalarRelationFilter, PackWhereInput> | null
    shader?: XOR<ShaderNullableScalarRelationFilter, ShaderWhereInput> | null
    mod?: XOR<ModNullableScalarRelationFilter, ModWhereInput> | null
  }

  export type CommentOrderByWithRelationInput = {
    id?: SortOrder
    text?: SortOrder
    authorId?: SortOrder
    packId?: SortOrderInput | SortOrder
    shaderId?: SortOrderInput | SortOrder
    modId?: SortOrderInput | SortOrder
    author?: UserOrderByWithRelationInput
    pack?: PackOrderByWithRelationInput
    shader?: ShaderOrderByWithRelationInput
    mod?: ModOrderByWithRelationInput
    _relevance?: CommentOrderByRelevanceInput
  }

  export type CommentWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    text?: StringFilter<"Comment"> | string
    authorId?: BigIntFilter<"Comment"> | bigint | number
    packId?: BigIntNullableFilter<"Comment"> | bigint | number | null
    shaderId?: BigIntNullableFilter<"Comment"> | bigint | number | null
    modId?: BigIntNullableFilter<"Comment"> | bigint | number | null
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    pack?: XOR<PackNullableScalarRelationFilter, PackWhereInput> | null
    shader?: XOR<ShaderNullableScalarRelationFilter, ShaderWhereInput> | null
    mod?: XOR<ModNullableScalarRelationFilter, ModWhereInput> | null
  }, "id">

  export type CommentOrderByWithAggregationInput = {
    id?: SortOrder
    text?: SortOrder
    authorId?: SortOrder
    packId?: SortOrderInput | SortOrder
    shaderId?: SortOrderInput | SortOrder
    modId?: SortOrderInput | SortOrder
    _count?: CommentCountOrderByAggregateInput
    _avg?: CommentAvgOrderByAggregateInput
    _max?: CommentMaxOrderByAggregateInput
    _min?: CommentMinOrderByAggregateInput
    _sum?: CommentSumOrderByAggregateInput
  }

  export type CommentScalarWhereWithAggregatesInput = {
    AND?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    OR?: CommentScalarWhereWithAggregatesInput[]
    NOT?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Comment"> | bigint | number
    text?: StringWithAggregatesFilter<"Comment"> | string
    authorId?: BigIntWithAggregatesFilter<"Comment"> | bigint | number
    packId?: BigIntNullableWithAggregatesFilter<"Comment"> | bigint | number | null
    shaderId?: BigIntNullableWithAggregatesFilter<"Comment"> | bigint | number | null
    modId?: BigIntNullableWithAggregatesFilter<"Comment"> | bigint | number | null
  }

  export type ImageWhereInput = {
    AND?: ImageWhereInput | ImageWhereInput[]
    OR?: ImageWhereInput[]
    NOT?: ImageWhereInput | ImageWhereInput[]
    id?: BigIntFilter<"Image"> | bigint | number
    src?: StringFilter<"Image"> | string
    basePath?: StringFilter<"Image"> | string
    modId?: BigIntNullableFilter<"Image"> | bigint | number | null
    shaderId?: BigIntNullableFilter<"Image"> | bigint | number | null
    packId?: BigIntNullableFilter<"Image"> | bigint | number | null
    mod?: XOR<ModNullableScalarRelationFilter, ModWhereInput> | null
    shader?: XOR<ShaderNullableScalarRelationFilter, ShaderWhereInput> | null
    pack?: XOR<PackNullableScalarRelationFilter, PackWhereInput> | null
    users?: UserListRelationFilter
    packsPrincipal?: PackListRelationFilter
    shadersPrincipal?: ShaderListRelationFilter
    modsPrincipal?: ModListRelationFilter
  }

  export type ImageOrderByWithRelationInput = {
    id?: SortOrder
    src?: SortOrder
    basePath?: SortOrder
    modId?: SortOrderInput | SortOrder
    shaderId?: SortOrderInput | SortOrder
    packId?: SortOrderInput | SortOrder
    mod?: ModOrderByWithRelationInput
    shader?: ShaderOrderByWithRelationInput
    pack?: PackOrderByWithRelationInput
    users?: UserOrderByRelationAggregateInput
    packsPrincipal?: PackOrderByRelationAggregateInput
    shadersPrincipal?: ShaderOrderByRelationAggregateInput
    modsPrincipal?: ModOrderByRelationAggregateInput
    _relevance?: ImageOrderByRelevanceInput
  }

  export type ImageWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: ImageWhereInput | ImageWhereInput[]
    OR?: ImageWhereInput[]
    NOT?: ImageWhereInput | ImageWhereInput[]
    src?: StringFilter<"Image"> | string
    basePath?: StringFilter<"Image"> | string
    modId?: BigIntNullableFilter<"Image"> | bigint | number | null
    shaderId?: BigIntNullableFilter<"Image"> | bigint | number | null
    packId?: BigIntNullableFilter<"Image"> | bigint | number | null
    mod?: XOR<ModNullableScalarRelationFilter, ModWhereInput> | null
    shader?: XOR<ShaderNullableScalarRelationFilter, ShaderWhereInput> | null
    pack?: XOR<PackNullableScalarRelationFilter, PackWhereInput> | null
    users?: UserListRelationFilter
    packsPrincipal?: PackListRelationFilter
    shadersPrincipal?: ShaderListRelationFilter
    modsPrincipal?: ModListRelationFilter
  }, "id">

  export type ImageOrderByWithAggregationInput = {
    id?: SortOrder
    src?: SortOrder
    basePath?: SortOrder
    modId?: SortOrderInput | SortOrder
    shaderId?: SortOrderInput | SortOrder
    packId?: SortOrderInput | SortOrder
    _count?: ImageCountOrderByAggregateInput
    _avg?: ImageAvgOrderByAggregateInput
    _max?: ImageMaxOrderByAggregateInput
    _min?: ImageMinOrderByAggregateInput
    _sum?: ImageSumOrderByAggregateInput
  }

  export type ImageScalarWhereWithAggregatesInput = {
    AND?: ImageScalarWhereWithAggregatesInput | ImageScalarWhereWithAggregatesInput[]
    OR?: ImageScalarWhereWithAggregatesInput[]
    NOT?: ImageScalarWhereWithAggregatesInput | ImageScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Image"> | bigint | number
    src?: StringWithAggregatesFilter<"Image"> | string
    basePath?: StringWithAggregatesFilter<"Image"> | string
    modId?: BigIntNullableWithAggregatesFilter<"Image"> | bigint | number | null
    shaderId?: BigIntNullableWithAggregatesFilter<"Image"> | bigint | number | null
    packId?: BigIntNullableWithAggregatesFilter<"Image"> | bigint | number | null
  }

  export type ConflictWhereInput = {
    AND?: ConflictWhereInput | ConflictWhereInput[]
    OR?: ConflictWhereInput[]
    NOT?: ConflictWhereInput | ConflictWhereInput[]
    id?: BigIntFilter<"Conflict"> | bigint | number
    conflictshaderId?: BigIntNullableFilter<"Conflict"> | bigint | number | null
    modId?: BigIntFilter<"Conflict"> | bigint | number
    conflictModId?: BigIntNullableFilter<"Conflict"> | bigint | number | null
    conflictShader?: XOR<ShaderNullableScalarRelationFilter, ShaderWhereInput> | null
    mod?: XOR<ModScalarRelationFilter, ModWhereInput>
    conflictMod?: XOR<ModNullableScalarRelationFilter, ModWhereInput> | null
  }

  export type ConflictOrderByWithRelationInput = {
    id?: SortOrder
    conflictshaderId?: SortOrderInput | SortOrder
    modId?: SortOrder
    conflictModId?: SortOrderInput | SortOrder
    conflictShader?: ShaderOrderByWithRelationInput
    mod?: ModOrderByWithRelationInput
    conflictMod?: ModOrderByWithRelationInput
  }

  export type ConflictWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: ConflictWhereInput | ConflictWhereInput[]
    OR?: ConflictWhereInput[]
    NOT?: ConflictWhereInput | ConflictWhereInput[]
    conflictshaderId?: BigIntNullableFilter<"Conflict"> | bigint | number | null
    modId?: BigIntFilter<"Conflict"> | bigint | number
    conflictModId?: BigIntNullableFilter<"Conflict"> | bigint | number | null
    conflictShader?: XOR<ShaderNullableScalarRelationFilter, ShaderWhereInput> | null
    mod?: XOR<ModScalarRelationFilter, ModWhereInput>
    conflictMod?: XOR<ModNullableScalarRelationFilter, ModWhereInput> | null
  }, "id">

  export type ConflictOrderByWithAggregationInput = {
    id?: SortOrder
    conflictshaderId?: SortOrderInput | SortOrder
    modId?: SortOrder
    conflictModId?: SortOrderInput | SortOrder
    _count?: ConflictCountOrderByAggregateInput
    _avg?: ConflictAvgOrderByAggregateInput
    _max?: ConflictMaxOrderByAggregateInput
    _min?: ConflictMinOrderByAggregateInput
    _sum?: ConflictSumOrderByAggregateInput
  }

  export type ConflictScalarWhereWithAggregatesInput = {
    AND?: ConflictScalarWhereWithAggregatesInput | ConflictScalarWhereWithAggregatesInput[]
    OR?: ConflictScalarWhereWithAggregatesInput[]
    NOT?: ConflictScalarWhereWithAggregatesInput | ConflictScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Conflict"> | bigint | number
    conflictshaderId?: BigIntNullableWithAggregatesFilter<"Conflict"> | bigint | number | null
    modId?: BigIntWithAggregatesFilter<"Conflict"> | bigint | number
    conflictModId?: BigIntNullableWithAggregatesFilter<"Conflict"> | bigint | number | null
  }

  export type ModDependencyWhereInput = {
    AND?: ModDependencyWhereInput | ModDependencyWhereInput[]
    OR?: ModDependencyWhereInput[]
    NOT?: ModDependencyWhereInput | ModDependencyWhereInput[]
    modId?: BigIntFilter<"ModDependency"> | bigint | number
    dependencyId?: BigIntFilter<"ModDependency"> | bigint | number
    mod?: XOR<ModScalarRelationFilter, ModWhereInput>
    dependency?: XOR<ModScalarRelationFilter, ModWhereInput>
  }

  export type ModDependencyOrderByWithRelationInput = {
    modId?: SortOrder
    dependencyId?: SortOrder
    mod?: ModOrderByWithRelationInput
    dependency?: ModOrderByWithRelationInput
  }

  export type ModDependencyWhereUniqueInput = Prisma.AtLeast<{
    modId_dependencyId?: ModDependencyModIdDependencyIdCompoundUniqueInput
    AND?: ModDependencyWhereInput | ModDependencyWhereInput[]
    OR?: ModDependencyWhereInput[]
    NOT?: ModDependencyWhereInput | ModDependencyWhereInput[]
    modId?: BigIntFilter<"ModDependency"> | bigint | number
    dependencyId?: BigIntFilter<"ModDependency"> | bigint | number
    mod?: XOR<ModScalarRelationFilter, ModWhereInput>
    dependency?: XOR<ModScalarRelationFilter, ModWhereInput>
  }, "modId_dependencyId">

  export type ModDependencyOrderByWithAggregationInput = {
    modId?: SortOrder
    dependencyId?: SortOrder
    _count?: ModDependencyCountOrderByAggregateInput
    _avg?: ModDependencyAvgOrderByAggregateInput
    _max?: ModDependencyMaxOrderByAggregateInput
    _min?: ModDependencyMinOrderByAggregateInput
    _sum?: ModDependencySumOrderByAggregateInput
  }

  export type ModDependencyScalarWhereWithAggregatesInput = {
    AND?: ModDependencyScalarWhereWithAggregatesInput | ModDependencyScalarWhereWithAggregatesInput[]
    OR?: ModDependencyScalarWhereWithAggregatesInput[]
    NOT?: ModDependencyScalarWhereWithAggregatesInput | ModDependencyScalarWhereWithAggregatesInput[]
    modId?: BigIntWithAggregatesFilter<"ModDependency"> | bigint | number
    dependencyId?: BigIntWithAggregatesFilter<"ModDependency"> | bigint | number
  }

  export type ShaderDependecyWhereInput = {
    AND?: ShaderDependecyWhereInput | ShaderDependecyWhereInput[]
    OR?: ShaderDependecyWhereInput[]
    NOT?: ShaderDependecyWhereInput | ShaderDependecyWhereInput[]
    shaderId?: BigIntFilter<"ShaderDependecy"> | bigint | number
    modId?: BigIntFilter<"ShaderDependecy"> | bigint | number
    shader?: XOR<ShaderScalarRelationFilter, ShaderWhereInput>
    mod?: XOR<ModScalarRelationFilter, ModWhereInput>
  }

  export type ShaderDependecyOrderByWithRelationInput = {
    shaderId?: SortOrder
    modId?: SortOrder
    shader?: ShaderOrderByWithRelationInput
    mod?: ModOrderByWithRelationInput
  }

  export type ShaderDependecyWhereUniqueInput = Prisma.AtLeast<{
    shaderId_modId?: ShaderDependecyShaderIdModIdCompoundUniqueInput
    AND?: ShaderDependecyWhereInput | ShaderDependecyWhereInput[]
    OR?: ShaderDependecyWhereInput[]
    NOT?: ShaderDependecyWhereInput | ShaderDependecyWhereInput[]
    shaderId?: BigIntFilter<"ShaderDependecy"> | bigint | number
    modId?: BigIntFilter<"ShaderDependecy"> | bigint | number
    shader?: XOR<ShaderScalarRelationFilter, ShaderWhereInput>
    mod?: XOR<ModScalarRelationFilter, ModWhereInput>
  }, "shaderId_modId">

  export type ShaderDependecyOrderByWithAggregationInput = {
    shaderId?: SortOrder
    modId?: SortOrder
    _count?: ShaderDependecyCountOrderByAggregateInput
    _avg?: ShaderDependecyAvgOrderByAggregateInput
    _max?: ShaderDependecyMaxOrderByAggregateInput
    _min?: ShaderDependecyMinOrderByAggregateInput
    _sum?: ShaderDependecySumOrderByAggregateInput
  }

  export type ShaderDependecyScalarWhereWithAggregatesInput = {
    AND?: ShaderDependecyScalarWhereWithAggregatesInput | ShaderDependecyScalarWhereWithAggregatesInput[]
    OR?: ShaderDependecyScalarWhereWithAggregatesInput[]
    NOT?: ShaderDependecyScalarWhereWithAggregatesInput | ShaderDependecyScalarWhereWithAggregatesInput[]
    shaderId?: BigIntWithAggregatesFilter<"ShaderDependecy"> | bigint | number
    modId?: BigIntWithAggregatesFilter<"ShaderDependecy"> | bigint | number
  }

  export type UserCreateInput = {
    id?: bigint | number
    email: string
    nickname: string
    password: string
    recovery_key?: string | null
    is_admin?: boolean
    packs?: PackCreateNestedManyWithoutAuthorInput
    shaders?: ShaderCreateNestedManyWithoutAuthorInput
    mods?: ModCreateNestedManyWithoutAuthorInput
    comments?: CommentCreateNestedManyWithoutAuthorInput
    image?: ImageCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateInput = {
    id?: bigint | number
    email: string
    nickname: string
    password: string
    recovery_key?: string | null
    is_admin?: boolean
    imageId?: bigint | number | null
    packs?: PackUncheckedCreateNestedManyWithoutAuthorInput
    shaders?: ShaderUncheckedCreateNestedManyWithoutAuthorInput
    mods?: ModUncheckedCreateNestedManyWithoutAuthorInput
    comments?: CommentUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    recovery_key?: NullableStringFieldUpdateOperationsInput | string | null
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    packs?: PackUpdateManyWithoutAuthorNestedInput
    shaders?: ShaderUpdateManyWithoutAuthorNestedInput
    mods?: ModUpdateManyWithoutAuthorNestedInput
    comments?: CommentUpdateManyWithoutAuthorNestedInput
    image?: ImageUpdateOneWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    recovery_key?: NullableStringFieldUpdateOperationsInput | string | null
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    imageId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    packs?: PackUncheckedUpdateManyWithoutAuthorNestedInput
    shaders?: ShaderUncheckedUpdateManyWithoutAuthorNestedInput
    mods?: ModUncheckedUpdateManyWithoutAuthorNestedInput
    comments?: CommentUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type UserCreateManyInput = {
    id?: bigint | number
    email: string
    nickname: string
    password: string
    recovery_key?: string | null
    is_admin?: boolean
    imageId?: bigint | number | null
  }

  export type UserUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    recovery_key?: NullableStringFieldUpdateOperationsInput | string | null
    is_admin?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    recovery_key?: NullableStringFieldUpdateOperationsInput | string | null
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    imageId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type PackCreateInput = {
    id?: bigint | number
    max_version: number
    min_version: number
    versionType: $Enums.VersionType
    name: string
    description?: string | null
    shaders?: ShaderCreateNestedManyWithoutPacksInput
    mods?: ModCreateNestedManyWithoutPacksInput
    author: UserCreateNestedOneWithoutPacksInput
    comments?: CommentCreateNestedManyWithoutPackInput
    images?: ImageCreateNestedManyWithoutPackInput
    principalImage?: ImageCreateNestedOneWithoutPacksPrincipalInput
  }

  export type PackUncheckedCreateInput = {
    id?: bigint | number
    max_version: number
    min_version: number
    versionType: $Enums.VersionType
    name: string
    description?: string | null
    authorId: bigint | number
    principalImageId?: bigint | number | null
    shaders?: ShaderUncheckedCreateNestedManyWithoutPacksInput
    mods?: ModUncheckedCreateNestedManyWithoutPacksInput
    comments?: CommentUncheckedCreateNestedManyWithoutPackInput
    images?: ImageUncheckedCreateNestedManyWithoutPackInput
  }

  export type PackUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    max_version?: IntFieldUpdateOperationsInput | number
    min_version?: IntFieldUpdateOperationsInput | number
    versionType?: EnumVersionTypeFieldUpdateOperationsInput | $Enums.VersionType
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    shaders?: ShaderUpdateManyWithoutPacksNestedInput
    mods?: ModUpdateManyWithoutPacksNestedInput
    author?: UserUpdateOneRequiredWithoutPacksNestedInput
    comments?: CommentUpdateManyWithoutPackNestedInput
    images?: ImageUpdateManyWithoutPackNestedInput
    principalImage?: ImageUpdateOneWithoutPacksPrincipalNestedInput
  }

  export type PackUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    max_version?: IntFieldUpdateOperationsInput | number
    min_version?: IntFieldUpdateOperationsInput | number
    versionType?: EnumVersionTypeFieldUpdateOperationsInput | $Enums.VersionType
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    authorId?: BigIntFieldUpdateOperationsInput | bigint | number
    principalImageId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    shaders?: ShaderUncheckedUpdateManyWithoutPacksNestedInput
    mods?: ModUncheckedUpdateManyWithoutPacksNestedInput
    comments?: CommentUncheckedUpdateManyWithoutPackNestedInput
    images?: ImageUncheckedUpdateManyWithoutPackNestedInput
  }

  export type PackCreateManyInput = {
    id?: bigint | number
    max_version: number
    min_version: number
    versionType: $Enums.VersionType
    name: string
    description?: string | null
    authorId: bigint | number
    principalImageId?: bigint | number | null
  }

  export type PackUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    max_version?: IntFieldUpdateOperationsInput | number
    min_version?: IntFieldUpdateOperationsInput | number
    versionType?: EnumVersionTypeFieldUpdateOperationsInput | $Enums.VersionType
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PackUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    max_version?: IntFieldUpdateOperationsInput | number
    min_version?: IntFieldUpdateOperationsInput | number
    versionType?: EnumVersionTypeFieldUpdateOperationsInput | $Enums.VersionType
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    authorId?: BigIntFieldUpdateOperationsInput | bigint | number
    principalImageId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type ShaderCreateInput = {
    id?: bigint | number
    name: string
    description?: string
    weight: number
    src: string
    versionType: $Enums.VersionType
    packs?: PackCreateNestedManyWithoutShadersInput
    author: UserCreateNestedOneWithoutShadersInput
    comments?: CommentCreateNestedManyWithoutShaderInput
    images?: ImageCreateNestedManyWithoutShaderInput
    conflicts?: ConflictCreateNestedManyWithoutConflictShaderInput
    shaderDependecies?: ShaderDependecyCreateNestedManyWithoutShaderInput
    principalImage?: ImageCreateNestedOneWithoutShadersPrincipalInput
  }

  export type ShaderUncheckedCreateInput = {
    id?: bigint | number
    name: string
    description?: string
    weight: number
    src: string
    authorId: bigint | number
    versionType: $Enums.VersionType
    principalImageId?: bigint | number | null
    packs?: PackUncheckedCreateNestedManyWithoutShadersInput
    comments?: CommentUncheckedCreateNestedManyWithoutShaderInput
    images?: ImageUncheckedCreateNestedManyWithoutShaderInput
    conflicts?: ConflictUncheckedCreateNestedManyWithoutConflictShaderInput
    shaderDependecies?: ShaderDependecyUncheckedCreateNestedManyWithoutShaderInput
  }

  export type ShaderUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    weight?: IntFieldUpdateOperationsInput | number
    src?: StringFieldUpdateOperationsInput | string
    versionType?: EnumVersionTypeFieldUpdateOperationsInput | $Enums.VersionType
    packs?: PackUpdateManyWithoutShadersNestedInput
    author?: UserUpdateOneRequiredWithoutShadersNestedInput
    comments?: CommentUpdateManyWithoutShaderNestedInput
    images?: ImageUpdateManyWithoutShaderNestedInput
    conflicts?: ConflictUpdateManyWithoutConflictShaderNestedInput
    shaderDependecies?: ShaderDependecyUpdateManyWithoutShaderNestedInput
    principalImage?: ImageUpdateOneWithoutShadersPrincipalNestedInput
  }

  export type ShaderUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    weight?: IntFieldUpdateOperationsInput | number
    src?: StringFieldUpdateOperationsInput | string
    authorId?: BigIntFieldUpdateOperationsInput | bigint | number
    versionType?: EnumVersionTypeFieldUpdateOperationsInput | $Enums.VersionType
    principalImageId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    packs?: PackUncheckedUpdateManyWithoutShadersNestedInput
    comments?: CommentUncheckedUpdateManyWithoutShaderNestedInput
    images?: ImageUncheckedUpdateManyWithoutShaderNestedInput
    conflicts?: ConflictUncheckedUpdateManyWithoutConflictShaderNestedInput
    shaderDependecies?: ShaderDependecyUncheckedUpdateManyWithoutShaderNestedInput
  }

  export type ShaderCreateManyInput = {
    id?: bigint | number
    name: string
    description?: string
    weight: number
    src: string
    authorId: bigint | number
    versionType: $Enums.VersionType
    principalImageId?: bigint | number | null
  }

  export type ShaderUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    weight?: IntFieldUpdateOperationsInput | number
    src?: StringFieldUpdateOperationsInput | string
    versionType?: EnumVersionTypeFieldUpdateOperationsInput | $Enums.VersionType
  }

  export type ShaderUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    weight?: IntFieldUpdateOperationsInput | number
    src?: StringFieldUpdateOperationsInput | string
    authorId?: BigIntFieldUpdateOperationsInput | bigint | number
    versionType?: EnumVersionTypeFieldUpdateOperationsInput | $Enums.VersionType
    principalImageId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type ModCreateInput = {
    id?: bigint | number
    name: string
    description?: string
    min_version: number
    max_version: number
    src: string
    weight: number
    versionType: $Enums.VersionType
    packs?: PackCreateNestedManyWithoutModsInput
    author: UserCreateNestedOneWithoutModsInput
    comments?: CommentCreateNestedManyWithoutModInput
    images?: ImageCreateNestedManyWithoutModInput
    conflictsFrom?: ConflictCreateNestedManyWithoutModInput
    conflictsTo?: ConflictCreateNestedManyWithoutConflictModInput
    requiredBy?: ModDependencyCreateNestedManyWithoutDependencyInput
    modDependencies?: ModDependencyCreateNestedManyWithoutModInput
    shaderDependecies?: ShaderDependecyCreateNestedManyWithoutModInput
    principalImage?: ImageCreateNestedOneWithoutModsPrincipalInput
  }

  export type ModUncheckedCreateInput = {
    id?: bigint | number
    name: string
    description?: string
    min_version: number
    max_version: number
    src: string
    weight: number
    authorId: bigint | number
    versionType: $Enums.VersionType
    principalImageId?: bigint | number | null
    packs?: PackUncheckedCreateNestedManyWithoutModsInput
    comments?: CommentUncheckedCreateNestedManyWithoutModInput
    images?: ImageUncheckedCreateNestedManyWithoutModInput
    conflictsFrom?: ConflictUncheckedCreateNestedManyWithoutModInput
    conflictsTo?: ConflictUncheckedCreateNestedManyWithoutConflictModInput
    requiredBy?: ModDependencyUncheckedCreateNestedManyWithoutDependencyInput
    modDependencies?: ModDependencyUncheckedCreateNestedManyWithoutModInput
    shaderDependecies?: ShaderDependecyUncheckedCreateNestedManyWithoutModInput
  }

  export type ModUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    min_version?: IntFieldUpdateOperationsInput | number
    max_version?: IntFieldUpdateOperationsInput | number
    src?: StringFieldUpdateOperationsInput | string
    weight?: IntFieldUpdateOperationsInput | number
    versionType?: EnumVersionTypeFieldUpdateOperationsInput | $Enums.VersionType
    packs?: PackUpdateManyWithoutModsNestedInput
    author?: UserUpdateOneRequiredWithoutModsNestedInput
    comments?: CommentUpdateManyWithoutModNestedInput
    images?: ImageUpdateManyWithoutModNestedInput
    conflictsFrom?: ConflictUpdateManyWithoutModNestedInput
    conflictsTo?: ConflictUpdateManyWithoutConflictModNestedInput
    requiredBy?: ModDependencyUpdateManyWithoutDependencyNestedInput
    modDependencies?: ModDependencyUpdateManyWithoutModNestedInput
    shaderDependecies?: ShaderDependecyUpdateManyWithoutModNestedInput
    principalImage?: ImageUpdateOneWithoutModsPrincipalNestedInput
  }

  export type ModUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    min_version?: IntFieldUpdateOperationsInput | number
    max_version?: IntFieldUpdateOperationsInput | number
    src?: StringFieldUpdateOperationsInput | string
    weight?: IntFieldUpdateOperationsInput | number
    authorId?: BigIntFieldUpdateOperationsInput | bigint | number
    versionType?: EnumVersionTypeFieldUpdateOperationsInput | $Enums.VersionType
    principalImageId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    packs?: PackUncheckedUpdateManyWithoutModsNestedInput
    comments?: CommentUncheckedUpdateManyWithoutModNestedInput
    images?: ImageUncheckedUpdateManyWithoutModNestedInput
    conflictsFrom?: ConflictUncheckedUpdateManyWithoutModNestedInput
    conflictsTo?: ConflictUncheckedUpdateManyWithoutConflictModNestedInput
    requiredBy?: ModDependencyUncheckedUpdateManyWithoutDependencyNestedInput
    modDependencies?: ModDependencyUncheckedUpdateManyWithoutModNestedInput
    shaderDependecies?: ShaderDependecyUncheckedUpdateManyWithoutModNestedInput
  }

  export type ModCreateManyInput = {
    id?: bigint | number
    name: string
    description?: string
    min_version: number
    max_version: number
    src: string
    weight: number
    authorId: bigint | number
    versionType: $Enums.VersionType
    principalImageId?: bigint | number | null
  }

  export type ModUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    min_version?: IntFieldUpdateOperationsInput | number
    max_version?: IntFieldUpdateOperationsInput | number
    src?: StringFieldUpdateOperationsInput | string
    weight?: IntFieldUpdateOperationsInput | number
    versionType?: EnumVersionTypeFieldUpdateOperationsInput | $Enums.VersionType
  }

  export type ModUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    min_version?: IntFieldUpdateOperationsInput | number
    max_version?: IntFieldUpdateOperationsInput | number
    src?: StringFieldUpdateOperationsInput | string
    weight?: IntFieldUpdateOperationsInput | number
    authorId?: BigIntFieldUpdateOperationsInput | bigint | number
    versionType?: EnumVersionTypeFieldUpdateOperationsInput | $Enums.VersionType
    principalImageId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type CommentCreateInput = {
    id?: bigint | number
    text: string
    author: UserCreateNestedOneWithoutCommentsInput
    pack?: PackCreateNestedOneWithoutCommentsInput
    shader?: ShaderCreateNestedOneWithoutCommentsInput
    mod?: ModCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateInput = {
    id?: bigint | number
    text: string
    authorId: bigint | number
    packId?: bigint | number | null
    shaderId?: bigint | number | null
    modId?: bigint | number | null
  }

  export type CommentUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    text?: StringFieldUpdateOperationsInput | string
    author?: UserUpdateOneRequiredWithoutCommentsNestedInput
    pack?: PackUpdateOneWithoutCommentsNestedInput
    shader?: ShaderUpdateOneWithoutCommentsNestedInput
    mod?: ModUpdateOneWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    text?: StringFieldUpdateOperationsInput | string
    authorId?: BigIntFieldUpdateOperationsInput | bigint | number
    packId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    shaderId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    modId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type CommentCreateManyInput = {
    id?: bigint | number
    text: string
    authorId: bigint | number
    packId?: bigint | number | null
    shaderId?: bigint | number | null
    modId?: bigint | number | null
  }

  export type CommentUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    text?: StringFieldUpdateOperationsInput | string
  }

  export type CommentUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    text?: StringFieldUpdateOperationsInput | string
    authorId?: BigIntFieldUpdateOperationsInput | bigint | number
    packId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    shaderId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    modId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type ImageCreateInput = {
    id?: bigint | number
    src: string
    basePath: string
    mod?: ModCreateNestedOneWithoutImagesInput
    shader?: ShaderCreateNestedOneWithoutImagesInput
    pack?: PackCreateNestedOneWithoutImagesInput
    users?: UserCreateNestedManyWithoutImageInput
    packsPrincipal?: PackCreateNestedManyWithoutPrincipalImageInput
    shadersPrincipal?: ShaderCreateNestedManyWithoutPrincipalImageInput
    modsPrincipal?: ModCreateNestedManyWithoutPrincipalImageInput
  }

  export type ImageUncheckedCreateInput = {
    id?: bigint | number
    src: string
    basePath: string
    modId?: bigint | number | null
    shaderId?: bigint | number | null
    packId?: bigint | number | null
    users?: UserUncheckedCreateNestedManyWithoutImageInput
    packsPrincipal?: PackUncheckedCreateNestedManyWithoutPrincipalImageInput
    shadersPrincipal?: ShaderUncheckedCreateNestedManyWithoutPrincipalImageInput
    modsPrincipal?: ModUncheckedCreateNestedManyWithoutPrincipalImageInput
  }

  export type ImageUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    src?: StringFieldUpdateOperationsInput | string
    basePath?: StringFieldUpdateOperationsInput | string
    mod?: ModUpdateOneWithoutImagesNestedInput
    shader?: ShaderUpdateOneWithoutImagesNestedInput
    pack?: PackUpdateOneWithoutImagesNestedInput
    users?: UserUpdateManyWithoutImageNestedInput
    packsPrincipal?: PackUpdateManyWithoutPrincipalImageNestedInput
    shadersPrincipal?: ShaderUpdateManyWithoutPrincipalImageNestedInput
    modsPrincipal?: ModUpdateManyWithoutPrincipalImageNestedInput
  }

  export type ImageUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    src?: StringFieldUpdateOperationsInput | string
    basePath?: StringFieldUpdateOperationsInput | string
    modId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    shaderId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    packId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    users?: UserUncheckedUpdateManyWithoutImageNestedInput
    packsPrincipal?: PackUncheckedUpdateManyWithoutPrincipalImageNestedInput
    shadersPrincipal?: ShaderUncheckedUpdateManyWithoutPrincipalImageNestedInput
    modsPrincipal?: ModUncheckedUpdateManyWithoutPrincipalImageNestedInput
  }

  export type ImageCreateManyInput = {
    id?: bigint | number
    src: string
    basePath: string
    modId?: bigint | number | null
    shaderId?: bigint | number | null
    packId?: bigint | number | null
  }

  export type ImageUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    src?: StringFieldUpdateOperationsInput | string
    basePath?: StringFieldUpdateOperationsInput | string
  }

  export type ImageUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    src?: StringFieldUpdateOperationsInput | string
    basePath?: StringFieldUpdateOperationsInput | string
    modId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    shaderId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    packId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type ConflictCreateInput = {
    id?: bigint | number
    conflictShader?: ShaderCreateNestedOneWithoutConflictsInput
    mod: ModCreateNestedOneWithoutConflictsFromInput
    conflictMod?: ModCreateNestedOneWithoutConflictsToInput
  }

  export type ConflictUncheckedCreateInput = {
    id?: bigint | number
    conflictshaderId?: bigint | number | null
    modId: bigint | number
    conflictModId?: bigint | number | null
  }

  export type ConflictUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    conflictShader?: ShaderUpdateOneWithoutConflictsNestedInput
    mod?: ModUpdateOneRequiredWithoutConflictsFromNestedInput
    conflictMod?: ModUpdateOneWithoutConflictsToNestedInput
  }

  export type ConflictUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    conflictshaderId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    modId?: BigIntFieldUpdateOperationsInput | bigint | number
    conflictModId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type ConflictCreateManyInput = {
    id?: bigint | number
    conflictshaderId?: bigint | number | null
    modId: bigint | number
    conflictModId?: bigint | number | null
  }

  export type ConflictUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type ConflictUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    conflictshaderId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    modId?: BigIntFieldUpdateOperationsInput | bigint | number
    conflictModId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type ModDependencyCreateInput = {
    mod: ModCreateNestedOneWithoutModDependenciesInput
    dependency: ModCreateNestedOneWithoutRequiredByInput
  }

  export type ModDependencyUncheckedCreateInput = {
    modId: bigint | number
    dependencyId: bigint | number
  }

  export type ModDependencyUpdateInput = {
    mod?: ModUpdateOneRequiredWithoutModDependenciesNestedInput
    dependency?: ModUpdateOneRequiredWithoutRequiredByNestedInput
  }

  export type ModDependencyUncheckedUpdateInput = {
    modId?: BigIntFieldUpdateOperationsInput | bigint | number
    dependencyId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type ModDependencyCreateManyInput = {
    modId: bigint | number
    dependencyId: bigint | number
  }

  export type ModDependencyUpdateManyMutationInput = {

  }

  export type ModDependencyUncheckedUpdateManyInput = {
    modId?: BigIntFieldUpdateOperationsInput | bigint | number
    dependencyId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type ShaderDependecyCreateInput = {
    shader: ShaderCreateNestedOneWithoutShaderDependeciesInput
    mod: ModCreateNestedOneWithoutShaderDependeciesInput
  }

  export type ShaderDependecyUncheckedCreateInput = {
    shaderId: bigint | number
    modId: bigint | number
  }

  export type ShaderDependecyUpdateInput = {
    shader?: ShaderUpdateOneRequiredWithoutShaderDependeciesNestedInput
    mod?: ModUpdateOneRequiredWithoutShaderDependeciesNestedInput
  }

  export type ShaderDependecyUncheckedUpdateInput = {
    shaderId?: BigIntFieldUpdateOperationsInput | bigint | number
    modId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type ShaderDependecyCreateManyInput = {
    shaderId: bigint | number
    modId: bigint | number
  }

  export type ShaderDependecyUpdateManyMutationInput = {

  }

  export type ShaderDependecyUncheckedUpdateManyInput = {
    shaderId?: BigIntFieldUpdateOperationsInput | bigint | number
    modId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type BigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type PackListRelationFilter = {
    every?: PackWhereInput
    some?: PackWhereInput
    none?: PackWhereInput
  }

  export type ShaderListRelationFilter = {
    every?: ShaderWhereInput
    some?: ShaderWhereInput
    none?: ShaderWhereInput
  }

  export type ModListRelationFilter = {
    every?: ModWhereInput
    some?: ModWhereInput
    none?: ModWhereInput
  }

  export type CommentListRelationFilter = {
    every?: CommentWhereInput
    some?: CommentWhereInput
    none?: CommentWhereInput
  }

  export type ImageNullableScalarRelationFilter = {
    is?: ImageWhereInput | null
    isNot?: ImageWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PackOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ShaderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ModOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    nickname?: SortOrder
    password?: SortOrder
    recovery_key?: SortOrder
    is_admin?: SortOrder
    imageId?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    imageId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    nickname?: SortOrder
    password?: SortOrder
    recovery_key?: SortOrder
    is_admin?: SortOrder
    imageId?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    nickname?: SortOrder
    password?: SortOrder
    recovery_key?: SortOrder
    is_admin?: SortOrder
    imageId?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    imageId?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type BigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumVersionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.VersionType | EnumVersionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.VersionType[] | ListEnumVersionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.VersionType[] | ListEnumVersionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumVersionTypeFilter<$PrismaModel> | $Enums.VersionType
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ImageListRelationFilter = {
    every?: ImageWhereInput
    some?: ImageWhereInput
    none?: ImageWhereInput
  }

  export type ImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PackOrderByRelevanceInput = {
    fields: PackOrderByRelevanceFieldEnum | PackOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PackCountOrderByAggregateInput = {
    id?: SortOrder
    max_version?: SortOrder
    min_version?: SortOrder
    versionType?: SortOrder
    name?: SortOrder
    description?: SortOrder
    authorId?: SortOrder
    principalImageId?: SortOrder
  }

  export type PackAvgOrderByAggregateInput = {
    id?: SortOrder
    max_version?: SortOrder
    min_version?: SortOrder
    authorId?: SortOrder
    principalImageId?: SortOrder
  }

  export type PackMaxOrderByAggregateInput = {
    id?: SortOrder
    max_version?: SortOrder
    min_version?: SortOrder
    versionType?: SortOrder
    name?: SortOrder
    description?: SortOrder
    authorId?: SortOrder
    principalImageId?: SortOrder
  }

  export type PackMinOrderByAggregateInput = {
    id?: SortOrder
    max_version?: SortOrder
    min_version?: SortOrder
    versionType?: SortOrder
    name?: SortOrder
    description?: SortOrder
    authorId?: SortOrder
    principalImageId?: SortOrder
  }

  export type PackSumOrderByAggregateInput = {
    id?: SortOrder
    max_version?: SortOrder
    min_version?: SortOrder
    authorId?: SortOrder
    principalImageId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumVersionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VersionType | EnumVersionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.VersionType[] | ListEnumVersionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.VersionType[] | ListEnumVersionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumVersionTypeWithAggregatesFilter<$PrismaModel> | $Enums.VersionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVersionTypeFilter<$PrismaModel>
    _max?: NestedEnumVersionTypeFilter<$PrismaModel>
  }

  export type ConflictListRelationFilter = {
    every?: ConflictWhereInput
    some?: ConflictWhereInput
    none?: ConflictWhereInput
  }

  export type ShaderDependecyListRelationFilter = {
    every?: ShaderDependecyWhereInput
    some?: ShaderDependecyWhereInput
    none?: ShaderDependecyWhereInput
  }

  export type ConflictOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ShaderDependecyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ShaderOrderByRelevanceInput = {
    fields: ShaderOrderByRelevanceFieldEnum | ShaderOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ShaderCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    weight?: SortOrder
    src?: SortOrder
    authorId?: SortOrder
    versionType?: SortOrder
    principalImageId?: SortOrder
  }

  export type ShaderAvgOrderByAggregateInput = {
    id?: SortOrder
    weight?: SortOrder
    authorId?: SortOrder
    principalImageId?: SortOrder
  }

  export type ShaderMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    weight?: SortOrder
    src?: SortOrder
    authorId?: SortOrder
    versionType?: SortOrder
    principalImageId?: SortOrder
  }

  export type ShaderMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    weight?: SortOrder
    src?: SortOrder
    authorId?: SortOrder
    versionType?: SortOrder
    principalImageId?: SortOrder
  }

  export type ShaderSumOrderByAggregateInput = {
    id?: SortOrder
    weight?: SortOrder
    authorId?: SortOrder
    principalImageId?: SortOrder
  }

  export type ModDependencyListRelationFilter = {
    every?: ModDependencyWhereInput
    some?: ModDependencyWhereInput
    none?: ModDependencyWhereInput
  }

  export type ModDependencyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ModOrderByRelevanceInput = {
    fields: ModOrderByRelevanceFieldEnum | ModOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ModCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    min_version?: SortOrder
    max_version?: SortOrder
    src?: SortOrder
    weight?: SortOrder
    authorId?: SortOrder
    versionType?: SortOrder
    principalImageId?: SortOrder
  }

  export type ModAvgOrderByAggregateInput = {
    id?: SortOrder
    min_version?: SortOrder
    max_version?: SortOrder
    weight?: SortOrder
    authorId?: SortOrder
    principalImageId?: SortOrder
  }

  export type ModMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    min_version?: SortOrder
    max_version?: SortOrder
    src?: SortOrder
    weight?: SortOrder
    authorId?: SortOrder
    versionType?: SortOrder
    principalImageId?: SortOrder
  }

  export type ModMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    min_version?: SortOrder
    max_version?: SortOrder
    src?: SortOrder
    weight?: SortOrder
    authorId?: SortOrder
    versionType?: SortOrder
    principalImageId?: SortOrder
  }

  export type ModSumOrderByAggregateInput = {
    id?: SortOrder
    min_version?: SortOrder
    max_version?: SortOrder
    weight?: SortOrder
    authorId?: SortOrder
    principalImageId?: SortOrder
  }

  export type PackNullableScalarRelationFilter = {
    is?: PackWhereInput | null
    isNot?: PackWhereInput | null
  }

  export type ShaderNullableScalarRelationFilter = {
    is?: ShaderWhereInput | null
    isNot?: ShaderWhereInput | null
  }

  export type ModNullableScalarRelationFilter = {
    is?: ModWhereInput | null
    isNot?: ModWhereInput | null
  }

  export type CommentOrderByRelevanceInput = {
    fields: CommentOrderByRelevanceFieldEnum | CommentOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CommentCountOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    authorId?: SortOrder
    packId?: SortOrder
    shaderId?: SortOrder
    modId?: SortOrder
  }

  export type CommentAvgOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
    packId?: SortOrder
    shaderId?: SortOrder
    modId?: SortOrder
  }

  export type CommentMaxOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    authorId?: SortOrder
    packId?: SortOrder
    shaderId?: SortOrder
    modId?: SortOrder
  }

  export type CommentMinOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    authorId?: SortOrder
    packId?: SortOrder
    shaderId?: SortOrder
    modId?: SortOrder
  }

  export type CommentSumOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
    packId?: SortOrder
    shaderId?: SortOrder
    modId?: SortOrder
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ImageOrderByRelevanceInput = {
    fields: ImageOrderByRelevanceFieldEnum | ImageOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ImageCountOrderByAggregateInput = {
    id?: SortOrder
    src?: SortOrder
    basePath?: SortOrder
    modId?: SortOrder
    shaderId?: SortOrder
    packId?: SortOrder
  }

  export type ImageAvgOrderByAggregateInput = {
    id?: SortOrder
    modId?: SortOrder
    shaderId?: SortOrder
    packId?: SortOrder
  }

  export type ImageMaxOrderByAggregateInput = {
    id?: SortOrder
    src?: SortOrder
    basePath?: SortOrder
    modId?: SortOrder
    shaderId?: SortOrder
    packId?: SortOrder
  }

  export type ImageMinOrderByAggregateInput = {
    id?: SortOrder
    src?: SortOrder
    basePath?: SortOrder
    modId?: SortOrder
    shaderId?: SortOrder
    packId?: SortOrder
  }

  export type ImageSumOrderByAggregateInput = {
    id?: SortOrder
    modId?: SortOrder
    shaderId?: SortOrder
    packId?: SortOrder
  }

  export type ModScalarRelationFilter = {
    is?: ModWhereInput
    isNot?: ModWhereInput
  }

  export type ConflictCountOrderByAggregateInput = {
    id?: SortOrder
    conflictshaderId?: SortOrder
    modId?: SortOrder
    conflictModId?: SortOrder
  }

  export type ConflictAvgOrderByAggregateInput = {
    id?: SortOrder
    conflictshaderId?: SortOrder
    modId?: SortOrder
    conflictModId?: SortOrder
  }

  export type ConflictMaxOrderByAggregateInput = {
    id?: SortOrder
    conflictshaderId?: SortOrder
    modId?: SortOrder
    conflictModId?: SortOrder
  }

  export type ConflictMinOrderByAggregateInput = {
    id?: SortOrder
    conflictshaderId?: SortOrder
    modId?: SortOrder
    conflictModId?: SortOrder
  }

  export type ConflictSumOrderByAggregateInput = {
    id?: SortOrder
    conflictshaderId?: SortOrder
    modId?: SortOrder
    conflictModId?: SortOrder
  }

  export type ModDependencyModIdDependencyIdCompoundUniqueInput = {
    modId: bigint | number
    dependencyId: bigint | number
  }

  export type ModDependencyCountOrderByAggregateInput = {
    modId?: SortOrder
    dependencyId?: SortOrder
  }

  export type ModDependencyAvgOrderByAggregateInput = {
    modId?: SortOrder
    dependencyId?: SortOrder
  }

  export type ModDependencyMaxOrderByAggregateInput = {
    modId?: SortOrder
    dependencyId?: SortOrder
  }

  export type ModDependencyMinOrderByAggregateInput = {
    modId?: SortOrder
    dependencyId?: SortOrder
  }

  export type ModDependencySumOrderByAggregateInput = {
    modId?: SortOrder
    dependencyId?: SortOrder
  }

  export type ShaderScalarRelationFilter = {
    is?: ShaderWhereInput
    isNot?: ShaderWhereInput
  }

  export type ShaderDependecyShaderIdModIdCompoundUniqueInput = {
    shaderId: bigint | number
    modId: bigint | number
  }

  export type ShaderDependecyCountOrderByAggregateInput = {
    shaderId?: SortOrder
    modId?: SortOrder
  }

  export type ShaderDependecyAvgOrderByAggregateInput = {
    shaderId?: SortOrder
    modId?: SortOrder
  }

  export type ShaderDependecyMaxOrderByAggregateInput = {
    shaderId?: SortOrder
    modId?: SortOrder
  }

  export type ShaderDependecyMinOrderByAggregateInput = {
    shaderId?: SortOrder
    modId?: SortOrder
  }

  export type ShaderDependecySumOrderByAggregateInput = {
    shaderId?: SortOrder
    modId?: SortOrder
  }

  export type PackCreateNestedManyWithoutAuthorInput = {
    create?: XOR<PackCreateWithoutAuthorInput, PackUncheckedCreateWithoutAuthorInput> | PackCreateWithoutAuthorInput[] | PackUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PackCreateOrConnectWithoutAuthorInput | PackCreateOrConnectWithoutAuthorInput[]
    createMany?: PackCreateManyAuthorInputEnvelope
    connect?: PackWhereUniqueInput | PackWhereUniqueInput[]
  }

  export type ShaderCreateNestedManyWithoutAuthorInput = {
    create?: XOR<ShaderCreateWithoutAuthorInput, ShaderUncheckedCreateWithoutAuthorInput> | ShaderCreateWithoutAuthorInput[] | ShaderUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ShaderCreateOrConnectWithoutAuthorInput | ShaderCreateOrConnectWithoutAuthorInput[]
    createMany?: ShaderCreateManyAuthorInputEnvelope
    connect?: ShaderWhereUniqueInput | ShaderWhereUniqueInput[]
  }

  export type ModCreateNestedManyWithoutAuthorInput = {
    create?: XOR<ModCreateWithoutAuthorInput, ModUncheckedCreateWithoutAuthorInput> | ModCreateWithoutAuthorInput[] | ModUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ModCreateOrConnectWithoutAuthorInput | ModCreateOrConnectWithoutAuthorInput[]
    createMany?: ModCreateManyAuthorInputEnvelope
    connect?: ModWhereUniqueInput | ModWhereUniqueInput[]
  }

  export type CommentCreateNestedManyWithoutAuthorInput = {
    create?: XOR<CommentCreateWithoutAuthorInput, CommentUncheckedCreateWithoutAuthorInput> | CommentCreateWithoutAuthorInput[] | CommentUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutAuthorInput | CommentCreateOrConnectWithoutAuthorInput[]
    createMany?: CommentCreateManyAuthorInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type ImageCreateNestedOneWithoutUsersInput = {
    create?: XOR<ImageCreateWithoutUsersInput, ImageUncheckedCreateWithoutUsersInput>
    connectOrCreate?: ImageCreateOrConnectWithoutUsersInput
    connect?: ImageWhereUniqueInput
  }

  export type PackUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<PackCreateWithoutAuthorInput, PackUncheckedCreateWithoutAuthorInput> | PackCreateWithoutAuthorInput[] | PackUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PackCreateOrConnectWithoutAuthorInput | PackCreateOrConnectWithoutAuthorInput[]
    createMany?: PackCreateManyAuthorInputEnvelope
    connect?: PackWhereUniqueInput | PackWhereUniqueInput[]
  }

  export type ShaderUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<ShaderCreateWithoutAuthorInput, ShaderUncheckedCreateWithoutAuthorInput> | ShaderCreateWithoutAuthorInput[] | ShaderUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ShaderCreateOrConnectWithoutAuthorInput | ShaderCreateOrConnectWithoutAuthorInput[]
    createMany?: ShaderCreateManyAuthorInputEnvelope
    connect?: ShaderWhereUniqueInput | ShaderWhereUniqueInput[]
  }

  export type ModUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<ModCreateWithoutAuthorInput, ModUncheckedCreateWithoutAuthorInput> | ModCreateWithoutAuthorInput[] | ModUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ModCreateOrConnectWithoutAuthorInput | ModCreateOrConnectWithoutAuthorInput[]
    createMany?: ModCreateManyAuthorInputEnvelope
    connect?: ModWhereUniqueInput | ModWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<CommentCreateWithoutAuthorInput, CommentUncheckedCreateWithoutAuthorInput> | CommentCreateWithoutAuthorInput[] | CommentUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutAuthorInput | CommentCreateOrConnectWithoutAuthorInput[]
    createMany?: CommentCreateManyAuthorInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type PackUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<PackCreateWithoutAuthorInput, PackUncheckedCreateWithoutAuthorInput> | PackCreateWithoutAuthorInput[] | PackUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PackCreateOrConnectWithoutAuthorInput | PackCreateOrConnectWithoutAuthorInput[]
    upsert?: PackUpsertWithWhereUniqueWithoutAuthorInput | PackUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: PackCreateManyAuthorInputEnvelope
    set?: PackWhereUniqueInput | PackWhereUniqueInput[]
    disconnect?: PackWhereUniqueInput | PackWhereUniqueInput[]
    delete?: PackWhereUniqueInput | PackWhereUniqueInput[]
    connect?: PackWhereUniqueInput | PackWhereUniqueInput[]
    update?: PackUpdateWithWhereUniqueWithoutAuthorInput | PackUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: PackUpdateManyWithWhereWithoutAuthorInput | PackUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: PackScalarWhereInput | PackScalarWhereInput[]
  }

  export type ShaderUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<ShaderCreateWithoutAuthorInput, ShaderUncheckedCreateWithoutAuthorInput> | ShaderCreateWithoutAuthorInput[] | ShaderUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ShaderCreateOrConnectWithoutAuthorInput | ShaderCreateOrConnectWithoutAuthorInput[]
    upsert?: ShaderUpsertWithWhereUniqueWithoutAuthorInput | ShaderUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: ShaderCreateManyAuthorInputEnvelope
    set?: ShaderWhereUniqueInput | ShaderWhereUniqueInput[]
    disconnect?: ShaderWhereUniqueInput | ShaderWhereUniqueInput[]
    delete?: ShaderWhereUniqueInput | ShaderWhereUniqueInput[]
    connect?: ShaderWhereUniqueInput | ShaderWhereUniqueInput[]
    update?: ShaderUpdateWithWhereUniqueWithoutAuthorInput | ShaderUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: ShaderUpdateManyWithWhereWithoutAuthorInput | ShaderUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: ShaderScalarWhereInput | ShaderScalarWhereInput[]
  }

  export type ModUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<ModCreateWithoutAuthorInput, ModUncheckedCreateWithoutAuthorInput> | ModCreateWithoutAuthorInput[] | ModUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ModCreateOrConnectWithoutAuthorInput | ModCreateOrConnectWithoutAuthorInput[]
    upsert?: ModUpsertWithWhereUniqueWithoutAuthorInput | ModUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: ModCreateManyAuthorInputEnvelope
    set?: ModWhereUniqueInput | ModWhereUniqueInput[]
    disconnect?: ModWhereUniqueInput | ModWhereUniqueInput[]
    delete?: ModWhereUniqueInput | ModWhereUniqueInput[]
    connect?: ModWhereUniqueInput | ModWhereUniqueInput[]
    update?: ModUpdateWithWhereUniqueWithoutAuthorInput | ModUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: ModUpdateManyWithWhereWithoutAuthorInput | ModUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: ModScalarWhereInput | ModScalarWhereInput[]
  }

  export type CommentUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<CommentCreateWithoutAuthorInput, CommentUncheckedCreateWithoutAuthorInput> | CommentCreateWithoutAuthorInput[] | CommentUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutAuthorInput | CommentCreateOrConnectWithoutAuthorInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutAuthorInput | CommentUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: CommentCreateManyAuthorInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutAuthorInput | CommentUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutAuthorInput | CommentUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type ImageUpdateOneWithoutUsersNestedInput = {
    create?: XOR<ImageCreateWithoutUsersInput, ImageUncheckedCreateWithoutUsersInput>
    connectOrCreate?: ImageCreateOrConnectWithoutUsersInput
    upsert?: ImageUpsertWithoutUsersInput
    disconnect?: ImageWhereInput | boolean
    delete?: ImageWhereInput | boolean
    connect?: ImageWhereUniqueInput
    update?: XOR<XOR<ImageUpdateToOneWithWhereWithoutUsersInput, ImageUpdateWithoutUsersInput>, ImageUncheckedUpdateWithoutUsersInput>
  }

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type PackUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<PackCreateWithoutAuthorInput, PackUncheckedCreateWithoutAuthorInput> | PackCreateWithoutAuthorInput[] | PackUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PackCreateOrConnectWithoutAuthorInput | PackCreateOrConnectWithoutAuthorInput[]
    upsert?: PackUpsertWithWhereUniqueWithoutAuthorInput | PackUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: PackCreateManyAuthorInputEnvelope
    set?: PackWhereUniqueInput | PackWhereUniqueInput[]
    disconnect?: PackWhereUniqueInput | PackWhereUniqueInput[]
    delete?: PackWhereUniqueInput | PackWhereUniqueInput[]
    connect?: PackWhereUniqueInput | PackWhereUniqueInput[]
    update?: PackUpdateWithWhereUniqueWithoutAuthorInput | PackUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: PackUpdateManyWithWhereWithoutAuthorInput | PackUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: PackScalarWhereInput | PackScalarWhereInput[]
  }

  export type ShaderUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<ShaderCreateWithoutAuthorInput, ShaderUncheckedCreateWithoutAuthorInput> | ShaderCreateWithoutAuthorInput[] | ShaderUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ShaderCreateOrConnectWithoutAuthorInput | ShaderCreateOrConnectWithoutAuthorInput[]
    upsert?: ShaderUpsertWithWhereUniqueWithoutAuthorInput | ShaderUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: ShaderCreateManyAuthorInputEnvelope
    set?: ShaderWhereUniqueInput | ShaderWhereUniqueInput[]
    disconnect?: ShaderWhereUniqueInput | ShaderWhereUniqueInput[]
    delete?: ShaderWhereUniqueInput | ShaderWhereUniqueInput[]
    connect?: ShaderWhereUniqueInput | ShaderWhereUniqueInput[]
    update?: ShaderUpdateWithWhereUniqueWithoutAuthorInput | ShaderUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: ShaderUpdateManyWithWhereWithoutAuthorInput | ShaderUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: ShaderScalarWhereInput | ShaderScalarWhereInput[]
  }

  export type ModUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<ModCreateWithoutAuthorInput, ModUncheckedCreateWithoutAuthorInput> | ModCreateWithoutAuthorInput[] | ModUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ModCreateOrConnectWithoutAuthorInput | ModCreateOrConnectWithoutAuthorInput[]
    upsert?: ModUpsertWithWhereUniqueWithoutAuthorInput | ModUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: ModCreateManyAuthorInputEnvelope
    set?: ModWhereUniqueInput | ModWhereUniqueInput[]
    disconnect?: ModWhereUniqueInput | ModWhereUniqueInput[]
    delete?: ModWhereUniqueInput | ModWhereUniqueInput[]
    connect?: ModWhereUniqueInput | ModWhereUniqueInput[]
    update?: ModUpdateWithWhereUniqueWithoutAuthorInput | ModUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: ModUpdateManyWithWhereWithoutAuthorInput | ModUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: ModScalarWhereInput | ModScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<CommentCreateWithoutAuthorInput, CommentUncheckedCreateWithoutAuthorInput> | CommentCreateWithoutAuthorInput[] | CommentUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutAuthorInput | CommentCreateOrConnectWithoutAuthorInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutAuthorInput | CommentUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: CommentCreateManyAuthorInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutAuthorInput | CommentUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutAuthorInput | CommentUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type ShaderCreateNestedManyWithoutPacksInput = {
    create?: XOR<ShaderCreateWithoutPacksInput, ShaderUncheckedCreateWithoutPacksInput> | ShaderCreateWithoutPacksInput[] | ShaderUncheckedCreateWithoutPacksInput[]
    connectOrCreate?: ShaderCreateOrConnectWithoutPacksInput | ShaderCreateOrConnectWithoutPacksInput[]
    connect?: ShaderWhereUniqueInput | ShaderWhereUniqueInput[]
  }

  export type ModCreateNestedManyWithoutPacksInput = {
    create?: XOR<ModCreateWithoutPacksInput, ModUncheckedCreateWithoutPacksInput> | ModCreateWithoutPacksInput[] | ModUncheckedCreateWithoutPacksInput[]
    connectOrCreate?: ModCreateOrConnectWithoutPacksInput | ModCreateOrConnectWithoutPacksInput[]
    connect?: ModWhereUniqueInput | ModWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutPacksInput = {
    create?: XOR<UserCreateWithoutPacksInput, UserUncheckedCreateWithoutPacksInput>
    connectOrCreate?: UserCreateOrConnectWithoutPacksInput
    connect?: UserWhereUniqueInput
  }

  export type CommentCreateNestedManyWithoutPackInput = {
    create?: XOR<CommentCreateWithoutPackInput, CommentUncheckedCreateWithoutPackInput> | CommentCreateWithoutPackInput[] | CommentUncheckedCreateWithoutPackInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutPackInput | CommentCreateOrConnectWithoutPackInput[]
    createMany?: CommentCreateManyPackInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type ImageCreateNestedManyWithoutPackInput = {
    create?: XOR<ImageCreateWithoutPackInput, ImageUncheckedCreateWithoutPackInput> | ImageCreateWithoutPackInput[] | ImageUncheckedCreateWithoutPackInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutPackInput | ImageCreateOrConnectWithoutPackInput[]
    createMany?: ImageCreateManyPackInputEnvelope
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
  }

  export type ImageCreateNestedOneWithoutPacksPrincipalInput = {
    create?: XOR<ImageCreateWithoutPacksPrincipalInput, ImageUncheckedCreateWithoutPacksPrincipalInput>
    connectOrCreate?: ImageCreateOrConnectWithoutPacksPrincipalInput
    connect?: ImageWhereUniqueInput
  }

  export type ShaderUncheckedCreateNestedManyWithoutPacksInput = {
    create?: XOR<ShaderCreateWithoutPacksInput, ShaderUncheckedCreateWithoutPacksInput> | ShaderCreateWithoutPacksInput[] | ShaderUncheckedCreateWithoutPacksInput[]
    connectOrCreate?: ShaderCreateOrConnectWithoutPacksInput | ShaderCreateOrConnectWithoutPacksInput[]
    connect?: ShaderWhereUniqueInput | ShaderWhereUniqueInput[]
  }

  export type ModUncheckedCreateNestedManyWithoutPacksInput = {
    create?: XOR<ModCreateWithoutPacksInput, ModUncheckedCreateWithoutPacksInput> | ModCreateWithoutPacksInput[] | ModUncheckedCreateWithoutPacksInput[]
    connectOrCreate?: ModCreateOrConnectWithoutPacksInput | ModCreateOrConnectWithoutPacksInput[]
    connect?: ModWhereUniqueInput | ModWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutPackInput = {
    create?: XOR<CommentCreateWithoutPackInput, CommentUncheckedCreateWithoutPackInput> | CommentCreateWithoutPackInput[] | CommentUncheckedCreateWithoutPackInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutPackInput | CommentCreateOrConnectWithoutPackInput[]
    createMany?: CommentCreateManyPackInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type ImageUncheckedCreateNestedManyWithoutPackInput = {
    create?: XOR<ImageCreateWithoutPackInput, ImageUncheckedCreateWithoutPackInput> | ImageCreateWithoutPackInput[] | ImageUncheckedCreateWithoutPackInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutPackInput | ImageCreateOrConnectWithoutPackInput[]
    createMany?: ImageCreateManyPackInputEnvelope
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumVersionTypeFieldUpdateOperationsInput = {
    set?: $Enums.VersionType
  }

  export type ShaderUpdateManyWithoutPacksNestedInput = {
    create?: XOR<ShaderCreateWithoutPacksInput, ShaderUncheckedCreateWithoutPacksInput> | ShaderCreateWithoutPacksInput[] | ShaderUncheckedCreateWithoutPacksInput[]
    connectOrCreate?: ShaderCreateOrConnectWithoutPacksInput | ShaderCreateOrConnectWithoutPacksInput[]
    upsert?: ShaderUpsertWithWhereUniqueWithoutPacksInput | ShaderUpsertWithWhereUniqueWithoutPacksInput[]
    set?: ShaderWhereUniqueInput | ShaderWhereUniqueInput[]
    disconnect?: ShaderWhereUniqueInput | ShaderWhereUniqueInput[]
    delete?: ShaderWhereUniqueInput | ShaderWhereUniqueInput[]
    connect?: ShaderWhereUniqueInput | ShaderWhereUniqueInput[]
    update?: ShaderUpdateWithWhereUniqueWithoutPacksInput | ShaderUpdateWithWhereUniqueWithoutPacksInput[]
    updateMany?: ShaderUpdateManyWithWhereWithoutPacksInput | ShaderUpdateManyWithWhereWithoutPacksInput[]
    deleteMany?: ShaderScalarWhereInput | ShaderScalarWhereInput[]
  }

  export type ModUpdateManyWithoutPacksNestedInput = {
    create?: XOR<ModCreateWithoutPacksInput, ModUncheckedCreateWithoutPacksInput> | ModCreateWithoutPacksInput[] | ModUncheckedCreateWithoutPacksInput[]
    connectOrCreate?: ModCreateOrConnectWithoutPacksInput | ModCreateOrConnectWithoutPacksInput[]
    upsert?: ModUpsertWithWhereUniqueWithoutPacksInput | ModUpsertWithWhereUniqueWithoutPacksInput[]
    set?: ModWhereUniqueInput | ModWhereUniqueInput[]
    disconnect?: ModWhereUniqueInput | ModWhereUniqueInput[]
    delete?: ModWhereUniqueInput | ModWhereUniqueInput[]
    connect?: ModWhereUniqueInput | ModWhereUniqueInput[]
    update?: ModUpdateWithWhereUniqueWithoutPacksInput | ModUpdateWithWhereUniqueWithoutPacksInput[]
    updateMany?: ModUpdateManyWithWhereWithoutPacksInput | ModUpdateManyWithWhereWithoutPacksInput[]
    deleteMany?: ModScalarWhereInput | ModScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutPacksNestedInput = {
    create?: XOR<UserCreateWithoutPacksInput, UserUncheckedCreateWithoutPacksInput>
    connectOrCreate?: UserCreateOrConnectWithoutPacksInput
    upsert?: UserUpsertWithoutPacksInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPacksInput, UserUpdateWithoutPacksInput>, UserUncheckedUpdateWithoutPacksInput>
  }

  export type CommentUpdateManyWithoutPackNestedInput = {
    create?: XOR<CommentCreateWithoutPackInput, CommentUncheckedCreateWithoutPackInput> | CommentCreateWithoutPackInput[] | CommentUncheckedCreateWithoutPackInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutPackInput | CommentCreateOrConnectWithoutPackInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutPackInput | CommentUpsertWithWhereUniqueWithoutPackInput[]
    createMany?: CommentCreateManyPackInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutPackInput | CommentUpdateWithWhereUniqueWithoutPackInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutPackInput | CommentUpdateManyWithWhereWithoutPackInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type ImageUpdateManyWithoutPackNestedInput = {
    create?: XOR<ImageCreateWithoutPackInput, ImageUncheckedCreateWithoutPackInput> | ImageCreateWithoutPackInput[] | ImageUncheckedCreateWithoutPackInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutPackInput | ImageCreateOrConnectWithoutPackInput[]
    upsert?: ImageUpsertWithWhereUniqueWithoutPackInput | ImageUpsertWithWhereUniqueWithoutPackInput[]
    createMany?: ImageCreateManyPackInputEnvelope
    set?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    disconnect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    delete?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    update?: ImageUpdateWithWhereUniqueWithoutPackInput | ImageUpdateWithWhereUniqueWithoutPackInput[]
    updateMany?: ImageUpdateManyWithWhereWithoutPackInput | ImageUpdateManyWithWhereWithoutPackInput[]
    deleteMany?: ImageScalarWhereInput | ImageScalarWhereInput[]
  }

  export type ImageUpdateOneWithoutPacksPrincipalNestedInput = {
    create?: XOR<ImageCreateWithoutPacksPrincipalInput, ImageUncheckedCreateWithoutPacksPrincipalInput>
    connectOrCreate?: ImageCreateOrConnectWithoutPacksPrincipalInput
    upsert?: ImageUpsertWithoutPacksPrincipalInput
    disconnect?: ImageWhereInput | boolean
    delete?: ImageWhereInput | boolean
    connect?: ImageWhereUniqueInput
    update?: XOR<XOR<ImageUpdateToOneWithWhereWithoutPacksPrincipalInput, ImageUpdateWithoutPacksPrincipalInput>, ImageUncheckedUpdateWithoutPacksPrincipalInput>
  }

  export type ShaderUncheckedUpdateManyWithoutPacksNestedInput = {
    create?: XOR<ShaderCreateWithoutPacksInput, ShaderUncheckedCreateWithoutPacksInput> | ShaderCreateWithoutPacksInput[] | ShaderUncheckedCreateWithoutPacksInput[]
    connectOrCreate?: ShaderCreateOrConnectWithoutPacksInput | ShaderCreateOrConnectWithoutPacksInput[]
    upsert?: ShaderUpsertWithWhereUniqueWithoutPacksInput | ShaderUpsertWithWhereUniqueWithoutPacksInput[]
    set?: ShaderWhereUniqueInput | ShaderWhereUniqueInput[]
    disconnect?: ShaderWhereUniqueInput | ShaderWhereUniqueInput[]
    delete?: ShaderWhereUniqueInput | ShaderWhereUniqueInput[]
    connect?: ShaderWhereUniqueInput | ShaderWhereUniqueInput[]
    update?: ShaderUpdateWithWhereUniqueWithoutPacksInput | ShaderUpdateWithWhereUniqueWithoutPacksInput[]
    updateMany?: ShaderUpdateManyWithWhereWithoutPacksInput | ShaderUpdateManyWithWhereWithoutPacksInput[]
    deleteMany?: ShaderScalarWhereInput | ShaderScalarWhereInput[]
  }

  export type ModUncheckedUpdateManyWithoutPacksNestedInput = {
    create?: XOR<ModCreateWithoutPacksInput, ModUncheckedCreateWithoutPacksInput> | ModCreateWithoutPacksInput[] | ModUncheckedCreateWithoutPacksInput[]
    connectOrCreate?: ModCreateOrConnectWithoutPacksInput | ModCreateOrConnectWithoutPacksInput[]
    upsert?: ModUpsertWithWhereUniqueWithoutPacksInput | ModUpsertWithWhereUniqueWithoutPacksInput[]
    set?: ModWhereUniqueInput | ModWhereUniqueInput[]
    disconnect?: ModWhereUniqueInput | ModWhereUniqueInput[]
    delete?: ModWhereUniqueInput | ModWhereUniqueInput[]
    connect?: ModWhereUniqueInput | ModWhereUniqueInput[]
    update?: ModUpdateWithWhereUniqueWithoutPacksInput | ModUpdateWithWhereUniqueWithoutPacksInput[]
    updateMany?: ModUpdateManyWithWhereWithoutPacksInput | ModUpdateManyWithWhereWithoutPacksInput[]
    deleteMany?: ModScalarWhereInput | ModScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutPackNestedInput = {
    create?: XOR<CommentCreateWithoutPackInput, CommentUncheckedCreateWithoutPackInput> | CommentCreateWithoutPackInput[] | CommentUncheckedCreateWithoutPackInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutPackInput | CommentCreateOrConnectWithoutPackInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutPackInput | CommentUpsertWithWhereUniqueWithoutPackInput[]
    createMany?: CommentCreateManyPackInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutPackInput | CommentUpdateWithWhereUniqueWithoutPackInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutPackInput | CommentUpdateManyWithWhereWithoutPackInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type ImageUncheckedUpdateManyWithoutPackNestedInput = {
    create?: XOR<ImageCreateWithoutPackInput, ImageUncheckedCreateWithoutPackInput> | ImageCreateWithoutPackInput[] | ImageUncheckedCreateWithoutPackInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutPackInput | ImageCreateOrConnectWithoutPackInput[]
    upsert?: ImageUpsertWithWhereUniqueWithoutPackInput | ImageUpsertWithWhereUniqueWithoutPackInput[]
    createMany?: ImageCreateManyPackInputEnvelope
    set?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    disconnect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    delete?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    update?: ImageUpdateWithWhereUniqueWithoutPackInput | ImageUpdateWithWhereUniqueWithoutPackInput[]
    updateMany?: ImageUpdateManyWithWhereWithoutPackInput | ImageUpdateManyWithWhereWithoutPackInput[]
    deleteMany?: ImageScalarWhereInput | ImageScalarWhereInput[]
  }

  export type PackCreateNestedManyWithoutShadersInput = {
    create?: XOR<PackCreateWithoutShadersInput, PackUncheckedCreateWithoutShadersInput> | PackCreateWithoutShadersInput[] | PackUncheckedCreateWithoutShadersInput[]
    connectOrCreate?: PackCreateOrConnectWithoutShadersInput | PackCreateOrConnectWithoutShadersInput[]
    connect?: PackWhereUniqueInput | PackWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutShadersInput = {
    create?: XOR<UserCreateWithoutShadersInput, UserUncheckedCreateWithoutShadersInput>
    connectOrCreate?: UserCreateOrConnectWithoutShadersInput
    connect?: UserWhereUniqueInput
  }

  export type CommentCreateNestedManyWithoutShaderInput = {
    create?: XOR<CommentCreateWithoutShaderInput, CommentUncheckedCreateWithoutShaderInput> | CommentCreateWithoutShaderInput[] | CommentUncheckedCreateWithoutShaderInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutShaderInput | CommentCreateOrConnectWithoutShaderInput[]
    createMany?: CommentCreateManyShaderInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type ImageCreateNestedManyWithoutShaderInput = {
    create?: XOR<ImageCreateWithoutShaderInput, ImageUncheckedCreateWithoutShaderInput> | ImageCreateWithoutShaderInput[] | ImageUncheckedCreateWithoutShaderInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutShaderInput | ImageCreateOrConnectWithoutShaderInput[]
    createMany?: ImageCreateManyShaderInputEnvelope
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
  }

  export type ConflictCreateNestedManyWithoutConflictShaderInput = {
    create?: XOR<ConflictCreateWithoutConflictShaderInput, ConflictUncheckedCreateWithoutConflictShaderInput> | ConflictCreateWithoutConflictShaderInput[] | ConflictUncheckedCreateWithoutConflictShaderInput[]
    connectOrCreate?: ConflictCreateOrConnectWithoutConflictShaderInput | ConflictCreateOrConnectWithoutConflictShaderInput[]
    createMany?: ConflictCreateManyConflictShaderInputEnvelope
    connect?: ConflictWhereUniqueInput | ConflictWhereUniqueInput[]
  }

  export type ShaderDependecyCreateNestedManyWithoutShaderInput = {
    create?: XOR<ShaderDependecyCreateWithoutShaderInput, ShaderDependecyUncheckedCreateWithoutShaderInput> | ShaderDependecyCreateWithoutShaderInput[] | ShaderDependecyUncheckedCreateWithoutShaderInput[]
    connectOrCreate?: ShaderDependecyCreateOrConnectWithoutShaderInput | ShaderDependecyCreateOrConnectWithoutShaderInput[]
    createMany?: ShaderDependecyCreateManyShaderInputEnvelope
    connect?: ShaderDependecyWhereUniqueInput | ShaderDependecyWhereUniqueInput[]
  }

  export type ImageCreateNestedOneWithoutShadersPrincipalInput = {
    create?: XOR<ImageCreateWithoutShadersPrincipalInput, ImageUncheckedCreateWithoutShadersPrincipalInput>
    connectOrCreate?: ImageCreateOrConnectWithoutShadersPrincipalInput
    connect?: ImageWhereUniqueInput
  }

  export type PackUncheckedCreateNestedManyWithoutShadersInput = {
    create?: XOR<PackCreateWithoutShadersInput, PackUncheckedCreateWithoutShadersInput> | PackCreateWithoutShadersInput[] | PackUncheckedCreateWithoutShadersInput[]
    connectOrCreate?: PackCreateOrConnectWithoutShadersInput | PackCreateOrConnectWithoutShadersInput[]
    connect?: PackWhereUniqueInput | PackWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutShaderInput = {
    create?: XOR<CommentCreateWithoutShaderInput, CommentUncheckedCreateWithoutShaderInput> | CommentCreateWithoutShaderInput[] | CommentUncheckedCreateWithoutShaderInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutShaderInput | CommentCreateOrConnectWithoutShaderInput[]
    createMany?: CommentCreateManyShaderInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type ImageUncheckedCreateNestedManyWithoutShaderInput = {
    create?: XOR<ImageCreateWithoutShaderInput, ImageUncheckedCreateWithoutShaderInput> | ImageCreateWithoutShaderInput[] | ImageUncheckedCreateWithoutShaderInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutShaderInput | ImageCreateOrConnectWithoutShaderInput[]
    createMany?: ImageCreateManyShaderInputEnvelope
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
  }

  export type ConflictUncheckedCreateNestedManyWithoutConflictShaderInput = {
    create?: XOR<ConflictCreateWithoutConflictShaderInput, ConflictUncheckedCreateWithoutConflictShaderInput> | ConflictCreateWithoutConflictShaderInput[] | ConflictUncheckedCreateWithoutConflictShaderInput[]
    connectOrCreate?: ConflictCreateOrConnectWithoutConflictShaderInput | ConflictCreateOrConnectWithoutConflictShaderInput[]
    createMany?: ConflictCreateManyConflictShaderInputEnvelope
    connect?: ConflictWhereUniqueInput | ConflictWhereUniqueInput[]
  }

  export type ShaderDependecyUncheckedCreateNestedManyWithoutShaderInput = {
    create?: XOR<ShaderDependecyCreateWithoutShaderInput, ShaderDependecyUncheckedCreateWithoutShaderInput> | ShaderDependecyCreateWithoutShaderInput[] | ShaderDependecyUncheckedCreateWithoutShaderInput[]
    connectOrCreate?: ShaderDependecyCreateOrConnectWithoutShaderInput | ShaderDependecyCreateOrConnectWithoutShaderInput[]
    createMany?: ShaderDependecyCreateManyShaderInputEnvelope
    connect?: ShaderDependecyWhereUniqueInput | ShaderDependecyWhereUniqueInput[]
  }

  export type PackUpdateManyWithoutShadersNestedInput = {
    create?: XOR<PackCreateWithoutShadersInput, PackUncheckedCreateWithoutShadersInput> | PackCreateWithoutShadersInput[] | PackUncheckedCreateWithoutShadersInput[]
    connectOrCreate?: PackCreateOrConnectWithoutShadersInput | PackCreateOrConnectWithoutShadersInput[]
    upsert?: PackUpsertWithWhereUniqueWithoutShadersInput | PackUpsertWithWhereUniqueWithoutShadersInput[]
    set?: PackWhereUniqueInput | PackWhereUniqueInput[]
    disconnect?: PackWhereUniqueInput | PackWhereUniqueInput[]
    delete?: PackWhereUniqueInput | PackWhereUniqueInput[]
    connect?: PackWhereUniqueInput | PackWhereUniqueInput[]
    update?: PackUpdateWithWhereUniqueWithoutShadersInput | PackUpdateWithWhereUniqueWithoutShadersInput[]
    updateMany?: PackUpdateManyWithWhereWithoutShadersInput | PackUpdateManyWithWhereWithoutShadersInput[]
    deleteMany?: PackScalarWhereInput | PackScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutShadersNestedInput = {
    create?: XOR<UserCreateWithoutShadersInput, UserUncheckedCreateWithoutShadersInput>
    connectOrCreate?: UserCreateOrConnectWithoutShadersInput
    upsert?: UserUpsertWithoutShadersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutShadersInput, UserUpdateWithoutShadersInput>, UserUncheckedUpdateWithoutShadersInput>
  }

  export type CommentUpdateManyWithoutShaderNestedInput = {
    create?: XOR<CommentCreateWithoutShaderInput, CommentUncheckedCreateWithoutShaderInput> | CommentCreateWithoutShaderInput[] | CommentUncheckedCreateWithoutShaderInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutShaderInput | CommentCreateOrConnectWithoutShaderInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutShaderInput | CommentUpsertWithWhereUniqueWithoutShaderInput[]
    createMany?: CommentCreateManyShaderInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutShaderInput | CommentUpdateWithWhereUniqueWithoutShaderInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutShaderInput | CommentUpdateManyWithWhereWithoutShaderInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type ImageUpdateManyWithoutShaderNestedInput = {
    create?: XOR<ImageCreateWithoutShaderInput, ImageUncheckedCreateWithoutShaderInput> | ImageCreateWithoutShaderInput[] | ImageUncheckedCreateWithoutShaderInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutShaderInput | ImageCreateOrConnectWithoutShaderInput[]
    upsert?: ImageUpsertWithWhereUniqueWithoutShaderInput | ImageUpsertWithWhereUniqueWithoutShaderInput[]
    createMany?: ImageCreateManyShaderInputEnvelope
    set?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    disconnect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    delete?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    update?: ImageUpdateWithWhereUniqueWithoutShaderInput | ImageUpdateWithWhereUniqueWithoutShaderInput[]
    updateMany?: ImageUpdateManyWithWhereWithoutShaderInput | ImageUpdateManyWithWhereWithoutShaderInput[]
    deleteMany?: ImageScalarWhereInput | ImageScalarWhereInput[]
  }

  export type ConflictUpdateManyWithoutConflictShaderNestedInput = {
    create?: XOR<ConflictCreateWithoutConflictShaderInput, ConflictUncheckedCreateWithoutConflictShaderInput> | ConflictCreateWithoutConflictShaderInput[] | ConflictUncheckedCreateWithoutConflictShaderInput[]
    connectOrCreate?: ConflictCreateOrConnectWithoutConflictShaderInput | ConflictCreateOrConnectWithoutConflictShaderInput[]
    upsert?: ConflictUpsertWithWhereUniqueWithoutConflictShaderInput | ConflictUpsertWithWhereUniqueWithoutConflictShaderInput[]
    createMany?: ConflictCreateManyConflictShaderInputEnvelope
    set?: ConflictWhereUniqueInput | ConflictWhereUniqueInput[]
    disconnect?: ConflictWhereUniqueInput | ConflictWhereUniqueInput[]
    delete?: ConflictWhereUniqueInput | ConflictWhereUniqueInput[]
    connect?: ConflictWhereUniqueInput | ConflictWhereUniqueInput[]
    update?: ConflictUpdateWithWhereUniqueWithoutConflictShaderInput | ConflictUpdateWithWhereUniqueWithoutConflictShaderInput[]
    updateMany?: ConflictUpdateManyWithWhereWithoutConflictShaderInput | ConflictUpdateManyWithWhereWithoutConflictShaderInput[]
    deleteMany?: ConflictScalarWhereInput | ConflictScalarWhereInput[]
  }

  export type ShaderDependecyUpdateManyWithoutShaderNestedInput = {
    create?: XOR<ShaderDependecyCreateWithoutShaderInput, ShaderDependecyUncheckedCreateWithoutShaderInput> | ShaderDependecyCreateWithoutShaderInput[] | ShaderDependecyUncheckedCreateWithoutShaderInput[]
    connectOrCreate?: ShaderDependecyCreateOrConnectWithoutShaderInput | ShaderDependecyCreateOrConnectWithoutShaderInput[]
    upsert?: ShaderDependecyUpsertWithWhereUniqueWithoutShaderInput | ShaderDependecyUpsertWithWhereUniqueWithoutShaderInput[]
    createMany?: ShaderDependecyCreateManyShaderInputEnvelope
    set?: ShaderDependecyWhereUniqueInput | ShaderDependecyWhereUniqueInput[]
    disconnect?: ShaderDependecyWhereUniqueInput | ShaderDependecyWhereUniqueInput[]
    delete?: ShaderDependecyWhereUniqueInput | ShaderDependecyWhereUniqueInput[]
    connect?: ShaderDependecyWhereUniqueInput | ShaderDependecyWhereUniqueInput[]
    update?: ShaderDependecyUpdateWithWhereUniqueWithoutShaderInput | ShaderDependecyUpdateWithWhereUniqueWithoutShaderInput[]
    updateMany?: ShaderDependecyUpdateManyWithWhereWithoutShaderInput | ShaderDependecyUpdateManyWithWhereWithoutShaderInput[]
    deleteMany?: ShaderDependecyScalarWhereInput | ShaderDependecyScalarWhereInput[]
  }

  export type ImageUpdateOneWithoutShadersPrincipalNestedInput = {
    create?: XOR<ImageCreateWithoutShadersPrincipalInput, ImageUncheckedCreateWithoutShadersPrincipalInput>
    connectOrCreate?: ImageCreateOrConnectWithoutShadersPrincipalInput
    upsert?: ImageUpsertWithoutShadersPrincipalInput
    disconnect?: ImageWhereInput | boolean
    delete?: ImageWhereInput | boolean
    connect?: ImageWhereUniqueInput
    update?: XOR<XOR<ImageUpdateToOneWithWhereWithoutShadersPrincipalInput, ImageUpdateWithoutShadersPrincipalInput>, ImageUncheckedUpdateWithoutShadersPrincipalInput>
  }

  export type PackUncheckedUpdateManyWithoutShadersNestedInput = {
    create?: XOR<PackCreateWithoutShadersInput, PackUncheckedCreateWithoutShadersInput> | PackCreateWithoutShadersInput[] | PackUncheckedCreateWithoutShadersInput[]
    connectOrCreate?: PackCreateOrConnectWithoutShadersInput | PackCreateOrConnectWithoutShadersInput[]
    upsert?: PackUpsertWithWhereUniqueWithoutShadersInput | PackUpsertWithWhereUniqueWithoutShadersInput[]
    set?: PackWhereUniqueInput | PackWhereUniqueInput[]
    disconnect?: PackWhereUniqueInput | PackWhereUniqueInput[]
    delete?: PackWhereUniqueInput | PackWhereUniqueInput[]
    connect?: PackWhereUniqueInput | PackWhereUniqueInput[]
    update?: PackUpdateWithWhereUniqueWithoutShadersInput | PackUpdateWithWhereUniqueWithoutShadersInput[]
    updateMany?: PackUpdateManyWithWhereWithoutShadersInput | PackUpdateManyWithWhereWithoutShadersInput[]
    deleteMany?: PackScalarWhereInput | PackScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutShaderNestedInput = {
    create?: XOR<CommentCreateWithoutShaderInput, CommentUncheckedCreateWithoutShaderInput> | CommentCreateWithoutShaderInput[] | CommentUncheckedCreateWithoutShaderInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutShaderInput | CommentCreateOrConnectWithoutShaderInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutShaderInput | CommentUpsertWithWhereUniqueWithoutShaderInput[]
    createMany?: CommentCreateManyShaderInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutShaderInput | CommentUpdateWithWhereUniqueWithoutShaderInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutShaderInput | CommentUpdateManyWithWhereWithoutShaderInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type ImageUncheckedUpdateManyWithoutShaderNestedInput = {
    create?: XOR<ImageCreateWithoutShaderInput, ImageUncheckedCreateWithoutShaderInput> | ImageCreateWithoutShaderInput[] | ImageUncheckedCreateWithoutShaderInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutShaderInput | ImageCreateOrConnectWithoutShaderInput[]
    upsert?: ImageUpsertWithWhereUniqueWithoutShaderInput | ImageUpsertWithWhereUniqueWithoutShaderInput[]
    createMany?: ImageCreateManyShaderInputEnvelope
    set?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    disconnect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    delete?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    update?: ImageUpdateWithWhereUniqueWithoutShaderInput | ImageUpdateWithWhereUniqueWithoutShaderInput[]
    updateMany?: ImageUpdateManyWithWhereWithoutShaderInput | ImageUpdateManyWithWhereWithoutShaderInput[]
    deleteMany?: ImageScalarWhereInput | ImageScalarWhereInput[]
  }

  export type ConflictUncheckedUpdateManyWithoutConflictShaderNestedInput = {
    create?: XOR<ConflictCreateWithoutConflictShaderInput, ConflictUncheckedCreateWithoutConflictShaderInput> | ConflictCreateWithoutConflictShaderInput[] | ConflictUncheckedCreateWithoutConflictShaderInput[]
    connectOrCreate?: ConflictCreateOrConnectWithoutConflictShaderInput | ConflictCreateOrConnectWithoutConflictShaderInput[]
    upsert?: ConflictUpsertWithWhereUniqueWithoutConflictShaderInput | ConflictUpsertWithWhereUniqueWithoutConflictShaderInput[]
    createMany?: ConflictCreateManyConflictShaderInputEnvelope
    set?: ConflictWhereUniqueInput | ConflictWhereUniqueInput[]
    disconnect?: ConflictWhereUniqueInput | ConflictWhereUniqueInput[]
    delete?: ConflictWhereUniqueInput | ConflictWhereUniqueInput[]
    connect?: ConflictWhereUniqueInput | ConflictWhereUniqueInput[]
    update?: ConflictUpdateWithWhereUniqueWithoutConflictShaderInput | ConflictUpdateWithWhereUniqueWithoutConflictShaderInput[]
    updateMany?: ConflictUpdateManyWithWhereWithoutConflictShaderInput | ConflictUpdateManyWithWhereWithoutConflictShaderInput[]
    deleteMany?: ConflictScalarWhereInput | ConflictScalarWhereInput[]
  }

  export type ShaderDependecyUncheckedUpdateManyWithoutShaderNestedInput = {
    create?: XOR<ShaderDependecyCreateWithoutShaderInput, ShaderDependecyUncheckedCreateWithoutShaderInput> | ShaderDependecyCreateWithoutShaderInput[] | ShaderDependecyUncheckedCreateWithoutShaderInput[]
    connectOrCreate?: ShaderDependecyCreateOrConnectWithoutShaderInput | ShaderDependecyCreateOrConnectWithoutShaderInput[]
    upsert?: ShaderDependecyUpsertWithWhereUniqueWithoutShaderInput | ShaderDependecyUpsertWithWhereUniqueWithoutShaderInput[]
    createMany?: ShaderDependecyCreateManyShaderInputEnvelope
    set?: ShaderDependecyWhereUniqueInput | ShaderDependecyWhereUniqueInput[]
    disconnect?: ShaderDependecyWhereUniqueInput | ShaderDependecyWhereUniqueInput[]
    delete?: ShaderDependecyWhereUniqueInput | ShaderDependecyWhereUniqueInput[]
    connect?: ShaderDependecyWhereUniqueInput | ShaderDependecyWhereUniqueInput[]
    update?: ShaderDependecyUpdateWithWhereUniqueWithoutShaderInput | ShaderDependecyUpdateWithWhereUniqueWithoutShaderInput[]
    updateMany?: ShaderDependecyUpdateManyWithWhereWithoutShaderInput | ShaderDependecyUpdateManyWithWhereWithoutShaderInput[]
    deleteMany?: ShaderDependecyScalarWhereInput | ShaderDependecyScalarWhereInput[]
  }

  export type PackCreateNestedManyWithoutModsInput = {
    create?: XOR<PackCreateWithoutModsInput, PackUncheckedCreateWithoutModsInput> | PackCreateWithoutModsInput[] | PackUncheckedCreateWithoutModsInput[]
    connectOrCreate?: PackCreateOrConnectWithoutModsInput | PackCreateOrConnectWithoutModsInput[]
    connect?: PackWhereUniqueInput | PackWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutModsInput = {
    create?: XOR<UserCreateWithoutModsInput, UserUncheckedCreateWithoutModsInput>
    connectOrCreate?: UserCreateOrConnectWithoutModsInput
    connect?: UserWhereUniqueInput
  }

  export type CommentCreateNestedManyWithoutModInput = {
    create?: XOR<CommentCreateWithoutModInput, CommentUncheckedCreateWithoutModInput> | CommentCreateWithoutModInput[] | CommentUncheckedCreateWithoutModInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutModInput | CommentCreateOrConnectWithoutModInput[]
    createMany?: CommentCreateManyModInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type ImageCreateNestedManyWithoutModInput = {
    create?: XOR<ImageCreateWithoutModInput, ImageUncheckedCreateWithoutModInput> | ImageCreateWithoutModInput[] | ImageUncheckedCreateWithoutModInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutModInput | ImageCreateOrConnectWithoutModInput[]
    createMany?: ImageCreateManyModInputEnvelope
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
  }

  export type ConflictCreateNestedManyWithoutModInput = {
    create?: XOR<ConflictCreateWithoutModInput, ConflictUncheckedCreateWithoutModInput> | ConflictCreateWithoutModInput[] | ConflictUncheckedCreateWithoutModInput[]
    connectOrCreate?: ConflictCreateOrConnectWithoutModInput | ConflictCreateOrConnectWithoutModInput[]
    createMany?: ConflictCreateManyModInputEnvelope
    connect?: ConflictWhereUniqueInput | ConflictWhereUniqueInput[]
  }

  export type ConflictCreateNestedManyWithoutConflictModInput = {
    create?: XOR<ConflictCreateWithoutConflictModInput, ConflictUncheckedCreateWithoutConflictModInput> | ConflictCreateWithoutConflictModInput[] | ConflictUncheckedCreateWithoutConflictModInput[]
    connectOrCreate?: ConflictCreateOrConnectWithoutConflictModInput | ConflictCreateOrConnectWithoutConflictModInput[]
    createMany?: ConflictCreateManyConflictModInputEnvelope
    connect?: ConflictWhereUniqueInput | ConflictWhereUniqueInput[]
  }

  export type ModDependencyCreateNestedManyWithoutDependencyInput = {
    create?: XOR<ModDependencyCreateWithoutDependencyInput, ModDependencyUncheckedCreateWithoutDependencyInput> | ModDependencyCreateWithoutDependencyInput[] | ModDependencyUncheckedCreateWithoutDependencyInput[]
    connectOrCreate?: ModDependencyCreateOrConnectWithoutDependencyInput | ModDependencyCreateOrConnectWithoutDependencyInput[]
    createMany?: ModDependencyCreateManyDependencyInputEnvelope
    connect?: ModDependencyWhereUniqueInput | ModDependencyWhereUniqueInput[]
  }

  export type ModDependencyCreateNestedManyWithoutModInput = {
    create?: XOR<ModDependencyCreateWithoutModInput, ModDependencyUncheckedCreateWithoutModInput> | ModDependencyCreateWithoutModInput[] | ModDependencyUncheckedCreateWithoutModInput[]
    connectOrCreate?: ModDependencyCreateOrConnectWithoutModInput | ModDependencyCreateOrConnectWithoutModInput[]
    createMany?: ModDependencyCreateManyModInputEnvelope
    connect?: ModDependencyWhereUniqueInput | ModDependencyWhereUniqueInput[]
  }

  export type ShaderDependecyCreateNestedManyWithoutModInput = {
    create?: XOR<ShaderDependecyCreateWithoutModInput, ShaderDependecyUncheckedCreateWithoutModInput> | ShaderDependecyCreateWithoutModInput[] | ShaderDependecyUncheckedCreateWithoutModInput[]
    connectOrCreate?: ShaderDependecyCreateOrConnectWithoutModInput | ShaderDependecyCreateOrConnectWithoutModInput[]
    createMany?: ShaderDependecyCreateManyModInputEnvelope
    connect?: ShaderDependecyWhereUniqueInput | ShaderDependecyWhereUniqueInput[]
  }

  export type ImageCreateNestedOneWithoutModsPrincipalInput = {
    create?: XOR<ImageCreateWithoutModsPrincipalInput, ImageUncheckedCreateWithoutModsPrincipalInput>
    connectOrCreate?: ImageCreateOrConnectWithoutModsPrincipalInput
    connect?: ImageWhereUniqueInput
  }

  export type PackUncheckedCreateNestedManyWithoutModsInput = {
    create?: XOR<PackCreateWithoutModsInput, PackUncheckedCreateWithoutModsInput> | PackCreateWithoutModsInput[] | PackUncheckedCreateWithoutModsInput[]
    connectOrCreate?: PackCreateOrConnectWithoutModsInput | PackCreateOrConnectWithoutModsInput[]
    connect?: PackWhereUniqueInput | PackWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutModInput = {
    create?: XOR<CommentCreateWithoutModInput, CommentUncheckedCreateWithoutModInput> | CommentCreateWithoutModInput[] | CommentUncheckedCreateWithoutModInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutModInput | CommentCreateOrConnectWithoutModInput[]
    createMany?: CommentCreateManyModInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type ImageUncheckedCreateNestedManyWithoutModInput = {
    create?: XOR<ImageCreateWithoutModInput, ImageUncheckedCreateWithoutModInput> | ImageCreateWithoutModInput[] | ImageUncheckedCreateWithoutModInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutModInput | ImageCreateOrConnectWithoutModInput[]
    createMany?: ImageCreateManyModInputEnvelope
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
  }

  export type ConflictUncheckedCreateNestedManyWithoutModInput = {
    create?: XOR<ConflictCreateWithoutModInput, ConflictUncheckedCreateWithoutModInput> | ConflictCreateWithoutModInput[] | ConflictUncheckedCreateWithoutModInput[]
    connectOrCreate?: ConflictCreateOrConnectWithoutModInput | ConflictCreateOrConnectWithoutModInput[]
    createMany?: ConflictCreateManyModInputEnvelope
    connect?: ConflictWhereUniqueInput | ConflictWhereUniqueInput[]
  }

  export type ConflictUncheckedCreateNestedManyWithoutConflictModInput = {
    create?: XOR<ConflictCreateWithoutConflictModInput, ConflictUncheckedCreateWithoutConflictModInput> | ConflictCreateWithoutConflictModInput[] | ConflictUncheckedCreateWithoutConflictModInput[]
    connectOrCreate?: ConflictCreateOrConnectWithoutConflictModInput | ConflictCreateOrConnectWithoutConflictModInput[]
    createMany?: ConflictCreateManyConflictModInputEnvelope
    connect?: ConflictWhereUniqueInput | ConflictWhereUniqueInput[]
  }

  export type ModDependencyUncheckedCreateNestedManyWithoutDependencyInput = {
    create?: XOR<ModDependencyCreateWithoutDependencyInput, ModDependencyUncheckedCreateWithoutDependencyInput> | ModDependencyCreateWithoutDependencyInput[] | ModDependencyUncheckedCreateWithoutDependencyInput[]
    connectOrCreate?: ModDependencyCreateOrConnectWithoutDependencyInput | ModDependencyCreateOrConnectWithoutDependencyInput[]
    createMany?: ModDependencyCreateManyDependencyInputEnvelope
    connect?: ModDependencyWhereUniqueInput | ModDependencyWhereUniqueInput[]
  }

  export type ModDependencyUncheckedCreateNestedManyWithoutModInput = {
    create?: XOR<ModDependencyCreateWithoutModInput, ModDependencyUncheckedCreateWithoutModInput> | ModDependencyCreateWithoutModInput[] | ModDependencyUncheckedCreateWithoutModInput[]
    connectOrCreate?: ModDependencyCreateOrConnectWithoutModInput | ModDependencyCreateOrConnectWithoutModInput[]
    createMany?: ModDependencyCreateManyModInputEnvelope
    connect?: ModDependencyWhereUniqueInput | ModDependencyWhereUniqueInput[]
  }

  export type ShaderDependecyUncheckedCreateNestedManyWithoutModInput = {
    create?: XOR<ShaderDependecyCreateWithoutModInput, ShaderDependecyUncheckedCreateWithoutModInput> | ShaderDependecyCreateWithoutModInput[] | ShaderDependecyUncheckedCreateWithoutModInput[]
    connectOrCreate?: ShaderDependecyCreateOrConnectWithoutModInput | ShaderDependecyCreateOrConnectWithoutModInput[]
    createMany?: ShaderDependecyCreateManyModInputEnvelope
    connect?: ShaderDependecyWhereUniqueInput | ShaderDependecyWhereUniqueInput[]
  }

  export type PackUpdateManyWithoutModsNestedInput = {
    create?: XOR<PackCreateWithoutModsInput, PackUncheckedCreateWithoutModsInput> | PackCreateWithoutModsInput[] | PackUncheckedCreateWithoutModsInput[]
    connectOrCreate?: PackCreateOrConnectWithoutModsInput | PackCreateOrConnectWithoutModsInput[]
    upsert?: PackUpsertWithWhereUniqueWithoutModsInput | PackUpsertWithWhereUniqueWithoutModsInput[]
    set?: PackWhereUniqueInput | PackWhereUniqueInput[]
    disconnect?: PackWhereUniqueInput | PackWhereUniqueInput[]
    delete?: PackWhereUniqueInput | PackWhereUniqueInput[]
    connect?: PackWhereUniqueInput | PackWhereUniqueInput[]
    update?: PackUpdateWithWhereUniqueWithoutModsInput | PackUpdateWithWhereUniqueWithoutModsInput[]
    updateMany?: PackUpdateManyWithWhereWithoutModsInput | PackUpdateManyWithWhereWithoutModsInput[]
    deleteMany?: PackScalarWhereInput | PackScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutModsNestedInput = {
    create?: XOR<UserCreateWithoutModsInput, UserUncheckedCreateWithoutModsInput>
    connectOrCreate?: UserCreateOrConnectWithoutModsInput
    upsert?: UserUpsertWithoutModsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutModsInput, UserUpdateWithoutModsInput>, UserUncheckedUpdateWithoutModsInput>
  }

  export type CommentUpdateManyWithoutModNestedInput = {
    create?: XOR<CommentCreateWithoutModInput, CommentUncheckedCreateWithoutModInput> | CommentCreateWithoutModInput[] | CommentUncheckedCreateWithoutModInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutModInput | CommentCreateOrConnectWithoutModInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutModInput | CommentUpsertWithWhereUniqueWithoutModInput[]
    createMany?: CommentCreateManyModInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutModInput | CommentUpdateWithWhereUniqueWithoutModInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutModInput | CommentUpdateManyWithWhereWithoutModInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type ImageUpdateManyWithoutModNestedInput = {
    create?: XOR<ImageCreateWithoutModInput, ImageUncheckedCreateWithoutModInput> | ImageCreateWithoutModInput[] | ImageUncheckedCreateWithoutModInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutModInput | ImageCreateOrConnectWithoutModInput[]
    upsert?: ImageUpsertWithWhereUniqueWithoutModInput | ImageUpsertWithWhereUniqueWithoutModInput[]
    createMany?: ImageCreateManyModInputEnvelope
    set?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    disconnect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    delete?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    update?: ImageUpdateWithWhereUniqueWithoutModInput | ImageUpdateWithWhereUniqueWithoutModInput[]
    updateMany?: ImageUpdateManyWithWhereWithoutModInput | ImageUpdateManyWithWhereWithoutModInput[]
    deleteMany?: ImageScalarWhereInput | ImageScalarWhereInput[]
  }

  export type ConflictUpdateManyWithoutModNestedInput = {
    create?: XOR<ConflictCreateWithoutModInput, ConflictUncheckedCreateWithoutModInput> | ConflictCreateWithoutModInput[] | ConflictUncheckedCreateWithoutModInput[]
    connectOrCreate?: ConflictCreateOrConnectWithoutModInput | ConflictCreateOrConnectWithoutModInput[]
    upsert?: ConflictUpsertWithWhereUniqueWithoutModInput | ConflictUpsertWithWhereUniqueWithoutModInput[]
    createMany?: ConflictCreateManyModInputEnvelope
    set?: ConflictWhereUniqueInput | ConflictWhereUniqueInput[]
    disconnect?: ConflictWhereUniqueInput | ConflictWhereUniqueInput[]
    delete?: ConflictWhereUniqueInput | ConflictWhereUniqueInput[]
    connect?: ConflictWhereUniqueInput | ConflictWhereUniqueInput[]
    update?: ConflictUpdateWithWhereUniqueWithoutModInput | ConflictUpdateWithWhereUniqueWithoutModInput[]
    updateMany?: ConflictUpdateManyWithWhereWithoutModInput | ConflictUpdateManyWithWhereWithoutModInput[]
    deleteMany?: ConflictScalarWhereInput | ConflictScalarWhereInput[]
  }

  export type ConflictUpdateManyWithoutConflictModNestedInput = {
    create?: XOR<ConflictCreateWithoutConflictModInput, ConflictUncheckedCreateWithoutConflictModInput> | ConflictCreateWithoutConflictModInput[] | ConflictUncheckedCreateWithoutConflictModInput[]
    connectOrCreate?: ConflictCreateOrConnectWithoutConflictModInput | ConflictCreateOrConnectWithoutConflictModInput[]
    upsert?: ConflictUpsertWithWhereUniqueWithoutConflictModInput | ConflictUpsertWithWhereUniqueWithoutConflictModInput[]
    createMany?: ConflictCreateManyConflictModInputEnvelope
    set?: ConflictWhereUniqueInput | ConflictWhereUniqueInput[]
    disconnect?: ConflictWhereUniqueInput | ConflictWhereUniqueInput[]
    delete?: ConflictWhereUniqueInput | ConflictWhereUniqueInput[]
    connect?: ConflictWhereUniqueInput | ConflictWhereUniqueInput[]
    update?: ConflictUpdateWithWhereUniqueWithoutConflictModInput | ConflictUpdateWithWhereUniqueWithoutConflictModInput[]
    updateMany?: ConflictUpdateManyWithWhereWithoutConflictModInput | ConflictUpdateManyWithWhereWithoutConflictModInput[]
    deleteMany?: ConflictScalarWhereInput | ConflictScalarWhereInput[]
  }

  export type ModDependencyUpdateManyWithoutDependencyNestedInput = {
    create?: XOR<ModDependencyCreateWithoutDependencyInput, ModDependencyUncheckedCreateWithoutDependencyInput> | ModDependencyCreateWithoutDependencyInput[] | ModDependencyUncheckedCreateWithoutDependencyInput[]
    connectOrCreate?: ModDependencyCreateOrConnectWithoutDependencyInput | ModDependencyCreateOrConnectWithoutDependencyInput[]
    upsert?: ModDependencyUpsertWithWhereUniqueWithoutDependencyInput | ModDependencyUpsertWithWhereUniqueWithoutDependencyInput[]
    createMany?: ModDependencyCreateManyDependencyInputEnvelope
    set?: ModDependencyWhereUniqueInput | ModDependencyWhereUniqueInput[]
    disconnect?: ModDependencyWhereUniqueInput | ModDependencyWhereUniqueInput[]
    delete?: ModDependencyWhereUniqueInput | ModDependencyWhereUniqueInput[]
    connect?: ModDependencyWhereUniqueInput | ModDependencyWhereUniqueInput[]
    update?: ModDependencyUpdateWithWhereUniqueWithoutDependencyInput | ModDependencyUpdateWithWhereUniqueWithoutDependencyInput[]
    updateMany?: ModDependencyUpdateManyWithWhereWithoutDependencyInput | ModDependencyUpdateManyWithWhereWithoutDependencyInput[]
    deleteMany?: ModDependencyScalarWhereInput | ModDependencyScalarWhereInput[]
  }

  export type ModDependencyUpdateManyWithoutModNestedInput = {
    create?: XOR<ModDependencyCreateWithoutModInput, ModDependencyUncheckedCreateWithoutModInput> | ModDependencyCreateWithoutModInput[] | ModDependencyUncheckedCreateWithoutModInput[]
    connectOrCreate?: ModDependencyCreateOrConnectWithoutModInput | ModDependencyCreateOrConnectWithoutModInput[]
    upsert?: ModDependencyUpsertWithWhereUniqueWithoutModInput | ModDependencyUpsertWithWhereUniqueWithoutModInput[]
    createMany?: ModDependencyCreateManyModInputEnvelope
    set?: ModDependencyWhereUniqueInput | ModDependencyWhereUniqueInput[]
    disconnect?: ModDependencyWhereUniqueInput | ModDependencyWhereUniqueInput[]
    delete?: ModDependencyWhereUniqueInput | ModDependencyWhereUniqueInput[]
    connect?: ModDependencyWhereUniqueInput | ModDependencyWhereUniqueInput[]
    update?: ModDependencyUpdateWithWhereUniqueWithoutModInput | ModDependencyUpdateWithWhereUniqueWithoutModInput[]
    updateMany?: ModDependencyUpdateManyWithWhereWithoutModInput | ModDependencyUpdateManyWithWhereWithoutModInput[]
    deleteMany?: ModDependencyScalarWhereInput | ModDependencyScalarWhereInput[]
  }

  export type ShaderDependecyUpdateManyWithoutModNestedInput = {
    create?: XOR<ShaderDependecyCreateWithoutModInput, ShaderDependecyUncheckedCreateWithoutModInput> | ShaderDependecyCreateWithoutModInput[] | ShaderDependecyUncheckedCreateWithoutModInput[]
    connectOrCreate?: ShaderDependecyCreateOrConnectWithoutModInput | ShaderDependecyCreateOrConnectWithoutModInput[]
    upsert?: ShaderDependecyUpsertWithWhereUniqueWithoutModInput | ShaderDependecyUpsertWithWhereUniqueWithoutModInput[]
    createMany?: ShaderDependecyCreateManyModInputEnvelope
    set?: ShaderDependecyWhereUniqueInput | ShaderDependecyWhereUniqueInput[]
    disconnect?: ShaderDependecyWhereUniqueInput | ShaderDependecyWhereUniqueInput[]
    delete?: ShaderDependecyWhereUniqueInput | ShaderDependecyWhereUniqueInput[]
    connect?: ShaderDependecyWhereUniqueInput | ShaderDependecyWhereUniqueInput[]
    update?: ShaderDependecyUpdateWithWhereUniqueWithoutModInput | ShaderDependecyUpdateWithWhereUniqueWithoutModInput[]
    updateMany?: ShaderDependecyUpdateManyWithWhereWithoutModInput | ShaderDependecyUpdateManyWithWhereWithoutModInput[]
    deleteMany?: ShaderDependecyScalarWhereInput | ShaderDependecyScalarWhereInput[]
  }

  export type ImageUpdateOneWithoutModsPrincipalNestedInput = {
    create?: XOR<ImageCreateWithoutModsPrincipalInput, ImageUncheckedCreateWithoutModsPrincipalInput>
    connectOrCreate?: ImageCreateOrConnectWithoutModsPrincipalInput
    upsert?: ImageUpsertWithoutModsPrincipalInput
    disconnect?: ImageWhereInput | boolean
    delete?: ImageWhereInput | boolean
    connect?: ImageWhereUniqueInput
    update?: XOR<XOR<ImageUpdateToOneWithWhereWithoutModsPrincipalInput, ImageUpdateWithoutModsPrincipalInput>, ImageUncheckedUpdateWithoutModsPrincipalInput>
  }

  export type PackUncheckedUpdateManyWithoutModsNestedInput = {
    create?: XOR<PackCreateWithoutModsInput, PackUncheckedCreateWithoutModsInput> | PackCreateWithoutModsInput[] | PackUncheckedCreateWithoutModsInput[]
    connectOrCreate?: PackCreateOrConnectWithoutModsInput | PackCreateOrConnectWithoutModsInput[]
    upsert?: PackUpsertWithWhereUniqueWithoutModsInput | PackUpsertWithWhereUniqueWithoutModsInput[]
    set?: PackWhereUniqueInput | PackWhereUniqueInput[]
    disconnect?: PackWhereUniqueInput | PackWhereUniqueInput[]
    delete?: PackWhereUniqueInput | PackWhereUniqueInput[]
    connect?: PackWhereUniqueInput | PackWhereUniqueInput[]
    update?: PackUpdateWithWhereUniqueWithoutModsInput | PackUpdateWithWhereUniqueWithoutModsInput[]
    updateMany?: PackUpdateManyWithWhereWithoutModsInput | PackUpdateManyWithWhereWithoutModsInput[]
    deleteMany?: PackScalarWhereInput | PackScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutModNestedInput = {
    create?: XOR<CommentCreateWithoutModInput, CommentUncheckedCreateWithoutModInput> | CommentCreateWithoutModInput[] | CommentUncheckedCreateWithoutModInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutModInput | CommentCreateOrConnectWithoutModInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutModInput | CommentUpsertWithWhereUniqueWithoutModInput[]
    createMany?: CommentCreateManyModInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutModInput | CommentUpdateWithWhereUniqueWithoutModInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutModInput | CommentUpdateManyWithWhereWithoutModInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type ImageUncheckedUpdateManyWithoutModNestedInput = {
    create?: XOR<ImageCreateWithoutModInput, ImageUncheckedCreateWithoutModInput> | ImageCreateWithoutModInput[] | ImageUncheckedCreateWithoutModInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutModInput | ImageCreateOrConnectWithoutModInput[]
    upsert?: ImageUpsertWithWhereUniqueWithoutModInput | ImageUpsertWithWhereUniqueWithoutModInput[]
    createMany?: ImageCreateManyModInputEnvelope
    set?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    disconnect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    delete?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    update?: ImageUpdateWithWhereUniqueWithoutModInput | ImageUpdateWithWhereUniqueWithoutModInput[]
    updateMany?: ImageUpdateManyWithWhereWithoutModInput | ImageUpdateManyWithWhereWithoutModInput[]
    deleteMany?: ImageScalarWhereInput | ImageScalarWhereInput[]
  }

  export type ConflictUncheckedUpdateManyWithoutModNestedInput = {
    create?: XOR<ConflictCreateWithoutModInput, ConflictUncheckedCreateWithoutModInput> | ConflictCreateWithoutModInput[] | ConflictUncheckedCreateWithoutModInput[]
    connectOrCreate?: ConflictCreateOrConnectWithoutModInput | ConflictCreateOrConnectWithoutModInput[]
    upsert?: ConflictUpsertWithWhereUniqueWithoutModInput | ConflictUpsertWithWhereUniqueWithoutModInput[]
    createMany?: ConflictCreateManyModInputEnvelope
    set?: ConflictWhereUniqueInput | ConflictWhereUniqueInput[]
    disconnect?: ConflictWhereUniqueInput | ConflictWhereUniqueInput[]
    delete?: ConflictWhereUniqueInput | ConflictWhereUniqueInput[]
    connect?: ConflictWhereUniqueInput | ConflictWhereUniqueInput[]
    update?: ConflictUpdateWithWhereUniqueWithoutModInput | ConflictUpdateWithWhereUniqueWithoutModInput[]
    updateMany?: ConflictUpdateManyWithWhereWithoutModInput | ConflictUpdateManyWithWhereWithoutModInput[]
    deleteMany?: ConflictScalarWhereInput | ConflictScalarWhereInput[]
  }

  export type ConflictUncheckedUpdateManyWithoutConflictModNestedInput = {
    create?: XOR<ConflictCreateWithoutConflictModInput, ConflictUncheckedCreateWithoutConflictModInput> | ConflictCreateWithoutConflictModInput[] | ConflictUncheckedCreateWithoutConflictModInput[]
    connectOrCreate?: ConflictCreateOrConnectWithoutConflictModInput | ConflictCreateOrConnectWithoutConflictModInput[]
    upsert?: ConflictUpsertWithWhereUniqueWithoutConflictModInput | ConflictUpsertWithWhereUniqueWithoutConflictModInput[]
    createMany?: ConflictCreateManyConflictModInputEnvelope
    set?: ConflictWhereUniqueInput | ConflictWhereUniqueInput[]
    disconnect?: ConflictWhereUniqueInput | ConflictWhereUniqueInput[]
    delete?: ConflictWhereUniqueInput | ConflictWhereUniqueInput[]
    connect?: ConflictWhereUniqueInput | ConflictWhereUniqueInput[]
    update?: ConflictUpdateWithWhereUniqueWithoutConflictModInput | ConflictUpdateWithWhereUniqueWithoutConflictModInput[]
    updateMany?: ConflictUpdateManyWithWhereWithoutConflictModInput | ConflictUpdateManyWithWhereWithoutConflictModInput[]
    deleteMany?: ConflictScalarWhereInput | ConflictScalarWhereInput[]
  }

  export type ModDependencyUncheckedUpdateManyWithoutDependencyNestedInput = {
    create?: XOR<ModDependencyCreateWithoutDependencyInput, ModDependencyUncheckedCreateWithoutDependencyInput> | ModDependencyCreateWithoutDependencyInput[] | ModDependencyUncheckedCreateWithoutDependencyInput[]
    connectOrCreate?: ModDependencyCreateOrConnectWithoutDependencyInput | ModDependencyCreateOrConnectWithoutDependencyInput[]
    upsert?: ModDependencyUpsertWithWhereUniqueWithoutDependencyInput | ModDependencyUpsertWithWhereUniqueWithoutDependencyInput[]
    createMany?: ModDependencyCreateManyDependencyInputEnvelope
    set?: ModDependencyWhereUniqueInput | ModDependencyWhereUniqueInput[]
    disconnect?: ModDependencyWhereUniqueInput | ModDependencyWhereUniqueInput[]
    delete?: ModDependencyWhereUniqueInput | ModDependencyWhereUniqueInput[]
    connect?: ModDependencyWhereUniqueInput | ModDependencyWhereUniqueInput[]
    update?: ModDependencyUpdateWithWhereUniqueWithoutDependencyInput | ModDependencyUpdateWithWhereUniqueWithoutDependencyInput[]
    updateMany?: ModDependencyUpdateManyWithWhereWithoutDependencyInput | ModDependencyUpdateManyWithWhereWithoutDependencyInput[]
    deleteMany?: ModDependencyScalarWhereInput | ModDependencyScalarWhereInput[]
  }

  export type ModDependencyUncheckedUpdateManyWithoutModNestedInput = {
    create?: XOR<ModDependencyCreateWithoutModInput, ModDependencyUncheckedCreateWithoutModInput> | ModDependencyCreateWithoutModInput[] | ModDependencyUncheckedCreateWithoutModInput[]
    connectOrCreate?: ModDependencyCreateOrConnectWithoutModInput | ModDependencyCreateOrConnectWithoutModInput[]
    upsert?: ModDependencyUpsertWithWhereUniqueWithoutModInput | ModDependencyUpsertWithWhereUniqueWithoutModInput[]
    createMany?: ModDependencyCreateManyModInputEnvelope
    set?: ModDependencyWhereUniqueInput | ModDependencyWhereUniqueInput[]
    disconnect?: ModDependencyWhereUniqueInput | ModDependencyWhereUniqueInput[]
    delete?: ModDependencyWhereUniqueInput | ModDependencyWhereUniqueInput[]
    connect?: ModDependencyWhereUniqueInput | ModDependencyWhereUniqueInput[]
    update?: ModDependencyUpdateWithWhereUniqueWithoutModInput | ModDependencyUpdateWithWhereUniqueWithoutModInput[]
    updateMany?: ModDependencyUpdateManyWithWhereWithoutModInput | ModDependencyUpdateManyWithWhereWithoutModInput[]
    deleteMany?: ModDependencyScalarWhereInput | ModDependencyScalarWhereInput[]
  }

  export type ShaderDependecyUncheckedUpdateManyWithoutModNestedInput = {
    create?: XOR<ShaderDependecyCreateWithoutModInput, ShaderDependecyUncheckedCreateWithoutModInput> | ShaderDependecyCreateWithoutModInput[] | ShaderDependecyUncheckedCreateWithoutModInput[]
    connectOrCreate?: ShaderDependecyCreateOrConnectWithoutModInput | ShaderDependecyCreateOrConnectWithoutModInput[]
    upsert?: ShaderDependecyUpsertWithWhereUniqueWithoutModInput | ShaderDependecyUpsertWithWhereUniqueWithoutModInput[]
    createMany?: ShaderDependecyCreateManyModInputEnvelope
    set?: ShaderDependecyWhereUniqueInput | ShaderDependecyWhereUniqueInput[]
    disconnect?: ShaderDependecyWhereUniqueInput | ShaderDependecyWhereUniqueInput[]
    delete?: ShaderDependecyWhereUniqueInput | ShaderDependecyWhereUniqueInput[]
    connect?: ShaderDependecyWhereUniqueInput | ShaderDependecyWhereUniqueInput[]
    update?: ShaderDependecyUpdateWithWhereUniqueWithoutModInput | ShaderDependecyUpdateWithWhereUniqueWithoutModInput[]
    updateMany?: ShaderDependecyUpdateManyWithWhereWithoutModInput | ShaderDependecyUpdateManyWithWhereWithoutModInput[]
    deleteMany?: ShaderDependecyScalarWhereInput | ShaderDependecyScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCommentsInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
    connect?: UserWhereUniqueInput
  }

  export type PackCreateNestedOneWithoutCommentsInput = {
    create?: XOR<PackCreateWithoutCommentsInput, PackUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: PackCreateOrConnectWithoutCommentsInput
    connect?: PackWhereUniqueInput
  }

  export type ShaderCreateNestedOneWithoutCommentsInput = {
    create?: XOR<ShaderCreateWithoutCommentsInput, ShaderUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: ShaderCreateOrConnectWithoutCommentsInput
    connect?: ShaderWhereUniqueInput
  }

  export type ModCreateNestedOneWithoutCommentsInput = {
    create?: XOR<ModCreateWithoutCommentsInput, ModUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: ModCreateOrConnectWithoutCommentsInput
    connect?: ModWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
    upsert?: UserUpsertWithoutCommentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCommentsInput, UserUpdateWithoutCommentsInput>, UserUncheckedUpdateWithoutCommentsInput>
  }

  export type PackUpdateOneWithoutCommentsNestedInput = {
    create?: XOR<PackCreateWithoutCommentsInput, PackUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: PackCreateOrConnectWithoutCommentsInput
    upsert?: PackUpsertWithoutCommentsInput
    disconnect?: PackWhereInput | boolean
    delete?: PackWhereInput | boolean
    connect?: PackWhereUniqueInput
    update?: XOR<XOR<PackUpdateToOneWithWhereWithoutCommentsInput, PackUpdateWithoutCommentsInput>, PackUncheckedUpdateWithoutCommentsInput>
  }

  export type ShaderUpdateOneWithoutCommentsNestedInput = {
    create?: XOR<ShaderCreateWithoutCommentsInput, ShaderUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: ShaderCreateOrConnectWithoutCommentsInput
    upsert?: ShaderUpsertWithoutCommentsInput
    disconnect?: ShaderWhereInput | boolean
    delete?: ShaderWhereInput | boolean
    connect?: ShaderWhereUniqueInput
    update?: XOR<XOR<ShaderUpdateToOneWithWhereWithoutCommentsInput, ShaderUpdateWithoutCommentsInput>, ShaderUncheckedUpdateWithoutCommentsInput>
  }

  export type ModUpdateOneWithoutCommentsNestedInput = {
    create?: XOR<ModCreateWithoutCommentsInput, ModUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: ModCreateOrConnectWithoutCommentsInput
    upsert?: ModUpsertWithoutCommentsInput
    disconnect?: ModWhereInput | boolean
    delete?: ModWhereInput | boolean
    connect?: ModWhereUniqueInput
    update?: XOR<XOR<ModUpdateToOneWithWhereWithoutCommentsInput, ModUpdateWithoutCommentsInput>, ModUncheckedUpdateWithoutCommentsInput>
  }

  export type ModCreateNestedOneWithoutImagesInput = {
    create?: XOR<ModCreateWithoutImagesInput, ModUncheckedCreateWithoutImagesInput>
    connectOrCreate?: ModCreateOrConnectWithoutImagesInput
    connect?: ModWhereUniqueInput
  }

  export type ShaderCreateNestedOneWithoutImagesInput = {
    create?: XOR<ShaderCreateWithoutImagesInput, ShaderUncheckedCreateWithoutImagesInput>
    connectOrCreate?: ShaderCreateOrConnectWithoutImagesInput
    connect?: ShaderWhereUniqueInput
  }

  export type PackCreateNestedOneWithoutImagesInput = {
    create?: XOR<PackCreateWithoutImagesInput, PackUncheckedCreateWithoutImagesInput>
    connectOrCreate?: PackCreateOrConnectWithoutImagesInput
    connect?: PackWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutImageInput = {
    create?: XOR<UserCreateWithoutImageInput, UserUncheckedCreateWithoutImageInput> | UserCreateWithoutImageInput[] | UserUncheckedCreateWithoutImageInput[]
    connectOrCreate?: UserCreateOrConnectWithoutImageInput | UserCreateOrConnectWithoutImageInput[]
    createMany?: UserCreateManyImageInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type PackCreateNestedManyWithoutPrincipalImageInput = {
    create?: XOR<PackCreateWithoutPrincipalImageInput, PackUncheckedCreateWithoutPrincipalImageInput> | PackCreateWithoutPrincipalImageInput[] | PackUncheckedCreateWithoutPrincipalImageInput[]
    connectOrCreate?: PackCreateOrConnectWithoutPrincipalImageInput | PackCreateOrConnectWithoutPrincipalImageInput[]
    createMany?: PackCreateManyPrincipalImageInputEnvelope
    connect?: PackWhereUniqueInput | PackWhereUniqueInput[]
  }

  export type ShaderCreateNestedManyWithoutPrincipalImageInput = {
    create?: XOR<ShaderCreateWithoutPrincipalImageInput, ShaderUncheckedCreateWithoutPrincipalImageInput> | ShaderCreateWithoutPrincipalImageInput[] | ShaderUncheckedCreateWithoutPrincipalImageInput[]
    connectOrCreate?: ShaderCreateOrConnectWithoutPrincipalImageInput | ShaderCreateOrConnectWithoutPrincipalImageInput[]
    createMany?: ShaderCreateManyPrincipalImageInputEnvelope
    connect?: ShaderWhereUniqueInput | ShaderWhereUniqueInput[]
  }

  export type ModCreateNestedManyWithoutPrincipalImageInput = {
    create?: XOR<ModCreateWithoutPrincipalImageInput, ModUncheckedCreateWithoutPrincipalImageInput> | ModCreateWithoutPrincipalImageInput[] | ModUncheckedCreateWithoutPrincipalImageInput[]
    connectOrCreate?: ModCreateOrConnectWithoutPrincipalImageInput | ModCreateOrConnectWithoutPrincipalImageInput[]
    createMany?: ModCreateManyPrincipalImageInputEnvelope
    connect?: ModWhereUniqueInput | ModWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutImageInput = {
    create?: XOR<UserCreateWithoutImageInput, UserUncheckedCreateWithoutImageInput> | UserCreateWithoutImageInput[] | UserUncheckedCreateWithoutImageInput[]
    connectOrCreate?: UserCreateOrConnectWithoutImageInput | UserCreateOrConnectWithoutImageInput[]
    createMany?: UserCreateManyImageInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type PackUncheckedCreateNestedManyWithoutPrincipalImageInput = {
    create?: XOR<PackCreateWithoutPrincipalImageInput, PackUncheckedCreateWithoutPrincipalImageInput> | PackCreateWithoutPrincipalImageInput[] | PackUncheckedCreateWithoutPrincipalImageInput[]
    connectOrCreate?: PackCreateOrConnectWithoutPrincipalImageInput | PackCreateOrConnectWithoutPrincipalImageInput[]
    createMany?: PackCreateManyPrincipalImageInputEnvelope
    connect?: PackWhereUniqueInput | PackWhereUniqueInput[]
  }

  export type ShaderUncheckedCreateNestedManyWithoutPrincipalImageInput = {
    create?: XOR<ShaderCreateWithoutPrincipalImageInput, ShaderUncheckedCreateWithoutPrincipalImageInput> | ShaderCreateWithoutPrincipalImageInput[] | ShaderUncheckedCreateWithoutPrincipalImageInput[]
    connectOrCreate?: ShaderCreateOrConnectWithoutPrincipalImageInput | ShaderCreateOrConnectWithoutPrincipalImageInput[]
    createMany?: ShaderCreateManyPrincipalImageInputEnvelope
    connect?: ShaderWhereUniqueInput | ShaderWhereUniqueInput[]
  }

  export type ModUncheckedCreateNestedManyWithoutPrincipalImageInput = {
    create?: XOR<ModCreateWithoutPrincipalImageInput, ModUncheckedCreateWithoutPrincipalImageInput> | ModCreateWithoutPrincipalImageInput[] | ModUncheckedCreateWithoutPrincipalImageInput[]
    connectOrCreate?: ModCreateOrConnectWithoutPrincipalImageInput | ModCreateOrConnectWithoutPrincipalImageInput[]
    createMany?: ModCreateManyPrincipalImageInputEnvelope
    connect?: ModWhereUniqueInput | ModWhereUniqueInput[]
  }

  export type ModUpdateOneWithoutImagesNestedInput = {
    create?: XOR<ModCreateWithoutImagesInput, ModUncheckedCreateWithoutImagesInput>
    connectOrCreate?: ModCreateOrConnectWithoutImagesInput
    upsert?: ModUpsertWithoutImagesInput
    disconnect?: ModWhereInput | boolean
    delete?: ModWhereInput | boolean
    connect?: ModWhereUniqueInput
    update?: XOR<XOR<ModUpdateToOneWithWhereWithoutImagesInput, ModUpdateWithoutImagesInput>, ModUncheckedUpdateWithoutImagesInput>
  }

  export type ShaderUpdateOneWithoutImagesNestedInput = {
    create?: XOR<ShaderCreateWithoutImagesInput, ShaderUncheckedCreateWithoutImagesInput>
    connectOrCreate?: ShaderCreateOrConnectWithoutImagesInput
    upsert?: ShaderUpsertWithoutImagesInput
    disconnect?: ShaderWhereInput | boolean
    delete?: ShaderWhereInput | boolean
    connect?: ShaderWhereUniqueInput
    update?: XOR<XOR<ShaderUpdateToOneWithWhereWithoutImagesInput, ShaderUpdateWithoutImagesInput>, ShaderUncheckedUpdateWithoutImagesInput>
  }

  export type PackUpdateOneWithoutImagesNestedInput = {
    create?: XOR<PackCreateWithoutImagesInput, PackUncheckedCreateWithoutImagesInput>
    connectOrCreate?: PackCreateOrConnectWithoutImagesInput
    upsert?: PackUpsertWithoutImagesInput
    disconnect?: PackWhereInput | boolean
    delete?: PackWhereInput | boolean
    connect?: PackWhereUniqueInput
    update?: XOR<XOR<PackUpdateToOneWithWhereWithoutImagesInput, PackUpdateWithoutImagesInput>, PackUncheckedUpdateWithoutImagesInput>
  }

  export type UserUpdateManyWithoutImageNestedInput = {
    create?: XOR<UserCreateWithoutImageInput, UserUncheckedCreateWithoutImageInput> | UserCreateWithoutImageInput[] | UserUncheckedCreateWithoutImageInput[]
    connectOrCreate?: UserCreateOrConnectWithoutImageInput | UserCreateOrConnectWithoutImageInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutImageInput | UserUpsertWithWhereUniqueWithoutImageInput[]
    createMany?: UserCreateManyImageInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutImageInput | UserUpdateWithWhereUniqueWithoutImageInput[]
    updateMany?: UserUpdateManyWithWhereWithoutImageInput | UserUpdateManyWithWhereWithoutImageInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type PackUpdateManyWithoutPrincipalImageNestedInput = {
    create?: XOR<PackCreateWithoutPrincipalImageInput, PackUncheckedCreateWithoutPrincipalImageInput> | PackCreateWithoutPrincipalImageInput[] | PackUncheckedCreateWithoutPrincipalImageInput[]
    connectOrCreate?: PackCreateOrConnectWithoutPrincipalImageInput | PackCreateOrConnectWithoutPrincipalImageInput[]
    upsert?: PackUpsertWithWhereUniqueWithoutPrincipalImageInput | PackUpsertWithWhereUniqueWithoutPrincipalImageInput[]
    createMany?: PackCreateManyPrincipalImageInputEnvelope
    set?: PackWhereUniqueInput | PackWhereUniqueInput[]
    disconnect?: PackWhereUniqueInput | PackWhereUniqueInput[]
    delete?: PackWhereUniqueInput | PackWhereUniqueInput[]
    connect?: PackWhereUniqueInput | PackWhereUniqueInput[]
    update?: PackUpdateWithWhereUniqueWithoutPrincipalImageInput | PackUpdateWithWhereUniqueWithoutPrincipalImageInput[]
    updateMany?: PackUpdateManyWithWhereWithoutPrincipalImageInput | PackUpdateManyWithWhereWithoutPrincipalImageInput[]
    deleteMany?: PackScalarWhereInput | PackScalarWhereInput[]
  }

  export type ShaderUpdateManyWithoutPrincipalImageNestedInput = {
    create?: XOR<ShaderCreateWithoutPrincipalImageInput, ShaderUncheckedCreateWithoutPrincipalImageInput> | ShaderCreateWithoutPrincipalImageInput[] | ShaderUncheckedCreateWithoutPrincipalImageInput[]
    connectOrCreate?: ShaderCreateOrConnectWithoutPrincipalImageInput | ShaderCreateOrConnectWithoutPrincipalImageInput[]
    upsert?: ShaderUpsertWithWhereUniqueWithoutPrincipalImageInput | ShaderUpsertWithWhereUniqueWithoutPrincipalImageInput[]
    createMany?: ShaderCreateManyPrincipalImageInputEnvelope
    set?: ShaderWhereUniqueInput | ShaderWhereUniqueInput[]
    disconnect?: ShaderWhereUniqueInput | ShaderWhereUniqueInput[]
    delete?: ShaderWhereUniqueInput | ShaderWhereUniqueInput[]
    connect?: ShaderWhereUniqueInput | ShaderWhereUniqueInput[]
    update?: ShaderUpdateWithWhereUniqueWithoutPrincipalImageInput | ShaderUpdateWithWhereUniqueWithoutPrincipalImageInput[]
    updateMany?: ShaderUpdateManyWithWhereWithoutPrincipalImageInput | ShaderUpdateManyWithWhereWithoutPrincipalImageInput[]
    deleteMany?: ShaderScalarWhereInput | ShaderScalarWhereInput[]
  }

  export type ModUpdateManyWithoutPrincipalImageNestedInput = {
    create?: XOR<ModCreateWithoutPrincipalImageInput, ModUncheckedCreateWithoutPrincipalImageInput> | ModCreateWithoutPrincipalImageInput[] | ModUncheckedCreateWithoutPrincipalImageInput[]
    connectOrCreate?: ModCreateOrConnectWithoutPrincipalImageInput | ModCreateOrConnectWithoutPrincipalImageInput[]
    upsert?: ModUpsertWithWhereUniqueWithoutPrincipalImageInput | ModUpsertWithWhereUniqueWithoutPrincipalImageInput[]
    createMany?: ModCreateManyPrincipalImageInputEnvelope
    set?: ModWhereUniqueInput | ModWhereUniqueInput[]
    disconnect?: ModWhereUniqueInput | ModWhereUniqueInput[]
    delete?: ModWhereUniqueInput | ModWhereUniqueInput[]
    connect?: ModWhereUniqueInput | ModWhereUniqueInput[]
    update?: ModUpdateWithWhereUniqueWithoutPrincipalImageInput | ModUpdateWithWhereUniqueWithoutPrincipalImageInput[]
    updateMany?: ModUpdateManyWithWhereWithoutPrincipalImageInput | ModUpdateManyWithWhereWithoutPrincipalImageInput[]
    deleteMany?: ModScalarWhereInput | ModScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutImageNestedInput = {
    create?: XOR<UserCreateWithoutImageInput, UserUncheckedCreateWithoutImageInput> | UserCreateWithoutImageInput[] | UserUncheckedCreateWithoutImageInput[]
    connectOrCreate?: UserCreateOrConnectWithoutImageInput | UserCreateOrConnectWithoutImageInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutImageInput | UserUpsertWithWhereUniqueWithoutImageInput[]
    createMany?: UserCreateManyImageInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutImageInput | UserUpdateWithWhereUniqueWithoutImageInput[]
    updateMany?: UserUpdateManyWithWhereWithoutImageInput | UserUpdateManyWithWhereWithoutImageInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type PackUncheckedUpdateManyWithoutPrincipalImageNestedInput = {
    create?: XOR<PackCreateWithoutPrincipalImageInput, PackUncheckedCreateWithoutPrincipalImageInput> | PackCreateWithoutPrincipalImageInput[] | PackUncheckedCreateWithoutPrincipalImageInput[]
    connectOrCreate?: PackCreateOrConnectWithoutPrincipalImageInput | PackCreateOrConnectWithoutPrincipalImageInput[]
    upsert?: PackUpsertWithWhereUniqueWithoutPrincipalImageInput | PackUpsertWithWhereUniqueWithoutPrincipalImageInput[]
    createMany?: PackCreateManyPrincipalImageInputEnvelope
    set?: PackWhereUniqueInput | PackWhereUniqueInput[]
    disconnect?: PackWhereUniqueInput | PackWhereUniqueInput[]
    delete?: PackWhereUniqueInput | PackWhereUniqueInput[]
    connect?: PackWhereUniqueInput | PackWhereUniqueInput[]
    update?: PackUpdateWithWhereUniqueWithoutPrincipalImageInput | PackUpdateWithWhereUniqueWithoutPrincipalImageInput[]
    updateMany?: PackUpdateManyWithWhereWithoutPrincipalImageInput | PackUpdateManyWithWhereWithoutPrincipalImageInput[]
    deleteMany?: PackScalarWhereInput | PackScalarWhereInput[]
  }

  export type ShaderUncheckedUpdateManyWithoutPrincipalImageNestedInput = {
    create?: XOR<ShaderCreateWithoutPrincipalImageInput, ShaderUncheckedCreateWithoutPrincipalImageInput> | ShaderCreateWithoutPrincipalImageInput[] | ShaderUncheckedCreateWithoutPrincipalImageInput[]
    connectOrCreate?: ShaderCreateOrConnectWithoutPrincipalImageInput | ShaderCreateOrConnectWithoutPrincipalImageInput[]
    upsert?: ShaderUpsertWithWhereUniqueWithoutPrincipalImageInput | ShaderUpsertWithWhereUniqueWithoutPrincipalImageInput[]
    createMany?: ShaderCreateManyPrincipalImageInputEnvelope
    set?: ShaderWhereUniqueInput | ShaderWhereUniqueInput[]
    disconnect?: ShaderWhereUniqueInput | ShaderWhereUniqueInput[]
    delete?: ShaderWhereUniqueInput | ShaderWhereUniqueInput[]
    connect?: ShaderWhereUniqueInput | ShaderWhereUniqueInput[]
    update?: ShaderUpdateWithWhereUniqueWithoutPrincipalImageInput | ShaderUpdateWithWhereUniqueWithoutPrincipalImageInput[]
    updateMany?: ShaderUpdateManyWithWhereWithoutPrincipalImageInput | ShaderUpdateManyWithWhereWithoutPrincipalImageInput[]
    deleteMany?: ShaderScalarWhereInput | ShaderScalarWhereInput[]
  }

  export type ModUncheckedUpdateManyWithoutPrincipalImageNestedInput = {
    create?: XOR<ModCreateWithoutPrincipalImageInput, ModUncheckedCreateWithoutPrincipalImageInput> | ModCreateWithoutPrincipalImageInput[] | ModUncheckedCreateWithoutPrincipalImageInput[]
    connectOrCreate?: ModCreateOrConnectWithoutPrincipalImageInput | ModCreateOrConnectWithoutPrincipalImageInput[]
    upsert?: ModUpsertWithWhereUniqueWithoutPrincipalImageInput | ModUpsertWithWhereUniqueWithoutPrincipalImageInput[]
    createMany?: ModCreateManyPrincipalImageInputEnvelope
    set?: ModWhereUniqueInput | ModWhereUniqueInput[]
    disconnect?: ModWhereUniqueInput | ModWhereUniqueInput[]
    delete?: ModWhereUniqueInput | ModWhereUniqueInput[]
    connect?: ModWhereUniqueInput | ModWhereUniqueInput[]
    update?: ModUpdateWithWhereUniqueWithoutPrincipalImageInput | ModUpdateWithWhereUniqueWithoutPrincipalImageInput[]
    updateMany?: ModUpdateManyWithWhereWithoutPrincipalImageInput | ModUpdateManyWithWhereWithoutPrincipalImageInput[]
    deleteMany?: ModScalarWhereInput | ModScalarWhereInput[]
  }

  export type ShaderCreateNestedOneWithoutConflictsInput = {
    create?: XOR<ShaderCreateWithoutConflictsInput, ShaderUncheckedCreateWithoutConflictsInput>
    connectOrCreate?: ShaderCreateOrConnectWithoutConflictsInput
    connect?: ShaderWhereUniqueInput
  }

  export type ModCreateNestedOneWithoutConflictsFromInput = {
    create?: XOR<ModCreateWithoutConflictsFromInput, ModUncheckedCreateWithoutConflictsFromInput>
    connectOrCreate?: ModCreateOrConnectWithoutConflictsFromInput
    connect?: ModWhereUniqueInput
  }

  export type ModCreateNestedOneWithoutConflictsToInput = {
    create?: XOR<ModCreateWithoutConflictsToInput, ModUncheckedCreateWithoutConflictsToInput>
    connectOrCreate?: ModCreateOrConnectWithoutConflictsToInput
    connect?: ModWhereUniqueInput
  }

  export type ShaderUpdateOneWithoutConflictsNestedInput = {
    create?: XOR<ShaderCreateWithoutConflictsInput, ShaderUncheckedCreateWithoutConflictsInput>
    connectOrCreate?: ShaderCreateOrConnectWithoutConflictsInput
    upsert?: ShaderUpsertWithoutConflictsInput
    disconnect?: ShaderWhereInput | boolean
    delete?: ShaderWhereInput | boolean
    connect?: ShaderWhereUniqueInput
    update?: XOR<XOR<ShaderUpdateToOneWithWhereWithoutConflictsInput, ShaderUpdateWithoutConflictsInput>, ShaderUncheckedUpdateWithoutConflictsInput>
  }

  export type ModUpdateOneRequiredWithoutConflictsFromNestedInput = {
    create?: XOR<ModCreateWithoutConflictsFromInput, ModUncheckedCreateWithoutConflictsFromInput>
    connectOrCreate?: ModCreateOrConnectWithoutConflictsFromInput
    upsert?: ModUpsertWithoutConflictsFromInput
    connect?: ModWhereUniqueInput
    update?: XOR<XOR<ModUpdateToOneWithWhereWithoutConflictsFromInput, ModUpdateWithoutConflictsFromInput>, ModUncheckedUpdateWithoutConflictsFromInput>
  }

  export type ModUpdateOneWithoutConflictsToNestedInput = {
    create?: XOR<ModCreateWithoutConflictsToInput, ModUncheckedCreateWithoutConflictsToInput>
    connectOrCreate?: ModCreateOrConnectWithoutConflictsToInput
    upsert?: ModUpsertWithoutConflictsToInput
    disconnect?: ModWhereInput | boolean
    delete?: ModWhereInput | boolean
    connect?: ModWhereUniqueInput
    update?: XOR<XOR<ModUpdateToOneWithWhereWithoutConflictsToInput, ModUpdateWithoutConflictsToInput>, ModUncheckedUpdateWithoutConflictsToInput>
  }

  export type ModCreateNestedOneWithoutModDependenciesInput = {
    create?: XOR<ModCreateWithoutModDependenciesInput, ModUncheckedCreateWithoutModDependenciesInput>
    connectOrCreate?: ModCreateOrConnectWithoutModDependenciesInput
    connect?: ModWhereUniqueInput
  }

  export type ModCreateNestedOneWithoutRequiredByInput = {
    create?: XOR<ModCreateWithoutRequiredByInput, ModUncheckedCreateWithoutRequiredByInput>
    connectOrCreate?: ModCreateOrConnectWithoutRequiredByInput
    connect?: ModWhereUniqueInput
  }

  export type ModUpdateOneRequiredWithoutModDependenciesNestedInput = {
    create?: XOR<ModCreateWithoutModDependenciesInput, ModUncheckedCreateWithoutModDependenciesInput>
    connectOrCreate?: ModCreateOrConnectWithoutModDependenciesInput
    upsert?: ModUpsertWithoutModDependenciesInput
    connect?: ModWhereUniqueInput
    update?: XOR<XOR<ModUpdateToOneWithWhereWithoutModDependenciesInput, ModUpdateWithoutModDependenciesInput>, ModUncheckedUpdateWithoutModDependenciesInput>
  }

  export type ModUpdateOneRequiredWithoutRequiredByNestedInput = {
    create?: XOR<ModCreateWithoutRequiredByInput, ModUncheckedCreateWithoutRequiredByInput>
    connectOrCreate?: ModCreateOrConnectWithoutRequiredByInput
    upsert?: ModUpsertWithoutRequiredByInput
    connect?: ModWhereUniqueInput
    update?: XOR<XOR<ModUpdateToOneWithWhereWithoutRequiredByInput, ModUpdateWithoutRequiredByInput>, ModUncheckedUpdateWithoutRequiredByInput>
  }

  export type ShaderCreateNestedOneWithoutShaderDependeciesInput = {
    create?: XOR<ShaderCreateWithoutShaderDependeciesInput, ShaderUncheckedCreateWithoutShaderDependeciesInput>
    connectOrCreate?: ShaderCreateOrConnectWithoutShaderDependeciesInput
    connect?: ShaderWhereUniqueInput
  }

  export type ModCreateNestedOneWithoutShaderDependeciesInput = {
    create?: XOR<ModCreateWithoutShaderDependeciesInput, ModUncheckedCreateWithoutShaderDependeciesInput>
    connectOrCreate?: ModCreateOrConnectWithoutShaderDependeciesInput
    connect?: ModWhereUniqueInput
  }

  export type ShaderUpdateOneRequiredWithoutShaderDependeciesNestedInput = {
    create?: XOR<ShaderCreateWithoutShaderDependeciesInput, ShaderUncheckedCreateWithoutShaderDependeciesInput>
    connectOrCreate?: ShaderCreateOrConnectWithoutShaderDependeciesInput
    upsert?: ShaderUpsertWithoutShaderDependeciesInput
    connect?: ShaderWhereUniqueInput
    update?: XOR<XOR<ShaderUpdateToOneWithWhereWithoutShaderDependeciesInput, ShaderUpdateWithoutShaderDependeciesInput>, ShaderUncheckedUpdateWithoutShaderDependeciesInput>
  }

  export type ModUpdateOneRequiredWithoutShaderDependeciesNestedInput = {
    create?: XOR<ModCreateWithoutShaderDependeciesInput, ModUncheckedCreateWithoutShaderDependeciesInput>
    connectOrCreate?: ModCreateOrConnectWithoutShaderDependeciesInput
    upsert?: ModUpsertWithoutShaderDependeciesInput
    connect?: ModWhereUniqueInput
    update?: XOR<XOR<ModUpdateToOneWithWhereWithoutShaderDependeciesInput, ModUpdateWithoutShaderDependeciesInput>, ModUncheckedUpdateWithoutShaderDependeciesInput>
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedBigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumVersionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.VersionType | EnumVersionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.VersionType[] | ListEnumVersionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.VersionType[] | ListEnumVersionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumVersionTypeFilter<$PrismaModel> | $Enums.VersionType
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedEnumVersionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VersionType | EnumVersionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.VersionType[] | ListEnumVersionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.VersionType[] | ListEnumVersionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumVersionTypeWithAggregatesFilter<$PrismaModel> | $Enums.VersionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVersionTypeFilter<$PrismaModel>
    _max?: NestedEnumVersionTypeFilter<$PrismaModel>
  }

  export type PackCreateWithoutAuthorInput = {
    id?: bigint | number
    max_version: number
    min_version: number
    versionType: $Enums.VersionType
    name: string
    description?: string | null
    shaders?: ShaderCreateNestedManyWithoutPacksInput
    mods?: ModCreateNestedManyWithoutPacksInput
    comments?: CommentCreateNestedManyWithoutPackInput
    images?: ImageCreateNestedManyWithoutPackInput
    principalImage?: ImageCreateNestedOneWithoutPacksPrincipalInput
  }

  export type PackUncheckedCreateWithoutAuthorInput = {
    id?: bigint | number
    max_version: number
    min_version: number
    versionType: $Enums.VersionType
    name: string
    description?: string | null
    principalImageId?: bigint | number | null
    shaders?: ShaderUncheckedCreateNestedManyWithoutPacksInput
    mods?: ModUncheckedCreateNestedManyWithoutPacksInput
    comments?: CommentUncheckedCreateNestedManyWithoutPackInput
    images?: ImageUncheckedCreateNestedManyWithoutPackInput
  }

  export type PackCreateOrConnectWithoutAuthorInput = {
    where: PackWhereUniqueInput
    create: XOR<PackCreateWithoutAuthorInput, PackUncheckedCreateWithoutAuthorInput>
  }

  export type PackCreateManyAuthorInputEnvelope = {
    data: PackCreateManyAuthorInput | PackCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type ShaderCreateWithoutAuthorInput = {
    id?: bigint | number
    name: string
    description?: string
    weight: number
    src: string
    versionType: $Enums.VersionType
    packs?: PackCreateNestedManyWithoutShadersInput
    comments?: CommentCreateNestedManyWithoutShaderInput
    images?: ImageCreateNestedManyWithoutShaderInput
    conflicts?: ConflictCreateNestedManyWithoutConflictShaderInput
    shaderDependecies?: ShaderDependecyCreateNestedManyWithoutShaderInput
    principalImage?: ImageCreateNestedOneWithoutShadersPrincipalInput
  }

  export type ShaderUncheckedCreateWithoutAuthorInput = {
    id?: bigint | number
    name: string
    description?: string
    weight: number
    src: string
    versionType: $Enums.VersionType
    principalImageId?: bigint | number | null
    packs?: PackUncheckedCreateNestedManyWithoutShadersInput
    comments?: CommentUncheckedCreateNestedManyWithoutShaderInput
    images?: ImageUncheckedCreateNestedManyWithoutShaderInput
    conflicts?: ConflictUncheckedCreateNestedManyWithoutConflictShaderInput
    shaderDependecies?: ShaderDependecyUncheckedCreateNestedManyWithoutShaderInput
  }

  export type ShaderCreateOrConnectWithoutAuthorInput = {
    where: ShaderWhereUniqueInput
    create: XOR<ShaderCreateWithoutAuthorInput, ShaderUncheckedCreateWithoutAuthorInput>
  }

  export type ShaderCreateManyAuthorInputEnvelope = {
    data: ShaderCreateManyAuthorInput | ShaderCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type ModCreateWithoutAuthorInput = {
    id?: bigint | number
    name: string
    description?: string
    min_version: number
    max_version: number
    src: string
    weight: number
    versionType: $Enums.VersionType
    packs?: PackCreateNestedManyWithoutModsInput
    comments?: CommentCreateNestedManyWithoutModInput
    images?: ImageCreateNestedManyWithoutModInput
    conflictsFrom?: ConflictCreateNestedManyWithoutModInput
    conflictsTo?: ConflictCreateNestedManyWithoutConflictModInput
    requiredBy?: ModDependencyCreateNestedManyWithoutDependencyInput
    modDependencies?: ModDependencyCreateNestedManyWithoutModInput
    shaderDependecies?: ShaderDependecyCreateNestedManyWithoutModInput
    principalImage?: ImageCreateNestedOneWithoutModsPrincipalInput
  }

  export type ModUncheckedCreateWithoutAuthorInput = {
    id?: bigint | number
    name: string
    description?: string
    min_version: number
    max_version: number
    src: string
    weight: number
    versionType: $Enums.VersionType
    principalImageId?: bigint | number | null
    packs?: PackUncheckedCreateNestedManyWithoutModsInput
    comments?: CommentUncheckedCreateNestedManyWithoutModInput
    images?: ImageUncheckedCreateNestedManyWithoutModInput
    conflictsFrom?: ConflictUncheckedCreateNestedManyWithoutModInput
    conflictsTo?: ConflictUncheckedCreateNestedManyWithoutConflictModInput
    requiredBy?: ModDependencyUncheckedCreateNestedManyWithoutDependencyInput
    modDependencies?: ModDependencyUncheckedCreateNestedManyWithoutModInput
    shaderDependecies?: ShaderDependecyUncheckedCreateNestedManyWithoutModInput
  }

  export type ModCreateOrConnectWithoutAuthorInput = {
    where: ModWhereUniqueInput
    create: XOR<ModCreateWithoutAuthorInput, ModUncheckedCreateWithoutAuthorInput>
  }

  export type ModCreateManyAuthorInputEnvelope = {
    data: ModCreateManyAuthorInput | ModCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type CommentCreateWithoutAuthorInput = {
    id?: bigint | number
    text: string
    pack?: PackCreateNestedOneWithoutCommentsInput
    shader?: ShaderCreateNestedOneWithoutCommentsInput
    mod?: ModCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateWithoutAuthorInput = {
    id?: bigint | number
    text: string
    packId?: bigint | number | null
    shaderId?: bigint | number | null
    modId?: bigint | number | null
  }

  export type CommentCreateOrConnectWithoutAuthorInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutAuthorInput, CommentUncheckedCreateWithoutAuthorInput>
  }

  export type CommentCreateManyAuthorInputEnvelope = {
    data: CommentCreateManyAuthorInput | CommentCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type ImageCreateWithoutUsersInput = {
    id?: bigint | number
    src: string
    basePath: string
    mod?: ModCreateNestedOneWithoutImagesInput
    shader?: ShaderCreateNestedOneWithoutImagesInput
    pack?: PackCreateNestedOneWithoutImagesInput
    packsPrincipal?: PackCreateNestedManyWithoutPrincipalImageInput
    shadersPrincipal?: ShaderCreateNestedManyWithoutPrincipalImageInput
    modsPrincipal?: ModCreateNestedManyWithoutPrincipalImageInput
  }

  export type ImageUncheckedCreateWithoutUsersInput = {
    id?: bigint | number
    src: string
    basePath: string
    modId?: bigint | number | null
    shaderId?: bigint | number | null
    packId?: bigint | number | null
    packsPrincipal?: PackUncheckedCreateNestedManyWithoutPrincipalImageInput
    shadersPrincipal?: ShaderUncheckedCreateNestedManyWithoutPrincipalImageInput
    modsPrincipal?: ModUncheckedCreateNestedManyWithoutPrincipalImageInput
  }

  export type ImageCreateOrConnectWithoutUsersInput = {
    where: ImageWhereUniqueInput
    create: XOR<ImageCreateWithoutUsersInput, ImageUncheckedCreateWithoutUsersInput>
  }

  export type PackUpsertWithWhereUniqueWithoutAuthorInput = {
    where: PackWhereUniqueInput
    update: XOR<PackUpdateWithoutAuthorInput, PackUncheckedUpdateWithoutAuthorInput>
    create: XOR<PackCreateWithoutAuthorInput, PackUncheckedCreateWithoutAuthorInput>
  }

  export type PackUpdateWithWhereUniqueWithoutAuthorInput = {
    where: PackWhereUniqueInput
    data: XOR<PackUpdateWithoutAuthorInput, PackUncheckedUpdateWithoutAuthorInput>
  }

  export type PackUpdateManyWithWhereWithoutAuthorInput = {
    where: PackScalarWhereInput
    data: XOR<PackUpdateManyMutationInput, PackUncheckedUpdateManyWithoutAuthorInput>
  }

  export type PackScalarWhereInput = {
    AND?: PackScalarWhereInput | PackScalarWhereInput[]
    OR?: PackScalarWhereInput[]
    NOT?: PackScalarWhereInput | PackScalarWhereInput[]
    id?: BigIntFilter<"Pack"> | bigint | number
    max_version?: IntFilter<"Pack"> | number
    min_version?: IntFilter<"Pack"> | number
    versionType?: EnumVersionTypeFilter<"Pack"> | $Enums.VersionType
    name?: StringFilter<"Pack"> | string
    description?: StringNullableFilter<"Pack"> | string | null
    authorId?: BigIntFilter<"Pack"> | bigint | number
    principalImageId?: BigIntNullableFilter<"Pack"> | bigint | number | null
  }

  export type ShaderUpsertWithWhereUniqueWithoutAuthorInput = {
    where: ShaderWhereUniqueInput
    update: XOR<ShaderUpdateWithoutAuthorInput, ShaderUncheckedUpdateWithoutAuthorInput>
    create: XOR<ShaderCreateWithoutAuthorInput, ShaderUncheckedCreateWithoutAuthorInput>
  }

  export type ShaderUpdateWithWhereUniqueWithoutAuthorInput = {
    where: ShaderWhereUniqueInput
    data: XOR<ShaderUpdateWithoutAuthorInput, ShaderUncheckedUpdateWithoutAuthorInput>
  }

  export type ShaderUpdateManyWithWhereWithoutAuthorInput = {
    where: ShaderScalarWhereInput
    data: XOR<ShaderUpdateManyMutationInput, ShaderUncheckedUpdateManyWithoutAuthorInput>
  }

  export type ShaderScalarWhereInput = {
    AND?: ShaderScalarWhereInput | ShaderScalarWhereInput[]
    OR?: ShaderScalarWhereInput[]
    NOT?: ShaderScalarWhereInput | ShaderScalarWhereInput[]
    id?: BigIntFilter<"Shader"> | bigint | number
    name?: StringFilter<"Shader"> | string
    description?: StringFilter<"Shader"> | string
    weight?: IntFilter<"Shader"> | number
    src?: StringFilter<"Shader"> | string
    authorId?: BigIntFilter<"Shader"> | bigint | number
    versionType?: EnumVersionTypeFilter<"Shader"> | $Enums.VersionType
    principalImageId?: BigIntNullableFilter<"Shader"> | bigint | number | null
  }

  export type ModUpsertWithWhereUniqueWithoutAuthorInput = {
    where: ModWhereUniqueInput
    update: XOR<ModUpdateWithoutAuthorInput, ModUncheckedUpdateWithoutAuthorInput>
    create: XOR<ModCreateWithoutAuthorInput, ModUncheckedCreateWithoutAuthorInput>
  }

  export type ModUpdateWithWhereUniqueWithoutAuthorInput = {
    where: ModWhereUniqueInput
    data: XOR<ModUpdateWithoutAuthorInput, ModUncheckedUpdateWithoutAuthorInput>
  }

  export type ModUpdateManyWithWhereWithoutAuthorInput = {
    where: ModScalarWhereInput
    data: XOR<ModUpdateManyMutationInput, ModUncheckedUpdateManyWithoutAuthorInput>
  }

  export type ModScalarWhereInput = {
    AND?: ModScalarWhereInput | ModScalarWhereInput[]
    OR?: ModScalarWhereInput[]
    NOT?: ModScalarWhereInput | ModScalarWhereInput[]
    id?: BigIntFilter<"Mod"> | bigint | number
    name?: StringFilter<"Mod"> | string
    description?: StringFilter<"Mod"> | string
    min_version?: IntFilter<"Mod"> | number
    max_version?: IntFilter<"Mod"> | number
    src?: StringFilter<"Mod"> | string
    weight?: IntFilter<"Mod"> | number
    authorId?: BigIntFilter<"Mod"> | bigint | number
    versionType?: EnumVersionTypeFilter<"Mod"> | $Enums.VersionType
    principalImageId?: BigIntNullableFilter<"Mod"> | bigint | number | null
  }

  export type CommentUpsertWithWhereUniqueWithoutAuthorInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutAuthorInput, CommentUncheckedUpdateWithoutAuthorInput>
    create: XOR<CommentCreateWithoutAuthorInput, CommentUncheckedCreateWithoutAuthorInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutAuthorInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutAuthorInput, CommentUncheckedUpdateWithoutAuthorInput>
  }

  export type CommentUpdateManyWithWhereWithoutAuthorInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutAuthorInput>
  }

  export type CommentScalarWhereInput = {
    AND?: CommentScalarWhereInput | CommentScalarWhereInput[]
    OR?: CommentScalarWhereInput[]
    NOT?: CommentScalarWhereInput | CommentScalarWhereInput[]
    id?: BigIntFilter<"Comment"> | bigint | number
    text?: StringFilter<"Comment"> | string
    authorId?: BigIntFilter<"Comment"> | bigint | number
    packId?: BigIntNullableFilter<"Comment"> | bigint | number | null
    shaderId?: BigIntNullableFilter<"Comment"> | bigint | number | null
    modId?: BigIntNullableFilter<"Comment"> | bigint | number | null
  }

  export type ImageUpsertWithoutUsersInput = {
    update: XOR<ImageUpdateWithoutUsersInput, ImageUncheckedUpdateWithoutUsersInput>
    create: XOR<ImageCreateWithoutUsersInput, ImageUncheckedCreateWithoutUsersInput>
    where?: ImageWhereInput
  }

  export type ImageUpdateToOneWithWhereWithoutUsersInput = {
    where?: ImageWhereInput
    data: XOR<ImageUpdateWithoutUsersInput, ImageUncheckedUpdateWithoutUsersInput>
  }

  export type ImageUpdateWithoutUsersInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    src?: StringFieldUpdateOperationsInput | string
    basePath?: StringFieldUpdateOperationsInput | string
    mod?: ModUpdateOneWithoutImagesNestedInput
    shader?: ShaderUpdateOneWithoutImagesNestedInput
    pack?: PackUpdateOneWithoutImagesNestedInput
    packsPrincipal?: PackUpdateManyWithoutPrincipalImageNestedInput
    shadersPrincipal?: ShaderUpdateManyWithoutPrincipalImageNestedInput
    modsPrincipal?: ModUpdateManyWithoutPrincipalImageNestedInput
  }

  export type ImageUncheckedUpdateWithoutUsersInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    src?: StringFieldUpdateOperationsInput | string
    basePath?: StringFieldUpdateOperationsInput | string
    modId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    shaderId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    packId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    packsPrincipal?: PackUncheckedUpdateManyWithoutPrincipalImageNestedInput
    shadersPrincipal?: ShaderUncheckedUpdateManyWithoutPrincipalImageNestedInput
    modsPrincipal?: ModUncheckedUpdateManyWithoutPrincipalImageNestedInput
  }

  export type ShaderCreateWithoutPacksInput = {
    id?: bigint | number
    name: string
    description?: string
    weight: number
    src: string
    versionType: $Enums.VersionType
    author: UserCreateNestedOneWithoutShadersInput
    comments?: CommentCreateNestedManyWithoutShaderInput
    images?: ImageCreateNestedManyWithoutShaderInput
    conflicts?: ConflictCreateNestedManyWithoutConflictShaderInput
    shaderDependecies?: ShaderDependecyCreateNestedManyWithoutShaderInput
    principalImage?: ImageCreateNestedOneWithoutShadersPrincipalInput
  }

  export type ShaderUncheckedCreateWithoutPacksInput = {
    id?: bigint | number
    name: string
    description?: string
    weight: number
    src: string
    authorId: bigint | number
    versionType: $Enums.VersionType
    principalImageId?: bigint | number | null
    comments?: CommentUncheckedCreateNestedManyWithoutShaderInput
    images?: ImageUncheckedCreateNestedManyWithoutShaderInput
    conflicts?: ConflictUncheckedCreateNestedManyWithoutConflictShaderInput
    shaderDependecies?: ShaderDependecyUncheckedCreateNestedManyWithoutShaderInput
  }

  export type ShaderCreateOrConnectWithoutPacksInput = {
    where: ShaderWhereUniqueInput
    create: XOR<ShaderCreateWithoutPacksInput, ShaderUncheckedCreateWithoutPacksInput>
  }

  export type ModCreateWithoutPacksInput = {
    id?: bigint | number
    name: string
    description?: string
    min_version: number
    max_version: number
    src: string
    weight: number
    versionType: $Enums.VersionType
    author: UserCreateNestedOneWithoutModsInput
    comments?: CommentCreateNestedManyWithoutModInput
    images?: ImageCreateNestedManyWithoutModInput
    conflictsFrom?: ConflictCreateNestedManyWithoutModInput
    conflictsTo?: ConflictCreateNestedManyWithoutConflictModInput
    requiredBy?: ModDependencyCreateNestedManyWithoutDependencyInput
    modDependencies?: ModDependencyCreateNestedManyWithoutModInput
    shaderDependecies?: ShaderDependecyCreateNestedManyWithoutModInput
    principalImage?: ImageCreateNestedOneWithoutModsPrincipalInput
  }

  export type ModUncheckedCreateWithoutPacksInput = {
    id?: bigint | number
    name: string
    description?: string
    min_version: number
    max_version: number
    src: string
    weight: number
    authorId: bigint | number
    versionType: $Enums.VersionType
    principalImageId?: bigint | number | null
    comments?: CommentUncheckedCreateNestedManyWithoutModInput
    images?: ImageUncheckedCreateNestedManyWithoutModInput
    conflictsFrom?: ConflictUncheckedCreateNestedManyWithoutModInput
    conflictsTo?: ConflictUncheckedCreateNestedManyWithoutConflictModInput
    requiredBy?: ModDependencyUncheckedCreateNestedManyWithoutDependencyInput
    modDependencies?: ModDependencyUncheckedCreateNestedManyWithoutModInput
    shaderDependecies?: ShaderDependecyUncheckedCreateNestedManyWithoutModInput
  }

  export type ModCreateOrConnectWithoutPacksInput = {
    where: ModWhereUniqueInput
    create: XOR<ModCreateWithoutPacksInput, ModUncheckedCreateWithoutPacksInput>
  }

  export type UserCreateWithoutPacksInput = {
    id?: bigint | number
    email: string
    nickname: string
    password: string
    recovery_key?: string | null
    is_admin?: boolean
    shaders?: ShaderCreateNestedManyWithoutAuthorInput
    mods?: ModCreateNestedManyWithoutAuthorInput
    comments?: CommentCreateNestedManyWithoutAuthorInput
    image?: ImageCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutPacksInput = {
    id?: bigint | number
    email: string
    nickname: string
    password: string
    recovery_key?: string | null
    is_admin?: boolean
    imageId?: bigint | number | null
    shaders?: ShaderUncheckedCreateNestedManyWithoutAuthorInput
    mods?: ModUncheckedCreateNestedManyWithoutAuthorInput
    comments?: CommentUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserCreateOrConnectWithoutPacksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPacksInput, UserUncheckedCreateWithoutPacksInput>
  }

  export type CommentCreateWithoutPackInput = {
    id?: bigint | number
    text: string
    author: UserCreateNestedOneWithoutCommentsInput
    shader?: ShaderCreateNestedOneWithoutCommentsInput
    mod?: ModCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateWithoutPackInput = {
    id?: bigint | number
    text: string
    authorId: bigint | number
    shaderId?: bigint | number | null
    modId?: bigint | number | null
  }

  export type CommentCreateOrConnectWithoutPackInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutPackInput, CommentUncheckedCreateWithoutPackInput>
  }

  export type CommentCreateManyPackInputEnvelope = {
    data: CommentCreateManyPackInput | CommentCreateManyPackInput[]
    skipDuplicates?: boolean
  }

  export type ImageCreateWithoutPackInput = {
    id?: bigint | number
    src: string
    basePath: string
    mod?: ModCreateNestedOneWithoutImagesInput
    shader?: ShaderCreateNestedOneWithoutImagesInput
    users?: UserCreateNestedManyWithoutImageInput
    packsPrincipal?: PackCreateNestedManyWithoutPrincipalImageInput
    shadersPrincipal?: ShaderCreateNestedManyWithoutPrincipalImageInput
    modsPrincipal?: ModCreateNestedManyWithoutPrincipalImageInput
  }

  export type ImageUncheckedCreateWithoutPackInput = {
    id?: bigint | number
    src: string
    basePath: string
    modId?: bigint | number | null
    shaderId?: bigint | number | null
    users?: UserUncheckedCreateNestedManyWithoutImageInput
    packsPrincipal?: PackUncheckedCreateNestedManyWithoutPrincipalImageInput
    shadersPrincipal?: ShaderUncheckedCreateNestedManyWithoutPrincipalImageInput
    modsPrincipal?: ModUncheckedCreateNestedManyWithoutPrincipalImageInput
  }

  export type ImageCreateOrConnectWithoutPackInput = {
    where: ImageWhereUniqueInput
    create: XOR<ImageCreateWithoutPackInput, ImageUncheckedCreateWithoutPackInput>
  }

  export type ImageCreateManyPackInputEnvelope = {
    data: ImageCreateManyPackInput | ImageCreateManyPackInput[]
    skipDuplicates?: boolean
  }

  export type ImageCreateWithoutPacksPrincipalInput = {
    id?: bigint | number
    src: string
    basePath: string
    mod?: ModCreateNestedOneWithoutImagesInput
    shader?: ShaderCreateNestedOneWithoutImagesInput
    pack?: PackCreateNestedOneWithoutImagesInput
    users?: UserCreateNestedManyWithoutImageInput
    shadersPrincipal?: ShaderCreateNestedManyWithoutPrincipalImageInput
    modsPrincipal?: ModCreateNestedManyWithoutPrincipalImageInput
  }

  export type ImageUncheckedCreateWithoutPacksPrincipalInput = {
    id?: bigint | number
    src: string
    basePath: string
    modId?: bigint | number | null
    shaderId?: bigint | number | null
    packId?: bigint | number | null
    users?: UserUncheckedCreateNestedManyWithoutImageInput
    shadersPrincipal?: ShaderUncheckedCreateNestedManyWithoutPrincipalImageInput
    modsPrincipal?: ModUncheckedCreateNestedManyWithoutPrincipalImageInput
  }

  export type ImageCreateOrConnectWithoutPacksPrincipalInput = {
    where: ImageWhereUniqueInput
    create: XOR<ImageCreateWithoutPacksPrincipalInput, ImageUncheckedCreateWithoutPacksPrincipalInput>
  }

  export type ShaderUpsertWithWhereUniqueWithoutPacksInput = {
    where: ShaderWhereUniqueInput
    update: XOR<ShaderUpdateWithoutPacksInput, ShaderUncheckedUpdateWithoutPacksInput>
    create: XOR<ShaderCreateWithoutPacksInput, ShaderUncheckedCreateWithoutPacksInput>
  }

  export type ShaderUpdateWithWhereUniqueWithoutPacksInput = {
    where: ShaderWhereUniqueInput
    data: XOR<ShaderUpdateWithoutPacksInput, ShaderUncheckedUpdateWithoutPacksInput>
  }

  export type ShaderUpdateManyWithWhereWithoutPacksInput = {
    where: ShaderScalarWhereInput
    data: XOR<ShaderUpdateManyMutationInput, ShaderUncheckedUpdateManyWithoutPacksInput>
  }

  export type ModUpsertWithWhereUniqueWithoutPacksInput = {
    where: ModWhereUniqueInput
    update: XOR<ModUpdateWithoutPacksInput, ModUncheckedUpdateWithoutPacksInput>
    create: XOR<ModCreateWithoutPacksInput, ModUncheckedCreateWithoutPacksInput>
  }

  export type ModUpdateWithWhereUniqueWithoutPacksInput = {
    where: ModWhereUniqueInput
    data: XOR<ModUpdateWithoutPacksInput, ModUncheckedUpdateWithoutPacksInput>
  }

  export type ModUpdateManyWithWhereWithoutPacksInput = {
    where: ModScalarWhereInput
    data: XOR<ModUpdateManyMutationInput, ModUncheckedUpdateManyWithoutPacksInput>
  }

  export type UserUpsertWithoutPacksInput = {
    update: XOR<UserUpdateWithoutPacksInput, UserUncheckedUpdateWithoutPacksInput>
    create: XOR<UserCreateWithoutPacksInput, UserUncheckedCreateWithoutPacksInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPacksInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPacksInput, UserUncheckedUpdateWithoutPacksInput>
  }

  export type UserUpdateWithoutPacksInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    recovery_key?: NullableStringFieldUpdateOperationsInput | string | null
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    shaders?: ShaderUpdateManyWithoutAuthorNestedInput
    mods?: ModUpdateManyWithoutAuthorNestedInput
    comments?: CommentUpdateManyWithoutAuthorNestedInput
    image?: ImageUpdateOneWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutPacksInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    recovery_key?: NullableStringFieldUpdateOperationsInput | string | null
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    imageId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    shaders?: ShaderUncheckedUpdateManyWithoutAuthorNestedInput
    mods?: ModUncheckedUpdateManyWithoutAuthorNestedInput
    comments?: CommentUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type CommentUpsertWithWhereUniqueWithoutPackInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutPackInput, CommentUncheckedUpdateWithoutPackInput>
    create: XOR<CommentCreateWithoutPackInput, CommentUncheckedCreateWithoutPackInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutPackInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutPackInput, CommentUncheckedUpdateWithoutPackInput>
  }

  export type CommentUpdateManyWithWhereWithoutPackInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutPackInput>
  }

  export type ImageUpsertWithWhereUniqueWithoutPackInput = {
    where: ImageWhereUniqueInput
    update: XOR<ImageUpdateWithoutPackInput, ImageUncheckedUpdateWithoutPackInput>
    create: XOR<ImageCreateWithoutPackInput, ImageUncheckedCreateWithoutPackInput>
  }

  export type ImageUpdateWithWhereUniqueWithoutPackInput = {
    where: ImageWhereUniqueInput
    data: XOR<ImageUpdateWithoutPackInput, ImageUncheckedUpdateWithoutPackInput>
  }

  export type ImageUpdateManyWithWhereWithoutPackInput = {
    where: ImageScalarWhereInput
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyWithoutPackInput>
  }

  export type ImageScalarWhereInput = {
    AND?: ImageScalarWhereInput | ImageScalarWhereInput[]
    OR?: ImageScalarWhereInput[]
    NOT?: ImageScalarWhereInput | ImageScalarWhereInput[]
    id?: BigIntFilter<"Image"> | bigint | number
    src?: StringFilter<"Image"> | string
    basePath?: StringFilter<"Image"> | string
    modId?: BigIntNullableFilter<"Image"> | bigint | number | null
    shaderId?: BigIntNullableFilter<"Image"> | bigint | number | null
    packId?: BigIntNullableFilter<"Image"> | bigint | number | null
  }

  export type ImageUpsertWithoutPacksPrincipalInput = {
    update: XOR<ImageUpdateWithoutPacksPrincipalInput, ImageUncheckedUpdateWithoutPacksPrincipalInput>
    create: XOR<ImageCreateWithoutPacksPrincipalInput, ImageUncheckedCreateWithoutPacksPrincipalInput>
    where?: ImageWhereInput
  }

  export type ImageUpdateToOneWithWhereWithoutPacksPrincipalInput = {
    where?: ImageWhereInput
    data: XOR<ImageUpdateWithoutPacksPrincipalInput, ImageUncheckedUpdateWithoutPacksPrincipalInput>
  }

  export type ImageUpdateWithoutPacksPrincipalInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    src?: StringFieldUpdateOperationsInput | string
    basePath?: StringFieldUpdateOperationsInput | string
    mod?: ModUpdateOneWithoutImagesNestedInput
    shader?: ShaderUpdateOneWithoutImagesNestedInput
    pack?: PackUpdateOneWithoutImagesNestedInput
    users?: UserUpdateManyWithoutImageNestedInput
    shadersPrincipal?: ShaderUpdateManyWithoutPrincipalImageNestedInput
    modsPrincipal?: ModUpdateManyWithoutPrincipalImageNestedInput
  }

  export type ImageUncheckedUpdateWithoutPacksPrincipalInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    src?: StringFieldUpdateOperationsInput | string
    basePath?: StringFieldUpdateOperationsInput | string
    modId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    shaderId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    packId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    users?: UserUncheckedUpdateManyWithoutImageNestedInput
    shadersPrincipal?: ShaderUncheckedUpdateManyWithoutPrincipalImageNestedInput
    modsPrincipal?: ModUncheckedUpdateManyWithoutPrincipalImageNestedInput
  }

  export type PackCreateWithoutShadersInput = {
    id?: bigint | number
    max_version: number
    min_version: number
    versionType: $Enums.VersionType
    name: string
    description?: string | null
    mods?: ModCreateNestedManyWithoutPacksInput
    author: UserCreateNestedOneWithoutPacksInput
    comments?: CommentCreateNestedManyWithoutPackInput
    images?: ImageCreateNestedManyWithoutPackInput
    principalImage?: ImageCreateNestedOneWithoutPacksPrincipalInput
  }

  export type PackUncheckedCreateWithoutShadersInput = {
    id?: bigint | number
    max_version: number
    min_version: number
    versionType: $Enums.VersionType
    name: string
    description?: string | null
    authorId: bigint | number
    principalImageId?: bigint | number | null
    mods?: ModUncheckedCreateNestedManyWithoutPacksInput
    comments?: CommentUncheckedCreateNestedManyWithoutPackInput
    images?: ImageUncheckedCreateNestedManyWithoutPackInput
  }

  export type PackCreateOrConnectWithoutShadersInput = {
    where: PackWhereUniqueInput
    create: XOR<PackCreateWithoutShadersInput, PackUncheckedCreateWithoutShadersInput>
  }

  export type UserCreateWithoutShadersInput = {
    id?: bigint | number
    email: string
    nickname: string
    password: string
    recovery_key?: string | null
    is_admin?: boolean
    packs?: PackCreateNestedManyWithoutAuthorInput
    mods?: ModCreateNestedManyWithoutAuthorInput
    comments?: CommentCreateNestedManyWithoutAuthorInput
    image?: ImageCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutShadersInput = {
    id?: bigint | number
    email: string
    nickname: string
    password: string
    recovery_key?: string | null
    is_admin?: boolean
    imageId?: bigint | number | null
    packs?: PackUncheckedCreateNestedManyWithoutAuthorInput
    mods?: ModUncheckedCreateNestedManyWithoutAuthorInput
    comments?: CommentUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserCreateOrConnectWithoutShadersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutShadersInput, UserUncheckedCreateWithoutShadersInput>
  }

  export type CommentCreateWithoutShaderInput = {
    id?: bigint | number
    text: string
    author: UserCreateNestedOneWithoutCommentsInput
    pack?: PackCreateNestedOneWithoutCommentsInput
    mod?: ModCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateWithoutShaderInput = {
    id?: bigint | number
    text: string
    authorId: bigint | number
    packId?: bigint | number | null
    modId?: bigint | number | null
  }

  export type CommentCreateOrConnectWithoutShaderInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutShaderInput, CommentUncheckedCreateWithoutShaderInput>
  }

  export type CommentCreateManyShaderInputEnvelope = {
    data: CommentCreateManyShaderInput | CommentCreateManyShaderInput[]
    skipDuplicates?: boolean
  }

  export type ImageCreateWithoutShaderInput = {
    id?: bigint | number
    src: string
    basePath: string
    mod?: ModCreateNestedOneWithoutImagesInput
    pack?: PackCreateNestedOneWithoutImagesInput
    users?: UserCreateNestedManyWithoutImageInput
    packsPrincipal?: PackCreateNestedManyWithoutPrincipalImageInput
    shadersPrincipal?: ShaderCreateNestedManyWithoutPrincipalImageInput
    modsPrincipal?: ModCreateNestedManyWithoutPrincipalImageInput
  }

  export type ImageUncheckedCreateWithoutShaderInput = {
    id?: bigint | number
    src: string
    basePath: string
    modId?: bigint | number | null
    packId?: bigint | number | null
    users?: UserUncheckedCreateNestedManyWithoutImageInput
    packsPrincipal?: PackUncheckedCreateNestedManyWithoutPrincipalImageInput
    shadersPrincipal?: ShaderUncheckedCreateNestedManyWithoutPrincipalImageInput
    modsPrincipal?: ModUncheckedCreateNestedManyWithoutPrincipalImageInput
  }

  export type ImageCreateOrConnectWithoutShaderInput = {
    where: ImageWhereUniqueInput
    create: XOR<ImageCreateWithoutShaderInput, ImageUncheckedCreateWithoutShaderInput>
  }

  export type ImageCreateManyShaderInputEnvelope = {
    data: ImageCreateManyShaderInput | ImageCreateManyShaderInput[]
    skipDuplicates?: boolean
  }

  export type ConflictCreateWithoutConflictShaderInput = {
    id?: bigint | number
    mod: ModCreateNestedOneWithoutConflictsFromInput
    conflictMod?: ModCreateNestedOneWithoutConflictsToInput
  }

  export type ConflictUncheckedCreateWithoutConflictShaderInput = {
    id?: bigint | number
    modId: bigint | number
    conflictModId?: bigint | number | null
  }

  export type ConflictCreateOrConnectWithoutConflictShaderInput = {
    where: ConflictWhereUniqueInput
    create: XOR<ConflictCreateWithoutConflictShaderInput, ConflictUncheckedCreateWithoutConflictShaderInput>
  }

  export type ConflictCreateManyConflictShaderInputEnvelope = {
    data: ConflictCreateManyConflictShaderInput | ConflictCreateManyConflictShaderInput[]
    skipDuplicates?: boolean
  }

  export type ShaderDependecyCreateWithoutShaderInput = {
    mod: ModCreateNestedOneWithoutShaderDependeciesInput
  }

  export type ShaderDependecyUncheckedCreateWithoutShaderInput = {
    modId: bigint | number
  }

  export type ShaderDependecyCreateOrConnectWithoutShaderInput = {
    where: ShaderDependecyWhereUniqueInput
    create: XOR<ShaderDependecyCreateWithoutShaderInput, ShaderDependecyUncheckedCreateWithoutShaderInput>
  }

  export type ShaderDependecyCreateManyShaderInputEnvelope = {
    data: ShaderDependecyCreateManyShaderInput | ShaderDependecyCreateManyShaderInput[]
    skipDuplicates?: boolean
  }

  export type ImageCreateWithoutShadersPrincipalInput = {
    id?: bigint | number
    src: string
    basePath: string
    mod?: ModCreateNestedOneWithoutImagesInput
    shader?: ShaderCreateNestedOneWithoutImagesInput
    pack?: PackCreateNestedOneWithoutImagesInput
    users?: UserCreateNestedManyWithoutImageInput
    packsPrincipal?: PackCreateNestedManyWithoutPrincipalImageInput
    modsPrincipal?: ModCreateNestedManyWithoutPrincipalImageInput
  }

  export type ImageUncheckedCreateWithoutShadersPrincipalInput = {
    id?: bigint | number
    src: string
    basePath: string
    modId?: bigint | number | null
    shaderId?: bigint | number | null
    packId?: bigint | number | null
    users?: UserUncheckedCreateNestedManyWithoutImageInput
    packsPrincipal?: PackUncheckedCreateNestedManyWithoutPrincipalImageInput
    modsPrincipal?: ModUncheckedCreateNestedManyWithoutPrincipalImageInput
  }

  export type ImageCreateOrConnectWithoutShadersPrincipalInput = {
    where: ImageWhereUniqueInput
    create: XOR<ImageCreateWithoutShadersPrincipalInput, ImageUncheckedCreateWithoutShadersPrincipalInput>
  }

  export type PackUpsertWithWhereUniqueWithoutShadersInput = {
    where: PackWhereUniqueInput
    update: XOR<PackUpdateWithoutShadersInput, PackUncheckedUpdateWithoutShadersInput>
    create: XOR<PackCreateWithoutShadersInput, PackUncheckedCreateWithoutShadersInput>
  }

  export type PackUpdateWithWhereUniqueWithoutShadersInput = {
    where: PackWhereUniqueInput
    data: XOR<PackUpdateWithoutShadersInput, PackUncheckedUpdateWithoutShadersInput>
  }

  export type PackUpdateManyWithWhereWithoutShadersInput = {
    where: PackScalarWhereInput
    data: XOR<PackUpdateManyMutationInput, PackUncheckedUpdateManyWithoutShadersInput>
  }

  export type UserUpsertWithoutShadersInput = {
    update: XOR<UserUpdateWithoutShadersInput, UserUncheckedUpdateWithoutShadersInput>
    create: XOR<UserCreateWithoutShadersInput, UserUncheckedCreateWithoutShadersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutShadersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutShadersInput, UserUncheckedUpdateWithoutShadersInput>
  }

  export type UserUpdateWithoutShadersInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    recovery_key?: NullableStringFieldUpdateOperationsInput | string | null
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    packs?: PackUpdateManyWithoutAuthorNestedInput
    mods?: ModUpdateManyWithoutAuthorNestedInput
    comments?: CommentUpdateManyWithoutAuthorNestedInput
    image?: ImageUpdateOneWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutShadersInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    recovery_key?: NullableStringFieldUpdateOperationsInput | string | null
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    imageId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    packs?: PackUncheckedUpdateManyWithoutAuthorNestedInput
    mods?: ModUncheckedUpdateManyWithoutAuthorNestedInput
    comments?: CommentUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type CommentUpsertWithWhereUniqueWithoutShaderInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutShaderInput, CommentUncheckedUpdateWithoutShaderInput>
    create: XOR<CommentCreateWithoutShaderInput, CommentUncheckedCreateWithoutShaderInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutShaderInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutShaderInput, CommentUncheckedUpdateWithoutShaderInput>
  }

  export type CommentUpdateManyWithWhereWithoutShaderInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutShaderInput>
  }

  export type ImageUpsertWithWhereUniqueWithoutShaderInput = {
    where: ImageWhereUniqueInput
    update: XOR<ImageUpdateWithoutShaderInput, ImageUncheckedUpdateWithoutShaderInput>
    create: XOR<ImageCreateWithoutShaderInput, ImageUncheckedCreateWithoutShaderInput>
  }

  export type ImageUpdateWithWhereUniqueWithoutShaderInput = {
    where: ImageWhereUniqueInput
    data: XOR<ImageUpdateWithoutShaderInput, ImageUncheckedUpdateWithoutShaderInput>
  }

  export type ImageUpdateManyWithWhereWithoutShaderInput = {
    where: ImageScalarWhereInput
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyWithoutShaderInput>
  }

  export type ConflictUpsertWithWhereUniqueWithoutConflictShaderInput = {
    where: ConflictWhereUniqueInput
    update: XOR<ConflictUpdateWithoutConflictShaderInput, ConflictUncheckedUpdateWithoutConflictShaderInput>
    create: XOR<ConflictCreateWithoutConflictShaderInput, ConflictUncheckedCreateWithoutConflictShaderInput>
  }

  export type ConflictUpdateWithWhereUniqueWithoutConflictShaderInput = {
    where: ConflictWhereUniqueInput
    data: XOR<ConflictUpdateWithoutConflictShaderInput, ConflictUncheckedUpdateWithoutConflictShaderInput>
  }

  export type ConflictUpdateManyWithWhereWithoutConflictShaderInput = {
    where: ConflictScalarWhereInput
    data: XOR<ConflictUpdateManyMutationInput, ConflictUncheckedUpdateManyWithoutConflictShaderInput>
  }

  export type ConflictScalarWhereInput = {
    AND?: ConflictScalarWhereInput | ConflictScalarWhereInput[]
    OR?: ConflictScalarWhereInput[]
    NOT?: ConflictScalarWhereInput | ConflictScalarWhereInput[]
    id?: BigIntFilter<"Conflict"> | bigint | number
    conflictshaderId?: BigIntNullableFilter<"Conflict"> | bigint | number | null
    modId?: BigIntFilter<"Conflict"> | bigint | number
    conflictModId?: BigIntNullableFilter<"Conflict"> | bigint | number | null
  }

  export type ShaderDependecyUpsertWithWhereUniqueWithoutShaderInput = {
    where: ShaderDependecyWhereUniqueInput
    update: XOR<ShaderDependecyUpdateWithoutShaderInput, ShaderDependecyUncheckedUpdateWithoutShaderInput>
    create: XOR<ShaderDependecyCreateWithoutShaderInput, ShaderDependecyUncheckedCreateWithoutShaderInput>
  }

  export type ShaderDependecyUpdateWithWhereUniqueWithoutShaderInput = {
    where: ShaderDependecyWhereUniqueInput
    data: XOR<ShaderDependecyUpdateWithoutShaderInput, ShaderDependecyUncheckedUpdateWithoutShaderInput>
  }

  export type ShaderDependecyUpdateManyWithWhereWithoutShaderInput = {
    where: ShaderDependecyScalarWhereInput
    data: XOR<ShaderDependecyUpdateManyMutationInput, ShaderDependecyUncheckedUpdateManyWithoutShaderInput>
  }

  export type ShaderDependecyScalarWhereInput = {
    AND?: ShaderDependecyScalarWhereInput | ShaderDependecyScalarWhereInput[]
    OR?: ShaderDependecyScalarWhereInput[]
    NOT?: ShaderDependecyScalarWhereInput | ShaderDependecyScalarWhereInput[]
    shaderId?: BigIntFilter<"ShaderDependecy"> | bigint | number
    modId?: BigIntFilter<"ShaderDependecy"> | bigint | number
  }

  export type ImageUpsertWithoutShadersPrincipalInput = {
    update: XOR<ImageUpdateWithoutShadersPrincipalInput, ImageUncheckedUpdateWithoutShadersPrincipalInput>
    create: XOR<ImageCreateWithoutShadersPrincipalInput, ImageUncheckedCreateWithoutShadersPrincipalInput>
    where?: ImageWhereInput
  }

  export type ImageUpdateToOneWithWhereWithoutShadersPrincipalInput = {
    where?: ImageWhereInput
    data: XOR<ImageUpdateWithoutShadersPrincipalInput, ImageUncheckedUpdateWithoutShadersPrincipalInput>
  }

  export type ImageUpdateWithoutShadersPrincipalInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    src?: StringFieldUpdateOperationsInput | string
    basePath?: StringFieldUpdateOperationsInput | string
    mod?: ModUpdateOneWithoutImagesNestedInput
    shader?: ShaderUpdateOneWithoutImagesNestedInput
    pack?: PackUpdateOneWithoutImagesNestedInput
    users?: UserUpdateManyWithoutImageNestedInput
    packsPrincipal?: PackUpdateManyWithoutPrincipalImageNestedInput
    modsPrincipal?: ModUpdateManyWithoutPrincipalImageNestedInput
  }

  export type ImageUncheckedUpdateWithoutShadersPrincipalInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    src?: StringFieldUpdateOperationsInput | string
    basePath?: StringFieldUpdateOperationsInput | string
    modId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    shaderId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    packId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    users?: UserUncheckedUpdateManyWithoutImageNestedInput
    packsPrincipal?: PackUncheckedUpdateManyWithoutPrincipalImageNestedInput
    modsPrincipal?: ModUncheckedUpdateManyWithoutPrincipalImageNestedInput
  }

  export type PackCreateWithoutModsInput = {
    id?: bigint | number
    max_version: number
    min_version: number
    versionType: $Enums.VersionType
    name: string
    description?: string | null
    shaders?: ShaderCreateNestedManyWithoutPacksInput
    author: UserCreateNestedOneWithoutPacksInput
    comments?: CommentCreateNestedManyWithoutPackInput
    images?: ImageCreateNestedManyWithoutPackInput
    principalImage?: ImageCreateNestedOneWithoutPacksPrincipalInput
  }

  export type PackUncheckedCreateWithoutModsInput = {
    id?: bigint | number
    max_version: number
    min_version: number
    versionType: $Enums.VersionType
    name: string
    description?: string | null
    authorId: bigint | number
    principalImageId?: bigint | number | null
    shaders?: ShaderUncheckedCreateNestedManyWithoutPacksInput
    comments?: CommentUncheckedCreateNestedManyWithoutPackInput
    images?: ImageUncheckedCreateNestedManyWithoutPackInput
  }

  export type PackCreateOrConnectWithoutModsInput = {
    where: PackWhereUniqueInput
    create: XOR<PackCreateWithoutModsInput, PackUncheckedCreateWithoutModsInput>
  }

  export type UserCreateWithoutModsInput = {
    id?: bigint | number
    email: string
    nickname: string
    password: string
    recovery_key?: string | null
    is_admin?: boolean
    packs?: PackCreateNestedManyWithoutAuthorInput
    shaders?: ShaderCreateNestedManyWithoutAuthorInput
    comments?: CommentCreateNestedManyWithoutAuthorInput
    image?: ImageCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutModsInput = {
    id?: bigint | number
    email: string
    nickname: string
    password: string
    recovery_key?: string | null
    is_admin?: boolean
    imageId?: bigint | number | null
    packs?: PackUncheckedCreateNestedManyWithoutAuthorInput
    shaders?: ShaderUncheckedCreateNestedManyWithoutAuthorInput
    comments?: CommentUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserCreateOrConnectWithoutModsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutModsInput, UserUncheckedCreateWithoutModsInput>
  }

  export type CommentCreateWithoutModInput = {
    id?: bigint | number
    text: string
    author: UserCreateNestedOneWithoutCommentsInput
    pack?: PackCreateNestedOneWithoutCommentsInput
    shader?: ShaderCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateWithoutModInput = {
    id?: bigint | number
    text: string
    authorId: bigint | number
    packId?: bigint | number | null
    shaderId?: bigint | number | null
  }

  export type CommentCreateOrConnectWithoutModInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutModInput, CommentUncheckedCreateWithoutModInput>
  }

  export type CommentCreateManyModInputEnvelope = {
    data: CommentCreateManyModInput | CommentCreateManyModInput[]
    skipDuplicates?: boolean
  }

  export type ImageCreateWithoutModInput = {
    id?: bigint | number
    src: string
    basePath: string
    shader?: ShaderCreateNestedOneWithoutImagesInput
    pack?: PackCreateNestedOneWithoutImagesInput
    users?: UserCreateNestedManyWithoutImageInput
    packsPrincipal?: PackCreateNestedManyWithoutPrincipalImageInput
    shadersPrincipal?: ShaderCreateNestedManyWithoutPrincipalImageInput
    modsPrincipal?: ModCreateNestedManyWithoutPrincipalImageInput
  }

  export type ImageUncheckedCreateWithoutModInput = {
    id?: bigint | number
    src: string
    basePath: string
    shaderId?: bigint | number | null
    packId?: bigint | number | null
    users?: UserUncheckedCreateNestedManyWithoutImageInput
    packsPrincipal?: PackUncheckedCreateNestedManyWithoutPrincipalImageInput
    shadersPrincipal?: ShaderUncheckedCreateNestedManyWithoutPrincipalImageInput
    modsPrincipal?: ModUncheckedCreateNestedManyWithoutPrincipalImageInput
  }

  export type ImageCreateOrConnectWithoutModInput = {
    where: ImageWhereUniqueInput
    create: XOR<ImageCreateWithoutModInput, ImageUncheckedCreateWithoutModInput>
  }

  export type ImageCreateManyModInputEnvelope = {
    data: ImageCreateManyModInput | ImageCreateManyModInput[]
    skipDuplicates?: boolean
  }

  export type ConflictCreateWithoutModInput = {
    id?: bigint | number
    conflictShader?: ShaderCreateNestedOneWithoutConflictsInput
    conflictMod?: ModCreateNestedOneWithoutConflictsToInput
  }

  export type ConflictUncheckedCreateWithoutModInput = {
    id?: bigint | number
    conflictshaderId?: bigint | number | null
    conflictModId?: bigint | number | null
  }

  export type ConflictCreateOrConnectWithoutModInput = {
    where: ConflictWhereUniqueInput
    create: XOR<ConflictCreateWithoutModInput, ConflictUncheckedCreateWithoutModInput>
  }

  export type ConflictCreateManyModInputEnvelope = {
    data: ConflictCreateManyModInput | ConflictCreateManyModInput[]
    skipDuplicates?: boolean
  }

  export type ConflictCreateWithoutConflictModInput = {
    id?: bigint | number
    conflictShader?: ShaderCreateNestedOneWithoutConflictsInput
    mod: ModCreateNestedOneWithoutConflictsFromInput
  }

  export type ConflictUncheckedCreateWithoutConflictModInput = {
    id?: bigint | number
    conflictshaderId?: bigint | number | null
    modId: bigint | number
  }

  export type ConflictCreateOrConnectWithoutConflictModInput = {
    where: ConflictWhereUniqueInput
    create: XOR<ConflictCreateWithoutConflictModInput, ConflictUncheckedCreateWithoutConflictModInput>
  }

  export type ConflictCreateManyConflictModInputEnvelope = {
    data: ConflictCreateManyConflictModInput | ConflictCreateManyConflictModInput[]
    skipDuplicates?: boolean
  }

  export type ModDependencyCreateWithoutDependencyInput = {
    mod: ModCreateNestedOneWithoutModDependenciesInput
  }

  export type ModDependencyUncheckedCreateWithoutDependencyInput = {
    modId: bigint | number
  }

  export type ModDependencyCreateOrConnectWithoutDependencyInput = {
    where: ModDependencyWhereUniqueInput
    create: XOR<ModDependencyCreateWithoutDependencyInput, ModDependencyUncheckedCreateWithoutDependencyInput>
  }

  export type ModDependencyCreateManyDependencyInputEnvelope = {
    data: ModDependencyCreateManyDependencyInput | ModDependencyCreateManyDependencyInput[]
    skipDuplicates?: boolean
  }

  export type ModDependencyCreateWithoutModInput = {
    dependency: ModCreateNestedOneWithoutRequiredByInput
  }

  export type ModDependencyUncheckedCreateWithoutModInput = {
    dependencyId: bigint | number
  }

  export type ModDependencyCreateOrConnectWithoutModInput = {
    where: ModDependencyWhereUniqueInput
    create: XOR<ModDependencyCreateWithoutModInput, ModDependencyUncheckedCreateWithoutModInput>
  }

  export type ModDependencyCreateManyModInputEnvelope = {
    data: ModDependencyCreateManyModInput | ModDependencyCreateManyModInput[]
    skipDuplicates?: boolean
  }

  export type ShaderDependecyCreateWithoutModInput = {
    shader: ShaderCreateNestedOneWithoutShaderDependeciesInput
  }

  export type ShaderDependecyUncheckedCreateWithoutModInput = {
    shaderId: bigint | number
  }

  export type ShaderDependecyCreateOrConnectWithoutModInput = {
    where: ShaderDependecyWhereUniqueInput
    create: XOR<ShaderDependecyCreateWithoutModInput, ShaderDependecyUncheckedCreateWithoutModInput>
  }

  export type ShaderDependecyCreateManyModInputEnvelope = {
    data: ShaderDependecyCreateManyModInput | ShaderDependecyCreateManyModInput[]
    skipDuplicates?: boolean
  }

  export type ImageCreateWithoutModsPrincipalInput = {
    id?: bigint | number
    src: string
    basePath: string
    mod?: ModCreateNestedOneWithoutImagesInput
    shader?: ShaderCreateNestedOneWithoutImagesInput
    pack?: PackCreateNestedOneWithoutImagesInput
    users?: UserCreateNestedManyWithoutImageInput
    packsPrincipal?: PackCreateNestedManyWithoutPrincipalImageInput
    shadersPrincipal?: ShaderCreateNestedManyWithoutPrincipalImageInput
  }

  export type ImageUncheckedCreateWithoutModsPrincipalInput = {
    id?: bigint | number
    src: string
    basePath: string
    modId?: bigint | number | null
    shaderId?: bigint | number | null
    packId?: bigint | number | null
    users?: UserUncheckedCreateNestedManyWithoutImageInput
    packsPrincipal?: PackUncheckedCreateNestedManyWithoutPrincipalImageInput
    shadersPrincipal?: ShaderUncheckedCreateNestedManyWithoutPrincipalImageInput
  }

  export type ImageCreateOrConnectWithoutModsPrincipalInput = {
    where: ImageWhereUniqueInput
    create: XOR<ImageCreateWithoutModsPrincipalInput, ImageUncheckedCreateWithoutModsPrincipalInput>
  }

  export type PackUpsertWithWhereUniqueWithoutModsInput = {
    where: PackWhereUniqueInput
    update: XOR<PackUpdateWithoutModsInput, PackUncheckedUpdateWithoutModsInput>
    create: XOR<PackCreateWithoutModsInput, PackUncheckedCreateWithoutModsInput>
  }

  export type PackUpdateWithWhereUniqueWithoutModsInput = {
    where: PackWhereUniqueInput
    data: XOR<PackUpdateWithoutModsInput, PackUncheckedUpdateWithoutModsInput>
  }

  export type PackUpdateManyWithWhereWithoutModsInput = {
    where: PackScalarWhereInput
    data: XOR<PackUpdateManyMutationInput, PackUncheckedUpdateManyWithoutModsInput>
  }

  export type UserUpsertWithoutModsInput = {
    update: XOR<UserUpdateWithoutModsInput, UserUncheckedUpdateWithoutModsInput>
    create: XOR<UserCreateWithoutModsInput, UserUncheckedCreateWithoutModsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutModsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutModsInput, UserUncheckedUpdateWithoutModsInput>
  }

  export type UserUpdateWithoutModsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    recovery_key?: NullableStringFieldUpdateOperationsInput | string | null
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    packs?: PackUpdateManyWithoutAuthorNestedInput
    shaders?: ShaderUpdateManyWithoutAuthorNestedInput
    comments?: CommentUpdateManyWithoutAuthorNestedInput
    image?: ImageUpdateOneWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutModsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    recovery_key?: NullableStringFieldUpdateOperationsInput | string | null
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    imageId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    packs?: PackUncheckedUpdateManyWithoutAuthorNestedInput
    shaders?: ShaderUncheckedUpdateManyWithoutAuthorNestedInput
    comments?: CommentUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type CommentUpsertWithWhereUniqueWithoutModInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutModInput, CommentUncheckedUpdateWithoutModInput>
    create: XOR<CommentCreateWithoutModInput, CommentUncheckedCreateWithoutModInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutModInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutModInput, CommentUncheckedUpdateWithoutModInput>
  }

  export type CommentUpdateManyWithWhereWithoutModInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutModInput>
  }

  export type ImageUpsertWithWhereUniqueWithoutModInput = {
    where: ImageWhereUniqueInput
    update: XOR<ImageUpdateWithoutModInput, ImageUncheckedUpdateWithoutModInput>
    create: XOR<ImageCreateWithoutModInput, ImageUncheckedCreateWithoutModInput>
  }

  export type ImageUpdateWithWhereUniqueWithoutModInput = {
    where: ImageWhereUniqueInput
    data: XOR<ImageUpdateWithoutModInput, ImageUncheckedUpdateWithoutModInput>
  }

  export type ImageUpdateManyWithWhereWithoutModInput = {
    where: ImageScalarWhereInput
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyWithoutModInput>
  }

  export type ConflictUpsertWithWhereUniqueWithoutModInput = {
    where: ConflictWhereUniqueInput
    update: XOR<ConflictUpdateWithoutModInput, ConflictUncheckedUpdateWithoutModInput>
    create: XOR<ConflictCreateWithoutModInput, ConflictUncheckedCreateWithoutModInput>
  }

  export type ConflictUpdateWithWhereUniqueWithoutModInput = {
    where: ConflictWhereUniqueInput
    data: XOR<ConflictUpdateWithoutModInput, ConflictUncheckedUpdateWithoutModInput>
  }

  export type ConflictUpdateManyWithWhereWithoutModInput = {
    where: ConflictScalarWhereInput
    data: XOR<ConflictUpdateManyMutationInput, ConflictUncheckedUpdateManyWithoutModInput>
  }

  export type ConflictUpsertWithWhereUniqueWithoutConflictModInput = {
    where: ConflictWhereUniqueInput
    update: XOR<ConflictUpdateWithoutConflictModInput, ConflictUncheckedUpdateWithoutConflictModInput>
    create: XOR<ConflictCreateWithoutConflictModInput, ConflictUncheckedCreateWithoutConflictModInput>
  }

  export type ConflictUpdateWithWhereUniqueWithoutConflictModInput = {
    where: ConflictWhereUniqueInput
    data: XOR<ConflictUpdateWithoutConflictModInput, ConflictUncheckedUpdateWithoutConflictModInput>
  }

  export type ConflictUpdateManyWithWhereWithoutConflictModInput = {
    where: ConflictScalarWhereInput
    data: XOR<ConflictUpdateManyMutationInput, ConflictUncheckedUpdateManyWithoutConflictModInput>
  }

  export type ModDependencyUpsertWithWhereUniqueWithoutDependencyInput = {
    where: ModDependencyWhereUniqueInput
    update: XOR<ModDependencyUpdateWithoutDependencyInput, ModDependencyUncheckedUpdateWithoutDependencyInput>
    create: XOR<ModDependencyCreateWithoutDependencyInput, ModDependencyUncheckedCreateWithoutDependencyInput>
  }

  export type ModDependencyUpdateWithWhereUniqueWithoutDependencyInput = {
    where: ModDependencyWhereUniqueInput
    data: XOR<ModDependencyUpdateWithoutDependencyInput, ModDependencyUncheckedUpdateWithoutDependencyInput>
  }

  export type ModDependencyUpdateManyWithWhereWithoutDependencyInput = {
    where: ModDependencyScalarWhereInput
    data: XOR<ModDependencyUpdateManyMutationInput, ModDependencyUncheckedUpdateManyWithoutDependencyInput>
  }

  export type ModDependencyScalarWhereInput = {
    AND?: ModDependencyScalarWhereInput | ModDependencyScalarWhereInput[]
    OR?: ModDependencyScalarWhereInput[]
    NOT?: ModDependencyScalarWhereInput | ModDependencyScalarWhereInput[]
    modId?: BigIntFilter<"ModDependency"> | bigint | number
    dependencyId?: BigIntFilter<"ModDependency"> | bigint | number
  }

  export type ModDependencyUpsertWithWhereUniqueWithoutModInput = {
    where: ModDependencyWhereUniqueInput
    update: XOR<ModDependencyUpdateWithoutModInput, ModDependencyUncheckedUpdateWithoutModInput>
    create: XOR<ModDependencyCreateWithoutModInput, ModDependencyUncheckedCreateWithoutModInput>
  }

  export type ModDependencyUpdateWithWhereUniqueWithoutModInput = {
    where: ModDependencyWhereUniqueInput
    data: XOR<ModDependencyUpdateWithoutModInput, ModDependencyUncheckedUpdateWithoutModInput>
  }

  export type ModDependencyUpdateManyWithWhereWithoutModInput = {
    where: ModDependencyScalarWhereInput
    data: XOR<ModDependencyUpdateManyMutationInput, ModDependencyUncheckedUpdateManyWithoutModInput>
  }

  export type ShaderDependecyUpsertWithWhereUniqueWithoutModInput = {
    where: ShaderDependecyWhereUniqueInput
    update: XOR<ShaderDependecyUpdateWithoutModInput, ShaderDependecyUncheckedUpdateWithoutModInput>
    create: XOR<ShaderDependecyCreateWithoutModInput, ShaderDependecyUncheckedCreateWithoutModInput>
  }

  export type ShaderDependecyUpdateWithWhereUniqueWithoutModInput = {
    where: ShaderDependecyWhereUniqueInput
    data: XOR<ShaderDependecyUpdateWithoutModInput, ShaderDependecyUncheckedUpdateWithoutModInput>
  }

  export type ShaderDependecyUpdateManyWithWhereWithoutModInput = {
    where: ShaderDependecyScalarWhereInput
    data: XOR<ShaderDependecyUpdateManyMutationInput, ShaderDependecyUncheckedUpdateManyWithoutModInput>
  }

  export type ImageUpsertWithoutModsPrincipalInput = {
    update: XOR<ImageUpdateWithoutModsPrincipalInput, ImageUncheckedUpdateWithoutModsPrincipalInput>
    create: XOR<ImageCreateWithoutModsPrincipalInput, ImageUncheckedCreateWithoutModsPrincipalInput>
    where?: ImageWhereInput
  }

  export type ImageUpdateToOneWithWhereWithoutModsPrincipalInput = {
    where?: ImageWhereInput
    data: XOR<ImageUpdateWithoutModsPrincipalInput, ImageUncheckedUpdateWithoutModsPrincipalInput>
  }

  export type ImageUpdateWithoutModsPrincipalInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    src?: StringFieldUpdateOperationsInput | string
    basePath?: StringFieldUpdateOperationsInput | string
    mod?: ModUpdateOneWithoutImagesNestedInput
    shader?: ShaderUpdateOneWithoutImagesNestedInput
    pack?: PackUpdateOneWithoutImagesNestedInput
    users?: UserUpdateManyWithoutImageNestedInput
    packsPrincipal?: PackUpdateManyWithoutPrincipalImageNestedInput
    shadersPrincipal?: ShaderUpdateManyWithoutPrincipalImageNestedInput
  }

  export type ImageUncheckedUpdateWithoutModsPrincipalInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    src?: StringFieldUpdateOperationsInput | string
    basePath?: StringFieldUpdateOperationsInput | string
    modId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    shaderId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    packId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    users?: UserUncheckedUpdateManyWithoutImageNestedInput
    packsPrincipal?: PackUncheckedUpdateManyWithoutPrincipalImageNestedInput
    shadersPrincipal?: ShaderUncheckedUpdateManyWithoutPrincipalImageNestedInput
  }

  export type UserCreateWithoutCommentsInput = {
    id?: bigint | number
    email: string
    nickname: string
    password: string
    recovery_key?: string | null
    is_admin?: boolean
    packs?: PackCreateNestedManyWithoutAuthorInput
    shaders?: ShaderCreateNestedManyWithoutAuthorInput
    mods?: ModCreateNestedManyWithoutAuthorInput
    image?: ImageCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutCommentsInput = {
    id?: bigint | number
    email: string
    nickname: string
    password: string
    recovery_key?: string | null
    is_admin?: boolean
    imageId?: bigint | number | null
    packs?: PackUncheckedCreateNestedManyWithoutAuthorInput
    shaders?: ShaderUncheckedCreateNestedManyWithoutAuthorInput
    mods?: ModUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserCreateOrConnectWithoutCommentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
  }

  export type PackCreateWithoutCommentsInput = {
    id?: bigint | number
    max_version: number
    min_version: number
    versionType: $Enums.VersionType
    name: string
    description?: string | null
    shaders?: ShaderCreateNestedManyWithoutPacksInput
    mods?: ModCreateNestedManyWithoutPacksInput
    author: UserCreateNestedOneWithoutPacksInput
    images?: ImageCreateNestedManyWithoutPackInput
    principalImage?: ImageCreateNestedOneWithoutPacksPrincipalInput
  }

  export type PackUncheckedCreateWithoutCommentsInput = {
    id?: bigint | number
    max_version: number
    min_version: number
    versionType: $Enums.VersionType
    name: string
    description?: string | null
    authorId: bigint | number
    principalImageId?: bigint | number | null
    shaders?: ShaderUncheckedCreateNestedManyWithoutPacksInput
    mods?: ModUncheckedCreateNestedManyWithoutPacksInput
    images?: ImageUncheckedCreateNestedManyWithoutPackInput
  }

  export type PackCreateOrConnectWithoutCommentsInput = {
    where: PackWhereUniqueInput
    create: XOR<PackCreateWithoutCommentsInput, PackUncheckedCreateWithoutCommentsInput>
  }

  export type ShaderCreateWithoutCommentsInput = {
    id?: bigint | number
    name: string
    description?: string
    weight: number
    src: string
    versionType: $Enums.VersionType
    packs?: PackCreateNestedManyWithoutShadersInput
    author: UserCreateNestedOneWithoutShadersInput
    images?: ImageCreateNestedManyWithoutShaderInput
    conflicts?: ConflictCreateNestedManyWithoutConflictShaderInput
    shaderDependecies?: ShaderDependecyCreateNestedManyWithoutShaderInput
    principalImage?: ImageCreateNestedOneWithoutShadersPrincipalInput
  }

  export type ShaderUncheckedCreateWithoutCommentsInput = {
    id?: bigint | number
    name: string
    description?: string
    weight: number
    src: string
    authorId: bigint | number
    versionType: $Enums.VersionType
    principalImageId?: bigint | number | null
    packs?: PackUncheckedCreateNestedManyWithoutShadersInput
    images?: ImageUncheckedCreateNestedManyWithoutShaderInput
    conflicts?: ConflictUncheckedCreateNestedManyWithoutConflictShaderInput
    shaderDependecies?: ShaderDependecyUncheckedCreateNestedManyWithoutShaderInput
  }

  export type ShaderCreateOrConnectWithoutCommentsInput = {
    where: ShaderWhereUniqueInput
    create: XOR<ShaderCreateWithoutCommentsInput, ShaderUncheckedCreateWithoutCommentsInput>
  }

  export type ModCreateWithoutCommentsInput = {
    id?: bigint | number
    name: string
    description?: string
    min_version: number
    max_version: number
    src: string
    weight: number
    versionType: $Enums.VersionType
    packs?: PackCreateNestedManyWithoutModsInput
    author: UserCreateNestedOneWithoutModsInput
    images?: ImageCreateNestedManyWithoutModInput
    conflictsFrom?: ConflictCreateNestedManyWithoutModInput
    conflictsTo?: ConflictCreateNestedManyWithoutConflictModInput
    requiredBy?: ModDependencyCreateNestedManyWithoutDependencyInput
    modDependencies?: ModDependencyCreateNestedManyWithoutModInput
    shaderDependecies?: ShaderDependecyCreateNestedManyWithoutModInput
    principalImage?: ImageCreateNestedOneWithoutModsPrincipalInput
  }

  export type ModUncheckedCreateWithoutCommentsInput = {
    id?: bigint | number
    name: string
    description?: string
    min_version: number
    max_version: number
    src: string
    weight: number
    authorId: bigint | number
    versionType: $Enums.VersionType
    principalImageId?: bigint | number | null
    packs?: PackUncheckedCreateNestedManyWithoutModsInput
    images?: ImageUncheckedCreateNestedManyWithoutModInput
    conflictsFrom?: ConflictUncheckedCreateNestedManyWithoutModInput
    conflictsTo?: ConflictUncheckedCreateNestedManyWithoutConflictModInput
    requiredBy?: ModDependencyUncheckedCreateNestedManyWithoutDependencyInput
    modDependencies?: ModDependencyUncheckedCreateNestedManyWithoutModInput
    shaderDependecies?: ShaderDependecyUncheckedCreateNestedManyWithoutModInput
  }

  export type ModCreateOrConnectWithoutCommentsInput = {
    where: ModWhereUniqueInput
    create: XOR<ModCreateWithoutCommentsInput, ModUncheckedCreateWithoutCommentsInput>
  }

  export type UserUpsertWithoutCommentsInput = {
    update: XOR<UserUpdateWithoutCommentsInput, UserUncheckedUpdateWithoutCommentsInput>
    create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCommentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCommentsInput, UserUncheckedUpdateWithoutCommentsInput>
  }

  export type UserUpdateWithoutCommentsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    recovery_key?: NullableStringFieldUpdateOperationsInput | string | null
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    packs?: PackUpdateManyWithoutAuthorNestedInput
    shaders?: ShaderUpdateManyWithoutAuthorNestedInput
    mods?: ModUpdateManyWithoutAuthorNestedInput
    image?: ImageUpdateOneWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutCommentsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    recovery_key?: NullableStringFieldUpdateOperationsInput | string | null
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    imageId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    packs?: PackUncheckedUpdateManyWithoutAuthorNestedInput
    shaders?: ShaderUncheckedUpdateManyWithoutAuthorNestedInput
    mods?: ModUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type PackUpsertWithoutCommentsInput = {
    update: XOR<PackUpdateWithoutCommentsInput, PackUncheckedUpdateWithoutCommentsInput>
    create: XOR<PackCreateWithoutCommentsInput, PackUncheckedCreateWithoutCommentsInput>
    where?: PackWhereInput
  }

  export type PackUpdateToOneWithWhereWithoutCommentsInput = {
    where?: PackWhereInput
    data: XOR<PackUpdateWithoutCommentsInput, PackUncheckedUpdateWithoutCommentsInput>
  }

  export type PackUpdateWithoutCommentsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    max_version?: IntFieldUpdateOperationsInput | number
    min_version?: IntFieldUpdateOperationsInput | number
    versionType?: EnumVersionTypeFieldUpdateOperationsInput | $Enums.VersionType
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    shaders?: ShaderUpdateManyWithoutPacksNestedInput
    mods?: ModUpdateManyWithoutPacksNestedInput
    author?: UserUpdateOneRequiredWithoutPacksNestedInput
    images?: ImageUpdateManyWithoutPackNestedInput
    principalImage?: ImageUpdateOneWithoutPacksPrincipalNestedInput
  }

  export type PackUncheckedUpdateWithoutCommentsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    max_version?: IntFieldUpdateOperationsInput | number
    min_version?: IntFieldUpdateOperationsInput | number
    versionType?: EnumVersionTypeFieldUpdateOperationsInput | $Enums.VersionType
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    authorId?: BigIntFieldUpdateOperationsInput | bigint | number
    principalImageId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    shaders?: ShaderUncheckedUpdateManyWithoutPacksNestedInput
    mods?: ModUncheckedUpdateManyWithoutPacksNestedInput
    images?: ImageUncheckedUpdateManyWithoutPackNestedInput
  }

  export type ShaderUpsertWithoutCommentsInput = {
    update: XOR<ShaderUpdateWithoutCommentsInput, ShaderUncheckedUpdateWithoutCommentsInput>
    create: XOR<ShaderCreateWithoutCommentsInput, ShaderUncheckedCreateWithoutCommentsInput>
    where?: ShaderWhereInput
  }

  export type ShaderUpdateToOneWithWhereWithoutCommentsInput = {
    where?: ShaderWhereInput
    data: XOR<ShaderUpdateWithoutCommentsInput, ShaderUncheckedUpdateWithoutCommentsInput>
  }

  export type ShaderUpdateWithoutCommentsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    weight?: IntFieldUpdateOperationsInput | number
    src?: StringFieldUpdateOperationsInput | string
    versionType?: EnumVersionTypeFieldUpdateOperationsInput | $Enums.VersionType
    packs?: PackUpdateManyWithoutShadersNestedInput
    author?: UserUpdateOneRequiredWithoutShadersNestedInput
    images?: ImageUpdateManyWithoutShaderNestedInput
    conflicts?: ConflictUpdateManyWithoutConflictShaderNestedInput
    shaderDependecies?: ShaderDependecyUpdateManyWithoutShaderNestedInput
    principalImage?: ImageUpdateOneWithoutShadersPrincipalNestedInput
  }

  export type ShaderUncheckedUpdateWithoutCommentsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    weight?: IntFieldUpdateOperationsInput | number
    src?: StringFieldUpdateOperationsInput | string
    authorId?: BigIntFieldUpdateOperationsInput | bigint | number
    versionType?: EnumVersionTypeFieldUpdateOperationsInput | $Enums.VersionType
    principalImageId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    packs?: PackUncheckedUpdateManyWithoutShadersNestedInput
    images?: ImageUncheckedUpdateManyWithoutShaderNestedInput
    conflicts?: ConflictUncheckedUpdateManyWithoutConflictShaderNestedInput
    shaderDependecies?: ShaderDependecyUncheckedUpdateManyWithoutShaderNestedInput
  }

  export type ModUpsertWithoutCommentsInput = {
    update: XOR<ModUpdateWithoutCommentsInput, ModUncheckedUpdateWithoutCommentsInput>
    create: XOR<ModCreateWithoutCommentsInput, ModUncheckedCreateWithoutCommentsInput>
    where?: ModWhereInput
  }

  export type ModUpdateToOneWithWhereWithoutCommentsInput = {
    where?: ModWhereInput
    data: XOR<ModUpdateWithoutCommentsInput, ModUncheckedUpdateWithoutCommentsInput>
  }

  export type ModUpdateWithoutCommentsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    min_version?: IntFieldUpdateOperationsInput | number
    max_version?: IntFieldUpdateOperationsInput | number
    src?: StringFieldUpdateOperationsInput | string
    weight?: IntFieldUpdateOperationsInput | number
    versionType?: EnumVersionTypeFieldUpdateOperationsInput | $Enums.VersionType
    packs?: PackUpdateManyWithoutModsNestedInput
    author?: UserUpdateOneRequiredWithoutModsNestedInput
    images?: ImageUpdateManyWithoutModNestedInput
    conflictsFrom?: ConflictUpdateManyWithoutModNestedInput
    conflictsTo?: ConflictUpdateManyWithoutConflictModNestedInput
    requiredBy?: ModDependencyUpdateManyWithoutDependencyNestedInput
    modDependencies?: ModDependencyUpdateManyWithoutModNestedInput
    shaderDependecies?: ShaderDependecyUpdateManyWithoutModNestedInput
    principalImage?: ImageUpdateOneWithoutModsPrincipalNestedInput
  }

  export type ModUncheckedUpdateWithoutCommentsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    min_version?: IntFieldUpdateOperationsInput | number
    max_version?: IntFieldUpdateOperationsInput | number
    src?: StringFieldUpdateOperationsInput | string
    weight?: IntFieldUpdateOperationsInput | number
    authorId?: BigIntFieldUpdateOperationsInput | bigint | number
    versionType?: EnumVersionTypeFieldUpdateOperationsInput | $Enums.VersionType
    principalImageId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    packs?: PackUncheckedUpdateManyWithoutModsNestedInput
    images?: ImageUncheckedUpdateManyWithoutModNestedInput
    conflictsFrom?: ConflictUncheckedUpdateManyWithoutModNestedInput
    conflictsTo?: ConflictUncheckedUpdateManyWithoutConflictModNestedInput
    requiredBy?: ModDependencyUncheckedUpdateManyWithoutDependencyNestedInput
    modDependencies?: ModDependencyUncheckedUpdateManyWithoutModNestedInput
    shaderDependecies?: ShaderDependecyUncheckedUpdateManyWithoutModNestedInput
  }

  export type ModCreateWithoutImagesInput = {
    id?: bigint | number
    name: string
    description?: string
    min_version: number
    max_version: number
    src: string
    weight: number
    versionType: $Enums.VersionType
    packs?: PackCreateNestedManyWithoutModsInput
    author: UserCreateNestedOneWithoutModsInput
    comments?: CommentCreateNestedManyWithoutModInput
    conflictsFrom?: ConflictCreateNestedManyWithoutModInput
    conflictsTo?: ConflictCreateNestedManyWithoutConflictModInput
    requiredBy?: ModDependencyCreateNestedManyWithoutDependencyInput
    modDependencies?: ModDependencyCreateNestedManyWithoutModInput
    shaderDependecies?: ShaderDependecyCreateNestedManyWithoutModInput
    principalImage?: ImageCreateNestedOneWithoutModsPrincipalInput
  }

  export type ModUncheckedCreateWithoutImagesInput = {
    id?: bigint | number
    name: string
    description?: string
    min_version: number
    max_version: number
    src: string
    weight: number
    authorId: bigint | number
    versionType: $Enums.VersionType
    principalImageId?: bigint | number | null
    packs?: PackUncheckedCreateNestedManyWithoutModsInput
    comments?: CommentUncheckedCreateNestedManyWithoutModInput
    conflictsFrom?: ConflictUncheckedCreateNestedManyWithoutModInput
    conflictsTo?: ConflictUncheckedCreateNestedManyWithoutConflictModInput
    requiredBy?: ModDependencyUncheckedCreateNestedManyWithoutDependencyInput
    modDependencies?: ModDependencyUncheckedCreateNestedManyWithoutModInput
    shaderDependecies?: ShaderDependecyUncheckedCreateNestedManyWithoutModInput
  }

  export type ModCreateOrConnectWithoutImagesInput = {
    where: ModWhereUniqueInput
    create: XOR<ModCreateWithoutImagesInput, ModUncheckedCreateWithoutImagesInput>
  }

  export type ShaderCreateWithoutImagesInput = {
    id?: bigint | number
    name: string
    description?: string
    weight: number
    src: string
    versionType: $Enums.VersionType
    packs?: PackCreateNestedManyWithoutShadersInput
    author: UserCreateNestedOneWithoutShadersInput
    comments?: CommentCreateNestedManyWithoutShaderInput
    conflicts?: ConflictCreateNestedManyWithoutConflictShaderInput
    shaderDependecies?: ShaderDependecyCreateNestedManyWithoutShaderInput
    principalImage?: ImageCreateNestedOneWithoutShadersPrincipalInput
  }

  export type ShaderUncheckedCreateWithoutImagesInput = {
    id?: bigint | number
    name: string
    description?: string
    weight: number
    src: string
    authorId: bigint | number
    versionType: $Enums.VersionType
    principalImageId?: bigint | number | null
    packs?: PackUncheckedCreateNestedManyWithoutShadersInput
    comments?: CommentUncheckedCreateNestedManyWithoutShaderInput
    conflicts?: ConflictUncheckedCreateNestedManyWithoutConflictShaderInput
    shaderDependecies?: ShaderDependecyUncheckedCreateNestedManyWithoutShaderInput
  }

  export type ShaderCreateOrConnectWithoutImagesInput = {
    where: ShaderWhereUniqueInput
    create: XOR<ShaderCreateWithoutImagesInput, ShaderUncheckedCreateWithoutImagesInput>
  }

  export type PackCreateWithoutImagesInput = {
    id?: bigint | number
    max_version: number
    min_version: number
    versionType: $Enums.VersionType
    name: string
    description?: string | null
    shaders?: ShaderCreateNestedManyWithoutPacksInput
    mods?: ModCreateNestedManyWithoutPacksInput
    author: UserCreateNestedOneWithoutPacksInput
    comments?: CommentCreateNestedManyWithoutPackInput
    principalImage?: ImageCreateNestedOneWithoutPacksPrincipalInput
  }

  export type PackUncheckedCreateWithoutImagesInput = {
    id?: bigint | number
    max_version: number
    min_version: number
    versionType: $Enums.VersionType
    name: string
    description?: string | null
    authorId: bigint | number
    principalImageId?: bigint | number | null
    shaders?: ShaderUncheckedCreateNestedManyWithoutPacksInput
    mods?: ModUncheckedCreateNestedManyWithoutPacksInput
    comments?: CommentUncheckedCreateNestedManyWithoutPackInput
  }

  export type PackCreateOrConnectWithoutImagesInput = {
    where: PackWhereUniqueInput
    create: XOR<PackCreateWithoutImagesInput, PackUncheckedCreateWithoutImagesInput>
  }

  export type UserCreateWithoutImageInput = {
    id?: bigint | number
    email: string
    nickname: string
    password: string
    recovery_key?: string | null
    is_admin?: boolean
    packs?: PackCreateNestedManyWithoutAuthorInput
    shaders?: ShaderCreateNestedManyWithoutAuthorInput
    mods?: ModCreateNestedManyWithoutAuthorInput
    comments?: CommentCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateWithoutImageInput = {
    id?: bigint | number
    email: string
    nickname: string
    password: string
    recovery_key?: string | null
    is_admin?: boolean
    packs?: PackUncheckedCreateNestedManyWithoutAuthorInput
    shaders?: ShaderUncheckedCreateNestedManyWithoutAuthorInput
    mods?: ModUncheckedCreateNestedManyWithoutAuthorInput
    comments?: CommentUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserCreateOrConnectWithoutImageInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutImageInput, UserUncheckedCreateWithoutImageInput>
  }

  export type UserCreateManyImageInputEnvelope = {
    data: UserCreateManyImageInput | UserCreateManyImageInput[]
    skipDuplicates?: boolean
  }

  export type PackCreateWithoutPrincipalImageInput = {
    id?: bigint | number
    max_version: number
    min_version: number
    versionType: $Enums.VersionType
    name: string
    description?: string | null
    shaders?: ShaderCreateNestedManyWithoutPacksInput
    mods?: ModCreateNestedManyWithoutPacksInput
    author: UserCreateNestedOneWithoutPacksInput
    comments?: CommentCreateNestedManyWithoutPackInput
    images?: ImageCreateNestedManyWithoutPackInput
  }

  export type PackUncheckedCreateWithoutPrincipalImageInput = {
    id?: bigint | number
    max_version: number
    min_version: number
    versionType: $Enums.VersionType
    name: string
    description?: string | null
    authorId: bigint | number
    shaders?: ShaderUncheckedCreateNestedManyWithoutPacksInput
    mods?: ModUncheckedCreateNestedManyWithoutPacksInput
    comments?: CommentUncheckedCreateNestedManyWithoutPackInput
    images?: ImageUncheckedCreateNestedManyWithoutPackInput
  }

  export type PackCreateOrConnectWithoutPrincipalImageInput = {
    where: PackWhereUniqueInput
    create: XOR<PackCreateWithoutPrincipalImageInput, PackUncheckedCreateWithoutPrincipalImageInput>
  }

  export type PackCreateManyPrincipalImageInputEnvelope = {
    data: PackCreateManyPrincipalImageInput | PackCreateManyPrincipalImageInput[]
    skipDuplicates?: boolean
  }

  export type ShaderCreateWithoutPrincipalImageInput = {
    id?: bigint | number
    name: string
    description?: string
    weight: number
    src: string
    versionType: $Enums.VersionType
    packs?: PackCreateNestedManyWithoutShadersInput
    author: UserCreateNestedOneWithoutShadersInput
    comments?: CommentCreateNestedManyWithoutShaderInput
    images?: ImageCreateNestedManyWithoutShaderInput
    conflicts?: ConflictCreateNestedManyWithoutConflictShaderInput
    shaderDependecies?: ShaderDependecyCreateNestedManyWithoutShaderInput
  }

  export type ShaderUncheckedCreateWithoutPrincipalImageInput = {
    id?: bigint | number
    name: string
    description?: string
    weight: number
    src: string
    authorId: bigint | number
    versionType: $Enums.VersionType
    packs?: PackUncheckedCreateNestedManyWithoutShadersInput
    comments?: CommentUncheckedCreateNestedManyWithoutShaderInput
    images?: ImageUncheckedCreateNestedManyWithoutShaderInput
    conflicts?: ConflictUncheckedCreateNestedManyWithoutConflictShaderInput
    shaderDependecies?: ShaderDependecyUncheckedCreateNestedManyWithoutShaderInput
  }

  export type ShaderCreateOrConnectWithoutPrincipalImageInput = {
    where: ShaderWhereUniqueInput
    create: XOR<ShaderCreateWithoutPrincipalImageInput, ShaderUncheckedCreateWithoutPrincipalImageInput>
  }

  export type ShaderCreateManyPrincipalImageInputEnvelope = {
    data: ShaderCreateManyPrincipalImageInput | ShaderCreateManyPrincipalImageInput[]
    skipDuplicates?: boolean
  }

  export type ModCreateWithoutPrincipalImageInput = {
    id?: bigint | number
    name: string
    description?: string
    min_version: number
    max_version: number
    src: string
    weight: number
    versionType: $Enums.VersionType
    packs?: PackCreateNestedManyWithoutModsInput
    author: UserCreateNestedOneWithoutModsInput
    comments?: CommentCreateNestedManyWithoutModInput
    images?: ImageCreateNestedManyWithoutModInput
    conflictsFrom?: ConflictCreateNestedManyWithoutModInput
    conflictsTo?: ConflictCreateNestedManyWithoutConflictModInput
    requiredBy?: ModDependencyCreateNestedManyWithoutDependencyInput
    modDependencies?: ModDependencyCreateNestedManyWithoutModInput
    shaderDependecies?: ShaderDependecyCreateNestedManyWithoutModInput
  }

  export type ModUncheckedCreateWithoutPrincipalImageInput = {
    id?: bigint | number
    name: string
    description?: string
    min_version: number
    max_version: number
    src: string
    weight: number
    authorId: bigint | number
    versionType: $Enums.VersionType
    packs?: PackUncheckedCreateNestedManyWithoutModsInput
    comments?: CommentUncheckedCreateNestedManyWithoutModInput
    images?: ImageUncheckedCreateNestedManyWithoutModInput
    conflictsFrom?: ConflictUncheckedCreateNestedManyWithoutModInput
    conflictsTo?: ConflictUncheckedCreateNestedManyWithoutConflictModInput
    requiredBy?: ModDependencyUncheckedCreateNestedManyWithoutDependencyInput
    modDependencies?: ModDependencyUncheckedCreateNestedManyWithoutModInput
    shaderDependecies?: ShaderDependecyUncheckedCreateNestedManyWithoutModInput
  }

  export type ModCreateOrConnectWithoutPrincipalImageInput = {
    where: ModWhereUniqueInput
    create: XOR<ModCreateWithoutPrincipalImageInput, ModUncheckedCreateWithoutPrincipalImageInput>
  }

  export type ModCreateManyPrincipalImageInputEnvelope = {
    data: ModCreateManyPrincipalImageInput | ModCreateManyPrincipalImageInput[]
    skipDuplicates?: boolean
  }

  export type ModUpsertWithoutImagesInput = {
    update: XOR<ModUpdateWithoutImagesInput, ModUncheckedUpdateWithoutImagesInput>
    create: XOR<ModCreateWithoutImagesInput, ModUncheckedCreateWithoutImagesInput>
    where?: ModWhereInput
  }

  export type ModUpdateToOneWithWhereWithoutImagesInput = {
    where?: ModWhereInput
    data: XOR<ModUpdateWithoutImagesInput, ModUncheckedUpdateWithoutImagesInput>
  }

  export type ModUpdateWithoutImagesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    min_version?: IntFieldUpdateOperationsInput | number
    max_version?: IntFieldUpdateOperationsInput | number
    src?: StringFieldUpdateOperationsInput | string
    weight?: IntFieldUpdateOperationsInput | number
    versionType?: EnumVersionTypeFieldUpdateOperationsInput | $Enums.VersionType
    packs?: PackUpdateManyWithoutModsNestedInput
    author?: UserUpdateOneRequiredWithoutModsNestedInput
    comments?: CommentUpdateManyWithoutModNestedInput
    conflictsFrom?: ConflictUpdateManyWithoutModNestedInput
    conflictsTo?: ConflictUpdateManyWithoutConflictModNestedInput
    requiredBy?: ModDependencyUpdateManyWithoutDependencyNestedInput
    modDependencies?: ModDependencyUpdateManyWithoutModNestedInput
    shaderDependecies?: ShaderDependecyUpdateManyWithoutModNestedInput
    principalImage?: ImageUpdateOneWithoutModsPrincipalNestedInput
  }

  export type ModUncheckedUpdateWithoutImagesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    min_version?: IntFieldUpdateOperationsInput | number
    max_version?: IntFieldUpdateOperationsInput | number
    src?: StringFieldUpdateOperationsInput | string
    weight?: IntFieldUpdateOperationsInput | number
    authorId?: BigIntFieldUpdateOperationsInput | bigint | number
    versionType?: EnumVersionTypeFieldUpdateOperationsInput | $Enums.VersionType
    principalImageId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    packs?: PackUncheckedUpdateManyWithoutModsNestedInput
    comments?: CommentUncheckedUpdateManyWithoutModNestedInput
    conflictsFrom?: ConflictUncheckedUpdateManyWithoutModNestedInput
    conflictsTo?: ConflictUncheckedUpdateManyWithoutConflictModNestedInput
    requiredBy?: ModDependencyUncheckedUpdateManyWithoutDependencyNestedInput
    modDependencies?: ModDependencyUncheckedUpdateManyWithoutModNestedInput
    shaderDependecies?: ShaderDependecyUncheckedUpdateManyWithoutModNestedInput
  }

  export type ShaderUpsertWithoutImagesInput = {
    update: XOR<ShaderUpdateWithoutImagesInput, ShaderUncheckedUpdateWithoutImagesInput>
    create: XOR<ShaderCreateWithoutImagesInput, ShaderUncheckedCreateWithoutImagesInput>
    where?: ShaderWhereInput
  }

  export type ShaderUpdateToOneWithWhereWithoutImagesInput = {
    where?: ShaderWhereInput
    data: XOR<ShaderUpdateWithoutImagesInput, ShaderUncheckedUpdateWithoutImagesInput>
  }

  export type ShaderUpdateWithoutImagesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    weight?: IntFieldUpdateOperationsInput | number
    src?: StringFieldUpdateOperationsInput | string
    versionType?: EnumVersionTypeFieldUpdateOperationsInput | $Enums.VersionType
    packs?: PackUpdateManyWithoutShadersNestedInput
    author?: UserUpdateOneRequiredWithoutShadersNestedInput
    comments?: CommentUpdateManyWithoutShaderNestedInput
    conflicts?: ConflictUpdateManyWithoutConflictShaderNestedInput
    shaderDependecies?: ShaderDependecyUpdateManyWithoutShaderNestedInput
    principalImage?: ImageUpdateOneWithoutShadersPrincipalNestedInput
  }

  export type ShaderUncheckedUpdateWithoutImagesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    weight?: IntFieldUpdateOperationsInput | number
    src?: StringFieldUpdateOperationsInput | string
    authorId?: BigIntFieldUpdateOperationsInput | bigint | number
    versionType?: EnumVersionTypeFieldUpdateOperationsInput | $Enums.VersionType
    principalImageId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    packs?: PackUncheckedUpdateManyWithoutShadersNestedInput
    comments?: CommentUncheckedUpdateManyWithoutShaderNestedInput
    conflicts?: ConflictUncheckedUpdateManyWithoutConflictShaderNestedInput
    shaderDependecies?: ShaderDependecyUncheckedUpdateManyWithoutShaderNestedInput
  }

  export type PackUpsertWithoutImagesInput = {
    update: XOR<PackUpdateWithoutImagesInput, PackUncheckedUpdateWithoutImagesInput>
    create: XOR<PackCreateWithoutImagesInput, PackUncheckedCreateWithoutImagesInput>
    where?: PackWhereInput
  }

  export type PackUpdateToOneWithWhereWithoutImagesInput = {
    where?: PackWhereInput
    data: XOR<PackUpdateWithoutImagesInput, PackUncheckedUpdateWithoutImagesInput>
  }

  export type PackUpdateWithoutImagesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    max_version?: IntFieldUpdateOperationsInput | number
    min_version?: IntFieldUpdateOperationsInput | number
    versionType?: EnumVersionTypeFieldUpdateOperationsInput | $Enums.VersionType
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    shaders?: ShaderUpdateManyWithoutPacksNestedInput
    mods?: ModUpdateManyWithoutPacksNestedInput
    author?: UserUpdateOneRequiredWithoutPacksNestedInput
    comments?: CommentUpdateManyWithoutPackNestedInput
    principalImage?: ImageUpdateOneWithoutPacksPrincipalNestedInput
  }

  export type PackUncheckedUpdateWithoutImagesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    max_version?: IntFieldUpdateOperationsInput | number
    min_version?: IntFieldUpdateOperationsInput | number
    versionType?: EnumVersionTypeFieldUpdateOperationsInput | $Enums.VersionType
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    authorId?: BigIntFieldUpdateOperationsInput | bigint | number
    principalImageId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    shaders?: ShaderUncheckedUpdateManyWithoutPacksNestedInput
    mods?: ModUncheckedUpdateManyWithoutPacksNestedInput
    comments?: CommentUncheckedUpdateManyWithoutPackNestedInput
  }

  export type UserUpsertWithWhereUniqueWithoutImageInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutImageInput, UserUncheckedUpdateWithoutImageInput>
    create: XOR<UserCreateWithoutImageInput, UserUncheckedCreateWithoutImageInput>
  }

  export type UserUpdateWithWhereUniqueWithoutImageInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutImageInput, UserUncheckedUpdateWithoutImageInput>
  }

  export type UserUpdateManyWithWhereWithoutImageInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutImageInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: BigIntFilter<"User"> | bigint | number
    email?: StringFilter<"User"> | string
    nickname?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    recovery_key?: StringNullableFilter<"User"> | string | null
    is_admin?: BoolFilter<"User"> | boolean
    imageId?: BigIntNullableFilter<"User"> | bigint | number | null
  }

  export type PackUpsertWithWhereUniqueWithoutPrincipalImageInput = {
    where: PackWhereUniqueInput
    update: XOR<PackUpdateWithoutPrincipalImageInput, PackUncheckedUpdateWithoutPrincipalImageInput>
    create: XOR<PackCreateWithoutPrincipalImageInput, PackUncheckedCreateWithoutPrincipalImageInput>
  }

  export type PackUpdateWithWhereUniqueWithoutPrincipalImageInput = {
    where: PackWhereUniqueInput
    data: XOR<PackUpdateWithoutPrincipalImageInput, PackUncheckedUpdateWithoutPrincipalImageInput>
  }

  export type PackUpdateManyWithWhereWithoutPrincipalImageInput = {
    where: PackScalarWhereInput
    data: XOR<PackUpdateManyMutationInput, PackUncheckedUpdateManyWithoutPrincipalImageInput>
  }

  export type ShaderUpsertWithWhereUniqueWithoutPrincipalImageInput = {
    where: ShaderWhereUniqueInput
    update: XOR<ShaderUpdateWithoutPrincipalImageInput, ShaderUncheckedUpdateWithoutPrincipalImageInput>
    create: XOR<ShaderCreateWithoutPrincipalImageInput, ShaderUncheckedCreateWithoutPrincipalImageInput>
  }

  export type ShaderUpdateWithWhereUniqueWithoutPrincipalImageInput = {
    where: ShaderWhereUniqueInput
    data: XOR<ShaderUpdateWithoutPrincipalImageInput, ShaderUncheckedUpdateWithoutPrincipalImageInput>
  }

  export type ShaderUpdateManyWithWhereWithoutPrincipalImageInput = {
    where: ShaderScalarWhereInput
    data: XOR<ShaderUpdateManyMutationInput, ShaderUncheckedUpdateManyWithoutPrincipalImageInput>
  }

  export type ModUpsertWithWhereUniqueWithoutPrincipalImageInput = {
    where: ModWhereUniqueInput
    update: XOR<ModUpdateWithoutPrincipalImageInput, ModUncheckedUpdateWithoutPrincipalImageInput>
    create: XOR<ModCreateWithoutPrincipalImageInput, ModUncheckedCreateWithoutPrincipalImageInput>
  }

  export type ModUpdateWithWhereUniqueWithoutPrincipalImageInput = {
    where: ModWhereUniqueInput
    data: XOR<ModUpdateWithoutPrincipalImageInput, ModUncheckedUpdateWithoutPrincipalImageInput>
  }

  export type ModUpdateManyWithWhereWithoutPrincipalImageInput = {
    where: ModScalarWhereInput
    data: XOR<ModUpdateManyMutationInput, ModUncheckedUpdateManyWithoutPrincipalImageInput>
  }

  export type ShaderCreateWithoutConflictsInput = {
    id?: bigint | number
    name: string
    description?: string
    weight: number
    src: string
    versionType: $Enums.VersionType
    packs?: PackCreateNestedManyWithoutShadersInput
    author: UserCreateNestedOneWithoutShadersInput
    comments?: CommentCreateNestedManyWithoutShaderInput
    images?: ImageCreateNestedManyWithoutShaderInput
    shaderDependecies?: ShaderDependecyCreateNestedManyWithoutShaderInput
    principalImage?: ImageCreateNestedOneWithoutShadersPrincipalInput
  }

  export type ShaderUncheckedCreateWithoutConflictsInput = {
    id?: bigint | number
    name: string
    description?: string
    weight: number
    src: string
    authorId: bigint | number
    versionType: $Enums.VersionType
    principalImageId?: bigint | number | null
    packs?: PackUncheckedCreateNestedManyWithoutShadersInput
    comments?: CommentUncheckedCreateNestedManyWithoutShaderInput
    images?: ImageUncheckedCreateNestedManyWithoutShaderInput
    shaderDependecies?: ShaderDependecyUncheckedCreateNestedManyWithoutShaderInput
  }

  export type ShaderCreateOrConnectWithoutConflictsInput = {
    where: ShaderWhereUniqueInput
    create: XOR<ShaderCreateWithoutConflictsInput, ShaderUncheckedCreateWithoutConflictsInput>
  }

  export type ModCreateWithoutConflictsFromInput = {
    id?: bigint | number
    name: string
    description?: string
    min_version: number
    max_version: number
    src: string
    weight: number
    versionType: $Enums.VersionType
    packs?: PackCreateNestedManyWithoutModsInput
    author: UserCreateNestedOneWithoutModsInput
    comments?: CommentCreateNestedManyWithoutModInput
    images?: ImageCreateNestedManyWithoutModInput
    conflictsTo?: ConflictCreateNestedManyWithoutConflictModInput
    requiredBy?: ModDependencyCreateNestedManyWithoutDependencyInput
    modDependencies?: ModDependencyCreateNestedManyWithoutModInput
    shaderDependecies?: ShaderDependecyCreateNestedManyWithoutModInput
    principalImage?: ImageCreateNestedOneWithoutModsPrincipalInput
  }

  export type ModUncheckedCreateWithoutConflictsFromInput = {
    id?: bigint | number
    name: string
    description?: string
    min_version: number
    max_version: number
    src: string
    weight: number
    authorId: bigint | number
    versionType: $Enums.VersionType
    principalImageId?: bigint | number | null
    packs?: PackUncheckedCreateNestedManyWithoutModsInput
    comments?: CommentUncheckedCreateNestedManyWithoutModInput
    images?: ImageUncheckedCreateNestedManyWithoutModInput
    conflictsTo?: ConflictUncheckedCreateNestedManyWithoutConflictModInput
    requiredBy?: ModDependencyUncheckedCreateNestedManyWithoutDependencyInput
    modDependencies?: ModDependencyUncheckedCreateNestedManyWithoutModInput
    shaderDependecies?: ShaderDependecyUncheckedCreateNestedManyWithoutModInput
  }

  export type ModCreateOrConnectWithoutConflictsFromInput = {
    where: ModWhereUniqueInput
    create: XOR<ModCreateWithoutConflictsFromInput, ModUncheckedCreateWithoutConflictsFromInput>
  }

  export type ModCreateWithoutConflictsToInput = {
    id?: bigint | number
    name: string
    description?: string
    min_version: number
    max_version: number
    src: string
    weight: number
    versionType: $Enums.VersionType
    packs?: PackCreateNestedManyWithoutModsInput
    author: UserCreateNestedOneWithoutModsInput
    comments?: CommentCreateNestedManyWithoutModInput
    images?: ImageCreateNestedManyWithoutModInput
    conflictsFrom?: ConflictCreateNestedManyWithoutModInput
    requiredBy?: ModDependencyCreateNestedManyWithoutDependencyInput
    modDependencies?: ModDependencyCreateNestedManyWithoutModInput
    shaderDependecies?: ShaderDependecyCreateNestedManyWithoutModInput
    principalImage?: ImageCreateNestedOneWithoutModsPrincipalInput
  }

  export type ModUncheckedCreateWithoutConflictsToInput = {
    id?: bigint | number
    name: string
    description?: string
    min_version: number
    max_version: number
    src: string
    weight: number
    authorId: bigint | number
    versionType: $Enums.VersionType
    principalImageId?: bigint | number | null
    packs?: PackUncheckedCreateNestedManyWithoutModsInput
    comments?: CommentUncheckedCreateNestedManyWithoutModInput
    images?: ImageUncheckedCreateNestedManyWithoutModInput
    conflictsFrom?: ConflictUncheckedCreateNestedManyWithoutModInput
    requiredBy?: ModDependencyUncheckedCreateNestedManyWithoutDependencyInput
    modDependencies?: ModDependencyUncheckedCreateNestedManyWithoutModInput
    shaderDependecies?: ShaderDependecyUncheckedCreateNestedManyWithoutModInput
  }

  export type ModCreateOrConnectWithoutConflictsToInput = {
    where: ModWhereUniqueInput
    create: XOR<ModCreateWithoutConflictsToInput, ModUncheckedCreateWithoutConflictsToInput>
  }

  export type ShaderUpsertWithoutConflictsInput = {
    update: XOR<ShaderUpdateWithoutConflictsInput, ShaderUncheckedUpdateWithoutConflictsInput>
    create: XOR<ShaderCreateWithoutConflictsInput, ShaderUncheckedCreateWithoutConflictsInput>
    where?: ShaderWhereInput
  }

  export type ShaderUpdateToOneWithWhereWithoutConflictsInput = {
    where?: ShaderWhereInput
    data: XOR<ShaderUpdateWithoutConflictsInput, ShaderUncheckedUpdateWithoutConflictsInput>
  }

  export type ShaderUpdateWithoutConflictsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    weight?: IntFieldUpdateOperationsInput | number
    src?: StringFieldUpdateOperationsInput | string
    versionType?: EnumVersionTypeFieldUpdateOperationsInput | $Enums.VersionType
    packs?: PackUpdateManyWithoutShadersNestedInput
    author?: UserUpdateOneRequiredWithoutShadersNestedInput
    comments?: CommentUpdateManyWithoutShaderNestedInput
    images?: ImageUpdateManyWithoutShaderNestedInput
    shaderDependecies?: ShaderDependecyUpdateManyWithoutShaderNestedInput
    principalImage?: ImageUpdateOneWithoutShadersPrincipalNestedInput
  }

  export type ShaderUncheckedUpdateWithoutConflictsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    weight?: IntFieldUpdateOperationsInput | number
    src?: StringFieldUpdateOperationsInput | string
    authorId?: BigIntFieldUpdateOperationsInput | bigint | number
    versionType?: EnumVersionTypeFieldUpdateOperationsInput | $Enums.VersionType
    principalImageId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    packs?: PackUncheckedUpdateManyWithoutShadersNestedInput
    comments?: CommentUncheckedUpdateManyWithoutShaderNestedInput
    images?: ImageUncheckedUpdateManyWithoutShaderNestedInput
    shaderDependecies?: ShaderDependecyUncheckedUpdateManyWithoutShaderNestedInput
  }

  export type ModUpsertWithoutConflictsFromInput = {
    update: XOR<ModUpdateWithoutConflictsFromInput, ModUncheckedUpdateWithoutConflictsFromInput>
    create: XOR<ModCreateWithoutConflictsFromInput, ModUncheckedCreateWithoutConflictsFromInput>
    where?: ModWhereInput
  }

  export type ModUpdateToOneWithWhereWithoutConflictsFromInput = {
    where?: ModWhereInput
    data: XOR<ModUpdateWithoutConflictsFromInput, ModUncheckedUpdateWithoutConflictsFromInput>
  }

  export type ModUpdateWithoutConflictsFromInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    min_version?: IntFieldUpdateOperationsInput | number
    max_version?: IntFieldUpdateOperationsInput | number
    src?: StringFieldUpdateOperationsInput | string
    weight?: IntFieldUpdateOperationsInput | number
    versionType?: EnumVersionTypeFieldUpdateOperationsInput | $Enums.VersionType
    packs?: PackUpdateManyWithoutModsNestedInput
    author?: UserUpdateOneRequiredWithoutModsNestedInput
    comments?: CommentUpdateManyWithoutModNestedInput
    images?: ImageUpdateManyWithoutModNestedInput
    conflictsTo?: ConflictUpdateManyWithoutConflictModNestedInput
    requiredBy?: ModDependencyUpdateManyWithoutDependencyNestedInput
    modDependencies?: ModDependencyUpdateManyWithoutModNestedInput
    shaderDependecies?: ShaderDependecyUpdateManyWithoutModNestedInput
    principalImage?: ImageUpdateOneWithoutModsPrincipalNestedInput
  }

  export type ModUncheckedUpdateWithoutConflictsFromInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    min_version?: IntFieldUpdateOperationsInput | number
    max_version?: IntFieldUpdateOperationsInput | number
    src?: StringFieldUpdateOperationsInput | string
    weight?: IntFieldUpdateOperationsInput | number
    authorId?: BigIntFieldUpdateOperationsInput | bigint | number
    versionType?: EnumVersionTypeFieldUpdateOperationsInput | $Enums.VersionType
    principalImageId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    packs?: PackUncheckedUpdateManyWithoutModsNestedInput
    comments?: CommentUncheckedUpdateManyWithoutModNestedInput
    images?: ImageUncheckedUpdateManyWithoutModNestedInput
    conflictsTo?: ConflictUncheckedUpdateManyWithoutConflictModNestedInput
    requiredBy?: ModDependencyUncheckedUpdateManyWithoutDependencyNestedInput
    modDependencies?: ModDependencyUncheckedUpdateManyWithoutModNestedInput
    shaderDependecies?: ShaderDependecyUncheckedUpdateManyWithoutModNestedInput
  }

  export type ModUpsertWithoutConflictsToInput = {
    update: XOR<ModUpdateWithoutConflictsToInput, ModUncheckedUpdateWithoutConflictsToInput>
    create: XOR<ModCreateWithoutConflictsToInput, ModUncheckedCreateWithoutConflictsToInput>
    where?: ModWhereInput
  }

  export type ModUpdateToOneWithWhereWithoutConflictsToInput = {
    where?: ModWhereInput
    data: XOR<ModUpdateWithoutConflictsToInput, ModUncheckedUpdateWithoutConflictsToInput>
  }

  export type ModUpdateWithoutConflictsToInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    min_version?: IntFieldUpdateOperationsInput | number
    max_version?: IntFieldUpdateOperationsInput | number
    src?: StringFieldUpdateOperationsInput | string
    weight?: IntFieldUpdateOperationsInput | number
    versionType?: EnumVersionTypeFieldUpdateOperationsInput | $Enums.VersionType
    packs?: PackUpdateManyWithoutModsNestedInput
    author?: UserUpdateOneRequiredWithoutModsNestedInput
    comments?: CommentUpdateManyWithoutModNestedInput
    images?: ImageUpdateManyWithoutModNestedInput
    conflictsFrom?: ConflictUpdateManyWithoutModNestedInput
    requiredBy?: ModDependencyUpdateManyWithoutDependencyNestedInput
    modDependencies?: ModDependencyUpdateManyWithoutModNestedInput
    shaderDependecies?: ShaderDependecyUpdateManyWithoutModNestedInput
    principalImage?: ImageUpdateOneWithoutModsPrincipalNestedInput
  }

  export type ModUncheckedUpdateWithoutConflictsToInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    min_version?: IntFieldUpdateOperationsInput | number
    max_version?: IntFieldUpdateOperationsInput | number
    src?: StringFieldUpdateOperationsInput | string
    weight?: IntFieldUpdateOperationsInput | number
    authorId?: BigIntFieldUpdateOperationsInput | bigint | number
    versionType?: EnumVersionTypeFieldUpdateOperationsInput | $Enums.VersionType
    principalImageId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    packs?: PackUncheckedUpdateManyWithoutModsNestedInput
    comments?: CommentUncheckedUpdateManyWithoutModNestedInput
    images?: ImageUncheckedUpdateManyWithoutModNestedInput
    conflictsFrom?: ConflictUncheckedUpdateManyWithoutModNestedInput
    requiredBy?: ModDependencyUncheckedUpdateManyWithoutDependencyNestedInput
    modDependencies?: ModDependencyUncheckedUpdateManyWithoutModNestedInput
    shaderDependecies?: ShaderDependecyUncheckedUpdateManyWithoutModNestedInput
  }

  export type ModCreateWithoutModDependenciesInput = {
    id?: bigint | number
    name: string
    description?: string
    min_version: number
    max_version: number
    src: string
    weight: number
    versionType: $Enums.VersionType
    packs?: PackCreateNestedManyWithoutModsInput
    author: UserCreateNestedOneWithoutModsInput
    comments?: CommentCreateNestedManyWithoutModInput
    images?: ImageCreateNestedManyWithoutModInput
    conflictsFrom?: ConflictCreateNestedManyWithoutModInput
    conflictsTo?: ConflictCreateNestedManyWithoutConflictModInput
    requiredBy?: ModDependencyCreateNestedManyWithoutDependencyInput
    shaderDependecies?: ShaderDependecyCreateNestedManyWithoutModInput
    principalImage?: ImageCreateNestedOneWithoutModsPrincipalInput
  }

  export type ModUncheckedCreateWithoutModDependenciesInput = {
    id?: bigint | number
    name: string
    description?: string
    min_version: number
    max_version: number
    src: string
    weight: number
    authorId: bigint | number
    versionType: $Enums.VersionType
    principalImageId?: bigint | number | null
    packs?: PackUncheckedCreateNestedManyWithoutModsInput
    comments?: CommentUncheckedCreateNestedManyWithoutModInput
    images?: ImageUncheckedCreateNestedManyWithoutModInput
    conflictsFrom?: ConflictUncheckedCreateNestedManyWithoutModInput
    conflictsTo?: ConflictUncheckedCreateNestedManyWithoutConflictModInput
    requiredBy?: ModDependencyUncheckedCreateNestedManyWithoutDependencyInput
    shaderDependecies?: ShaderDependecyUncheckedCreateNestedManyWithoutModInput
  }

  export type ModCreateOrConnectWithoutModDependenciesInput = {
    where: ModWhereUniqueInput
    create: XOR<ModCreateWithoutModDependenciesInput, ModUncheckedCreateWithoutModDependenciesInput>
  }

  export type ModCreateWithoutRequiredByInput = {
    id?: bigint | number
    name: string
    description?: string
    min_version: number
    max_version: number
    src: string
    weight: number
    versionType: $Enums.VersionType
    packs?: PackCreateNestedManyWithoutModsInput
    author: UserCreateNestedOneWithoutModsInput
    comments?: CommentCreateNestedManyWithoutModInput
    images?: ImageCreateNestedManyWithoutModInput
    conflictsFrom?: ConflictCreateNestedManyWithoutModInput
    conflictsTo?: ConflictCreateNestedManyWithoutConflictModInput
    modDependencies?: ModDependencyCreateNestedManyWithoutModInput
    shaderDependecies?: ShaderDependecyCreateNestedManyWithoutModInput
    principalImage?: ImageCreateNestedOneWithoutModsPrincipalInput
  }

  export type ModUncheckedCreateWithoutRequiredByInput = {
    id?: bigint | number
    name: string
    description?: string
    min_version: number
    max_version: number
    src: string
    weight: number
    authorId: bigint | number
    versionType: $Enums.VersionType
    principalImageId?: bigint | number | null
    packs?: PackUncheckedCreateNestedManyWithoutModsInput
    comments?: CommentUncheckedCreateNestedManyWithoutModInput
    images?: ImageUncheckedCreateNestedManyWithoutModInput
    conflictsFrom?: ConflictUncheckedCreateNestedManyWithoutModInput
    conflictsTo?: ConflictUncheckedCreateNestedManyWithoutConflictModInput
    modDependencies?: ModDependencyUncheckedCreateNestedManyWithoutModInput
    shaderDependecies?: ShaderDependecyUncheckedCreateNestedManyWithoutModInput
  }

  export type ModCreateOrConnectWithoutRequiredByInput = {
    where: ModWhereUniqueInput
    create: XOR<ModCreateWithoutRequiredByInput, ModUncheckedCreateWithoutRequiredByInput>
  }

  export type ModUpsertWithoutModDependenciesInput = {
    update: XOR<ModUpdateWithoutModDependenciesInput, ModUncheckedUpdateWithoutModDependenciesInput>
    create: XOR<ModCreateWithoutModDependenciesInput, ModUncheckedCreateWithoutModDependenciesInput>
    where?: ModWhereInput
  }

  export type ModUpdateToOneWithWhereWithoutModDependenciesInput = {
    where?: ModWhereInput
    data: XOR<ModUpdateWithoutModDependenciesInput, ModUncheckedUpdateWithoutModDependenciesInput>
  }

  export type ModUpdateWithoutModDependenciesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    min_version?: IntFieldUpdateOperationsInput | number
    max_version?: IntFieldUpdateOperationsInput | number
    src?: StringFieldUpdateOperationsInput | string
    weight?: IntFieldUpdateOperationsInput | number
    versionType?: EnumVersionTypeFieldUpdateOperationsInput | $Enums.VersionType
    packs?: PackUpdateManyWithoutModsNestedInput
    author?: UserUpdateOneRequiredWithoutModsNestedInput
    comments?: CommentUpdateManyWithoutModNestedInput
    images?: ImageUpdateManyWithoutModNestedInput
    conflictsFrom?: ConflictUpdateManyWithoutModNestedInput
    conflictsTo?: ConflictUpdateManyWithoutConflictModNestedInput
    requiredBy?: ModDependencyUpdateManyWithoutDependencyNestedInput
    shaderDependecies?: ShaderDependecyUpdateManyWithoutModNestedInput
    principalImage?: ImageUpdateOneWithoutModsPrincipalNestedInput
  }

  export type ModUncheckedUpdateWithoutModDependenciesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    min_version?: IntFieldUpdateOperationsInput | number
    max_version?: IntFieldUpdateOperationsInput | number
    src?: StringFieldUpdateOperationsInput | string
    weight?: IntFieldUpdateOperationsInput | number
    authorId?: BigIntFieldUpdateOperationsInput | bigint | number
    versionType?: EnumVersionTypeFieldUpdateOperationsInput | $Enums.VersionType
    principalImageId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    packs?: PackUncheckedUpdateManyWithoutModsNestedInput
    comments?: CommentUncheckedUpdateManyWithoutModNestedInput
    images?: ImageUncheckedUpdateManyWithoutModNestedInput
    conflictsFrom?: ConflictUncheckedUpdateManyWithoutModNestedInput
    conflictsTo?: ConflictUncheckedUpdateManyWithoutConflictModNestedInput
    requiredBy?: ModDependencyUncheckedUpdateManyWithoutDependencyNestedInput
    shaderDependecies?: ShaderDependecyUncheckedUpdateManyWithoutModNestedInput
  }

  export type ModUpsertWithoutRequiredByInput = {
    update: XOR<ModUpdateWithoutRequiredByInput, ModUncheckedUpdateWithoutRequiredByInput>
    create: XOR<ModCreateWithoutRequiredByInput, ModUncheckedCreateWithoutRequiredByInput>
    where?: ModWhereInput
  }

  export type ModUpdateToOneWithWhereWithoutRequiredByInput = {
    where?: ModWhereInput
    data: XOR<ModUpdateWithoutRequiredByInput, ModUncheckedUpdateWithoutRequiredByInput>
  }

  export type ModUpdateWithoutRequiredByInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    min_version?: IntFieldUpdateOperationsInput | number
    max_version?: IntFieldUpdateOperationsInput | number
    src?: StringFieldUpdateOperationsInput | string
    weight?: IntFieldUpdateOperationsInput | number
    versionType?: EnumVersionTypeFieldUpdateOperationsInput | $Enums.VersionType
    packs?: PackUpdateManyWithoutModsNestedInput
    author?: UserUpdateOneRequiredWithoutModsNestedInput
    comments?: CommentUpdateManyWithoutModNestedInput
    images?: ImageUpdateManyWithoutModNestedInput
    conflictsFrom?: ConflictUpdateManyWithoutModNestedInput
    conflictsTo?: ConflictUpdateManyWithoutConflictModNestedInput
    modDependencies?: ModDependencyUpdateManyWithoutModNestedInput
    shaderDependecies?: ShaderDependecyUpdateManyWithoutModNestedInput
    principalImage?: ImageUpdateOneWithoutModsPrincipalNestedInput
  }

  export type ModUncheckedUpdateWithoutRequiredByInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    min_version?: IntFieldUpdateOperationsInput | number
    max_version?: IntFieldUpdateOperationsInput | number
    src?: StringFieldUpdateOperationsInput | string
    weight?: IntFieldUpdateOperationsInput | number
    authorId?: BigIntFieldUpdateOperationsInput | bigint | number
    versionType?: EnumVersionTypeFieldUpdateOperationsInput | $Enums.VersionType
    principalImageId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    packs?: PackUncheckedUpdateManyWithoutModsNestedInput
    comments?: CommentUncheckedUpdateManyWithoutModNestedInput
    images?: ImageUncheckedUpdateManyWithoutModNestedInput
    conflictsFrom?: ConflictUncheckedUpdateManyWithoutModNestedInput
    conflictsTo?: ConflictUncheckedUpdateManyWithoutConflictModNestedInput
    modDependencies?: ModDependencyUncheckedUpdateManyWithoutModNestedInput
    shaderDependecies?: ShaderDependecyUncheckedUpdateManyWithoutModNestedInput
  }

  export type ShaderCreateWithoutShaderDependeciesInput = {
    id?: bigint | number
    name: string
    description?: string
    weight: number
    src: string
    versionType: $Enums.VersionType
    packs?: PackCreateNestedManyWithoutShadersInput
    author: UserCreateNestedOneWithoutShadersInput
    comments?: CommentCreateNestedManyWithoutShaderInput
    images?: ImageCreateNestedManyWithoutShaderInput
    conflicts?: ConflictCreateNestedManyWithoutConflictShaderInput
    principalImage?: ImageCreateNestedOneWithoutShadersPrincipalInput
  }

  export type ShaderUncheckedCreateWithoutShaderDependeciesInput = {
    id?: bigint | number
    name: string
    description?: string
    weight: number
    src: string
    authorId: bigint | number
    versionType: $Enums.VersionType
    principalImageId?: bigint | number | null
    packs?: PackUncheckedCreateNestedManyWithoutShadersInput
    comments?: CommentUncheckedCreateNestedManyWithoutShaderInput
    images?: ImageUncheckedCreateNestedManyWithoutShaderInput
    conflicts?: ConflictUncheckedCreateNestedManyWithoutConflictShaderInput
  }

  export type ShaderCreateOrConnectWithoutShaderDependeciesInput = {
    where: ShaderWhereUniqueInput
    create: XOR<ShaderCreateWithoutShaderDependeciesInput, ShaderUncheckedCreateWithoutShaderDependeciesInput>
  }

  export type ModCreateWithoutShaderDependeciesInput = {
    id?: bigint | number
    name: string
    description?: string
    min_version: number
    max_version: number
    src: string
    weight: number
    versionType: $Enums.VersionType
    packs?: PackCreateNestedManyWithoutModsInput
    author: UserCreateNestedOneWithoutModsInput
    comments?: CommentCreateNestedManyWithoutModInput
    images?: ImageCreateNestedManyWithoutModInput
    conflictsFrom?: ConflictCreateNestedManyWithoutModInput
    conflictsTo?: ConflictCreateNestedManyWithoutConflictModInput
    requiredBy?: ModDependencyCreateNestedManyWithoutDependencyInput
    modDependencies?: ModDependencyCreateNestedManyWithoutModInput
    principalImage?: ImageCreateNestedOneWithoutModsPrincipalInput
  }

  export type ModUncheckedCreateWithoutShaderDependeciesInput = {
    id?: bigint | number
    name: string
    description?: string
    min_version: number
    max_version: number
    src: string
    weight: number
    authorId: bigint | number
    versionType: $Enums.VersionType
    principalImageId?: bigint | number | null
    packs?: PackUncheckedCreateNestedManyWithoutModsInput
    comments?: CommentUncheckedCreateNestedManyWithoutModInput
    images?: ImageUncheckedCreateNestedManyWithoutModInput
    conflictsFrom?: ConflictUncheckedCreateNestedManyWithoutModInput
    conflictsTo?: ConflictUncheckedCreateNestedManyWithoutConflictModInput
    requiredBy?: ModDependencyUncheckedCreateNestedManyWithoutDependencyInput
    modDependencies?: ModDependencyUncheckedCreateNestedManyWithoutModInput
  }

  export type ModCreateOrConnectWithoutShaderDependeciesInput = {
    where: ModWhereUniqueInput
    create: XOR<ModCreateWithoutShaderDependeciesInput, ModUncheckedCreateWithoutShaderDependeciesInput>
  }

  export type ShaderUpsertWithoutShaderDependeciesInput = {
    update: XOR<ShaderUpdateWithoutShaderDependeciesInput, ShaderUncheckedUpdateWithoutShaderDependeciesInput>
    create: XOR<ShaderCreateWithoutShaderDependeciesInput, ShaderUncheckedCreateWithoutShaderDependeciesInput>
    where?: ShaderWhereInput
  }

  export type ShaderUpdateToOneWithWhereWithoutShaderDependeciesInput = {
    where?: ShaderWhereInput
    data: XOR<ShaderUpdateWithoutShaderDependeciesInput, ShaderUncheckedUpdateWithoutShaderDependeciesInput>
  }

  export type ShaderUpdateWithoutShaderDependeciesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    weight?: IntFieldUpdateOperationsInput | number
    src?: StringFieldUpdateOperationsInput | string
    versionType?: EnumVersionTypeFieldUpdateOperationsInput | $Enums.VersionType
    packs?: PackUpdateManyWithoutShadersNestedInput
    author?: UserUpdateOneRequiredWithoutShadersNestedInput
    comments?: CommentUpdateManyWithoutShaderNestedInput
    images?: ImageUpdateManyWithoutShaderNestedInput
    conflicts?: ConflictUpdateManyWithoutConflictShaderNestedInput
    principalImage?: ImageUpdateOneWithoutShadersPrincipalNestedInput
  }

  export type ShaderUncheckedUpdateWithoutShaderDependeciesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    weight?: IntFieldUpdateOperationsInput | number
    src?: StringFieldUpdateOperationsInput | string
    authorId?: BigIntFieldUpdateOperationsInput | bigint | number
    versionType?: EnumVersionTypeFieldUpdateOperationsInput | $Enums.VersionType
    principalImageId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    packs?: PackUncheckedUpdateManyWithoutShadersNestedInput
    comments?: CommentUncheckedUpdateManyWithoutShaderNestedInput
    images?: ImageUncheckedUpdateManyWithoutShaderNestedInput
    conflicts?: ConflictUncheckedUpdateManyWithoutConflictShaderNestedInput
  }

  export type ModUpsertWithoutShaderDependeciesInput = {
    update: XOR<ModUpdateWithoutShaderDependeciesInput, ModUncheckedUpdateWithoutShaderDependeciesInput>
    create: XOR<ModCreateWithoutShaderDependeciesInput, ModUncheckedCreateWithoutShaderDependeciesInput>
    where?: ModWhereInput
  }

  export type ModUpdateToOneWithWhereWithoutShaderDependeciesInput = {
    where?: ModWhereInput
    data: XOR<ModUpdateWithoutShaderDependeciesInput, ModUncheckedUpdateWithoutShaderDependeciesInput>
  }

  export type ModUpdateWithoutShaderDependeciesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    min_version?: IntFieldUpdateOperationsInput | number
    max_version?: IntFieldUpdateOperationsInput | number
    src?: StringFieldUpdateOperationsInput | string
    weight?: IntFieldUpdateOperationsInput | number
    versionType?: EnumVersionTypeFieldUpdateOperationsInput | $Enums.VersionType
    packs?: PackUpdateManyWithoutModsNestedInput
    author?: UserUpdateOneRequiredWithoutModsNestedInput
    comments?: CommentUpdateManyWithoutModNestedInput
    images?: ImageUpdateManyWithoutModNestedInput
    conflictsFrom?: ConflictUpdateManyWithoutModNestedInput
    conflictsTo?: ConflictUpdateManyWithoutConflictModNestedInput
    requiredBy?: ModDependencyUpdateManyWithoutDependencyNestedInput
    modDependencies?: ModDependencyUpdateManyWithoutModNestedInput
    principalImage?: ImageUpdateOneWithoutModsPrincipalNestedInput
  }

  export type ModUncheckedUpdateWithoutShaderDependeciesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    min_version?: IntFieldUpdateOperationsInput | number
    max_version?: IntFieldUpdateOperationsInput | number
    src?: StringFieldUpdateOperationsInput | string
    weight?: IntFieldUpdateOperationsInput | number
    authorId?: BigIntFieldUpdateOperationsInput | bigint | number
    versionType?: EnumVersionTypeFieldUpdateOperationsInput | $Enums.VersionType
    principalImageId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    packs?: PackUncheckedUpdateManyWithoutModsNestedInput
    comments?: CommentUncheckedUpdateManyWithoutModNestedInput
    images?: ImageUncheckedUpdateManyWithoutModNestedInput
    conflictsFrom?: ConflictUncheckedUpdateManyWithoutModNestedInput
    conflictsTo?: ConflictUncheckedUpdateManyWithoutConflictModNestedInput
    requiredBy?: ModDependencyUncheckedUpdateManyWithoutDependencyNestedInput
    modDependencies?: ModDependencyUncheckedUpdateManyWithoutModNestedInput
  }

  export type PackCreateManyAuthorInput = {
    id?: bigint | number
    max_version: number
    min_version: number
    versionType: $Enums.VersionType
    name: string
    description?: string | null
    principalImageId?: bigint | number | null
  }

  export type ShaderCreateManyAuthorInput = {
    id?: bigint | number
    name: string
    description?: string
    weight: number
    src: string
    versionType: $Enums.VersionType
    principalImageId?: bigint | number | null
  }

  export type ModCreateManyAuthorInput = {
    id?: bigint | number
    name: string
    description?: string
    min_version: number
    max_version: number
    src: string
    weight: number
    versionType: $Enums.VersionType
    principalImageId?: bigint | number | null
  }

  export type CommentCreateManyAuthorInput = {
    id?: bigint | number
    text: string
    packId?: bigint | number | null
    shaderId?: bigint | number | null
    modId?: bigint | number | null
  }

  export type PackUpdateWithoutAuthorInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    max_version?: IntFieldUpdateOperationsInput | number
    min_version?: IntFieldUpdateOperationsInput | number
    versionType?: EnumVersionTypeFieldUpdateOperationsInput | $Enums.VersionType
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    shaders?: ShaderUpdateManyWithoutPacksNestedInput
    mods?: ModUpdateManyWithoutPacksNestedInput
    comments?: CommentUpdateManyWithoutPackNestedInput
    images?: ImageUpdateManyWithoutPackNestedInput
    principalImage?: ImageUpdateOneWithoutPacksPrincipalNestedInput
  }

  export type PackUncheckedUpdateWithoutAuthorInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    max_version?: IntFieldUpdateOperationsInput | number
    min_version?: IntFieldUpdateOperationsInput | number
    versionType?: EnumVersionTypeFieldUpdateOperationsInput | $Enums.VersionType
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    principalImageId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    shaders?: ShaderUncheckedUpdateManyWithoutPacksNestedInput
    mods?: ModUncheckedUpdateManyWithoutPacksNestedInput
    comments?: CommentUncheckedUpdateManyWithoutPackNestedInput
    images?: ImageUncheckedUpdateManyWithoutPackNestedInput
  }

  export type PackUncheckedUpdateManyWithoutAuthorInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    max_version?: IntFieldUpdateOperationsInput | number
    min_version?: IntFieldUpdateOperationsInput | number
    versionType?: EnumVersionTypeFieldUpdateOperationsInput | $Enums.VersionType
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    principalImageId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type ShaderUpdateWithoutAuthorInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    weight?: IntFieldUpdateOperationsInput | number
    src?: StringFieldUpdateOperationsInput | string
    versionType?: EnumVersionTypeFieldUpdateOperationsInput | $Enums.VersionType
    packs?: PackUpdateManyWithoutShadersNestedInput
    comments?: CommentUpdateManyWithoutShaderNestedInput
    images?: ImageUpdateManyWithoutShaderNestedInput
    conflicts?: ConflictUpdateManyWithoutConflictShaderNestedInput
    shaderDependecies?: ShaderDependecyUpdateManyWithoutShaderNestedInput
    principalImage?: ImageUpdateOneWithoutShadersPrincipalNestedInput
  }

  export type ShaderUncheckedUpdateWithoutAuthorInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    weight?: IntFieldUpdateOperationsInput | number
    src?: StringFieldUpdateOperationsInput | string
    versionType?: EnumVersionTypeFieldUpdateOperationsInput | $Enums.VersionType
    principalImageId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    packs?: PackUncheckedUpdateManyWithoutShadersNestedInput
    comments?: CommentUncheckedUpdateManyWithoutShaderNestedInput
    images?: ImageUncheckedUpdateManyWithoutShaderNestedInput
    conflicts?: ConflictUncheckedUpdateManyWithoutConflictShaderNestedInput
    shaderDependecies?: ShaderDependecyUncheckedUpdateManyWithoutShaderNestedInput
  }

  export type ShaderUncheckedUpdateManyWithoutAuthorInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    weight?: IntFieldUpdateOperationsInput | number
    src?: StringFieldUpdateOperationsInput | string
    versionType?: EnumVersionTypeFieldUpdateOperationsInput | $Enums.VersionType
    principalImageId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type ModUpdateWithoutAuthorInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    min_version?: IntFieldUpdateOperationsInput | number
    max_version?: IntFieldUpdateOperationsInput | number
    src?: StringFieldUpdateOperationsInput | string
    weight?: IntFieldUpdateOperationsInput | number
    versionType?: EnumVersionTypeFieldUpdateOperationsInput | $Enums.VersionType
    packs?: PackUpdateManyWithoutModsNestedInput
    comments?: CommentUpdateManyWithoutModNestedInput
    images?: ImageUpdateManyWithoutModNestedInput
    conflictsFrom?: ConflictUpdateManyWithoutModNestedInput
    conflictsTo?: ConflictUpdateManyWithoutConflictModNestedInput
    requiredBy?: ModDependencyUpdateManyWithoutDependencyNestedInput
    modDependencies?: ModDependencyUpdateManyWithoutModNestedInput
    shaderDependecies?: ShaderDependecyUpdateManyWithoutModNestedInput
    principalImage?: ImageUpdateOneWithoutModsPrincipalNestedInput
  }

  export type ModUncheckedUpdateWithoutAuthorInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    min_version?: IntFieldUpdateOperationsInput | number
    max_version?: IntFieldUpdateOperationsInput | number
    src?: StringFieldUpdateOperationsInput | string
    weight?: IntFieldUpdateOperationsInput | number
    versionType?: EnumVersionTypeFieldUpdateOperationsInput | $Enums.VersionType
    principalImageId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    packs?: PackUncheckedUpdateManyWithoutModsNestedInput
    comments?: CommentUncheckedUpdateManyWithoutModNestedInput
    images?: ImageUncheckedUpdateManyWithoutModNestedInput
    conflictsFrom?: ConflictUncheckedUpdateManyWithoutModNestedInput
    conflictsTo?: ConflictUncheckedUpdateManyWithoutConflictModNestedInput
    requiredBy?: ModDependencyUncheckedUpdateManyWithoutDependencyNestedInput
    modDependencies?: ModDependencyUncheckedUpdateManyWithoutModNestedInput
    shaderDependecies?: ShaderDependecyUncheckedUpdateManyWithoutModNestedInput
  }

  export type ModUncheckedUpdateManyWithoutAuthorInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    min_version?: IntFieldUpdateOperationsInput | number
    max_version?: IntFieldUpdateOperationsInput | number
    src?: StringFieldUpdateOperationsInput | string
    weight?: IntFieldUpdateOperationsInput | number
    versionType?: EnumVersionTypeFieldUpdateOperationsInput | $Enums.VersionType
    principalImageId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type CommentUpdateWithoutAuthorInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    text?: StringFieldUpdateOperationsInput | string
    pack?: PackUpdateOneWithoutCommentsNestedInput
    shader?: ShaderUpdateOneWithoutCommentsNestedInput
    mod?: ModUpdateOneWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateWithoutAuthorInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    text?: StringFieldUpdateOperationsInput | string
    packId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    shaderId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    modId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type CommentUncheckedUpdateManyWithoutAuthorInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    text?: StringFieldUpdateOperationsInput | string
    packId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    shaderId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    modId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type CommentCreateManyPackInput = {
    id?: bigint | number
    text: string
    authorId: bigint | number
    shaderId?: bigint | number | null
    modId?: bigint | number | null
  }

  export type ImageCreateManyPackInput = {
    id?: bigint | number
    src: string
    basePath: string
    modId?: bigint | number | null
    shaderId?: bigint | number | null
  }

  export type ShaderUpdateWithoutPacksInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    weight?: IntFieldUpdateOperationsInput | number
    src?: StringFieldUpdateOperationsInput | string
    versionType?: EnumVersionTypeFieldUpdateOperationsInput | $Enums.VersionType
    author?: UserUpdateOneRequiredWithoutShadersNestedInput
    comments?: CommentUpdateManyWithoutShaderNestedInput
    images?: ImageUpdateManyWithoutShaderNestedInput
    conflicts?: ConflictUpdateManyWithoutConflictShaderNestedInput
    shaderDependecies?: ShaderDependecyUpdateManyWithoutShaderNestedInput
    principalImage?: ImageUpdateOneWithoutShadersPrincipalNestedInput
  }

  export type ShaderUncheckedUpdateWithoutPacksInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    weight?: IntFieldUpdateOperationsInput | number
    src?: StringFieldUpdateOperationsInput | string
    authorId?: BigIntFieldUpdateOperationsInput | bigint | number
    versionType?: EnumVersionTypeFieldUpdateOperationsInput | $Enums.VersionType
    principalImageId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    comments?: CommentUncheckedUpdateManyWithoutShaderNestedInput
    images?: ImageUncheckedUpdateManyWithoutShaderNestedInput
    conflicts?: ConflictUncheckedUpdateManyWithoutConflictShaderNestedInput
    shaderDependecies?: ShaderDependecyUncheckedUpdateManyWithoutShaderNestedInput
  }

  export type ShaderUncheckedUpdateManyWithoutPacksInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    weight?: IntFieldUpdateOperationsInput | number
    src?: StringFieldUpdateOperationsInput | string
    authorId?: BigIntFieldUpdateOperationsInput | bigint | number
    versionType?: EnumVersionTypeFieldUpdateOperationsInput | $Enums.VersionType
    principalImageId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type ModUpdateWithoutPacksInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    min_version?: IntFieldUpdateOperationsInput | number
    max_version?: IntFieldUpdateOperationsInput | number
    src?: StringFieldUpdateOperationsInput | string
    weight?: IntFieldUpdateOperationsInput | number
    versionType?: EnumVersionTypeFieldUpdateOperationsInput | $Enums.VersionType
    author?: UserUpdateOneRequiredWithoutModsNestedInput
    comments?: CommentUpdateManyWithoutModNestedInput
    images?: ImageUpdateManyWithoutModNestedInput
    conflictsFrom?: ConflictUpdateManyWithoutModNestedInput
    conflictsTo?: ConflictUpdateManyWithoutConflictModNestedInput
    requiredBy?: ModDependencyUpdateManyWithoutDependencyNestedInput
    modDependencies?: ModDependencyUpdateManyWithoutModNestedInput
    shaderDependecies?: ShaderDependecyUpdateManyWithoutModNestedInput
    principalImage?: ImageUpdateOneWithoutModsPrincipalNestedInput
  }

  export type ModUncheckedUpdateWithoutPacksInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    min_version?: IntFieldUpdateOperationsInput | number
    max_version?: IntFieldUpdateOperationsInput | number
    src?: StringFieldUpdateOperationsInput | string
    weight?: IntFieldUpdateOperationsInput | number
    authorId?: BigIntFieldUpdateOperationsInput | bigint | number
    versionType?: EnumVersionTypeFieldUpdateOperationsInput | $Enums.VersionType
    principalImageId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    comments?: CommentUncheckedUpdateManyWithoutModNestedInput
    images?: ImageUncheckedUpdateManyWithoutModNestedInput
    conflictsFrom?: ConflictUncheckedUpdateManyWithoutModNestedInput
    conflictsTo?: ConflictUncheckedUpdateManyWithoutConflictModNestedInput
    requiredBy?: ModDependencyUncheckedUpdateManyWithoutDependencyNestedInput
    modDependencies?: ModDependencyUncheckedUpdateManyWithoutModNestedInput
    shaderDependecies?: ShaderDependecyUncheckedUpdateManyWithoutModNestedInput
  }

  export type ModUncheckedUpdateManyWithoutPacksInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    min_version?: IntFieldUpdateOperationsInput | number
    max_version?: IntFieldUpdateOperationsInput | number
    src?: StringFieldUpdateOperationsInput | string
    weight?: IntFieldUpdateOperationsInput | number
    authorId?: BigIntFieldUpdateOperationsInput | bigint | number
    versionType?: EnumVersionTypeFieldUpdateOperationsInput | $Enums.VersionType
    principalImageId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type CommentUpdateWithoutPackInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    text?: StringFieldUpdateOperationsInput | string
    author?: UserUpdateOneRequiredWithoutCommentsNestedInput
    shader?: ShaderUpdateOneWithoutCommentsNestedInput
    mod?: ModUpdateOneWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateWithoutPackInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    text?: StringFieldUpdateOperationsInput | string
    authorId?: BigIntFieldUpdateOperationsInput | bigint | number
    shaderId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    modId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type CommentUncheckedUpdateManyWithoutPackInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    text?: StringFieldUpdateOperationsInput | string
    authorId?: BigIntFieldUpdateOperationsInput | bigint | number
    shaderId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    modId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type ImageUpdateWithoutPackInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    src?: StringFieldUpdateOperationsInput | string
    basePath?: StringFieldUpdateOperationsInput | string
    mod?: ModUpdateOneWithoutImagesNestedInput
    shader?: ShaderUpdateOneWithoutImagesNestedInput
    users?: UserUpdateManyWithoutImageNestedInput
    packsPrincipal?: PackUpdateManyWithoutPrincipalImageNestedInput
    shadersPrincipal?: ShaderUpdateManyWithoutPrincipalImageNestedInput
    modsPrincipal?: ModUpdateManyWithoutPrincipalImageNestedInput
  }

  export type ImageUncheckedUpdateWithoutPackInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    src?: StringFieldUpdateOperationsInput | string
    basePath?: StringFieldUpdateOperationsInput | string
    modId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    shaderId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    users?: UserUncheckedUpdateManyWithoutImageNestedInput
    packsPrincipal?: PackUncheckedUpdateManyWithoutPrincipalImageNestedInput
    shadersPrincipal?: ShaderUncheckedUpdateManyWithoutPrincipalImageNestedInput
    modsPrincipal?: ModUncheckedUpdateManyWithoutPrincipalImageNestedInput
  }

  export type ImageUncheckedUpdateManyWithoutPackInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    src?: StringFieldUpdateOperationsInput | string
    basePath?: StringFieldUpdateOperationsInput | string
    modId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    shaderId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type CommentCreateManyShaderInput = {
    id?: bigint | number
    text: string
    authorId: bigint | number
    packId?: bigint | number | null
    modId?: bigint | number | null
  }

  export type ImageCreateManyShaderInput = {
    id?: bigint | number
    src: string
    basePath: string
    modId?: bigint | number | null
    packId?: bigint | number | null
  }

  export type ConflictCreateManyConflictShaderInput = {
    id?: bigint | number
    modId: bigint | number
    conflictModId?: bigint | number | null
  }

  export type ShaderDependecyCreateManyShaderInput = {
    modId: bigint | number
  }

  export type PackUpdateWithoutShadersInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    max_version?: IntFieldUpdateOperationsInput | number
    min_version?: IntFieldUpdateOperationsInput | number
    versionType?: EnumVersionTypeFieldUpdateOperationsInput | $Enums.VersionType
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    mods?: ModUpdateManyWithoutPacksNestedInput
    author?: UserUpdateOneRequiredWithoutPacksNestedInput
    comments?: CommentUpdateManyWithoutPackNestedInput
    images?: ImageUpdateManyWithoutPackNestedInput
    principalImage?: ImageUpdateOneWithoutPacksPrincipalNestedInput
  }

  export type PackUncheckedUpdateWithoutShadersInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    max_version?: IntFieldUpdateOperationsInput | number
    min_version?: IntFieldUpdateOperationsInput | number
    versionType?: EnumVersionTypeFieldUpdateOperationsInput | $Enums.VersionType
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    authorId?: BigIntFieldUpdateOperationsInput | bigint | number
    principalImageId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    mods?: ModUncheckedUpdateManyWithoutPacksNestedInput
    comments?: CommentUncheckedUpdateManyWithoutPackNestedInput
    images?: ImageUncheckedUpdateManyWithoutPackNestedInput
  }

  export type PackUncheckedUpdateManyWithoutShadersInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    max_version?: IntFieldUpdateOperationsInput | number
    min_version?: IntFieldUpdateOperationsInput | number
    versionType?: EnumVersionTypeFieldUpdateOperationsInput | $Enums.VersionType
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    authorId?: BigIntFieldUpdateOperationsInput | bigint | number
    principalImageId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type CommentUpdateWithoutShaderInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    text?: StringFieldUpdateOperationsInput | string
    author?: UserUpdateOneRequiredWithoutCommentsNestedInput
    pack?: PackUpdateOneWithoutCommentsNestedInput
    mod?: ModUpdateOneWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateWithoutShaderInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    text?: StringFieldUpdateOperationsInput | string
    authorId?: BigIntFieldUpdateOperationsInput | bigint | number
    packId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    modId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type CommentUncheckedUpdateManyWithoutShaderInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    text?: StringFieldUpdateOperationsInput | string
    authorId?: BigIntFieldUpdateOperationsInput | bigint | number
    packId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    modId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type ImageUpdateWithoutShaderInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    src?: StringFieldUpdateOperationsInput | string
    basePath?: StringFieldUpdateOperationsInput | string
    mod?: ModUpdateOneWithoutImagesNestedInput
    pack?: PackUpdateOneWithoutImagesNestedInput
    users?: UserUpdateManyWithoutImageNestedInput
    packsPrincipal?: PackUpdateManyWithoutPrincipalImageNestedInput
    shadersPrincipal?: ShaderUpdateManyWithoutPrincipalImageNestedInput
    modsPrincipal?: ModUpdateManyWithoutPrincipalImageNestedInput
  }

  export type ImageUncheckedUpdateWithoutShaderInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    src?: StringFieldUpdateOperationsInput | string
    basePath?: StringFieldUpdateOperationsInput | string
    modId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    packId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    users?: UserUncheckedUpdateManyWithoutImageNestedInput
    packsPrincipal?: PackUncheckedUpdateManyWithoutPrincipalImageNestedInput
    shadersPrincipal?: ShaderUncheckedUpdateManyWithoutPrincipalImageNestedInput
    modsPrincipal?: ModUncheckedUpdateManyWithoutPrincipalImageNestedInput
  }

  export type ImageUncheckedUpdateManyWithoutShaderInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    src?: StringFieldUpdateOperationsInput | string
    basePath?: StringFieldUpdateOperationsInput | string
    modId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    packId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type ConflictUpdateWithoutConflictShaderInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    mod?: ModUpdateOneRequiredWithoutConflictsFromNestedInput
    conflictMod?: ModUpdateOneWithoutConflictsToNestedInput
  }

  export type ConflictUncheckedUpdateWithoutConflictShaderInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    modId?: BigIntFieldUpdateOperationsInput | bigint | number
    conflictModId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type ConflictUncheckedUpdateManyWithoutConflictShaderInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    modId?: BigIntFieldUpdateOperationsInput | bigint | number
    conflictModId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type ShaderDependecyUpdateWithoutShaderInput = {
    mod?: ModUpdateOneRequiredWithoutShaderDependeciesNestedInput
  }

  export type ShaderDependecyUncheckedUpdateWithoutShaderInput = {
    modId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type ShaderDependecyUncheckedUpdateManyWithoutShaderInput = {
    modId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type CommentCreateManyModInput = {
    id?: bigint | number
    text: string
    authorId: bigint | number
    packId?: bigint | number | null
    shaderId?: bigint | number | null
  }

  export type ImageCreateManyModInput = {
    id?: bigint | number
    src: string
    basePath: string
    shaderId?: bigint | number | null
    packId?: bigint | number | null
  }

  export type ConflictCreateManyModInput = {
    id?: bigint | number
    conflictshaderId?: bigint | number | null
    conflictModId?: bigint | number | null
  }

  export type ConflictCreateManyConflictModInput = {
    id?: bigint | number
    conflictshaderId?: bigint | number | null
    modId: bigint | number
  }

  export type ModDependencyCreateManyDependencyInput = {
    modId: bigint | number
  }

  export type ModDependencyCreateManyModInput = {
    dependencyId: bigint | number
  }

  export type ShaderDependecyCreateManyModInput = {
    shaderId: bigint | number
  }

  export type PackUpdateWithoutModsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    max_version?: IntFieldUpdateOperationsInput | number
    min_version?: IntFieldUpdateOperationsInput | number
    versionType?: EnumVersionTypeFieldUpdateOperationsInput | $Enums.VersionType
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    shaders?: ShaderUpdateManyWithoutPacksNestedInput
    author?: UserUpdateOneRequiredWithoutPacksNestedInput
    comments?: CommentUpdateManyWithoutPackNestedInput
    images?: ImageUpdateManyWithoutPackNestedInput
    principalImage?: ImageUpdateOneWithoutPacksPrincipalNestedInput
  }

  export type PackUncheckedUpdateWithoutModsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    max_version?: IntFieldUpdateOperationsInput | number
    min_version?: IntFieldUpdateOperationsInput | number
    versionType?: EnumVersionTypeFieldUpdateOperationsInput | $Enums.VersionType
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    authorId?: BigIntFieldUpdateOperationsInput | bigint | number
    principalImageId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    shaders?: ShaderUncheckedUpdateManyWithoutPacksNestedInput
    comments?: CommentUncheckedUpdateManyWithoutPackNestedInput
    images?: ImageUncheckedUpdateManyWithoutPackNestedInput
  }

  export type PackUncheckedUpdateManyWithoutModsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    max_version?: IntFieldUpdateOperationsInput | number
    min_version?: IntFieldUpdateOperationsInput | number
    versionType?: EnumVersionTypeFieldUpdateOperationsInput | $Enums.VersionType
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    authorId?: BigIntFieldUpdateOperationsInput | bigint | number
    principalImageId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type CommentUpdateWithoutModInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    text?: StringFieldUpdateOperationsInput | string
    author?: UserUpdateOneRequiredWithoutCommentsNestedInput
    pack?: PackUpdateOneWithoutCommentsNestedInput
    shader?: ShaderUpdateOneWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateWithoutModInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    text?: StringFieldUpdateOperationsInput | string
    authorId?: BigIntFieldUpdateOperationsInput | bigint | number
    packId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    shaderId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type CommentUncheckedUpdateManyWithoutModInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    text?: StringFieldUpdateOperationsInput | string
    authorId?: BigIntFieldUpdateOperationsInput | bigint | number
    packId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    shaderId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type ImageUpdateWithoutModInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    src?: StringFieldUpdateOperationsInput | string
    basePath?: StringFieldUpdateOperationsInput | string
    shader?: ShaderUpdateOneWithoutImagesNestedInput
    pack?: PackUpdateOneWithoutImagesNestedInput
    users?: UserUpdateManyWithoutImageNestedInput
    packsPrincipal?: PackUpdateManyWithoutPrincipalImageNestedInput
    shadersPrincipal?: ShaderUpdateManyWithoutPrincipalImageNestedInput
    modsPrincipal?: ModUpdateManyWithoutPrincipalImageNestedInput
  }

  export type ImageUncheckedUpdateWithoutModInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    src?: StringFieldUpdateOperationsInput | string
    basePath?: StringFieldUpdateOperationsInput | string
    shaderId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    packId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    users?: UserUncheckedUpdateManyWithoutImageNestedInput
    packsPrincipal?: PackUncheckedUpdateManyWithoutPrincipalImageNestedInput
    shadersPrincipal?: ShaderUncheckedUpdateManyWithoutPrincipalImageNestedInput
    modsPrincipal?: ModUncheckedUpdateManyWithoutPrincipalImageNestedInput
  }

  export type ImageUncheckedUpdateManyWithoutModInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    src?: StringFieldUpdateOperationsInput | string
    basePath?: StringFieldUpdateOperationsInput | string
    shaderId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    packId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type ConflictUpdateWithoutModInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    conflictShader?: ShaderUpdateOneWithoutConflictsNestedInput
    conflictMod?: ModUpdateOneWithoutConflictsToNestedInput
  }

  export type ConflictUncheckedUpdateWithoutModInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    conflictshaderId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    conflictModId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type ConflictUncheckedUpdateManyWithoutModInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    conflictshaderId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    conflictModId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type ConflictUpdateWithoutConflictModInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    conflictShader?: ShaderUpdateOneWithoutConflictsNestedInput
    mod?: ModUpdateOneRequiredWithoutConflictsFromNestedInput
  }

  export type ConflictUncheckedUpdateWithoutConflictModInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    conflictshaderId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    modId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type ConflictUncheckedUpdateManyWithoutConflictModInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    conflictshaderId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    modId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type ModDependencyUpdateWithoutDependencyInput = {
    mod?: ModUpdateOneRequiredWithoutModDependenciesNestedInput
  }

  export type ModDependencyUncheckedUpdateWithoutDependencyInput = {
    modId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type ModDependencyUncheckedUpdateManyWithoutDependencyInput = {
    modId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type ModDependencyUpdateWithoutModInput = {
    dependency?: ModUpdateOneRequiredWithoutRequiredByNestedInput
  }

  export type ModDependencyUncheckedUpdateWithoutModInput = {
    dependencyId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type ModDependencyUncheckedUpdateManyWithoutModInput = {
    dependencyId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type ShaderDependecyUpdateWithoutModInput = {
    shader?: ShaderUpdateOneRequiredWithoutShaderDependeciesNestedInput
  }

  export type ShaderDependecyUncheckedUpdateWithoutModInput = {
    shaderId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type ShaderDependecyUncheckedUpdateManyWithoutModInput = {
    shaderId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type UserCreateManyImageInput = {
    id?: bigint | number
    email: string
    nickname: string
    password: string
    recovery_key?: string | null
    is_admin?: boolean
  }

  export type PackCreateManyPrincipalImageInput = {
    id?: bigint | number
    max_version: number
    min_version: number
    versionType: $Enums.VersionType
    name: string
    description?: string | null
    authorId: bigint | number
  }

  export type ShaderCreateManyPrincipalImageInput = {
    id?: bigint | number
    name: string
    description?: string
    weight: number
    src: string
    authorId: bigint | number
    versionType: $Enums.VersionType
  }

  export type ModCreateManyPrincipalImageInput = {
    id?: bigint | number
    name: string
    description?: string
    min_version: number
    max_version: number
    src: string
    weight: number
    authorId: bigint | number
    versionType: $Enums.VersionType
  }

  export type UserUpdateWithoutImageInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    recovery_key?: NullableStringFieldUpdateOperationsInput | string | null
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    packs?: PackUpdateManyWithoutAuthorNestedInput
    shaders?: ShaderUpdateManyWithoutAuthorNestedInput
    mods?: ModUpdateManyWithoutAuthorNestedInput
    comments?: CommentUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateWithoutImageInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    recovery_key?: NullableStringFieldUpdateOperationsInput | string | null
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    packs?: PackUncheckedUpdateManyWithoutAuthorNestedInput
    shaders?: ShaderUncheckedUpdateManyWithoutAuthorNestedInput
    mods?: ModUncheckedUpdateManyWithoutAuthorNestedInput
    comments?: CommentUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateManyWithoutImageInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    recovery_key?: NullableStringFieldUpdateOperationsInput | string | null
    is_admin?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PackUpdateWithoutPrincipalImageInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    max_version?: IntFieldUpdateOperationsInput | number
    min_version?: IntFieldUpdateOperationsInput | number
    versionType?: EnumVersionTypeFieldUpdateOperationsInput | $Enums.VersionType
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    shaders?: ShaderUpdateManyWithoutPacksNestedInput
    mods?: ModUpdateManyWithoutPacksNestedInput
    author?: UserUpdateOneRequiredWithoutPacksNestedInput
    comments?: CommentUpdateManyWithoutPackNestedInput
    images?: ImageUpdateManyWithoutPackNestedInput
  }

  export type PackUncheckedUpdateWithoutPrincipalImageInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    max_version?: IntFieldUpdateOperationsInput | number
    min_version?: IntFieldUpdateOperationsInput | number
    versionType?: EnumVersionTypeFieldUpdateOperationsInput | $Enums.VersionType
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    authorId?: BigIntFieldUpdateOperationsInput | bigint | number
    shaders?: ShaderUncheckedUpdateManyWithoutPacksNestedInput
    mods?: ModUncheckedUpdateManyWithoutPacksNestedInput
    comments?: CommentUncheckedUpdateManyWithoutPackNestedInput
    images?: ImageUncheckedUpdateManyWithoutPackNestedInput
  }

  export type PackUncheckedUpdateManyWithoutPrincipalImageInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    max_version?: IntFieldUpdateOperationsInput | number
    min_version?: IntFieldUpdateOperationsInput | number
    versionType?: EnumVersionTypeFieldUpdateOperationsInput | $Enums.VersionType
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    authorId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type ShaderUpdateWithoutPrincipalImageInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    weight?: IntFieldUpdateOperationsInput | number
    src?: StringFieldUpdateOperationsInput | string
    versionType?: EnumVersionTypeFieldUpdateOperationsInput | $Enums.VersionType
    packs?: PackUpdateManyWithoutShadersNestedInput
    author?: UserUpdateOneRequiredWithoutShadersNestedInput
    comments?: CommentUpdateManyWithoutShaderNestedInput
    images?: ImageUpdateManyWithoutShaderNestedInput
    conflicts?: ConflictUpdateManyWithoutConflictShaderNestedInput
    shaderDependecies?: ShaderDependecyUpdateManyWithoutShaderNestedInput
  }

  export type ShaderUncheckedUpdateWithoutPrincipalImageInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    weight?: IntFieldUpdateOperationsInput | number
    src?: StringFieldUpdateOperationsInput | string
    authorId?: BigIntFieldUpdateOperationsInput | bigint | number
    versionType?: EnumVersionTypeFieldUpdateOperationsInput | $Enums.VersionType
    packs?: PackUncheckedUpdateManyWithoutShadersNestedInput
    comments?: CommentUncheckedUpdateManyWithoutShaderNestedInput
    images?: ImageUncheckedUpdateManyWithoutShaderNestedInput
    conflicts?: ConflictUncheckedUpdateManyWithoutConflictShaderNestedInput
    shaderDependecies?: ShaderDependecyUncheckedUpdateManyWithoutShaderNestedInput
  }

  export type ShaderUncheckedUpdateManyWithoutPrincipalImageInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    weight?: IntFieldUpdateOperationsInput | number
    src?: StringFieldUpdateOperationsInput | string
    authorId?: BigIntFieldUpdateOperationsInput | bigint | number
    versionType?: EnumVersionTypeFieldUpdateOperationsInput | $Enums.VersionType
  }

  export type ModUpdateWithoutPrincipalImageInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    min_version?: IntFieldUpdateOperationsInput | number
    max_version?: IntFieldUpdateOperationsInput | number
    src?: StringFieldUpdateOperationsInput | string
    weight?: IntFieldUpdateOperationsInput | number
    versionType?: EnumVersionTypeFieldUpdateOperationsInput | $Enums.VersionType
    packs?: PackUpdateManyWithoutModsNestedInput
    author?: UserUpdateOneRequiredWithoutModsNestedInput
    comments?: CommentUpdateManyWithoutModNestedInput
    images?: ImageUpdateManyWithoutModNestedInput
    conflictsFrom?: ConflictUpdateManyWithoutModNestedInput
    conflictsTo?: ConflictUpdateManyWithoutConflictModNestedInput
    requiredBy?: ModDependencyUpdateManyWithoutDependencyNestedInput
    modDependencies?: ModDependencyUpdateManyWithoutModNestedInput
    shaderDependecies?: ShaderDependecyUpdateManyWithoutModNestedInput
  }

  export type ModUncheckedUpdateWithoutPrincipalImageInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    min_version?: IntFieldUpdateOperationsInput | number
    max_version?: IntFieldUpdateOperationsInput | number
    src?: StringFieldUpdateOperationsInput | string
    weight?: IntFieldUpdateOperationsInput | number
    authorId?: BigIntFieldUpdateOperationsInput | bigint | number
    versionType?: EnumVersionTypeFieldUpdateOperationsInput | $Enums.VersionType
    packs?: PackUncheckedUpdateManyWithoutModsNestedInput
    comments?: CommentUncheckedUpdateManyWithoutModNestedInput
    images?: ImageUncheckedUpdateManyWithoutModNestedInput
    conflictsFrom?: ConflictUncheckedUpdateManyWithoutModNestedInput
    conflictsTo?: ConflictUncheckedUpdateManyWithoutConflictModNestedInput
    requiredBy?: ModDependencyUncheckedUpdateManyWithoutDependencyNestedInput
    modDependencies?: ModDependencyUncheckedUpdateManyWithoutModNestedInput
    shaderDependecies?: ShaderDependecyUncheckedUpdateManyWithoutModNestedInput
  }

  export type ModUncheckedUpdateManyWithoutPrincipalImageInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    min_version?: IntFieldUpdateOperationsInput | number
    max_version?: IntFieldUpdateOperationsInput | number
    src?: StringFieldUpdateOperationsInput | string
    weight?: IntFieldUpdateOperationsInput | number
    authorId?: BigIntFieldUpdateOperationsInput | bigint | number
    versionType?: EnumVersionTypeFieldUpdateOperationsInput | $Enums.VersionType
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}