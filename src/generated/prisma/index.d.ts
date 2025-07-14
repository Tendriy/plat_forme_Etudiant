
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Etudiant
 * 
 */
export type Etudiant = $Result.DefaultSelection<Prisma.$EtudiantPayload>
/**
 * Model Message
 * 
 */
export type Message = $Result.DefaultSelection<Prisma.$MessagePayload>
/**
 * Model Recevoire
 * 
 */
export type Recevoire = $Result.DefaultSelection<Prisma.$RecevoirePayload>
/**
 * Model Annonce
 * 
 */
export type Annonce = $Result.DefaultSelection<Prisma.$AnnoncePayload>
/**
 * Model Commentaire
 * 
 */
export type Commentaire = $Result.DefaultSelection<Prisma.$CommentairePayload>
/**
 * Model Signaler
 * 
 */
export type Signaler = $Result.DefaultSelection<Prisma.$SignalerPayload>
/**
 * Model Amitie
 * 
 */
export type Amitie = $Result.DefaultSelection<Prisma.$AmitiePayload>
/**
 * Model Groupe
 * 
 */
export type Groupe = $Result.DefaultSelection<Prisma.$GroupePayload>
/**
 * Model EtudiantGroupe
 * 
 */
export type EtudiantGroupe = $Result.DefaultSelection<Prisma.$EtudiantGroupePayload>
/**
 * Model MessageGroupe
 * 
 */
export type MessageGroupe = $Result.DefaultSelection<Prisma.$MessageGroupePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const StatutAmitie: {
  EN_ATTENTE: 'EN_ATTENTE',
  ACCEPTEE: 'ACCEPTEE',
  REFUSEE: 'REFUSEE'
};

export type StatutAmitie = (typeof StatutAmitie)[keyof typeof StatutAmitie]

}

export type StatutAmitie = $Enums.StatutAmitie

export const StatutAmitie: typeof $Enums.StatutAmitie

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Etudiants
 * const etudiants = await prisma.etudiant.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Etudiants
   * const etudiants = await prisma.etudiant.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.etudiant`: Exposes CRUD operations for the **Etudiant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Etudiants
    * const etudiants = await prisma.etudiant.findMany()
    * ```
    */
  get etudiant(): Prisma.EtudiantDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.message`: Exposes CRUD operations for the **Message** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.message.findMany()
    * ```
    */
  get message(): Prisma.MessageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.recevoire`: Exposes CRUD operations for the **Recevoire** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Recevoires
    * const recevoires = await prisma.recevoire.findMany()
    * ```
    */
  get recevoire(): Prisma.RecevoireDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.annonce`: Exposes CRUD operations for the **Annonce** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Annonces
    * const annonces = await prisma.annonce.findMany()
    * ```
    */
  get annonce(): Prisma.AnnonceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.commentaire`: Exposes CRUD operations for the **Commentaire** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Commentaires
    * const commentaires = await prisma.commentaire.findMany()
    * ```
    */
  get commentaire(): Prisma.CommentaireDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.signaler`: Exposes CRUD operations for the **Signaler** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Signalers
    * const signalers = await prisma.signaler.findMany()
    * ```
    */
  get signaler(): Prisma.SignalerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.amitie`: Exposes CRUD operations for the **Amitie** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Amities
    * const amities = await prisma.amitie.findMany()
    * ```
    */
  get amitie(): Prisma.AmitieDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.groupe`: Exposes CRUD operations for the **Groupe** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Groupes
    * const groupes = await prisma.groupe.findMany()
    * ```
    */
  get groupe(): Prisma.GroupeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.etudiantGroupe`: Exposes CRUD operations for the **EtudiantGroupe** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EtudiantGroupes
    * const etudiantGroupes = await prisma.etudiantGroupe.findMany()
    * ```
    */
  get etudiantGroupe(): Prisma.EtudiantGroupeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.messageGroupe`: Exposes CRUD operations for the **MessageGroupe** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MessageGroupes
    * const messageGroupes = await prisma.messageGroupe.findMany()
    * ```
    */
  get messageGroupe(): Prisma.MessageGroupeDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.11.1
   * Query Engine version: f40f79ec31188888a2e33acda0ecc8fd10a853a9
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
      (Without<T, U> & U) | (Without<U, T> & T)
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
    Etudiant: 'Etudiant',
    Message: 'Message',
    Recevoire: 'Recevoire',
    Annonce: 'Annonce',
    Commentaire: 'Commentaire',
    Signaler: 'Signaler',
    Amitie: 'Amitie',
    Groupe: 'Groupe',
    EtudiantGroupe: 'EtudiantGroupe',
    MessageGroupe: 'MessageGroupe'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "etudiant" | "message" | "recevoire" | "annonce" | "commentaire" | "signaler" | "amitie" | "groupe" | "etudiantGroupe" | "messageGroupe"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Etudiant: {
        payload: Prisma.$EtudiantPayload<ExtArgs>
        fields: Prisma.EtudiantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EtudiantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtudiantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EtudiantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtudiantPayload>
          }
          findFirst: {
            args: Prisma.EtudiantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtudiantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EtudiantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtudiantPayload>
          }
          findMany: {
            args: Prisma.EtudiantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtudiantPayload>[]
          }
          create: {
            args: Prisma.EtudiantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtudiantPayload>
          }
          createMany: {
            args: Prisma.EtudiantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EtudiantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtudiantPayload>[]
          }
          delete: {
            args: Prisma.EtudiantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtudiantPayload>
          }
          update: {
            args: Prisma.EtudiantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtudiantPayload>
          }
          deleteMany: {
            args: Prisma.EtudiantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EtudiantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EtudiantUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtudiantPayload>[]
          }
          upsert: {
            args: Prisma.EtudiantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtudiantPayload>
          }
          aggregate: {
            args: Prisma.EtudiantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEtudiant>
          }
          groupBy: {
            args: Prisma.EtudiantGroupByArgs<ExtArgs>
            result: $Utils.Optional<EtudiantGroupByOutputType>[]
          }
          count: {
            args: Prisma.EtudiantCountArgs<ExtArgs>
            result: $Utils.Optional<EtudiantCountAggregateOutputType> | number
          }
        }
      }
      Message: {
        payload: Prisma.$MessagePayload<ExtArgs>
        fields: Prisma.MessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findFirst: {
            args: Prisma.MessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findMany: {
            args: Prisma.MessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          create: {
            args: Prisma.MessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          createMany: {
            args: Prisma.MessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          delete: {
            args: Prisma.MessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          update: {
            args: Prisma.MessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          deleteMany: {
            args: Prisma.MessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          upsert: {
            args: Prisma.MessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          aggregate: {
            args: Prisma.MessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessage>
          }
          groupBy: {
            args: Prisma.MessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.MessageCountArgs<ExtArgs>
            result: $Utils.Optional<MessageCountAggregateOutputType> | number
          }
        }
      }
      Recevoire: {
        payload: Prisma.$RecevoirePayload<ExtArgs>
        fields: Prisma.RecevoireFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RecevoireFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecevoirePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RecevoireFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecevoirePayload>
          }
          findFirst: {
            args: Prisma.RecevoireFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecevoirePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RecevoireFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecevoirePayload>
          }
          findMany: {
            args: Prisma.RecevoireFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecevoirePayload>[]
          }
          create: {
            args: Prisma.RecevoireCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecevoirePayload>
          }
          createMany: {
            args: Prisma.RecevoireCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RecevoireCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecevoirePayload>[]
          }
          delete: {
            args: Prisma.RecevoireDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecevoirePayload>
          }
          update: {
            args: Prisma.RecevoireUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecevoirePayload>
          }
          deleteMany: {
            args: Prisma.RecevoireDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RecevoireUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RecevoireUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecevoirePayload>[]
          }
          upsert: {
            args: Prisma.RecevoireUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecevoirePayload>
          }
          aggregate: {
            args: Prisma.RecevoireAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRecevoire>
          }
          groupBy: {
            args: Prisma.RecevoireGroupByArgs<ExtArgs>
            result: $Utils.Optional<RecevoireGroupByOutputType>[]
          }
          count: {
            args: Prisma.RecevoireCountArgs<ExtArgs>
            result: $Utils.Optional<RecevoireCountAggregateOutputType> | number
          }
        }
      }
      Annonce: {
        payload: Prisma.$AnnoncePayload<ExtArgs>
        fields: Prisma.AnnonceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnnonceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnoncePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnnonceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnoncePayload>
          }
          findFirst: {
            args: Prisma.AnnonceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnoncePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnnonceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnoncePayload>
          }
          findMany: {
            args: Prisma.AnnonceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnoncePayload>[]
          }
          create: {
            args: Prisma.AnnonceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnoncePayload>
          }
          createMany: {
            args: Prisma.AnnonceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AnnonceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnoncePayload>[]
          }
          delete: {
            args: Prisma.AnnonceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnoncePayload>
          }
          update: {
            args: Prisma.AnnonceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnoncePayload>
          }
          deleteMany: {
            args: Prisma.AnnonceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnnonceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AnnonceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnoncePayload>[]
          }
          upsert: {
            args: Prisma.AnnonceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnoncePayload>
          }
          aggregate: {
            args: Prisma.AnnonceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnnonce>
          }
          groupBy: {
            args: Prisma.AnnonceGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnnonceGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnnonceCountArgs<ExtArgs>
            result: $Utils.Optional<AnnonceCountAggregateOutputType> | number
          }
        }
      }
      Commentaire: {
        payload: Prisma.$CommentairePayload<ExtArgs>
        fields: Prisma.CommentaireFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommentaireFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentairePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommentaireFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentairePayload>
          }
          findFirst: {
            args: Prisma.CommentaireFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentairePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommentaireFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentairePayload>
          }
          findMany: {
            args: Prisma.CommentaireFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentairePayload>[]
          }
          create: {
            args: Prisma.CommentaireCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentairePayload>
          }
          createMany: {
            args: Prisma.CommentaireCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommentaireCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentairePayload>[]
          }
          delete: {
            args: Prisma.CommentaireDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentairePayload>
          }
          update: {
            args: Prisma.CommentaireUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentairePayload>
          }
          deleteMany: {
            args: Prisma.CommentaireDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommentaireUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CommentaireUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentairePayload>[]
          }
          upsert: {
            args: Prisma.CommentaireUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentairePayload>
          }
          aggregate: {
            args: Prisma.CommentaireAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCommentaire>
          }
          groupBy: {
            args: Prisma.CommentaireGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommentaireGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommentaireCountArgs<ExtArgs>
            result: $Utils.Optional<CommentaireCountAggregateOutputType> | number
          }
        }
      }
      Signaler: {
        payload: Prisma.$SignalerPayload<ExtArgs>
        fields: Prisma.SignalerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SignalerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignalerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SignalerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignalerPayload>
          }
          findFirst: {
            args: Prisma.SignalerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignalerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SignalerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignalerPayload>
          }
          findMany: {
            args: Prisma.SignalerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignalerPayload>[]
          }
          create: {
            args: Prisma.SignalerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignalerPayload>
          }
          createMany: {
            args: Prisma.SignalerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SignalerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignalerPayload>[]
          }
          delete: {
            args: Prisma.SignalerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignalerPayload>
          }
          update: {
            args: Prisma.SignalerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignalerPayload>
          }
          deleteMany: {
            args: Prisma.SignalerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SignalerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SignalerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignalerPayload>[]
          }
          upsert: {
            args: Prisma.SignalerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignalerPayload>
          }
          aggregate: {
            args: Prisma.SignalerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSignaler>
          }
          groupBy: {
            args: Prisma.SignalerGroupByArgs<ExtArgs>
            result: $Utils.Optional<SignalerGroupByOutputType>[]
          }
          count: {
            args: Prisma.SignalerCountArgs<ExtArgs>
            result: $Utils.Optional<SignalerCountAggregateOutputType> | number
          }
        }
      }
      Amitie: {
        payload: Prisma.$AmitiePayload<ExtArgs>
        fields: Prisma.AmitieFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AmitieFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmitiePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AmitieFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmitiePayload>
          }
          findFirst: {
            args: Prisma.AmitieFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmitiePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AmitieFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmitiePayload>
          }
          findMany: {
            args: Prisma.AmitieFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmitiePayload>[]
          }
          create: {
            args: Prisma.AmitieCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmitiePayload>
          }
          createMany: {
            args: Prisma.AmitieCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AmitieCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmitiePayload>[]
          }
          delete: {
            args: Prisma.AmitieDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmitiePayload>
          }
          update: {
            args: Prisma.AmitieUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmitiePayload>
          }
          deleteMany: {
            args: Prisma.AmitieDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AmitieUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AmitieUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmitiePayload>[]
          }
          upsert: {
            args: Prisma.AmitieUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmitiePayload>
          }
          aggregate: {
            args: Prisma.AmitieAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAmitie>
          }
          groupBy: {
            args: Prisma.AmitieGroupByArgs<ExtArgs>
            result: $Utils.Optional<AmitieGroupByOutputType>[]
          }
          count: {
            args: Prisma.AmitieCountArgs<ExtArgs>
            result: $Utils.Optional<AmitieCountAggregateOutputType> | number
          }
        }
      }
      Groupe: {
        payload: Prisma.$GroupePayload<ExtArgs>
        fields: Prisma.GroupeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GroupeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GroupeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupePayload>
          }
          findFirst: {
            args: Prisma.GroupeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GroupeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupePayload>
          }
          findMany: {
            args: Prisma.GroupeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupePayload>[]
          }
          create: {
            args: Prisma.GroupeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupePayload>
          }
          createMany: {
            args: Prisma.GroupeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GroupeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupePayload>[]
          }
          delete: {
            args: Prisma.GroupeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupePayload>
          }
          update: {
            args: Prisma.GroupeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupePayload>
          }
          deleteMany: {
            args: Prisma.GroupeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GroupeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GroupeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupePayload>[]
          }
          upsert: {
            args: Prisma.GroupeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupePayload>
          }
          aggregate: {
            args: Prisma.GroupeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGroupe>
          }
          groupBy: {
            args: Prisma.GroupeGroupByArgs<ExtArgs>
            result: $Utils.Optional<GroupeGroupByOutputType>[]
          }
          count: {
            args: Prisma.GroupeCountArgs<ExtArgs>
            result: $Utils.Optional<GroupeCountAggregateOutputType> | number
          }
        }
      }
      EtudiantGroupe: {
        payload: Prisma.$EtudiantGroupePayload<ExtArgs>
        fields: Prisma.EtudiantGroupeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EtudiantGroupeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtudiantGroupePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EtudiantGroupeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtudiantGroupePayload>
          }
          findFirst: {
            args: Prisma.EtudiantGroupeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtudiantGroupePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EtudiantGroupeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtudiantGroupePayload>
          }
          findMany: {
            args: Prisma.EtudiantGroupeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtudiantGroupePayload>[]
          }
          create: {
            args: Prisma.EtudiantGroupeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtudiantGroupePayload>
          }
          createMany: {
            args: Prisma.EtudiantGroupeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EtudiantGroupeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtudiantGroupePayload>[]
          }
          delete: {
            args: Prisma.EtudiantGroupeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtudiantGroupePayload>
          }
          update: {
            args: Prisma.EtudiantGroupeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtudiantGroupePayload>
          }
          deleteMany: {
            args: Prisma.EtudiantGroupeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EtudiantGroupeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EtudiantGroupeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtudiantGroupePayload>[]
          }
          upsert: {
            args: Prisma.EtudiantGroupeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtudiantGroupePayload>
          }
          aggregate: {
            args: Prisma.EtudiantGroupeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEtudiantGroupe>
          }
          groupBy: {
            args: Prisma.EtudiantGroupeGroupByArgs<ExtArgs>
            result: $Utils.Optional<EtudiantGroupeGroupByOutputType>[]
          }
          count: {
            args: Prisma.EtudiantGroupeCountArgs<ExtArgs>
            result: $Utils.Optional<EtudiantGroupeCountAggregateOutputType> | number
          }
        }
      }
      MessageGroupe: {
        payload: Prisma.$MessageGroupePayload<ExtArgs>
        fields: Prisma.MessageGroupeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessageGroupeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageGroupePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessageGroupeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageGroupePayload>
          }
          findFirst: {
            args: Prisma.MessageGroupeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageGroupePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessageGroupeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageGroupePayload>
          }
          findMany: {
            args: Prisma.MessageGroupeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageGroupePayload>[]
          }
          create: {
            args: Prisma.MessageGroupeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageGroupePayload>
          }
          createMany: {
            args: Prisma.MessageGroupeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MessageGroupeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageGroupePayload>[]
          }
          delete: {
            args: Prisma.MessageGroupeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageGroupePayload>
          }
          update: {
            args: Prisma.MessageGroupeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageGroupePayload>
          }
          deleteMany: {
            args: Prisma.MessageGroupeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MessageGroupeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MessageGroupeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageGroupePayload>[]
          }
          upsert: {
            args: Prisma.MessageGroupeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageGroupePayload>
          }
          aggregate: {
            args: Prisma.MessageGroupeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessageGroupe>
          }
          groupBy: {
            args: Prisma.MessageGroupeGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessageGroupeGroupByOutputType>[]
          }
          count: {
            args: Prisma.MessageGroupeCountArgs<ExtArgs>
            result: $Utils.Optional<MessageGroupeCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
  }
  export type GlobalOmitConfig = {
    etudiant?: EtudiantOmit
    message?: MessageOmit
    recevoire?: RecevoireOmit
    annonce?: AnnonceOmit
    commentaire?: CommentaireOmit
    signaler?: SignalerOmit
    amitie?: AmitieOmit
    groupe?: GroupeOmit
    etudiantGroupe?: EtudiantGroupeOmit
    messageGroupe?: MessageGroupeOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type EtudiantCountOutputType
   */

  export type EtudiantCountOutputType = {
    messagesEnvoyes: number
    messagesRecus: number
    annonces: number
    commentaires: number
    signalements: number
    demandesEnvoyees: number
    demandesRecues: number
    groupes: number
    messagesGroupes: number
  }

  export type EtudiantCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messagesEnvoyes?: boolean | EtudiantCountOutputTypeCountMessagesEnvoyesArgs
    messagesRecus?: boolean | EtudiantCountOutputTypeCountMessagesRecusArgs
    annonces?: boolean | EtudiantCountOutputTypeCountAnnoncesArgs
    commentaires?: boolean | EtudiantCountOutputTypeCountCommentairesArgs
    signalements?: boolean | EtudiantCountOutputTypeCountSignalementsArgs
    demandesEnvoyees?: boolean | EtudiantCountOutputTypeCountDemandesEnvoyeesArgs
    demandesRecues?: boolean | EtudiantCountOutputTypeCountDemandesRecuesArgs
    groupes?: boolean | EtudiantCountOutputTypeCountGroupesArgs
    messagesGroupes?: boolean | EtudiantCountOutputTypeCountMessagesGroupesArgs
  }

  // Custom InputTypes
  /**
   * EtudiantCountOutputType without action
   */
  export type EtudiantCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EtudiantCountOutputType
     */
    select?: EtudiantCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EtudiantCountOutputType without action
   */
  export type EtudiantCountOutputTypeCountMessagesEnvoyesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }

  /**
   * EtudiantCountOutputType without action
   */
  export type EtudiantCountOutputTypeCountMessagesRecusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecevoireWhereInput
  }

  /**
   * EtudiantCountOutputType without action
   */
  export type EtudiantCountOutputTypeCountAnnoncesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnnonceWhereInput
  }

  /**
   * EtudiantCountOutputType without action
   */
  export type EtudiantCountOutputTypeCountCommentairesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentaireWhereInput
  }

  /**
   * EtudiantCountOutputType without action
   */
  export type EtudiantCountOutputTypeCountSignalementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SignalerWhereInput
  }

  /**
   * EtudiantCountOutputType without action
   */
  export type EtudiantCountOutputTypeCountDemandesEnvoyeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AmitieWhereInput
  }

  /**
   * EtudiantCountOutputType without action
   */
  export type EtudiantCountOutputTypeCountDemandesRecuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AmitieWhereInput
  }

  /**
   * EtudiantCountOutputType without action
   */
  export type EtudiantCountOutputTypeCountGroupesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EtudiantGroupeWhereInput
  }

  /**
   * EtudiantCountOutputType without action
   */
  export type EtudiantCountOutputTypeCountMessagesGroupesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageGroupeWhereInput
  }


  /**
   * Count Type MessageCountOutputType
   */

  export type MessageCountOutputType = {
    receveurs: number
  }

  export type MessageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    receveurs?: boolean | MessageCountOutputTypeCountReceveursArgs
  }

  // Custom InputTypes
  /**
   * MessageCountOutputType without action
   */
  export type MessageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageCountOutputType
     */
    select?: MessageCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MessageCountOutputType without action
   */
  export type MessageCountOutputTypeCountReceveursArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecevoireWhereInput
  }


  /**
   * Count Type AnnonceCountOutputType
   */

  export type AnnonceCountOutputType = {
    commentaires: number
    signalements: number
  }

  export type AnnonceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    commentaires?: boolean | AnnonceCountOutputTypeCountCommentairesArgs
    signalements?: boolean | AnnonceCountOutputTypeCountSignalementsArgs
  }

  // Custom InputTypes
  /**
   * AnnonceCountOutputType without action
   */
  export type AnnonceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnnonceCountOutputType
     */
    select?: AnnonceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AnnonceCountOutputType without action
   */
  export type AnnonceCountOutputTypeCountCommentairesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentaireWhereInput
  }

  /**
   * AnnonceCountOutputType without action
   */
  export type AnnonceCountOutputTypeCountSignalementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SignalerWhereInput
  }


  /**
   * Count Type GroupeCountOutputType
   */

  export type GroupeCountOutputType = {
    membres: number
    messages: number
  }

  export type GroupeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    membres?: boolean | GroupeCountOutputTypeCountMembresArgs
    messages?: boolean | GroupeCountOutputTypeCountMessagesArgs
  }

  // Custom InputTypes
  /**
   * GroupeCountOutputType without action
   */
  export type GroupeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupeCountOutputType
     */
    select?: GroupeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GroupeCountOutputType without action
   */
  export type GroupeCountOutputTypeCountMembresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EtudiantGroupeWhereInput
  }

  /**
   * GroupeCountOutputType without action
   */
  export type GroupeCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageGroupeWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Etudiant
   */

  export type AggregateEtudiant = {
    _count: EtudiantCountAggregateOutputType | null
    _avg: EtudiantAvgAggregateOutputType | null
    _sum: EtudiantSumAggregateOutputType | null
    _min: EtudiantMinAggregateOutputType | null
    _max: EtudiantMaxAggregateOutputType | null
  }

  export type EtudiantAvgAggregateOutputType = {
    id: number | null
  }

  export type EtudiantSumAggregateOutputType = {
    id: number | null
  }

  export type EtudiantMinAggregateOutputType = {
    id: number | null
    prenom: string | null
    nom: string | null
    email: string | null
    motDePasse: string | null
    dateInscription: Date | null
    image: string | null
    accessToken: string | null
    refreshToken: string | null
    isAuthGoogle: boolean | null
    otpCode: string | null
    otpExpiresAt: Date | null
  }

  export type EtudiantMaxAggregateOutputType = {
    id: number | null
    prenom: string | null
    nom: string | null
    email: string | null
    motDePasse: string | null
    dateInscription: Date | null
    image: string | null
    accessToken: string | null
    refreshToken: string | null
    isAuthGoogle: boolean | null
    otpCode: string | null
    otpExpiresAt: Date | null
  }

  export type EtudiantCountAggregateOutputType = {
    id: number
    prenom: number
    nom: number
    email: number
    motDePasse: number
    dateInscription: number
    image: number
    accessToken: number
    refreshToken: number
    isAuthGoogle: number
    otpCode: number
    otpExpiresAt: number
    _all: number
  }


  export type EtudiantAvgAggregateInputType = {
    id?: true
  }

  export type EtudiantSumAggregateInputType = {
    id?: true
  }

  export type EtudiantMinAggregateInputType = {
    id?: true
    prenom?: true
    nom?: true
    email?: true
    motDePasse?: true
    dateInscription?: true
    image?: true
    accessToken?: true
    refreshToken?: true
    isAuthGoogle?: true
    otpCode?: true
    otpExpiresAt?: true
  }

  export type EtudiantMaxAggregateInputType = {
    id?: true
    prenom?: true
    nom?: true
    email?: true
    motDePasse?: true
    dateInscription?: true
    image?: true
    accessToken?: true
    refreshToken?: true
    isAuthGoogle?: true
    otpCode?: true
    otpExpiresAt?: true
  }

  export type EtudiantCountAggregateInputType = {
    id?: true
    prenom?: true
    nom?: true
    email?: true
    motDePasse?: true
    dateInscription?: true
    image?: true
    accessToken?: true
    refreshToken?: true
    isAuthGoogle?: true
    otpCode?: true
    otpExpiresAt?: true
    _all?: true
  }

  export type EtudiantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Etudiant to aggregate.
     */
    where?: EtudiantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Etudiants to fetch.
     */
    orderBy?: EtudiantOrderByWithRelationInput | EtudiantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EtudiantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Etudiants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Etudiants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Etudiants
    **/
    _count?: true | EtudiantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EtudiantAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EtudiantSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EtudiantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EtudiantMaxAggregateInputType
  }

  export type GetEtudiantAggregateType<T extends EtudiantAggregateArgs> = {
        [P in keyof T & keyof AggregateEtudiant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEtudiant[P]>
      : GetScalarType<T[P], AggregateEtudiant[P]>
  }




  export type EtudiantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EtudiantWhereInput
    orderBy?: EtudiantOrderByWithAggregationInput | EtudiantOrderByWithAggregationInput[]
    by: EtudiantScalarFieldEnum[] | EtudiantScalarFieldEnum
    having?: EtudiantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EtudiantCountAggregateInputType | true
    _avg?: EtudiantAvgAggregateInputType
    _sum?: EtudiantSumAggregateInputType
    _min?: EtudiantMinAggregateInputType
    _max?: EtudiantMaxAggregateInputType
  }

  export type EtudiantGroupByOutputType = {
    id: number
    prenom: string | null
    nom: string
    email: string
    motDePasse: string
    dateInscription: Date
    image: string | null
    accessToken: string | null
    refreshToken: string | null
    isAuthGoogle: boolean
    otpCode: string | null
    otpExpiresAt: Date | null
    _count: EtudiantCountAggregateOutputType | null
    _avg: EtudiantAvgAggregateOutputType | null
    _sum: EtudiantSumAggregateOutputType | null
    _min: EtudiantMinAggregateOutputType | null
    _max: EtudiantMaxAggregateOutputType | null
  }

  type GetEtudiantGroupByPayload<T extends EtudiantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EtudiantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EtudiantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EtudiantGroupByOutputType[P]>
            : GetScalarType<T[P], EtudiantGroupByOutputType[P]>
        }
      >
    >


  export type EtudiantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    prenom?: boolean
    nom?: boolean
    email?: boolean
    motDePasse?: boolean
    dateInscription?: boolean
    image?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    isAuthGoogle?: boolean
    otpCode?: boolean
    otpExpiresAt?: boolean
    messagesEnvoyes?: boolean | Etudiant$messagesEnvoyesArgs<ExtArgs>
    messagesRecus?: boolean | Etudiant$messagesRecusArgs<ExtArgs>
    annonces?: boolean | Etudiant$annoncesArgs<ExtArgs>
    commentaires?: boolean | Etudiant$commentairesArgs<ExtArgs>
    signalements?: boolean | Etudiant$signalementsArgs<ExtArgs>
    demandesEnvoyees?: boolean | Etudiant$demandesEnvoyeesArgs<ExtArgs>
    demandesRecues?: boolean | Etudiant$demandesRecuesArgs<ExtArgs>
    groupes?: boolean | Etudiant$groupesArgs<ExtArgs>
    messagesGroupes?: boolean | Etudiant$messagesGroupesArgs<ExtArgs>
    _count?: boolean | EtudiantCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["etudiant"]>

  export type EtudiantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    prenom?: boolean
    nom?: boolean
    email?: boolean
    motDePasse?: boolean
    dateInscription?: boolean
    image?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    isAuthGoogle?: boolean
    otpCode?: boolean
    otpExpiresAt?: boolean
  }, ExtArgs["result"]["etudiant"]>

  export type EtudiantSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    prenom?: boolean
    nom?: boolean
    email?: boolean
    motDePasse?: boolean
    dateInscription?: boolean
    image?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    isAuthGoogle?: boolean
    otpCode?: boolean
    otpExpiresAt?: boolean
  }, ExtArgs["result"]["etudiant"]>

  export type EtudiantSelectScalar = {
    id?: boolean
    prenom?: boolean
    nom?: boolean
    email?: boolean
    motDePasse?: boolean
    dateInscription?: boolean
    image?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    isAuthGoogle?: boolean
    otpCode?: boolean
    otpExpiresAt?: boolean
  }

  export type EtudiantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "prenom" | "nom" | "email" | "motDePasse" | "dateInscription" | "image" | "accessToken" | "refreshToken" | "isAuthGoogle" | "otpCode" | "otpExpiresAt", ExtArgs["result"]["etudiant"]>
  export type EtudiantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messagesEnvoyes?: boolean | Etudiant$messagesEnvoyesArgs<ExtArgs>
    messagesRecus?: boolean | Etudiant$messagesRecusArgs<ExtArgs>
    annonces?: boolean | Etudiant$annoncesArgs<ExtArgs>
    commentaires?: boolean | Etudiant$commentairesArgs<ExtArgs>
    signalements?: boolean | Etudiant$signalementsArgs<ExtArgs>
    demandesEnvoyees?: boolean | Etudiant$demandesEnvoyeesArgs<ExtArgs>
    demandesRecues?: boolean | Etudiant$demandesRecuesArgs<ExtArgs>
    groupes?: boolean | Etudiant$groupesArgs<ExtArgs>
    messagesGroupes?: boolean | Etudiant$messagesGroupesArgs<ExtArgs>
    _count?: boolean | EtudiantCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EtudiantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type EtudiantIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EtudiantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Etudiant"
    objects: {
      messagesEnvoyes: Prisma.$MessagePayload<ExtArgs>[]
      messagesRecus: Prisma.$RecevoirePayload<ExtArgs>[]
      annonces: Prisma.$AnnoncePayload<ExtArgs>[]
      commentaires: Prisma.$CommentairePayload<ExtArgs>[]
      signalements: Prisma.$SignalerPayload<ExtArgs>[]
      demandesEnvoyees: Prisma.$AmitiePayload<ExtArgs>[]
      demandesRecues: Prisma.$AmitiePayload<ExtArgs>[]
      groupes: Prisma.$EtudiantGroupePayload<ExtArgs>[]
      messagesGroupes: Prisma.$MessageGroupePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      prenom: string | null
      nom: string
      email: string
      motDePasse: string
      dateInscription: Date
      image: string | null
      accessToken: string | null
      refreshToken: string | null
      isAuthGoogle: boolean
      otpCode: string | null
      otpExpiresAt: Date | null
    }, ExtArgs["result"]["etudiant"]>
    composites: {}
  }

  type EtudiantGetPayload<S extends boolean | null | undefined | EtudiantDefaultArgs> = $Result.GetResult<Prisma.$EtudiantPayload, S>

  type EtudiantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EtudiantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EtudiantCountAggregateInputType | true
    }

  export interface EtudiantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Etudiant'], meta: { name: 'Etudiant' } }
    /**
     * Find zero or one Etudiant that matches the filter.
     * @param {EtudiantFindUniqueArgs} args - Arguments to find a Etudiant
     * @example
     * // Get one Etudiant
     * const etudiant = await prisma.etudiant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EtudiantFindUniqueArgs>(args: SelectSubset<T, EtudiantFindUniqueArgs<ExtArgs>>): Prisma__EtudiantClient<$Result.GetResult<Prisma.$EtudiantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Etudiant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EtudiantFindUniqueOrThrowArgs} args - Arguments to find a Etudiant
     * @example
     * // Get one Etudiant
     * const etudiant = await prisma.etudiant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EtudiantFindUniqueOrThrowArgs>(args: SelectSubset<T, EtudiantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EtudiantClient<$Result.GetResult<Prisma.$EtudiantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Etudiant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtudiantFindFirstArgs} args - Arguments to find a Etudiant
     * @example
     * // Get one Etudiant
     * const etudiant = await prisma.etudiant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EtudiantFindFirstArgs>(args?: SelectSubset<T, EtudiantFindFirstArgs<ExtArgs>>): Prisma__EtudiantClient<$Result.GetResult<Prisma.$EtudiantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Etudiant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtudiantFindFirstOrThrowArgs} args - Arguments to find a Etudiant
     * @example
     * // Get one Etudiant
     * const etudiant = await prisma.etudiant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EtudiantFindFirstOrThrowArgs>(args?: SelectSubset<T, EtudiantFindFirstOrThrowArgs<ExtArgs>>): Prisma__EtudiantClient<$Result.GetResult<Prisma.$EtudiantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Etudiants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtudiantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Etudiants
     * const etudiants = await prisma.etudiant.findMany()
     * 
     * // Get first 10 Etudiants
     * const etudiants = await prisma.etudiant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const etudiantWithIdOnly = await prisma.etudiant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EtudiantFindManyArgs>(args?: SelectSubset<T, EtudiantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EtudiantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Etudiant.
     * @param {EtudiantCreateArgs} args - Arguments to create a Etudiant.
     * @example
     * // Create one Etudiant
     * const Etudiant = await prisma.etudiant.create({
     *   data: {
     *     // ... data to create a Etudiant
     *   }
     * })
     * 
     */
    create<T extends EtudiantCreateArgs>(args: SelectSubset<T, EtudiantCreateArgs<ExtArgs>>): Prisma__EtudiantClient<$Result.GetResult<Prisma.$EtudiantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Etudiants.
     * @param {EtudiantCreateManyArgs} args - Arguments to create many Etudiants.
     * @example
     * // Create many Etudiants
     * const etudiant = await prisma.etudiant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EtudiantCreateManyArgs>(args?: SelectSubset<T, EtudiantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Etudiants and returns the data saved in the database.
     * @param {EtudiantCreateManyAndReturnArgs} args - Arguments to create many Etudiants.
     * @example
     * // Create many Etudiants
     * const etudiant = await prisma.etudiant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Etudiants and only return the `id`
     * const etudiantWithIdOnly = await prisma.etudiant.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EtudiantCreateManyAndReturnArgs>(args?: SelectSubset<T, EtudiantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EtudiantPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Etudiant.
     * @param {EtudiantDeleteArgs} args - Arguments to delete one Etudiant.
     * @example
     * // Delete one Etudiant
     * const Etudiant = await prisma.etudiant.delete({
     *   where: {
     *     // ... filter to delete one Etudiant
     *   }
     * })
     * 
     */
    delete<T extends EtudiantDeleteArgs>(args: SelectSubset<T, EtudiantDeleteArgs<ExtArgs>>): Prisma__EtudiantClient<$Result.GetResult<Prisma.$EtudiantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Etudiant.
     * @param {EtudiantUpdateArgs} args - Arguments to update one Etudiant.
     * @example
     * // Update one Etudiant
     * const etudiant = await prisma.etudiant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EtudiantUpdateArgs>(args: SelectSubset<T, EtudiantUpdateArgs<ExtArgs>>): Prisma__EtudiantClient<$Result.GetResult<Prisma.$EtudiantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Etudiants.
     * @param {EtudiantDeleteManyArgs} args - Arguments to filter Etudiants to delete.
     * @example
     * // Delete a few Etudiants
     * const { count } = await prisma.etudiant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EtudiantDeleteManyArgs>(args?: SelectSubset<T, EtudiantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Etudiants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtudiantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Etudiants
     * const etudiant = await prisma.etudiant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EtudiantUpdateManyArgs>(args: SelectSubset<T, EtudiantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Etudiants and returns the data updated in the database.
     * @param {EtudiantUpdateManyAndReturnArgs} args - Arguments to update many Etudiants.
     * @example
     * // Update many Etudiants
     * const etudiant = await prisma.etudiant.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Etudiants and only return the `id`
     * const etudiantWithIdOnly = await prisma.etudiant.updateManyAndReturn({
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
    updateManyAndReturn<T extends EtudiantUpdateManyAndReturnArgs>(args: SelectSubset<T, EtudiantUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EtudiantPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Etudiant.
     * @param {EtudiantUpsertArgs} args - Arguments to update or create a Etudiant.
     * @example
     * // Update or create a Etudiant
     * const etudiant = await prisma.etudiant.upsert({
     *   create: {
     *     // ... data to create a Etudiant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Etudiant we want to update
     *   }
     * })
     */
    upsert<T extends EtudiantUpsertArgs>(args: SelectSubset<T, EtudiantUpsertArgs<ExtArgs>>): Prisma__EtudiantClient<$Result.GetResult<Prisma.$EtudiantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Etudiants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtudiantCountArgs} args - Arguments to filter Etudiants to count.
     * @example
     * // Count the number of Etudiants
     * const count = await prisma.etudiant.count({
     *   where: {
     *     // ... the filter for the Etudiants we want to count
     *   }
     * })
    **/
    count<T extends EtudiantCountArgs>(
      args?: Subset<T, EtudiantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EtudiantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Etudiant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtudiantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EtudiantAggregateArgs>(args: Subset<T, EtudiantAggregateArgs>): Prisma.PrismaPromise<GetEtudiantAggregateType<T>>

    /**
     * Group by Etudiant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtudiantGroupByArgs} args - Group by arguments.
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
      T extends EtudiantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EtudiantGroupByArgs['orderBy'] }
        : { orderBy?: EtudiantGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EtudiantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEtudiantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Etudiant model
   */
  readonly fields: EtudiantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Etudiant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EtudiantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    messagesEnvoyes<T extends Etudiant$messagesEnvoyesArgs<ExtArgs> = {}>(args?: Subset<T, Etudiant$messagesEnvoyesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    messagesRecus<T extends Etudiant$messagesRecusArgs<ExtArgs> = {}>(args?: Subset<T, Etudiant$messagesRecusArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecevoirePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    annonces<T extends Etudiant$annoncesArgs<ExtArgs> = {}>(args?: Subset<T, Etudiant$annoncesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnoncePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    commentaires<T extends Etudiant$commentairesArgs<ExtArgs> = {}>(args?: Subset<T, Etudiant$commentairesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentairePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    signalements<T extends Etudiant$signalementsArgs<ExtArgs> = {}>(args?: Subset<T, Etudiant$signalementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SignalerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    demandesEnvoyees<T extends Etudiant$demandesEnvoyeesArgs<ExtArgs> = {}>(args?: Subset<T, Etudiant$demandesEnvoyeesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AmitiePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    demandesRecues<T extends Etudiant$demandesRecuesArgs<ExtArgs> = {}>(args?: Subset<T, Etudiant$demandesRecuesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AmitiePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    groupes<T extends Etudiant$groupesArgs<ExtArgs> = {}>(args?: Subset<T, Etudiant$groupesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EtudiantGroupePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    messagesGroupes<T extends Etudiant$messagesGroupesArgs<ExtArgs> = {}>(args?: Subset<T, Etudiant$messagesGroupesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessageGroupePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Etudiant model
   */
  interface EtudiantFieldRefs {
    readonly id: FieldRef<"Etudiant", 'Int'>
    readonly prenom: FieldRef<"Etudiant", 'String'>
    readonly nom: FieldRef<"Etudiant", 'String'>
    readonly email: FieldRef<"Etudiant", 'String'>
    readonly motDePasse: FieldRef<"Etudiant", 'String'>
    readonly dateInscription: FieldRef<"Etudiant", 'DateTime'>
    readonly image: FieldRef<"Etudiant", 'String'>
    readonly accessToken: FieldRef<"Etudiant", 'String'>
    readonly refreshToken: FieldRef<"Etudiant", 'String'>
    readonly isAuthGoogle: FieldRef<"Etudiant", 'Boolean'>
    readonly otpCode: FieldRef<"Etudiant", 'String'>
    readonly otpExpiresAt: FieldRef<"Etudiant", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Etudiant findUnique
   */
  export type EtudiantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etudiant
     */
    select?: EtudiantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Etudiant
     */
    omit?: EtudiantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtudiantInclude<ExtArgs> | null
    /**
     * Filter, which Etudiant to fetch.
     */
    where: EtudiantWhereUniqueInput
  }

  /**
   * Etudiant findUniqueOrThrow
   */
  export type EtudiantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etudiant
     */
    select?: EtudiantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Etudiant
     */
    omit?: EtudiantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtudiantInclude<ExtArgs> | null
    /**
     * Filter, which Etudiant to fetch.
     */
    where: EtudiantWhereUniqueInput
  }

  /**
   * Etudiant findFirst
   */
  export type EtudiantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etudiant
     */
    select?: EtudiantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Etudiant
     */
    omit?: EtudiantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtudiantInclude<ExtArgs> | null
    /**
     * Filter, which Etudiant to fetch.
     */
    where?: EtudiantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Etudiants to fetch.
     */
    orderBy?: EtudiantOrderByWithRelationInput | EtudiantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Etudiants.
     */
    cursor?: EtudiantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Etudiants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Etudiants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Etudiants.
     */
    distinct?: EtudiantScalarFieldEnum | EtudiantScalarFieldEnum[]
  }

  /**
   * Etudiant findFirstOrThrow
   */
  export type EtudiantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etudiant
     */
    select?: EtudiantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Etudiant
     */
    omit?: EtudiantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtudiantInclude<ExtArgs> | null
    /**
     * Filter, which Etudiant to fetch.
     */
    where?: EtudiantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Etudiants to fetch.
     */
    orderBy?: EtudiantOrderByWithRelationInput | EtudiantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Etudiants.
     */
    cursor?: EtudiantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Etudiants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Etudiants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Etudiants.
     */
    distinct?: EtudiantScalarFieldEnum | EtudiantScalarFieldEnum[]
  }

  /**
   * Etudiant findMany
   */
  export type EtudiantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etudiant
     */
    select?: EtudiantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Etudiant
     */
    omit?: EtudiantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtudiantInclude<ExtArgs> | null
    /**
     * Filter, which Etudiants to fetch.
     */
    where?: EtudiantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Etudiants to fetch.
     */
    orderBy?: EtudiantOrderByWithRelationInput | EtudiantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Etudiants.
     */
    cursor?: EtudiantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Etudiants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Etudiants.
     */
    skip?: number
    distinct?: EtudiantScalarFieldEnum | EtudiantScalarFieldEnum[]
  }

  /**
   * Etudiant create
   */
  export type EtudiantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etudiant
     */
    select?: EtudiantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Etudiant
     */
    omit?: EtudiantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtudiantInclude<ExtArgs> | null
    /**
     * The data needed to create a Etudiant.
     */
    data: XOR<EtudiantCreateInput, EtudiantUncheckedCreateInput>
  }

  /**
   * Etudiant createMany
   */
  export type EtudiantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Etudiants.
     */
    data: EtudiantCreateManyInput | EtudiantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Etudiant createManyAndReturn
   */
  export type EtudiantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etudiant
     */
    select?: EtudiantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Etudiant
     */
    omit?: EtudiantOmit<ExtArgs> | null
    /**
     * The data used to create many Etudiants.
     */
    data: EtudiantCreateManyInput | EtudiantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Etudiant update
   */
  export type EtudiantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etudiant
     */
    select?: EtudiantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Etudiant
     */
    omit?: EtudiantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtudiantInclude<ExtArgs> | null
    /**
     * The data needed to update a Etudiant.
     */
    data: XOR<EtudiantUpdateInput, EtudiantUncheckedUpdateInput>
    /**
     * Choose, which Etudiant to update.
     */
    where: EtudiantWhereUniqueInput
  }

  /**
   * Etudiant updateMany
   */
  export type EtudiantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Etudiants.
     */
    data: XOR<EtudiantUpdateManyMutationInput, EtudiantUncheckedUpdateManyInput>
    /**
     * Filter which Etudiants to update
     */
    where?: EtudiantWhereInput
    /**
     * Limit how many Etudiants to update.
     */
    limit?: number
  }

  /**
   * Etudiant updateManyAndReturn
   */
  export type EtudiantUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etudiant
     */
    select?: EtudiantSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Etudiant
     */
    omit?: EtudiantOmit<ExtArgs> | null
    /**
     * The data used to update Etudiants.
     */
    data: XOR<EtudiantUpdateManyMutationInput, EtudiantUncheckedUpdateManyInput>
    /**
     * Filter which Etudiants to update
     */
    where?: EtudiantWhereInput
    /**
     * Limit how many Etudiants to update.
     */
    limit?: number
  }

  /**
   * Etudiant upsert
   */
  export type EtudiantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etudiant
     */
    select?: EtudiantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Etudiant
     */
    omit?: EtudiantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtudiantInclude<ExtArgs> | null
    /**
     * The filter to search for the Etudiant to update in case it exists.
     */
    where: EtudiantWhereUniqueInput
    /**
     * In case the Etudiant found by the `where` argument doesn't exist, create a new Etudiant with this data.
     */
    create: XOR<EtudiantCreateInput, EtudiantUncheckedCreateInput>
    /**
     * In case the Etudiant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EtudiantUpdateInput, EtudiantUncheckedUpdateInput>
  }

  /**
   * Etudiant delete
   */
  export type EtudiantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etudiant
     */
    select?: EtudiantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Etudiant
     */
    omit?: EtudiantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtudiantInclude<ExtArgs> | null
    /**
     * Filter which Etudiant to delete.
     */
    where: EtudiantWhereUniqueInput
  }

  /**
   * Etudiant deleteMany
   */
  export type EtudiantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Etudiants to delete
     */
    where?: EtudiantWhereInput
    /**
     * Limit how many Etudiants to delete.
     */
    limit?: number
  }

  /**
   * Etudiant.messagesEnvoyes
   */
  export type Etudiant$messagesEnvoyesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Etudiant.messagesRecus
   */
  export type Etudiant$messagesRecusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recevoire
     */
    select?: RecevoireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recevoire
     */
    omit?: RecevoireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecevoireInclude<ExtArgs> | null
    where?: RecevoireWhereInput
    orderBy?: RecevoireOrderByWithRelationInput | RecevoireOrderByWithRelationInput[]
    cursor?: RecevoireWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecevoireScalarFieldEnum | RecevoireScalarFieldEnum[]
  }

  /**
   * Etudiant.annonces
   */
  export type Etudiant$annoncesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Annonce
     */
    select?: AnnonceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Annonce
     */
    omit?: AnnonceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnonceInclude<ExtArgs> | null
    where?: AnnonceWhereInput
    orderBy?: AnnonceOrderByWithRelationInput | AnnonceOrderByWithRelationInput[]
    cursor?: AnnonceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnnonceScalarFieldEnum | AnnonceScalarFieldEnum[]
  }

  /**
   * Etudiant.commentaires
   */
  export type Etudiant$commentairesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commentaire
     */
    select?: CommentaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commentaire
     */
    omit?: CommentaireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentaireInclude<ExtArgs> | null
    where?: CommentaireWhereInput
    orderBy?: CommentaireOrderByWithRelationInput | CommentaireOrderByWithRelationInput[]
    cursor?: CommentaireWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentaireScalarFieldEnum | CommentaireScalarFieldEnum[]
  }

  /**
   * Etudiant.signalements
   */
  export type Etudiant$signalementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Signaler
     */
    select?: SignalerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Signaler
     */
    omit?: SignalerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignalerInclude<ExtArgs> | null
    where?: SignalerWhereInput
    orderBy?: SignalerOrderByWithRelationInput | SignalerOrderByWithRelationInput[]
    cursor?: SignalerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SignalerScalarFieldEnum | SignalerScalarFieldEnum[]
  }

  /**
   * Etudiant.demandesEnvoyees
   */
  export type Etudiant$demandesEnvoyeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amitie
     */
    select?: AmitieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amitie
     */
    omit?: AmitieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmitieInclude<ExtArgs> | null
    where?: AmitieWhereInput
    orderBy?: AmitieOrderByWithRelationInput | AmitieOrderByWithRelationInput[]
    cursor?: AmitieWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AmitieScalarFieldEnum | AmitieScalarFieldEnum[]
  }

  /**
   * Etudiant.demandesRecues
   */
  export type Etudiant$demandesRecuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amitie
     */
    select?: AmitieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amitie
     */
    omit?: AmitieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmitieInclude<ExtArgs> | null
    where?: AmitieWhereInput
    orderBy?: AmitieOrderByWithRelationInput | AmitieOrderByWithRelationInput[]
    cursor?: AmitieWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AmitieScalarFieldEnum | AmitieScalarFieldEnum[]
  }

  /**
   * Etudiant.groupes
   */
  export type Etudiant$groupesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EtudiantGroupe
     */
    select?: EtudiantGroupeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EtudiantGroupe
     */
    omit?: EtudiantGroupeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtudiantGroupeInclude<ExtArgs> | null
    where?: EtudiantGroupeWhereInput
    orderBy?: EtudiantGroupeOrderByWithRelationInput | EtudiantGroupeOrderByWithRelationInput[]
    cursor?: EtudiantGroupeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EtudiantGroupeScalarFieldEnum | EtudiantGroupeScalarFieldEnum[]
  }

  /**
   * Etudiant.messagesGroupes
   */
  export type Etudiant$messagesGroupesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageGroupe
     */
    select?: MessageGroupeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageGroupe
     */
    omit?: MessageGroupeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageGroupeInclude<ExtArgs> | null
    where?: MessageGroupeWhereInput
    orderBy?: MessageGroupeOrderByWithRelationInput | MessageGroupeOrderByWithRelationInput[]
    cursor?: MessageGroupeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageGroupeScalarFieldEnum | MessageGroupeScalarFieldEnum[]
  }

  /**
   * Etudiant without action
   */
  export type EtudiantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etudiant
     */
    select?: EtudiantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Etudiant
     */
    omit?: EtudiantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtudiantInclude<ExtArgs> | null
  }


  /**
   * Model Message
   */

  export type AggregateMessage = {
    _count: MessageCountAggregateOutputType | null
    _avg: MessageAvgAggregateOutputType | null
    _sum: MessageSumAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  export type MessageAvgAggregateOutputType = {
    id: number | null
    etudiantId: number | null
  }

  export type MessageSumAggregateOutputType = {
    id: number | null
    etudiantId: number | null
  }

  export type MessageMinAggregateOutputType = {
    id: number | null
    contenu: string | null
    date: Date | null
    etudiantId: number | null
  }

  export type MessageMaxAggregateOutputType = {
    id: number | null
    contenu: string | null
    date: Date | null
    etudiantId: number | null
  }

  export type MessageCountAggregateOutputType = {
    id: number
    contenu: number
    date: number
    etudiantId: number
    _all: number
  }


  export type MessageAvgAggregateInputType = {
    id?: true
    etudiantId?: true
  }

  export type MessageSumAggregateInputType = {
    id?: true
    etudiantId?: true
  }

  export type MessageMinAggregateInputType = {
    id?: true
    contenu?: true
    date?: true
    etudiantId?: true
  }

  export type MessageMaxAggregateInputType = {
    id?: true
    contenu?: true
    date?: true
    etudiantId?: true
  }

  export type MessageCountAggregateInputType = {
    id?: true
    contenu?: true
    date?: true
    etudiantId?: true
    _all?: true
  }

  export type MessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Message to aggregate.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Messages
    **/
    _count?: true | MessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MessageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MessageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageMaxAggregateInputType
  }

  export type GetMessageAggregateType<T extends MessageAggregateArgs> = {
        [P in keyof T & keyof AggregateMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessage[P]>
      : GetScalarType<T[P], AggregateMessage[P]>
  }




  export type MessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithAggregationInput | MessageOrderByWithAggregationInput[]
    by: MessageScalarFieldEnum[] | MessageScalarFieldEnum
    having?: MessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageCountAggregateInputType | true
    _avg?: MessageAvgAggregateInputType
    _sum?: MessageSumAggregateInputType
    _min?: MessageMinAggregateInputType
    _max?: MessageMaxAggregateInputType
  }

  export type MessageGroupByOutputType = {
    id: number
    contenu: string | null
    date: Date
    etudiantId: number
    _count: MessageCountAggregateOutputType | null
    _avg: MessageAvgAggregateOutputType | null
    _sum: MessageSumAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  type GetMessageGroupByPayload<T extends MessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageGroupByOutputType[P]>
            : GetScalarType<T[P], MessageGroupByOutputType[P]>
        }
      >
    >


  export type MessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contenu?: boolean
    date?: boolean
    etudiantId?: boolean
    etudiant?: boolean | EtudiantDefaultArgs<ExtArgs>
    receveurs?: boolean | Message$receveursArgs<ExtArgs>
    _count?: boolean | MessageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contenu?: boolean
    date?: boolean
    etudiantId?: boolean
    etudiant?: boolean | EtudiantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contenu?: boolean
    date?: boolean
    etudiantId?: boolean
    etudiant?: boolean | EtudiantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectScalar = {
    id?: boolean
    contenu?: boolean
    date?: boolean
    etudiantId?: boolean
  }

  export type MessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "contenu" | "date" | "etudiantId", ExtArgs["result"]["message"]>
  export type MessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    etudiant?: boolean | EtudiantDefaultArgs<ExtArgs>
    receveurs?: boolean | Message$receveursArgs<ExtArgs>
    _count?: boolean | MessageCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    etudiant?: boolean | EtudiantDefaultArgs<ExtArgs>
  }
  export type MessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    etudiant?: boolean | EtudiantDefaultArgs<ExtArgs>
  }

  export type $MessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Message"
    objects: {
      etudiant: Prisma.$EtudiantPayload<ExtArgs>
      receveurs: Prisma.$RecevoirePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      contenu: string | null
      date: Date
      etudiantId: number
    }, ExtArgs["result"]["message"]>
    composites: {}
  }

  type MessageGetPayload<S extends boolean | null | undefined | MessageDefaultArgs> = $Result.GetResult<Prisma.$MessagePayload, S>

  type MessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessageCountAggregateInputType | true
    }

  export interface MessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Message'], meta: { name: 'Message' } }
    /**
     * Find zero or one Message that matches the filter.
     * @param {MessageFindUniqueArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MessageFindUniqueArgs>(args: SelectSubset<T, MessageFindUniqueArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Message that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MessageFindUniqueOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MessageFindUniqueOrThrowArgs>(args: SelectSubset<T, MessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MessageFindFirstArgs>(args?: SelectSubset<T, MessageFindFirstArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MessageFindFirstOrThrowArgs>(args?: SelectSubset<T, MessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.message.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.message.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messageWithIdOnly = await prisma.message.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MessageFindManyArgs>(args?: SelectSubset<T, MessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Message.
     * @param {MessageCreateArgs} args - Arguments to create a Message.
     * @example
     * // Create one Message
     * const Message = await prisma.message.create({
     *   data: {
     *     // ... data to create a Message
     *   }
     * })
     * 
     */
    create<T extends MessageCreateArgs>(args: SelectSubset<T, MessageCreateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Messages.
     * @param {MessageCreateManyArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MessageCreateManyArgs>(args?: SelectSubset<T, MessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Messages and returns the data saved in the database.
     * @param {MessageCreateManyAndReturnArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MessageCreateManyAndReturnArgs>(args?: SelectSubset<T, MessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Message.
     * @param {MessageDeleteArgs} args - Arguments to delete one Message.
     * @example
     * // Delete one Message
     * const Message = await prisma.message.delete({
     *   where: {
     *     // ... filter to delete one Message
     *   }
     * })
     * 
     */
    delete<T extends MessageDeleteArgs>(args: SelectSubset<T, MessageDeleteArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Message.
     * @param {MessageUpdateArgs} args - Arguments to update one Message.
     * @example
     * // Update one Message
     * const message = await prisma.message.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MessageUpdateArgs>(args: SelectSubset<T, MessageUpdateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Messages.
     * @param {MessageDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.message.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MessageDeleteManyArgs>(args?: SelectSubset<T, MessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MessageUpdateManyArgs>(args: SelectSubset<T, MessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages and returns the data updated in the database.
     * @param {MessageUpdateManyAndReturnArgs} args - Arguments to update many Messages.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.updateManyAndReturn({
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
    updateManyAndReturn<T extends MessageUpdateManyAndReturnArgs>(args: SelectSubset<T, MessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Message.
     * @param {MessageUpsertArgs} args - Arguments to update or create a Message.
     * @example
     * // Update or create a Message
     * const message = await prisma.message.upsert({
     *   create: {
     *     // ... data to create a Message
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Message we want to update
     *   }
     * })
     */
    upsert<T extends MessageUpsertArgs>(args: SelectSubset<T, MessageUpsertArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.message.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends MessageCountArgs>(
      args?: Subset<T, MessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MessageAggregateArgs>(args: Subset<T, MessageAggregateArgs>): Prisma.PrismaPromise<GetMessageAggregateType<T>>

    /**
     * Group by Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageGroupByArgs} args - Group by arguments.
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
      T extends MessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageGroupByArgs['orderBy'] }
        : { orderBy?: MessageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Message model
   */
  readonly fields: MessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Message.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    etudiant<T extends EtudiantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EtudiantDefaultArgs<ExtArgs>>): Prisma__EtudiantClient<$Result.GetResult<Prisma.$EtudiantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    receveurs<T extends Message$receveursArgs<ExtArgs> = {}>(args?: Subset<T, Message$receveursArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecevoirePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Message model
   */
  interface MessageFieldRefs {
    readonly id: FieldRef<"Message", 'Int'>
    readonly contenu: FieldRef<"Message", 'String'>
    readonly date: FieldRef<"Message", 'DateTime'>
    readonly etudiantId: FieldRef<"Message", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Message findUnique
   */
  export type MessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findUniqueOrThrow
   */
  export type MessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findFirst
   */
  export type MessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findFirstOrThrow
   */
  export type MessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findMany
   */
  export type MessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message create
   */
  export type MessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to create a Message.
     */
    data: XOR<MessageCreateInput, MessageUncheckedCreateInput>
  }

  /**
   * Message createMany
   */
  export type MessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Message createManyAndReturn
   */
  export type MessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Message update
   */
  export type MessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to update a Message.
     */
    data: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
    /**
     * Choose, which Message to update.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message updateMany
   */
  export type MessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
  }

  /**
   * Message updateManyAndReturn
   */
  export type MessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Message upsert
   */
  export type MessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The filter to search for the Message to update in case it exists.
     */
    where: MessageWhereUniqueInput
    /**
     * In case the Message found by the `where` argument doesn't exist, create a new Message with this data.
     */
    create: XOR<MessageCreateInput, MessageUncheckedCreateInput>
    /**
     * In case the Message was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
  }

  /**
   * Message delete
   */
  export type MessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter which Message to delete.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message deleteMany
   */
  export type MessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Messages to delete
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to delete.
     */
    limit?: number
  }

  /**
   * Message.receveurs
   */
  export type Message$receveursArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recevoire
     */
    select?: RecevoireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recevoire
     */
    omit?: RecevoireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecevoireInclude<ExtArgs> | null
    where?: RecevoireWhereInput
    orderBy?: RecevoireOrderByWithRelationInput | RecevoireOrderByWithRelationInput[]
    cursor?: RecevoireWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecevoireScalarFieldEnum | RecevoireScalarFieldEnum[]
  }

  /**
   * Message without action
   */
  export type MessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
  }


  /**
   * Model Recevoire
   */

  export type AggregateRecevoire = {
    _count: RecevoireCountAggregateOutputType | null
    _avg: RecevoireAvgAggregateOutputType | null
    _sum: RecevoireSumAggregateOutputType | null
    _min: RecevoireMinAggregateOutputType | null
    _max: RecevoireMaxAggregateOutputType | null
  }

  export type RecevoireAvgAggregateOutputType = {
    etudiantId: number | null
    messageId: number | null
  }

  export type RecevoireSumAggregateOutputType = {
    etudiantId: number | null
    messageId: number | null
  }

  export type RecevoireMinAggregateOutputType = {
    etudiantId: number | null
    messageId: number | null
  }

  export type RecevoireMaxAggregateOutputType = {
    etudiantId: number | null
    messageId: number | null
  }

  export type RecevoireCountAggregateOutputType = {
    etudiantId: number
    messageId: number
    _all: number
  }


  export type RecevoireAvgAggregateInputType = {
    etudiantId?: true
    messageId?: true
  }

  export type RecevoireSumAggregateInputType = {
    etudiantId?: true
    messageId?: true
  }

  export type RecevoireMinAggregateInputType = {
    etudiantId?: true
    messageId?: true
  }

  export type RecevoireMaxAggregateInputType = {
    etudiantId?: true
    messageId?: true
  }

  export type RecevoireCountAggregateInputType = {
    etudiantId?: true
    messageId?: true
    _all?: true
  }

  export type RecevoireAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Recevoire to aggregate.
     */
    where?: RecevoireWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recevoires to fetch.
     */
    orderBy?: RecevoireOrderByWithRelationInput | RecevoireOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RecevoireWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recevoires from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recevoires.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Recevoires
    **/
    _count?: true | RecevoireCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RecevoireAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RecevoireSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecevoireMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecevoireMaxAggregateInputType
  }

  export type GetRecevoireAggregateType<T extends RecevoireAggregateArgs> = {
        [P in keyof T & keyof AggregateRecevoire]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecevoire[P]>
      : GetScalarType<T[P], AggregateRecevoire[P]>
  }




  export type RecevoireGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecevoireWhereInput
    orderBy?: RecevoireOrderByWithAggregationInput | RecevoireOrderByWithAggregationInput[]
    by: RecevoireScalarFieldEnum[] | RecevoireScalarFieldEnum
    having?: RecevoireScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecevoireCountAggregateInputType | true
    _avg?: RecevoireAvgAggregateInputType
    _sum?: RecevoireSumAggregateInputType
    _min?: RecevoireMinAggregateInputType
    _max?: RecevoireMaxAggregateInputType
  }

  export type RecevoireGroupByOutputType = {
    etudiantId: number
    messageId: number
    _count: RecevoireCountAggregateOutputType | null
    _avg: RecevoireAvgAggregateOutputType | null
    _sum: RecevoireSumAggregateOutputType | null
    _min: RecevoireMinAggregateOutputType | null
    _max: RecevoireMaxAggregateOutputType | null
  }

  type GetRecevoireGroupByPayload<T extends RecevoireGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RecevoireGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecevoireGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecevoireGroupByOutputType[P]>
            : GetScalarType<T[P], RecevoireGroupByOutputType[P]>
        }
      >
    >


  export type RecevoireSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    etudiantId?: boolean
    messageId?: boolean
    etudiant?: boolean | EtudiantDefaultArgs<ExtArgs>
    message?: boolean | MessageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recevoire"]>

  export type RecevoireSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    etudiantId?: boolean
    messageId?: boolean
    etudiant?: boolean | EtudiantDefaultArgs<ExtArgs>
    message?: boolean | MessageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recevoire"]>

  export type RecevoireSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    etudiantId?: boolean
    messageId?: boolean
    etudiant?: boolean | EtudiantDefaultArgs<ExtArgs>
    message?: boolean | MessageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recevoire"]>

  export type RecevoireSelectScalar = {
    etudiantId?: boolean
    messageId?: boolean
  }

  export type RecevoireOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"etudiantId" | "messageId", ExtArgs["result"]["recevoire"]>
  export type RecevoireInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    etudiant?: boolean | EtudiantDefaultArgs<ExtArgs>
    message?: boolean | MessageDefaultArgs<ExtArgs>
  }
  export type RecevoireIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    etudiant?: boolean | EtudiantDefaultArgs<ExtArgs>
    message?: boolean | MessageDefaultArgs<ExtArgs>
  }
  export type RecevoireIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    etudiant?: boolean | EtudiantDefaultArgs<ExtArgs>
    message?: boolean | MessageDefaultArgs<ExtArgs>
  }

  export type $RecevoirePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Recevoire"
    objects: {
      etudiant: Prisma.$EtudiantPayload<ExtArgs>
      message: Prisma.$MessagePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      etudiantId: number
      messageId: number
    }, ExtArgs["result"]["recevoire"]>
    composites: {}
  }

  type RecevoireGetPayload<S extends boolean | null | undefined | RecevoireDefaultArgs> = $Result.GetResult<Prisma.$RecevoirePayload, S>

  type RecevoireCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RecevoireFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RecevoireCountAggregateInputType | true
    }

  export interface RecevoireDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Recevoire'], meta: { name: 'Recevoire' } }
    /**
     * Find zero or one Recevoire that matches the filter.
     * @param {RecevoireFindUniqueArgs} args - Arguments to find a Recevoire
     * @example
     * // Get one Recevoire
     * const recevoire = await prisma.recevoire.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RecevoireFindUniqueArgs>(args: SelectSubset<T, RecevoireFindUniqueArgs<ExtArgs>>): Prisma__RecevoireClient<$Result.GetResult<Prisma.$RecevoirePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Recevoire that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RecevoireFindUniqueOrThrowArgs} args - Arguments to find a Recevoire
     * @example
     * // Get one Recevoire
     * const recevoire = await prisma.recevoire.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RecevoireFindUniqueOrThrowArgs>(args: SelectSubset<T, RecevoireFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RecevoireClient<$Result.GetResult<Prisma.$RecevoirePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Recevoire that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecevoireFindFirstArgs} args - Arguments to find a Recevoire
     * @example
     * // Get one Recevoire
     * const recevoire = await prisma.recevoire.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RecevoireFindFirstArgs>(args?: SelectSubset<T, RecevoireFindFirstArgs<ExtArgs>>): Prisma__RecevoireClient<$Result.GetResult<Prisma.$RecevoirePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Recevoire that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecevoireFindFirstOrThrowArgs} args - Arguments to find a Recevoire
     * @example
     * // Get one Recevoire
     * const recevoire = await prisma.recevoire.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RecevoireFindFirstOrThrowArgs>(args?: SelectSubset<T, RecevoireFindFirstOrThrowArgs<ExtArgs>>): Prisma__RecevoireClient<$Result.GetResult<Prisma.$RecevoirePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Recevoires that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecevoireFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Recevoires
     * const recevoires = await prisma.recevoire.findMany()
     * 
     * // Get first 10 Recevoires
     * const recevoires = await prisma.recevoire.findMany({ take: 10 })
     * 
     * // Only select the `etudiantId`
     * const recevoireWithEtudiantIdOnly = await prisma.recevoire.findMany({ select: { etudiantId: true } })
     * 
     */
    findMany<T extends RecevoireFindManyArgs>(args?: SelectSubset<T, RecevoireFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecevoirePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Recevoire.
     * @param {RecevoireCreateArgs} args - Arguments to create a Recevoire.
     * @example
     * // Create one Recevoire
     * const Recevoire = await prisma.recevoire.create({
     *   data: {
     *     // ... data to create a Recevoire
     *   }
     * })
     * 
     */
    create<T extends RecevoireCreateArgs>(args: SelectSubset<T, RecevoireCreateArgs<ExtArgs>>): Prisma__RecevoireClient<$Result.GetResult<Prisma.$RecevoirePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Recevoires.
     * @param {RecevoireCreateManyArgs} args - Arguments to create many Recevoires.
     * @example
     * // Create many Recevoires
     * const recevoire = await prisma.recevoire.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RecevoireCreateManyArgs>(args?: SelectSubset<T, RecevoireCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Recevoires and returns the data saved in the database.
     * @param {RecevoireCreateManyAndReturnArgs} args - Arguments to create many Recevoires.
     * @example
     * // Create many Recevoires
     * const recevoire = await prisma.recevoire.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Recevoires and only return the `etudiantId`
     * const recevoireWithEtudiantIdOnly = await prisma.recevoire.createManyAndReturn({
     *   select: { etudiantId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RecevoireCreateManyAndReturnArgs>(args?: SelectSubset<T, RecevoireCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecevoirePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Recevoire.
     * @param {RecevoireDeleteArgs} args - Arguments to delete one Recevoire.
     * @example
     * // Delete one Recevoire
     * const Recevoire = await prisma.recevoire.delete({
     *   where: {
     *     // ... filter to delete one Recevoire
     *   }
     * })
     * 
     */
    delete<T extends RecevoireDeleteArgs>(args: SelectSubset<T, RecevoireDeleteArgs<ExtArgs>>): Prisma__RecevoireClient<$Result.GetResult<Prisma.$RecevoirePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Recevoire.
     * @param {RecevoireUpdateArgs} args - Arguments to update one Recevoire.
     * @example
     * // Update one Recevoire
     * const recevoire = await prisma.recevoire.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RecevoireUpdateArgs>(args: SelectSubset<T, RecevoireUpdateArgs<ExtArgs>>): Prisma__RecevoireClient<$Result.GetResult<Prisma.$RecevoirePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Recevoires.
     * @param {RecevoireDeleteManyArgs} args - Arguments to filter Recevoires to delete.
     * @example
     * // Delete a few Recevoires
     * const { count } = await prisma.recevoire.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RecevoireDeleteManyArgs>(args?: SelectSubset<T, RecevoireDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recevoires.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecevoireUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Recevoires
     * const recevoire = await prisma.recevoire.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RecevoireUpdateManyArgs>(args: SelectSubset<T, RecevoireUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recevoires and returns the data updated in the database.
     * @param {RecevoireUpdateManyAndReturnArgs} args - Arguments to update many Recevoires.
     * @example
     * // Update many Recevoires
     * const recevoire = await prisma.recevoire.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Recevoires and only return the `etudiantId`
     * const recevoireWithEtudiantIdOnly = await prisma.recevoire.updateManyAndReturn({
     *   select: { etudiantId: true },
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
    updateManyAndReturn<T extends RecevoireUpdateManyAndReturnArgs>(args: SelectSubset<T, RecevoireUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecevoirePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Recevoire.
     * @param {RecevoireUpsertArgs} args - Arguments to update or create a Recevoire.
     * @example
     * // Update or create a Recevoire
     * const recevoire = await prisma.recevoire.upsert({
     *   create: {
     *     // ... data to create a Recevoire
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Recevoire we want to update
     *   }
     * })
     */
    upsert<T extends RecevoireUpsertArgs>(args: SelectSubset<T, RecevoireUpsertArgs<ExtArgs>>): Prisma__RecevoireClient<$Result.GetResult<Prisma.$RecevoirePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Recevoires.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecevoireCountArgs} args - Arguments to filter Recevoires to count.
     * @example
     * // Count the number of Recevoires
     * const count = await prisma.recevoire.count({
     *   where: {
     *     // ... the filter for the Recevoires we want to count
     *   }
     * })
    **/
    count<T extends RecevoireCountArgs>(
      args?: Subset<T, RecevoireCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecevoireCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Recevoire.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecevoireAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RecevoireAggregateArgs>(args: Subset<T, RecevoireAggregateArgs>): Prisma.PrismaPromise<GetRecevoireAggregateType<T>>

    /**
     * Group by Recevoire.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecevoireGroupByArgs} args - Group by arguments.
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
      T extends RecevoireGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RecevoireGroupByArgs['orderBy'] }
        : { orderBy?: RecevoireGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RecevoireGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecevoireGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Recevoire model
   */
  readonly fields: RecevoireFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Recevoire.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RecevoireClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    etudiant<T extends EtudiantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EtudiantDefaultArgs<ExtArgs>>): Prisma__EtudiantClient<$Result.GetResult<Prisma.$EtudiantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    message<T extends MessageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MessageDefaultArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Recevoire model
   */
  interface RecevoireFieldRefs {
    readonly etudiantId: FieldRef<"Recevoire", 'Int'>
    readonly messageId: FieldRef<"Recevoire", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Recevoire findUnique
   */
  export type RecevoireFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recevoire
     */
    select?: RecevoireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recevoire
     */
    omit?: RecevoireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecevoireInclude<ExtArgs> | null
    /**
     * Filter, which Recevoire to fetch.
     */
    where: RecevoireWhereUniqueInput
  }

  /**
   * Recevoire findUniqueOrThrow
   */
  export type RecevoireFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recevoire
     */
    select?: RecevoireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recevoire
     */
    omit?: RecevoireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecevoireInclude<ExtArgs> | null
    /**
     * Filter, which Recevoire to fetch.
     */
    where: RecevoireWhereUniqueInput
  }

  /**
   * Recevoire findFirst
   */
  export type RecevoireFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recevoire
     */
    select?: RecevoireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recevoire
     */
    omit?: RecevoireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecevoireInclude<ExtArgs> | null
    /**
     * Filter, which Recevoire to fetch.
     */
    where?: RecevoireWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recevoires to fetch.
     */
    orderBy?: RecevoireOrderByWithRelationInput | RecevoireOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Recevoires.
     */
    cursor?: RecevoireWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recevoires from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recevoires.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Recevoires.
     */
    distinct?: RecevoireScalarFieldEnum | RecevoireScalarFieldEnum[]
  }

  /**
   * Recevoire findFirstOrThrow
   */
  export type RecevoireFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recevoire
     */
    select?: RecevoireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recevoire
     */
    omit?: RecevoireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecevoireInclude<ExtArgs> | null
    /**
     * Filter, which Recevoire to fetch.
     */
    where?: RecevoireWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recevoires to fetch.
     */
    orderBy?: RecevoireOrderByWithRelationInput | RecevoireOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Recevoires.
     */
    cursor?: RecevoireWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recevoires from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recevoires.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Recevoires.
     */
    distinct?: RecevoireScalarFieldEnum | RecevoireScalarFieldEnum[]
  }

  /**
   * Recevoire findMany
   */
  export type RecevoireFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recevoire
     */
    select?: RecevoireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recevoire
     */
    omit?: RecevoireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecevoireInclude<ExtArgs> | null
    /**
     * Filter, which Recevoires to fetch.
     */
    where?: RecevoireWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recevoires to fetch.
     */
    orderBy?: RecevoireOrderByWithRelationInput | RecevoireOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Recevoires.
     */
    cursor?: RecevoireWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recevoires from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recevoires.
     */
    skip?: number
    distinct?: RecevoireScalarFieldEnum | RecevoireScalarFieldEnum[]
  }

  /**
   * Recevoire create
   */
  export type RecevoireCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recevoire
     */
    select?: RecevoireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recevoire
     */
    omit?: RecevoireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecevoireInclude<ExtArgs> | null
    /**
     * The data needed to create a Recevoire.
     */
    data: XOR<RecevoireCreateInput, RecevoireUncheckedCreateInput>
  }

  /**
   * Recevoire createMany
   */
  export type RecevoireCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Recevoires.
     */
    data: RecevoireCreateManyInput | RecevoireCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Recevoire createManyAndReturn
   */
  export type RecevoireCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recevoire
     */
    select?: RecevoireSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Recevoire
     */
    omit?: RecevoireOmit<ExtArgs> | null
    /**
     * The data used to create many Recevoires.
     */
    data: RecevoireCreateManyInput | RecevoireCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecevoireIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Recevoire update
   */
  export type RecevoireUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recevoire
     */
    select?: RecevoireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recevoire
     */
    omit?: RecevoireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecevoireInclude<ExtArgs> | null
    /**
     * The data needed to update a Recevoire.
     */
    data: XOR<RecevoireUpdateInput, RecevoireUncheckedUpdateInput>
    /**
     * Choose, which Recevoire to update.
     */
    where: RecevoireWhereUniqueInput
  }

  /**
   * Recevoire updateMany
   */
  export type RecevoireUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Recevoires.
     */
    data: XOR<RecevoireUpdateManyMutationInput, RecevoireUncheckedUpdateManyInput>
    /**
     * Filter which Recevoires to update
     */
    where?: RecevoireWhereInput
    /**
     * Limit how many Recevoires to update.
     */
    limit?: number
  }

  /**
   * Recevoire updateManyAndReturn
   */
  export type RecevoireUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recevoire
     */
    select?: RecevoireSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Recevoire
     */
    omit?: RecevoireOmit<ExtArgs> | null
    /**
     * The data used to update Recevoires.
     */
    data: XOR<RecevoireUpdateManyMutationInput, RecevoireUncheckedUpdateManyInput>
    /**
     * Filter which Recevoires to update
     */
    where?: RecevoireWhereInput
    /**
     * Limit how many Recevoires to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecevoireIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Recevoire upsert
   */
  export type RecevoireUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recevoire
     */
    select?: RecevoireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recevoire
     */
    omit?: RecevoireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecevoireInclude<ExtArgs> | null
    /**
     * The filter to search for the Recevoire to update in case it exists.
     */
    where: RecevoireWhereUniqueInput
    /**
     * In case the Recevoire found by the `where` argument doesn't exist, create a new Recevoire with this data.
     */
    create: XOR<RecevoireCreateInput, RecevoireUncheckedCreateInput>
    /**
     * In case the Recevoire was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RecevoireUpdateInput, RecevoireUncheckedUpdateInput>
  }

  /**
   * Recevoire delete
   */
  export type RecevoireDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recevoire
     */
    select?: RecevoireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recevoire
     */
    omit?: RecevoireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecevoireInclude<ExtArgs> | null
    /**
     * Filter which Recevoire to delete.
     */
    where: RecevoireWhereUniqueInput
  }

  /**
   * Recevoire deleteMany
   */
  export type RecevoireDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Recevoires to delete
     */
    where?: RecevoireWhereInput
    /**
     * Limit how many Recevoires to delete.
     */
    limit?: number
  }

  /**
   * Recevoire without action
   */
  export type RecevoireDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recevoire
     */
    select?: RecevoireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recevoire
     */
    omit?: RecevoireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecevoireInclude<ExtArgs> | null
  }


  /**
   * Model Annonce
   */

  export type AggregateAnnonce = {
    _count: AnnonceCountAggregateOutputType | null
    _avg: AnnonceAvgAggregateOutputType | null
    _sum: AnnonceSumAggregateOutputType | null
    _min: AnnonceMinAggregateOutputType | null
    _max: AnnonceMaxAggregateOutputType | null
  }

  export type AnnonceAvgAggregateOutputType = {
    id: number | null
    etudiantId: number | null
  }

  export type AnnonceSumAggregateOutputType = {
    id: number | null
    etudiantId: number | null
  }

  export type AnnonceMinAggregateOutputType = {
    id: number | null
    titre: string | null
    contenu: string | null
    image: string | null
    dateDePublication: Date | null
    etudiantId: number | null
  }

  export type AnnonceMaxAggregateOutputType = {
    id: number | null
    titre: string | null
    contenu: string | null
    image: string | null
    dateDePublication: Date | null
    etudiantId: number | null
  }

  export type AnnonceCountAggregateOutputType = {
    id: number
    titre: number
    contenu: number
    image: number
    dateDePublication: number
    etudiantId: number
    _all: number
  }


  export type AnnonceAvgAggregateInputType = {
    id?: true
    etudiantId?: true
  }

  export type AnnonceSumAggregateInputType = {
    id?: true
    etudiantId?: true
  }

  export type AnnonceMinAggregateInputType = {
    id?: true
    titre?: true
    contenu?: true
    image?: true
    dateDePublication?: true
    etudiantId?: true
  }

  export type AnnonceMaxAggregateInputType = {
    id?: true
    titre?: true
    contenu?: true
    image?: true
    dateDePublication?: true
    etudiantId?: true
  }

  export type AnnonceCountAggregateInputType = {
    id?: true
    titre?: true
    contenu?: true
    image?: true
    dateDePublication?: true
    etudiantId?: true
    _all?: true
  }

  export type AnnonceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Annonce to aggregate.
     */
    where?: AnnonceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Annonces to fetch.
     */
    orderBy?: AnnonceOrderByWithRelationInput | AnnonceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnnonceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Annonces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Annonces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Annonces
    **/
    _count?: true | AnnonceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AnnonceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AnnonceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnnonceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnnonceMaxAggregateInputType
  }

  export type GetAnnonceAggregateType<T extends AnnonceAggregateArgs> = {
        [P in keyof T & keyof AggregateAnnonce]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnnonce[P]>
      : GetScalarType<T[P], AggregateAnnonce[P]>
  }




  export type AnnonceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnnonceWhereInput
    orderBy?: AnnonceOrderByWithAggregationInput | AnnonceOrderByWithAggregationInput[]
    by: AnnonceScalarFieldEnum[] | AnnonceScalarFieldEnum
    having?: AnnonceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnnonceCountAggregateInputType | true
    _avg?: AnnonceAvgAggregateInputType
    _sum?: AnnonceSumAggregateInputType
    _min?: AnnonceMinAggregateInputType
    _max?: AnnonceMaxAggregateInputType
  }

  export type AnnonceGroupByOutputType = {
    id: number
    titre: string
    contenu: string | null
    image: string | null
    dateDePublication: Date
    etudiantId: number | null
    _count: AnnonceCountAggregateOutputType | null
    _avg: AnnonceAvgAggregateOutputType | null
    _sum: AnnonceSumAggregateOutputType | null
    _min: AnnonceMinAggregateOutputType | null
    _max: AnnonceMaxAggregateOutputType | null
  }

  type GetAnnonceGroupByPayload<T extends AnnonceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnnonceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnnonceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnnonceGroupByOutputType[P]>
            : GetScalarType<T[P], AnnonceGroupByOutputType[P]>
        }
      >
    >


  export type AnnonceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titre?: boolean
    contenu?: boolean
    image?: boolean
    dateDePublication?: boolean
    etudiantId?: boolean
    auteur?: boolean | Annonce$auteurArgs<ExtArgs>
    commentaires?: boolean | Annonce$commentairesArgs<ExtArgs>
    signalements?: boolean | Annonce$signalementsArgs<ExtArgs>
    _count?: boolean | AnnonceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["annonce"]>

  export type AnnonceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titre?: boolean
    contenu?: boolean
    image?: boolean
    dateDePublication?: boolean
    etudiantId?: boolean
    auteur?: boolean | Annonce$auteurArgs<ExtArgs>
  }, ExtArgs["result"]["annonce"]>

  export type AnnonceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titre?: boolean
    contenu?: boolean
    image?: boolean
    dateDePublication?: boolean
    etudiantId?: boolean
    auteur?: boolean | Annonce$auteurArgs<ExtArgs>
  }, ExtArgs["result"]["annonce"]>

  export type AnnonceSelectScalar = {
    id?: boolean
    titre?: boolean
    contenu?: boolean
    image?: boolean
    dateDePublication?: boolean
    etudiantId?: boolean
  }

  export type AnnonceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "titre" | "contenu" | "image" | "dateDePublication" | "etudiantId", ExtArgs["result"]["annonce"]>
  export type AnnonceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auteur?: boolean | Annonce$auteurArgs<ExtArgs>
    commentaires?: boolean | Annonce$commentairesArgs<ExtArgs>
    signalements?: boolean | Annonce$signalementsArgs<ExtArgs>
    _count?: boolean | AnnonceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AnnonceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auteur?: boolean | Annonce$auteurArgs<ExtArgs>
  }
  export type AnnonceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auteur?: boolean | Annonce$auteurArgs<ExtArgs>
  }

  export type $AnnoncePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Annonce"
    objects: {
      auteur: Prisma.$EtudiantPayload<ExtArgs> | null
      commentaires: Prisma.$CommentairePayload<ExtArgs>[]
      signalements: Prisma.$SignalerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      titre: string
      contenu: string | null
      image: string | null
      dateDePublication: Date
      etudiantId: number | null
    }, ExtArgs["result"]["annonce"]>
    composites: {}
  }

  type AnnonceGetPayload<S extends boolean | null | undefined | AnnonceDefaultArgs> = $Result.GetResult<Prisma.$AnnoncePayload, S>

  type AnnonceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AnnonceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AnnonceCountAggregateInputType | true
    }

  export interface AnnonceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Annonce'], meta: { name: 'Annonce' } }
    /**
     * Find zero or one Annonce that matches the filter.
     * @param {AnnonceFindUniqueArgs} args - Arguments to find a Annonce
     * @example
     * // Get one Annonce
     * const annonce = await prisma.annonce.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnnonceFindUniqueArgs>(args: SelectSubset<T, AnnonceFindUniqueArgs<ExtArgs>>): Prisma__AnnonceClient<$Result.GetResult<Prisma.$AnnoncePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Annonce that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AnnonceFindUniqueOrThrowArgs} args - Arguments to find a Annonce
     * @example
     * // Get one Annonce
     * const annonce = await prisma.annonce.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnnonceFindUniqueOrThrowArgs>(args: SelectSubset<T, AnnonceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnnonceClient<$Result.GetResult<Prisma.$AnnoncePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Annonce that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnonceFindFirstArgs} args - Arguments to find a Annonce
     * @example
     * // Get one Annonce
     * const annonce = await prisma.annonce.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnnonceFindFirstArgs>(args?: SelectSubset<T, AnnonceFindFirstArgs<ExtArgs>>): Prisma__AnnonceClient<$Result.GetResult<Prisma.$AnnoncePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Annonce that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnonceFindFirstOrThrowArgs} args - Arguments to find a Annonce
     * @example
     * // Get one Annonce
     * const annonce = await prisma.annonce.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnnonceFindFirstOrThrowArgs>(args?: SelectSubset<T, AnnonceFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnnonceClient<$Result.GetResult<Prisma.$AnnoncePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Annonces that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnonceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Annonces
     * const annonces = await prisma.annonce.findMany()
     * 
     * // Get first 10 Annonces
     * const annonces = await prisma.annonce.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const annonceWithIdOnly = await prisma.annonce.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AnnonceFindManyArgs>(args?: SelectSubset<T, AnnonceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnoncePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Annonce.
     * @param {AnnonceCreateArgs} args - Arguments to create a Annonce.
     * @example
     * // Create one Annonce
     * const Annonce = await prisma.annonce.create({
     *   data: {
     *     // ... data to create a Annonce
     *   }
     * })
     * 
     */
    create<T extends AnnonceCreateArgs>(args: SelectSubset<T, AnnonceCreateArgs<ExtArgs>>): Prisma__AnnonceClient<$Result.GetResult<Prisma.$AnnoncePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Annonces.
     * @param {AnnonceCreateManyArgs} args - Arguments to create many Annonces.
     * @example
     * // Create many Annonces
     * const annonce = await prisma.annonce.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnnonceCreateManyArgs>(args?: SelectSubset<T, AnnonceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Annonces and returns the data saved in the database.
     * @param {AnnonceCreateManyAndReturnArgs} args - Arguments to create many Annonces.
     * @example
     * // Create many Annonces
     * const annonce = await prisma.annonce.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Annonces and only return the `id`
     * const annonceWithIdOnly = await prisma.annonce.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AnnonceCreateManyAndReturnArgs>(args?: SelectSubset<T, AnnonceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnoncePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Annonce.
     * @param {AnnonceDeleteArgs} args - Arguments to delete one Annonce.
     * @example
     * // Delete one Annonce
     * const Annonce = await prisma.annonce.delete({
     *   where: {
     *     // ... filter to delete one Annonce
     *   }
     * })
     * 
     */
    delete<T extends AnnonceDeleteArgs>(args: SelectSubset<T, AnnonceDeleteArgs<ExtArgs>>): Prisma__AnnonceClient<$Result.GetResult<Prisma.$AnnoncePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Annonce.
     * @param {AnnonceUpdateArgs} args - Arguments to update one Annonce.
     * @example
     * // Update one Annonce
     * const annonce = await prisma.annonce.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnnonceUpdateArgs>(args: SelectSubset<T, AnnonceUpdateArgs<ExtArgs>>): Prisma__AnnonceClient<$Result.GetResult<Prisma.$AnnoncePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Annonces.
     * @param {AnnonceDeleteManyArgs} args - Arguments to filter Annonces to delete.
     * @example
     * // Delete a few Annonces
     * const { count } = await prisma.annonce.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnnonceDeleteManyArgs>(args?: SelectSubset<T, AnnonceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Annonces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnonceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Annonces
     * const annonce = await prisma.annonce.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnnonceUpdateManyArgs>(args: SelectSubset<T, AnnonceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Annonces and returns the data updated in the database.
     * @param {AnnonceUpdateManyAndReturnArgs} args - Arguments to update many Annonces.
     * @example
     * // Update many Annonces
     * const annonce = await prisma.annonce.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Annonces and only return the `id`
     * const annonceWithIdOnly = await prisma.annonce.updateManyAndReturn({
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
    updateManyAndReturn<T extends AnnonceUpdateManyAndReturnArgs>(args: SelectSubset<T, AnnonceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnoncePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Annonce.
     * @param {AnnonceUpsertArgs} args - Arguments to update or create a Annonce.
     * @example
     * // Update or create a Annonce
     * const annonce = await prisma.annonce.upsert({
     *   create: {
     *     // ... data to create a Annonce
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Annonce we want to update
     *   }
     * })
     */
    upsert<T extends AnnonceUpsertArgs>(args: SelectSubset<T, AnnonceUpsertArgs<ExtArgs>>): Prisma__AnnonceClient<$Result.GetResult<Prisma.$AnnoncePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Annonces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnonceCountArgs} args - Arguments to filter Annonces to count.
     * @example
     * // Count the number of Annonces
     * const count = await prisma.annonce.count({
     *   where: {
     *     // ... the filter for the Annonces we want to count
     *   }
     * })
    **/
    count<T extends AnnonceCountArgs>(
      args?: Subset<T, AnnonceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnnonceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Annonce.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnonceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AnnonceAggregateArgs>(args: Subset<T, AnnonceAggregateArgs>): Prisma.PrismaPromise<GetAnnonceAggregateType<T>>

    /**
     * Group by Annonce.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnonceGroupByArgs} args - Group by arguments.
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
      T extends AnnonceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnnonceGroupByArgs['orderBy'] }
        : { orderBy?: AnnonceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AnnonceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnnonceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Annonce model
   */
  readonly fields: AnnonceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Annonce.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnnonceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    auteur<T extends Annonce$auteurArgs<ExtArgs> = {}>(args?: Subset<T, Annonce$auteurArgs<ExtArgs>>): Prisma__EtudiantClient<$Result.GetResult<Prisma.$EtudiantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    commentaires<T extends Annonce$commentairesArgs<ExtArgs> = {}>(args?: Subset<T, Annonce$commentairesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentairePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    signalements<T extends Annonce$signalementsArgs<ExtArgs> = {}>(args?: Subset<T, Annonce$signalementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SignalerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Annonce model
   */
  interface AnnonceFieldRefs {
    readonly id: FieldRef<"Annonce", 'Int'>
    readonly titre: FieldRef<"Annonce", 'String'>
    readonly contenu: FieldRef<"Annonce", 'String'>
    readonly image: FieldRef<"Annonce", 'String'>
    readonly dateDePublication: FieldRef<"Annonce", 'DateTime'>
    readonly etudiantId: FieldRef<"Annonce", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Annonce findUnique
   */
  export type AnnonceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Annonce
     */
    select?: AnnonceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Annonce
     */
    omit?: AnnonceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnonceInclude<ExtArgs> | null
    /**
     * Filter, which Annonce to fetch.
     */
    where: AnnonceWhereUniqueInput
  }

  /**
   * Annonce findUniqueOrThrow
   */
  export type AnnonceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Annonce
     */
    select?: AnnonceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Annonce
     */
    omit?: AnnonceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnonceInclude<ExtArgs> | null
    /**
     * Filter, which Annonce to fetch.
     */
    where: AnnonceWhereUniqueInput
  }

  /**
   * Annonce findFirst
   */
  export type AnnonceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Annonce
     */
    select?: AnnonceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Annonce
     */
    omit?: AnnonceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnonceInclude<ExtArgs> | null
    /**
     * Filter, which Annonce to fetch.
     */
    where?: AnnonceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Annonces to fetch.
     */
    orderBy?: AnnonceOrderByWithRelationInput | AnnonceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Annonces.
     */
    cursor?: AnnonceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Annonces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Annonces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Annonces.
     */
    distinct?: AnnonceScalarFieldEnum | AnnonceScalarFieldEnum[]
  }

  /**
   * Annonce findFirstOrThrow
   */
  export type AnnonceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Annonce
     */
    select?: AnnonceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Annonce
     */
    omit?: AnnonceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnonceInclude<ExtArgs> | null
    /**
     * Filter, which Annonce to fetch.
     */
    where?: AnnonceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Annonces to fetch.
     */
    orderBy?: AnnonceOrderByWithRelationInput | AnnonceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Annonces.
     */
    cursor?: AnnonceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Annonces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Annonces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Annonces.
     */
    distinct?: AnnonceScalarFieldEnum | AnnonceScalarFieldEnum[]
  }

  /**
   * Annonce findMany
   */
  export type AnnonceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Annonce
     */
    select?: AnnonceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Annonce
     */
    omit?: AnnonceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnonceInclude<ExtArgs> | null
    /**
     * Filter, which Annonces to fetch.
     */
    where?: AnnonceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Annonces to fetch.
     */
    orderBy?: AnnonceOrderByWithRelationInput | AnnonceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Annonces.
     */
    cursor?: AnnonceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Annonces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Annonces.
     */
    skip?: number
    distinct?: AnnonceScalarFieldEnum | AnnonceScalarFieldEnum[]
  }

  /**
   * Annonce create
   */
  export type AnnonceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Annonce
     */
    select?: AnnonceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Annonce
     */
    omit?: AnnonceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnonceInclude<ExtArgs> | null
    /**
     * The data needed to create a Annonce.
     */
    data: XOR<AnnonceCreateInput, AnnonceUncheckedCreateInput>
  }

  /**
   * Annonce createMany
   */
  export type AnnonceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Annonces.
     */
    data: AnnonceCreateManyInput | AnnonceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Annonce createManyAndReturn
   */
  export type AnnonceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Annonce
     */
    select?: AnnonceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Annonce
     */
    omit?: AnnonceOmit<ExtArgs> | null
    /**
     * The data used to create many Annonces.
     */
    data: AnnonceCreateManyInput | AnnonceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnonceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Annonce update
   */
  export type AnnonceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Annonce
     */
    select?: AnnonceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Annonce
     */
    omit?: AnnonceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnonceInclude<ExtArgs> | null
    /**
     * The data needed to update a Annonce.
     */
    data: XOR<AnnonceUpdateInput, AnnonceUncheckedUpdateInput>
    /**
     * Choose, which Annonce to update.
     */
    where: AnnonceWhereUniqueInput
  }

  /**
   * Annonce updateMany
   */
  export type AnnonceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Annonces.
     */
    data: XOR<AnnonceUpdateManyMutationInput, AnnonceUncheckedUpdateManyInput>
    /**
     * Filter which Annonces to update
     */
    where?: AnnonceWhereInput
    /**
     * Limit how many Annonces to update.
     */
    limit?: number
  }

  /**
   * Annonce updateManyAndReturn
   */
  export type AnnonceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Annonce
     */
    select?: AnnonceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Annonce
     */
    omit?: AnnonceOmit<ExtArgs> | null
    /**
     * The data used to update Annonces.
     */
    data: XOR<AnnonceUpdateManyMutationInput, AnnonceUncheckedUpdateManyInput>
    /**
     * Filter which Annonces to update
     */
    where?: AnnonceWhereInput
    /**
     * Limit how many Annonces to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnonceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Annonce upsert
   */
  export type AnnonceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Annonce
     */
    select?: AnnonceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Annonce
     */
    omit?: AnnonceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnonceInclude<ExtArgs> | null
    /**
     * The filter to search for the Annonce to update in case it exists.
     */
    where: AnnonceWhereUniqueInput
    /**
     * In case the Annonce found by the `where` argument doesn't exist, create a new Annonce with this data.
     */
    create: XOR<AnnonceCreateInput, AnnonceUncheckedCreateInput>
    /**
     * In case the Annonce was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnnonceUpdateInput, AnnonceUncheckedUpdateInput>
  }

  /**
   * Annonce delete
   */
  export type AnnonceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Annonce
     */
    select?: AnnonceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Annonce
     */
    omit?: AnnonceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnonceInclude<ExtArgs> | null
    /**
     * Filter which Annonce to delete.
     */
    where: AnnonceWhereUniqueInput
  }

  /**
   * Annonce deleteMany
   */
  export type AnnonceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Annonces to delete
     */
    where?: AnnonceWhereInput
    /**
     * Limit how many Annonces to delete.
     */
    limit?: number
  }

  /**
   * Annonce.auteur
   */
  export type Annonce$auteurArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etudiant
     */
    select?: EtudiantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Etudiant
     */
    omit?: EtudiantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtudiantInclude<ExtArgs> | null
    where?: EtudiantWhereInput
  }

  /**
   * Annonce.commentaires
   */
  export type Annonce$commentairesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commentaire
     */
    select?: CommentaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commentaire
     */
    omit?: CommentaireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentaireInclude<ExtArgs> | null
    where?: CommentaireWhereInput
    orderBy?: CommentaireOrderByWithRelationInput | CommentaireOrderByWithRelationInput[]
    cursor?: CommentaireWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentaireScalarFieldEnum | CommentaireScalarFieldEnum[]
  }

  /**
   * Annonce.signalements
   */
  export type Annonce$signalementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Signaler
     */
    select?: SignalerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Signaler
     */
    omit?: SignalerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignalerInclude<ExtArgs> | null
    where?: SignalerWhereInput
    orderBy?: SignalerOrderByWithRelationInput | SignalerOrderByWithRelationInput[]
    cursor?: SignalerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SignalerScalarFieldEnum | SignalerScalarFieldEnum[]
  }

  /**
   * Annonce without action
   */
  export type AnnonceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Annonce
     */
    select?: AnnonceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Annonce
     */
    omit?: AnnonceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnonceInclude<ExtArgs> | null
  }


  /**
   * Model Commentaire
   */

  export type AggregateCommentaire = {
    _count: CommentaireCountAggregateOutputType | null
    _avg: CommentaireAvgAggregateOutputType | null
    _sum: CommentaireSumAggregateOutputType | null
    _min: CommentaireMinAggregateOutputType | null
    _max: CommentaireMaxAggregateOutputType | null
  }

  export type CommentaireAvgAggregateOutputType = {
    id: number | null
    etudiantId: number | null
    annonceId: number | null
  }

  export type CommentaireSumAggregateOutputType = {
    id: number | null
    etudiantId: number | null
    annonceId: number | null
  }

  export type CommentaireMinAggregateOutputType = {
    id: number | null
    date: Date | null
    etudiantId: number | null
    annonceId: number | null
    contenu: string | null
  }

  export type CommentaireMaxAggregateOutputType = {
    id: number | null
    date: Date | null
    etudiantId: number | null
    annonceId: number | null
    contenu: string | null
  }

  export type CommentaireCountAggregateOutputType = {
    id: number
    date: number
    etudiantId: number
    annonceId: number
    contenu: number
    _all: number
  }


  export type CommentaireAvgAggregateInputType = {
    id?: true
    etudiantId?: true
    annonceId?: true
  }

  export type CommentaireSumAggregateInputType = {
    id?: true
    etudiantId?: true
    annonceId?: true
  }

  export type CommentaireMinAggregateInputType = {
    id?: true
    date?: true
    etudiantId?: true
    annonceId?: true
    contenu?: true
  }

  export type CommentaireMaxAggregateInputType = {
    id?: true
    date?: true
    etudiantId?: true
    annonceId?: true
    contenu?: true
  }

  export type CommentaireCountAggregateInputType = {
    id?: true
    date?: true
    etudiantId?: true
    annonceId?: true
    contenu?: true
    _all?: true
  }

  export type CommentaireAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Commentaire to aggregate.
     */
    where?: CommentaireWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Commentaires to fetch.
     */
    orderBy?: CommentaireOrderByWithRelationInput | CommentaireOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommentaireWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Commentaires from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Commentaires.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Commentaires
    **/
    _count?: true | CommentaireCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommentaireAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommentaireSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentaireMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentaireMaxAggregateInputType
  }

  export type GetCommentaireAggregateType<T extends CommentaireAggregateArgs> = {
        [P in keyof T & keyof AggregateCommentaire]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCommentaire[P]>
      : GetScalarType<T[P], AggregateCommentaire[P]>
  }




  export type CommentaireGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentaireWhereInput
    orderBy?: CommentaireOrderByWithAggregationInput | CommentaireOrderByWithAggregationInput[]
    by: CommentaireScalarFieldEnum[] | CommentaireScalarFieldEnum
    having?: CommentaireScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentaireCountAggregateInputType | true
    _avg?: CommentaireAvgAggregateInputType
    _sum?: CommentaireSumAggregateInputType
    _min?: CommentaireMinAggregateInputType
    _max?: CommentaireMaxAggregateInputType
  }

  export type CommentaireGroupByOutputType = {
    id: number
    date: Date
    etudiantId: number | null
    annonceId: number | null
    contenu: string | null
    _count: CommentaireCountAggregateOutputType | null
    _avg: CommentaireAvgAggregateOutputType | null
    _sum: CommentaireSumAggregateOutputType | null
    _min: CommentaireMinAggregateOutputType | null
    _max: CommentaireMaxAggregateOutputType | null
  }

  type GetCommentaireGroupByPayload<T extends CommentaireGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentaireGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentaireGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentaireGroupByOutputType[P]>
            : GetScalarType<T[P], CommentaireGroupByOutputType[P]>
        }
      >
    >


  export type CommentaireSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    etudiantId?: boolean
    annonceId?: boolean
    contenu?: boolean
    auteur?: boolean | Commentaire$auteurArgs<ExtArgs>
    annonce?: boolean | Commentaire$annonceArgs<ExtArgs>
  }, ExtArgs["result"]["commentaire"]>

  export type CommentaireSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    etudiantId?: boolean
    annonceId?: boolean
    contenu?: boolean
    auteur?: boolean | Commentaire$auteurArgs<ExtArgs>
    annonce?: boolean | Commentaire$annonceArgs<ExtArgs>
  }, ExtArgs["result"]["commentaire"]>

  export type CommentaireSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    etudiantId?: boolean
    annonceId?: boolean
    contenu?: boolean
    auteur?: boolean | Commentaire$auteurArgs<ExtArgs>
    annonce?: boolean | Commentaire$annonceArgs<ExtArgs>
  }, ExtArgs["result"]["commentaire"]>

  export type CommentaireSelectScalar = {
    id?: boolean
    date?: boolean
    etudiantId?: boolean
    annonceId?: boolean
    contenu?: boolean
  }

  export type CommentaireOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "date" | "etudiantId" | "annonceId" | "contenu", ExtArgs["result"]["commentaire"]>
  export type CommentaireInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auteur?: boolean | Commentaire$auteurArgs<ExtArgs>
    annonce?: boolean | Commentaire$annonceArgs<ExtArgs>
  }
  export type CommentaireIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auteur?: boolean | Commentaire$auteurArgs<ExtArgs>
    annonce?: boolean | Commentaire$annonceArgs<ExtArgs>
  }
  export type CommentaireIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auteur?: boolean | Commentaire$auteurArgs<ExtArgs>
    annonce?: boolean | Commentaire$annonceArgs<ExtArgs>
  }

  export type $CommentairePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Commentaire"
    objects: {
      auteur: Prisma.$EtudiantPayload<ExtArgs> | null
      annonce: Prisma.$AnnoncePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      date: Date
      etudiantId: number | null
      annonceId: number | null
      contenu: string | null
    }, ExtArgs["result"]["commentaire"]>
    composites: {}
  }

  type CommentaireGetPayload<S extends boolean | null | undefined | CommentaireDefaultArgs> = $Result.GetResult<Prisma.$CommentairePayload, S>

  type CommentaireCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommentaireFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommentaireCountAggregateInputType | true
    }

  export interface CommentaireDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Commentaire'], meta: { name: 'Commentaire' } }
    /**
     * Find zero or one Commentaire that matches the filter.
     * @param {CommentaireFindUniqueArgs} args - Arguments to find a Commentaire
     * @example
     * // Get one Commentaire
     * const commentaire = await prisma.commentaire.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommentaireFindUniqueArgs>(args: SelectSubset<T, CommentaireFindUniqueArgs<ExtArgs>>): Prisma__CommentaireClient<$Result.GetResult<Prisma.$CommentairePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Commentaire that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommentaireFindUniqueOrThrowArgs} args - Arguments to find a Commentaire
     * @example
     * // Get one Commentaire
     * const commentaire = await prisma.commentaire.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommentaireFindUniqueOrThrowArgs>(args: SelectSubset<T, CommentaireFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommentaireClient<$Result.GetResult<Prisma.$CommentairePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Commentaire that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentaireFindFirstArgs} args - Arguments to find a Commentaire
     * @example
     * // Get one Commentaire
     * const commentaire = await prisma.commentaire.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommentaireFindFirstArgs>(args?: SelectSubset<T, CommentaireFindFirstArgs<ExtArgs>>): Prisma__CommentaireClient<$Result.GetResult<Prisma.$CommentairePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Commentaire that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentaireFindFirstOrThrowArgs} args - Arguments to find a Commentaire
     * @example
     * // Get one Commentaire
     * const commentaire = await prisma.commentaire.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommentaireFindFirstOrThrowArgs>(args?: SelectSubset<T, CommentaireFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommentaireClient<$Result.GetResult<Prisma.$CommentairePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Commentaires that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentaireFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Commentaires
     * const commentaires = await prisma.commentaire.findMany()
     * 
     * // Get first 10 Commentaires
     * const commentaires = await prisma.commentaire.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentaireWithIdOnly = await prisma.commentaire.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommentaireFindManyArgs>(args?: SelectSubset<T, CommentaireFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentairePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Commentaire.
     * @param {CommentaireCreateArgs} args - Arguments to create a Commentaire.
     * @example
     * // Create one Commentaire
     * const Commentaire = await prisma.commentaire.create({
     *   data: {
     *     // ... data to create a Commentaire
     *   }
     * })
     * 
     */
    create<T extends CommentaireCreateArgs>(args: SelectSubset<T, CommentaireCreateArgs<ExtArgs>>): Prisma__CommentaireClient<$Result.GetResult<Prisma.$CommentairePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Commentaires.
     * @param {CommentaireCreateManyArgs} args - Arguments to create many Commentaires.
     * @example
     * // Create many Commentaires
     * const commentaire = await prisma.commentaire.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommentaireCreateManyArgs>(args?: SelectSubset<T, CommentaireCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Commentaires and returns the data saved in the database.
     * @param {CommentaireCreateManyAndReturnArgs} args - Arguments to create many Commentaires.
     * @example
     * // Create many Commentaires
     * const commentaire = await prisma.commentaire.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Commentaires and only return the `id`
     * const commentaireWithIdOnly = await prisma.commentaire.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommentaireCreateManyAndReturnArgs>(args?: SelectSubset<T, CommentaireCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentairePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Commentaire.
     * @param {CommentaireDeleteArgs} args - Arguments to delete one Commentaire.
     * @example
     * // Delete one Commentaire
     * const Commentaire = await prisma.commentaire.delete({
     *   where: {
     *     // ... filter to delete one Commentaire
     *   }
     * })
     * 
     */
    delete<T extends CommentaireDeleteArgs>(args: SelectSubset<T, CommentaireDeleteArgs<ExtArgs>>): Prisma__CommentaireClient<$Result.GetResult<Prisma.$CommentairePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Commentaire.
     * @param {CommentaireUpdateArgs} args - Arguments to update one Commentaire.
     * @example
     * // Update one Commentaire
     * const commentaire = await prisma.commentaire.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommentaireUpdateArgs>(args: SelectSubset<T, CommentaireUpdateArgs<ExtArgs>>): Prisma__CommentaireClient<$Result.GetResult<Prisma.$CommentairePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Commentaires.
     * @param {CommentaireDeleteManyArgs} args - Arguments to filter Commentaires to delete.
     * @example
     * // Delete a few Commentaires
     * const { count } = await prisma.commentaire.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommentaireDeleteManyArgs>(args?: SelectSubset<T, CommentaireDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Commentaires.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentaireUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Commentaires
     * const commentaire = await prisma.commentaire.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommentaireUpdateManyArgs>(args: SelectSubset<T, CommentaireUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Commentaires and returns the data updated in the database.
     * @param {CommentaireUpdateManyAndReturnArgs} args - Arguments to update many Commentaires.
     * @example
     * // Update many Commentaires
     * const commentaire = await prisma.commentaire.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Commentaires and only return the `id`
     * const commentaireWithIdOnly = await prisma.commentaire.updateManyAndReturn({
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
    updateManyAndReturn<T extends CommentaireUpdateManyAndReturnArgs>(args: SelectSubset<T, CommentaireUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentairePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Commentaire.
     * @param {CommentaireUpsertArgs} args - Arguments to update or create a Commentaire.
     * @example
     * // Update or create a Commentaire
     * const commentaire = await prisma.commentaire.upsert({
     *   create: {
     *     // ... data to create a Commentaire
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Commentaire we want to update
     *   }
     * })
     */
    upsert<T extends CommentaireUpsertArgs>(args: SelectSubset<T, CommentaireUpsertArgs<ExtArgs>>): Prisma__CommentaireClient<$Result.GetResult<Prisma.$CommentairePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Commentaires.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentaireCountArgs} args - Arguments to filter Commentaires to count.
     * @example
     * // Count the number of Commentaires
     * const count = await prisma.commentaire.count({
     *   where: {
     *     // ... the filter for the Commentaires we want to count
     *   }
     * })
    **/
    count<T extends CommentaireCountArgs>(
      args?: Subset<T, CommentaireCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentaireCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Commentaire.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentaireAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CommentaireAggregateArgs>(args: Subset<T, CommentaireAggregateArgs>): Prisma.PrismaPromise<GetCommentaireAggregateType<T>>

    /**
     * Group by Commentaire.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentaireGroupByArgs} args - Group by arguments.
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
      T extends CommentaireGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentaireGroupByArgs['orderBy'] }
        : { orderBy?: CommentaireGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CommentaireGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentaireGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Commentaire model
   */
  readonly fields: CommentaireFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Commentaire.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommentaireClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    auteur<T extends Commentaire$auteurArgs<ExtArgs> = {}>(args?: Subset<T, Commentaire$auteurArgs<ExtArgs>>): Prisma__EtudiantClient<$Result.GetResult<Prisma.$EtudiantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    annonce<T extends Commentaire$annonceArgs<ExtArgs> = {}>(args?: Subset<T, Commentaire$annonceArgs<ExtArgs>>): Prisma__AnnonceClient<$Result.GetResult<Prisma.$AnnoncePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Commentaire model
   */
  interface CommentaireFieldRefs {
    readonly id: FieldRef<"Commentaire", 'Int'>
    readonly date: FieldRef<"Commentaire", 'DateTime'>
    readonly etudiantId: FieldRef<"Commentaire", 'Int'>
    readonly annonceId: FieldRef<"Commentaire", 'Int'>
    readonly contenu: FieldRef<"Commentaire", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Commentaire findUnique
   */
  export type CommentaireFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commentaire
     */
    select?: CommentaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commentaire
     */
    omit?: CommentaireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentaireInclude<ExtArgs> | null
    /**
     * Filter, which Commentaire to fetch.
     */
    where: CommentaireWhereUniqueInput
  }

  /**
   * Commentaire findUniqueOrThrow
   */
  export type CommentaireFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commentaire
     */
    select?: CommentaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commentaire
     */
    omit?: CommentaireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentaireInclude<ExtArgs> | null
    /**
     * Filter, which Commentaire to fetch.
     */
    where: CommentaireWhereUniqueInput
  }

  /**
   * Commentaire findFirst
   */
  export type CommentaireFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commentaire
     */
    select?: CommentaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commentaire
     */
    omit?: CommentaireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentaireInclude<ExtArgs> | null
    /**
     * Filter, which Commentaire to fetch.
     */
    where?: CommentaireWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Commentaires to fetch.
     */
    orderBy?: CommentaireOrderByWithRelationInput | CommentaireOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Commentaires.
     */
    cursor?: CommentaireWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Commentaires from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Commentaires.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Commentaires.
     */
    distinct?: CommentaireScalarFieldEnum | CommentaireScalarFieldEnum[]
  }

  /**
   * Commentaire findFirstOrThrow
   */
  export type CommentaireFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commentaire
     */
    select?: CommentaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commentaire
     */
    omit?: CommentaireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentaireInclude<ExtArgs> | null
    /**
     * Filter, which Commentaire to fetch.
     */
    where?: CommentaireWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Commentaires to fetch.
     */
    orderBy?: CommentaireOrderByWithRelationInput | CommentaireOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Commentaires.
     */
    cursor?: CommentaireWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Commentaires from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Commentaires.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Commentaires.
     */
    distinct?: CommentaireScalarFieldEnum | CommentaireScalarFieldEnum[]
  }

  /**
   * Commentaire findMany
   */
  export type CommentaireFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commentaire
     */
    select?: CommentaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commentaire
     */
    omit?: CommentaireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentaireInclude<ExtArgs> | null
    /**
     * Filter, which Commentaires to fetch.
     */
    where?: CommentaireWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Commentaires to fetch.
     */
    orderBy?: CommentaireOrderByWithRelationInput | CommentaireOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Commentaires.
     */
    cursor?: CommentaireWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Commentaires from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Commentaires.
     */
    skip?: number
    distinct?: CommentaireScalarFieldEnum | CommentaireScalarFieldEnum[]
  }

  /**
   * Commentaire create
   */
  export type CommentaireCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commentaire
     */
    select?: CommentaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commentaire
     */
    omit?: CommentaireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentaireInclude<ExtArgs> | null
    /**
     * The data needed to create a Commentaire.
     */
    data?: XOR<CommentaireCreateInput, CommentaireUncheckedCreateInput>
  }

  /**
   * Commentaire createMany
   */
  export type CommentaireCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Commentaires.
     */
    data: CommentaireCreateManyInput | CommentaireCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Commentaire createManyAndReturn
   */
  export type CommentaireCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commentaire
     */
    select?: CommentaireSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Commentaire
     */
    omit?: CommentaireOmit<ExtArgs> | null
    /**
     * The data used to create many Commentaires.
     */
    data: CommentaireCreateManyInput | CommentaireCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentaireIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Commentaire update
   */
  export type CommentaireUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commentaire
     */
    select?: CommentaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commentaire
     */
    omit?: CommentaireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentaireInclude<ExtArgs> | null
    /**
     * The data needed to update a Commentaire.
     */
    data: XOR<CommentaireUpdateInput, CommentaireUncheckedUpdateInput>
    /**
     * Choose, which Commentaire to update.
     */
    where: CommentaireWhereUniqueInput
  }

  /**
   * Commentaire updateMany
   */
  export type CommentaireUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Commentaires.
     */
    data: XOR<CommentaireUpdateManyMutationInput, CommentaireUncheckedUpdateManyInput>
    /**
     * Filter which Commentaires to update
     */
    where?: CommentaireWhereInput
    /**
     * Limit how many Commentaires to update.
     */
    limit?: number
  }

  /**
   * Commentaire updateManyAndReturn
   */
  export type CommentaireUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commentaire
     */
    select?: CommentaireSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Commentaire
     */
    omit?: CommentaireOmit<ExtArgs> | null
    /**
     * The data used to update Commentaires.
     */
    data: XOR<CommentaireUpdateManyMutationInput, CommentaireUncheckedUpdateManyInput>
    /**
     * Filter which Commentaires to update
     */
    where?: CommentaireWhereInput
    /**
     * Limit how many Commentaires to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentaireIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Commentaire upsert
   */
  export type CommentaireUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commentaire
     */
    select?: CommentaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commentaire
     */
    omit?: CommentaireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentaireInclude<ExtArgs> | null
    /**
     * The filter to search for the Commentaire to update in case it exists.
     */
    where: CommentaireWhereUniqueInput
    /**
     * In case the Commentaire found by the `where` argument doesn't exist, create a new Commentaire with this data.
     */
    create: XOR<CommentaireCreateInput, CommentaireUncheckedCreateInput>
    /**
     * In case the Commentaire was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommentaireUpdateInput, CommentaireUncheckedUpdateInput>
  }

  /**
   * Commentaire delete
   */
  export type CommentaireDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commentaire
     */
    select?: CommentaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commentaire
     */
    omit?: CommentaireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentaireInclude<ExtArgs> | null
    /**
     * Filter which Commentaire to delete.
     */
    where: CommentaireWhereUniqueInput
  }

  /**
   * Commentaire deleteMany
   */
  export type CommentaireDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Commentaires to delete
     */
    where?: CommentaireWhereInput
    /**
     * Limit how many Commentaires to delete.
     */
    limit?: number
  }

  /**
   * Commentaire.auteur
   */
  export type Commentaire$auteurArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etudiant
     */
    select?: EtudiantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Etudiant
     */
    omit?: EtudiantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtudiantInclude<ExtArgs> | null
    where?: EtudiantWhereInput
  }

  /**
   * Commentaire.annonce
   */
  export type Commentaire$annonceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Annonce
     */
    select?: AnnonceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Annonce
     */
    omit?: AnnonceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnonceInclude<ExtArgs> | null
    where?: AnnonceWhereInput
  }

  /**
   * Commentaire without action
   */
  export type CommentaireDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commentaire
     */
    select?: CommentaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commentaire
     */
    omit?: CommentaireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentaireInclude<ExtArgs> | null
  }


  /**
   * Model Signaler
   */

  export type AggregateSignaler = {
    _count: SignalerCountAggregateOutputType | null
    _avg: SignalerAvgAggregateOutputType | null
    _sum: SignalerSumAggregateOutputType | null
    _min: SignalerMinAggregateOutputType | null
    _max: SignalerMaxAggregateOutputType | null
  }

  export type SignalerAvgAggregateOutputType = {
    annonceId: number | null
    etudiantId: number | null
  }

  export type SignalerSumAggregateOutputType = {
    annonceId: number | null
    etudiantId: number | null
  }

  export type SignalerMinAggregateOutputType = {
    annonceId: number | null
    etudiantId: number | null
  }

  export type SignalerMaxAggregateOutputType = {
    annonceId: number | null
    etudiantId: number | null
  }

  export type SignalerCountAggregateOutputType = {
    annonceId: number
    etudiantId: number
    _all: number
  }


  export type SignalerAvgAggregateInputType = {
    annonceId?: true
    etudiantId?: true
  }

  export type SignalerSumAggregateInputType = {
    annonceId?: true
    etudiantId?: true
  }

  export type SignalerMinAggregateInputType = {
    annonceId?: true
    etudiantId?: true
  }

  export type SignalerMaxAggregateInputType = {
    annonceId?: true
    etudiantId?: true
  }

  export type SignalerCountAggregateInputType = {
    annonceId?: true
    etudiantId?: true
    _all?: true
  }

  export type SignalerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Signaler to aggregate.
     */
    where?: SignalerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Signalers to fetch.
     */
    orderBy?: SignalerOrderByWithRelationInput | SignalerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SignalerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Signalers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Signalers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Signalers
    **/
    _count?: true | SignalerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SignalerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SignalerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SignalerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SignalerMaxAggregateInputType
  }

  export type GetSignalerAggregateType<T extends SignalerAggregateArgs> = {
        [P in keyof T & keyof AggregateSignaler]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSignaler[P]>
      : GetScalarType<T[P], AggregateSignaler[P]>
  }




  export type SignalerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SignalerWhereInput
    orderBy?: SignalerOrderByWithAggregationInput | SignalerOrderByWithAggregationInput[]
    by: SignalerScalarFieldEnum[] | SignalerScalarFieldEnum
    having?: SignalerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SignalerCountAggregateInputType | true
    _avg?: SignalerAvgAggregateInputType
    _sum?: SignalerSumAggregateInputType
    _min?: SignalerMinAggregateInputType
    _max?: SignalerMaxAggregateInputType
  }

  export type SignalerGroupByOutputType = {
    annonceId: number
    etudiantId: number
    _count: SignalerCountAggregateOutputType | null
    _avg: SignalerAvgAggregateOutputType | null
    _sum: SignalerSumAggregateOutputType | null
    _min: SignalerMinAggregateOutputType | null
    _max: SignalerMaxAggregateOutputType | null
  }

  type GetSignalerGroupByPayload<T extends SignalerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SignalerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SignalerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SignalerGroupByOutputType[P]>
            : GetScalarType<T[P], SignalerGroupByOutputType[P]>
        }
      >
    >


  export type SignalerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    annonceId?: boolean
    etudiantId?: boolean
    annonce?: boolean | AnnonceDefaultArgs<ExtArgs>
    etudiant?: boolean | EtudiantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["signaler"]>

  export type SignalerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    annonceId?: boolean
    etudiantId?: boolean
    annonce?: boolean | AnnonceDefaultArgs<ExtArgs>
    etudiant?: boolean | EtudiantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["signaler"]>

  export type SignalerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    annonceId?: boolean
    etudiantId?: boolean
    annonce?: boolean | AnnonceDefaultArgs<ExtArgs>
    etudiant?: boolean | EtudiantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["signaler"]>

  export type SignalerSelectScalar = {
    annonceId?: boolean
    etudiantId?: boolean
  }

  export type SignalerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"annonceId" | "etudiantId", ExtArgs["result"]["signaler"]>
  export type SignalerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    annonce?: boolean | AnnonceDefaultArgs<ExtArgs>
    etudiant?: boolean | EtudiantDefaultArgs<ExtArgs>
  }
  export type SignalerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    annonce?: boolean | AnnonceDefaultArgs<ExtArgs>
    etudiant?: boolean | EtudiantDefaultArgs<ExtArgs>
  }
  export type SignalerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    annonce?: boolean | AnnonceDefaultArgs<ExtArgs>
    etudiant?: boolean | EtudiantDefaultArgs<ExtArgs>
  }

  export type $SignalerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Signaler"
    objects: {
      annonce: Prisma.$AnnoncePayload<ExtArgs>
      etudiant: Prisma.$EtudiantPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      annonceId: number
      etudiantId: number
    }, ExtArgs["result"]["signaler"]>
    composites: {}
  }

  type SignalerGetPayload<S extends boolean | null | undefined | SignalerDefaultArgs> = $Result.GetResult<Prisma.$SignalerPayload, S>

  type SignalerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SignalerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SignalerCountAggregateInputType | true
    }

  export interface SignalerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Signaler'], meta: { name: 'Signaler' } }
    /**
     * Find zero or one Signaler that matches the filter.
     * @param {SignalerFindUniqueArgs} args - Arguments to find a Signaler
     * @example
     * // Get one Signaler
     * const signaler = await prisma.signaler.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SignalerFindUniqueArgs>(args: SelectSubset<T, SignalerFindUniqueArgs<ExtArgs>>): Prisma__SignalerClient<$Result.GetResult<Prisma.$SignalerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Signaler that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SignalerFindUniqueOrThrowArgs} args - Arguments to find a Signaler
     * @example
     * // Get one Signaler
     * const signaler = await prisma.signaler.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SignalerFindUniqueOrThrowArgs>(args: SelectSubset<T, SignalerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SignalerClient<$Result.GetResult<Prisma.$SignalerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Signaler that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SignalerFindFirstArgs} args - Arguments to find a Signaler
     * @example
     * // Get one Signaler
     * const signaler = await prisma.signaler.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SignalerFindFirstArgs>(args?: SelectSubset<T, SignalerFindFirstArgs<ExtArgs>>): Prisma__SignalerClient<$Result.GetResult<Prisma.$SignalerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Signaler that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SignalerFindFirstOrThrowArgs} args - Arguments to find a Signaler
     * @example
     * // Get one Signaler
     * const signaler = await prisma.signaler.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SignalerFindFirstOrThrowArgs>(args?: SelectSubset<T, SignalerFindFirstOrThrowArgs<ExtArgs>>): Prisma__SignalerClient<$Result.GetResult<Prisma.$SignalerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Signalers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SignalerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Signalers
     * const signalers = await prisma.signaler.findMany()
     * 
     * // Get first 10 Signalers
     * const signalers = await prisma.signaler.findMany({ take: 10 })
     * 
     * // Only select the `annonceId`
     * const signalerWithAnnonceIdOnly = await prisma.signaler.findMany({ select: { annonceId: true } })
     * 
     */
    findMany<T extends SignalerFindManyArgs>(args?: SelectSubset<T, SignalerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SignalerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Signaler.
     * @param {SignalerCreateArgs} args - Arguments to create a Signaler.
     * @example
     * // Create one Signaler
     * const Signaler = await prisma.signaler.create({
     *   data: {
     *     // ... data to create a Signaler
     *   }
     * })
     * 
     */
    create<T extends SignalerCreateArgs>(args: SelectSubset<T, SignalerCreateArgs<ExtArgs>>): Prisma__SignalerClient<$Result.GetResult<Prisma.$SignalerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Signalers.
     * @param {SignalerCreateManyArgs} args - Arguments to create many Signalers.
     * @example
     * // Create many Signalers
     * const signaler = await prisma.signaler.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SignalerCreateManyArgs>(args?: SelectSubset<T, SignalerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Signalers and returns the data saved in the database.
     * @param {SignalerCreateManyAndReturnArgs} args - Arguments to create many Signalers.
     * @example
     * // Create many Signalers
     * const signaler = await prisma.signaler.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Signalers and only return the `annonceId`
     * const signalerWithAnnonceIdOnly = await prisma.signaler.createManyAndReturn({
     *   select: { annonceId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SignalerCreateManyAndReturnArgs>(args?: SelectSubset<T, SignalerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SignalerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Signaler.
     * @param {SignalerDeleteArgs} args - Arguments to delete one Signaler.
     * @example
     * // Delete one Signaler
     * const Signaler = await prisma.signaler.delete({
     *   where: {
     *     // ... filter to delete one Signaler
     *   }
     * })
     * 
     */
    delete<T extends SignalerDeleteArgs>(args: SelectSubset<T, SignalerDeleteArgs<ExtArgs>>): Prisma__SignalerClient<$Result.GetResult<Prisma.$SignalerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Signaler.
     * @param {SignalerUpdateArgs} args - Arguments to update one Signaler.
     * @example
     * // Update one Signaler
     * const signaler = await prisma.signaler.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SignalerUpdateArgs>(args: SelectSubset<T, SignalerUpdateArgs<ExtArgs>>): Prisma__SignalerClient<$Result.GetResult<Prisma.$SignalerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Signalers.
     * @param {SignalerDeleteManyArgs} args - Arguments to filter Signalers to delete.
     * @example
     * // Delete a few Signalers
     * const { count } = await prisma.signaler.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SignalerDeleteManyArgs>(args?: SelectSubset<T, SignalerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Signalers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SignalerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Signalers
     * const signaler = await prisma.signaler.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SignalerUpdateManyArgs>(args: SelectSubset<T, SignalerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Signalers and returns the data updated in the database.
     * @param {SignalerUpdateManyAndReturnArgs} args - Arguments to update many Signalers.
     * @example
     * // Update many Signalers
     * const signaler = await prisma.signaler.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Signalers and only return the `annonceId`
     * const signalerWithAnnonceIdOnly = await prisma.signaler.updateManyAndReturn({
     *   select: { annonceId: true },
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
    updateManyAndReturn<T extends SignalerUpdateManyAndReturnArgs>(args: SelectSubset<T, SignalerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SignalerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Signaler.
     * @param {SignalerUpsertArgs} args - Arguments to update or create a Signaler.
     * @example
     * // Update or create a Signaler
     * const signaler = await prisma.signaler.upsert({
     *   create: {
     *     // ... data to create a Signaler
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Signaler we want to update
     *   }
     * })
     */
    upsert<T extends SignalerUpsertArgs>(args: SelectSubset<T, SignalerUpsertArgs<ExtArgs>>): Prisma__SignalerClient<$Result.GetResult<Prisma.$SignalerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Signalers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SignalerCountArgs} args - Arguments to filter Signalers to count.
     * @example
     * // Count the number of Signalers
     * const count = await prisma.signaler.count({
     *   where: {
     *     // ... the filter for the Signalers we want to count
     *   }
     * })
    **/
    count<T extends SignalerCountArgs>(
      args?: Subset<T, SignalerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SignalerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Signaler.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SignalerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SignalerAggregateArgs>(args: Subset<T, SignalerAggregateArgs>): Prisma.PrismaPromise<GetSignalerAggregateType<T>>

    /**
     * Group by Signaler.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SignalerGroupByArgs} args - Group by arguments.
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
      T extends SignalerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SignalerGroupByArgs['orderBy'] }
        : { orderBy?: SignalerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SignalerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSignalerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Signaler model
   */
  readonly fields: SignalerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Signaler.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SignalerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    annonce<T extends AnnonceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AnnonceDefaultArgs<ExtArgs>>): Prisma__AnnonceClient<$Result.GetResult<Prisma.$AnnoncePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    etudiant<T extends EtudiantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EtudiantDefaultArgs<ExtArgs>>): Prisma__EtudiantClient<$Result.GetResult<Prisma.$EtudiantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Signaler model
   */
  interface SignalerFieldRefs {
    readonly annonceId: FieldRef<"Signaler", 'Int'>
    readonly etudiantId: FieldRef<"Signaler", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Signaler findUnique
   */
  export type SignalerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Signaler
     */
    select?: SignalerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Signaler
     */
    omit?: SignalerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignalerInclude<ExtArgs> | null
    /**
     * Filter, which Signaler to fetch.
     */
    where: SignalerWhereUniqueInput
  }

  /**
   * Signaler findUniqueOrThrow
   */
  export type SignalerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Signaler
     */
    select?: SignalerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Signaler
     */
    omit?: SignalerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignalerInclude<ExtArgs> | null
    /**
     * Filter, which Signaler to fetch.
     */
    where: SignalerWhereUniqueInput
  }

  /**
   * Signaler findFirst
   */
  export type SignalerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Signaler
     */
    select?: SignalerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Signaler
     */
    omit?: SignalerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignalerInclude<ExtArgs> | null
    /**
     * Filter, which Signaler to fetch.
     */
    where?: SignalerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Signalers to fetch.
     */
    orderBy?: SignalerOrderByWithRelationInput | SignalerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Signalers.
     */
    cursor?: SignalerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Signalers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Signalers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Signalers.
     */
    distinct?: SignalerScalarFieldEnum | SignalerScalarFieldEnum[]
  }

  /**
   * Signaler findFirstOrThrow
   */
  export type SignalerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Signaler
     */
    select?: SignalerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Signaler
     */
    omit?: SignalerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignalerInclude<ExtArgs> | null
    /**
     * Filter, which Signaler to fetch.
     */
    where?: SignalerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Signalers to fetch.
     */
    orderBy?: SignalerOrderByWithRelationInput | SignalerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Signalers.
     */
    cursor?: SignalerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Signalers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Signalers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Signalers.
     */
    distinct?: SignalerScalarFieldEnum | SignalerScalarFieldEnum[]
  }

  /**
   * Signaler findMany
   */
  export type SignalerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Signaler
     */
    select?: SignalerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Signaler
     */
    omit?: SignalerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignalerInclude<ExtArgs> | null
    /**
     * Filter, which Signalers to fetch.
     */
    where?: SignalerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Signalers to fetch.
     */
    orderBy?: SignalerOrderByWithRelationInput | SignalerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Signalers.
     */
    cursor?: SignalerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Signalers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Signalers.
     */
    skip?: number
    distinct?: SignalerScalarFieldEnum | SignalerScalarFieldEnum[]
  }

  /**
   * Signaler create
   */
  export type SignalerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Signaler
     */
    select?: SignalerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Signaler
     */
    omit?: SignalerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignalerInclude<ExtArgs> | null
    /**
     * The data needed to create a Signaler.
     */
    data: XOR<SignalerCreateInput, SignalerUncheckedCreateInput>
  }

  /**
   * Signaler createMany
   */
  export type SignalerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Signalers.
     */
    data: SignalerCreateManyInput | SignalerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Signaler createManyAndReturn
   */
  export type SignalerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Signaler
     */
    select?: SignalerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Signaler
     */
    omit?: SignalerOmit<ExtArgs> | null
    /**
     * The data used to create many Signalers.
     */
    data: SignalerCreateManyInput | SignalerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignalerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Signaler update
   */
  export type SignalerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Signaler
     */
    select?: SignalerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Signaler
     */
    omit?: SignalerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignalerInclude<ExtArgs> | null
    /**
     * The data needed to update a Signaler.
     */
    data: XOR<SignalerUpdateInput, SignalerUncheckedUpdateInput>
    /**
     * Choose, which Signaler to update.
     */
    where: SignalerWhereUniqueInput
  }

  /**
   * Signaler updateMany
   */
  export type SignalerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Signalers.
     */
    data: XOR<SignalerUpdateManyMutationInput, SignalerUncheckedUpdateManyInput>
    /**
     * Filter which Signalers to update
     */
    where?: SignalerWhereInput
    /**
     * Limit how many Signalers to update.
     */
    limit?: number
  }

  /**
   * Signaler updateManyAndReturn
   */
  export type SignalerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Signaler
     */
    select?: SignalerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Signaler
     */
    omit?: SignalerOmit<ExtArgs> | null
    /**
     * The data used to update Signalers.
     */
    data: XOR<SignalerUpdateManyMutationInput, SignalerUncheckedUpdateManyInput>
    /**
     * Filter which Signalers to update
     */
    where?: SignalerWhereInput
    /**
     * Limit how many Signalers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignalerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Signaler upsert
   */
  export type SignalerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Signaler
     */
    select?: SignalerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Signaler
     */
    omit?: SignalerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignalerInclude<ExtArgs> | null
    /**
     * The filter to search for the Signaler to update in case it exists.
     */
    where: SignalerWhereUniqueInput
    /**
     * In case the Signaler found by the `where` argument doesn't exist, create a new Signaler with this data.
     */
    create: XOR<SignalerCreateInput, SignalerUncheckedCreateInput>
    /**
     * In case the Signaler was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SignalerUpdateInput, SignalerUncheckedUpdateInput>
  }

  /**
   * Signaler delete
   */
  export type SignalerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Signaler
     */
    select?: SignalerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Signaler
     */
    omit?: SignalerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignalerInclude<ExtArgs> | null
    /**
     * Filter which Signaler to delete.
     */
    where: SignalerWhereUniqueInput
  }

  /**
   * Signaler deleteMany
   */
  export type SignalerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Signalers to delete
     */
    where?: SignalerWhereInput
    /**
     * Limit how many Signalers to delete.
     */
    limit?: number
  }

  /**
   * Signaler without action
   */
  export type SignalerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Signaler
     */
    select?: SignalerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Signaler
     */
    omit?: SignalerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignalerInclude<ExtArgs> | null
  }


  /**
   * Model Amitie
   */

  export type AggregateAmitie = {
    _count: AmitieCountAggregateOutputType | null
    _avg: AmitieAvgAggregateOutputType | null
    _sum: AmitieSumAggregateOutputType | null
    _min: AmitieMinAggregateOutputType | null
    _max: AmitieMaxAggregateOutputType | null
  }

  export type AmitieAvgAggregateOutputType = {
    id: number | null
    demandeurId: number | null
    receveurId: number | null
  }

  export type AmitieSumAggregateOutputType = {
    id: number | null
    demandeurId: number | null
    receveurId: number | null
  }

  export type AmitieMinAggregateOutputType = {
    id: number | null
    demandeurId: number | null
    receveurId: number | null
    statut: $Enums.StatutAmitie | null
    dateDemande: Date | null
    dateAcceptation: Date | null
  }

  export type AmitieMaxAggregateOutputType = {
    id: number | null
    demandeurId: number | null
    receveurId: number | null
    statut: $Enums.StatutAmitie | null
    dateDemande: Date | null
    dateAcceptation: Date | null
  }

  export type AmitieCountAggregateOutputType = {
    id: number
    demandeurId: number
    receveurId: number
    statut: number
    dateDemande: number
    dateAcceptation: number
    _all: number
  }


  export type AmitieAvgAggregateInputType = {
    id?: true
    demandeurId?: true
    receveurId?: true
  }

  export type AmitieSumAggregateInputType = {
    id?: true
    demandeurId?: true
    receveurId?: true
  }

  export type AmitieMinAggregateInputType = {
    id?: true
    demandeurId?: true
    receveurId?: true
    statut?: true
    dateDemande?: true
    dateAcceptation?: true
  }

  export type AmitieMaxAggregateInputType = {
    id?: true
    demandeurId?: true
    receveurId?: true
    statut?: true
    dateDemande?: true
    dateAcceptation?: true
  }

  export type AmitieCountAggregateInputType = {
    id?: true
    demandeurId?: true
    receveurId?: true
    statut?: true
    dateDemande?: true
    dateAcceptation?: true
    _all?: true
  }

  export type AmitieAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Amitie to aggregate.
     */
    where?: AmitieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Amities to fetch.
     */
    orderBy?: AmitieOrderByWithRelationInput | AmitieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AmitieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Amities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Amities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Amities
    **/
    _count?: true | AmitieCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AmitieAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AmitieSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AmitieMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AmitieMaxAggregateInputType
  }

  export type GetAmitieAggregateType<T extends AmitieAggregateArgs> = {
        [P in keyof T & keyof AggregateAmitie]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAmitie[P]>
      : GetScalarType<T[P], AggregateAmitie[P]>
  }




  export type AmitieGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AmitieWhereInput
    orderBy?: AmitieOrderByWithAggregationInput | AmitieOrderByWithAggregationInput[]
    by: AmitieScalarFieldEnum[] | AmitieScalarFieldEnum
    having?: AmitieScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AmitieCountAggregateInputType | true
    _avg?: AmitieAvgAggregateInputType
    _sum?: AmitieSumAggregateInputType
    _min?: AmitieMinAggregateInputType
    _max?: AmitieMaxAggregateInputType
  }

  export type AmitieGroupByOutputType = {
    id: number
    demandeurId: number
    receveurId: number
    statut: $Enums.StatutAmitie
    dateDemande: Date
    dateAcceptation: Date | null
    _count: AmitieCountAggregateOutputType | null
    _avg: AmitieAvgAggregateOutputType | null
    _sum: AmitieSumAggregateOutputType | null
    _min: AmitieMinAggregateOutputType | null
    _max: AmitieMaxAggregateOutputType | null
  }

  type GetAmitieGroupByPayload<T extends AmitieGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AmitieGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AmitieGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AmitieGroupByOutputType[P]>
            : GetScalarType<T[P], AmitieGroupByOutputType[P]>
        }
      >
    >


  export type AmitieSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    demandeurId?: boolean
    receveurId?: boolean
    statut?: boolean
    dateDemande?: boolean
    dateAcceptation?: boolean
    demandeur?: boolean | EtudiantDefaultArgs<ExtArgs>
    receveur?: boolean | EtudiantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["amitie"]>

  export type AmitieSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    demandeurId?: boolean
    receveurId?: boolean
    statut?: boolean
    dateDemande?: boolean
    dateAcceptation?: boolean
    demandeur?: boolean | EtudiantDefaultArgs<ExtArgs>
    receveur?: boolean | EtudiantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["amitie"]>

  export type AmitieSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    demandeurId?: boolean
    receveurId?: boolean
    statut?: boolean
    dateDemande?: boolean
    dateAcceptation?: boolean
    demandeur?: boolean | EtudiantDefaultArgs<ExtArgs>
    receveur?: boolean | EtudiantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["amitie"]>

  export type AmitieSelectScalar = {
    id?: boolean
    demandeurId?: boolean
    receveurId?: boolean
    statut?: boolean
    dateDemande?: boolean
    dateAcceptation?: boolean
  }

  export type AmitieOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "demandeurId" | "receveurId" | "statut" | "dateDemande" | "dateAcceptation", ExtArgs["result"]["amitie"]>
  export type AmitieInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    demandeur?: boolean | EtudiantDefaultArgs<ExtArgs>
    receveur?: boolean | EtudiantDefaultArgs<ExtArgs>
  }
  export type AmitieIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    demandeur?: boolean | EtudiantDefaultArgs<ExtArgs>
    receveur?: boolean | EtudiantDefaultArgs<ExtArgs>
  }
  export type AmitieIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    demandeur?: boolean | EtudiantDefaultArgs<ExtArgs>
    receveur?: boolean | EtudiantDefaultArgs<ExtArgs>
  }

  export type $AmitiePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Amitie"
    objects: {
      demandeur: Prisma.$EtudiantPayload<ExtArgs>
      receveur: Prisma.$EtudiantPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      demandeurId: number
      receveurId: number
      statut: $Enums.StatutAmitie
      dateDemande: Date
      dateAcceptation: Date | null
    }, ExtArgs["result"]["amitie"]>
    composites: {}
  }

  type AmitieGetPayload<S extends boolean | null | undefined | AmitieDefaultArgs> = $Result.GetResult<Prisma.$AmitiePayload, S>

  type AmitieCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AmitieFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AmitieCountAggregateInputType | true
    }

  export interface AmitieDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Amitie'], meta: { name: 'Amitie' } }
    /**
     * Find zero or one Amitie that matches the filter.
     * @param {AmitieFindUniqueArgs} args - Arguments to find a Amitie
     * @example
     * // Get one Amitie
     * const amitie = await prisma.amitie.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AmitieFindUniqueArgs>(args: SelectSubset<T, AmitieFindUniqueArgs<ExtArgs>>): Prisma__AmitieClient<$Result.GetResult<Prisma.$AmitiePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Amitie that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AmitieFindUniqueOrThrowArgs} args - Arguments to find a Amitie
     * @example
     * // Get one Amitie
     * const amitie = await prisma.amitie.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AmitieFindUniqueOrThrowArgs>(args: SelectSubset<T, AmitieFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AmitieClient<$Result.GetResult<Prisma.$AmitiePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Amitie that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmitieFindFirstArgs} args - Arguments to find a Amitie
     * @example
     * // Get one Amitie
     * const amitie = await prisma.amitie.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AmitieFindFirstArgs>(args?: SelectSubset<T, AmitieFindFirstArgs<ExtArgs>>): Prisma__AmitieClient<$Result.GetResult<Prisma.$AmitiePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Amitie that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmitieFindFirstOrThrowArgs} args - Arguments to find a Amitie
     * @example
     * // Get one Amitie
     * const amitie = await prisma.amitie.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AmitieFindFirstOrThrowArgs>(args?: SelectSubset<T, AmitieFindFirstOrThrowArgs<ExtArgs>>): Prisma__AmitieClient<$Result.GetResult<Prisma.$AmitiePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Amities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmitieFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Amities
     * const amities = await prisma.amitie.findMany()
     * 
     * // Get first 10 Amities
     * const amities = await prisma.amitie.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const amitieWithIdOnly = await prisma.amitie.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AmitieFindManyArgs>(args?: SelectSubset<T, AmitieFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AmitiePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Amitie.
     * @param {AmitieCreateArgs} args - Arguments to create a Amitie.
     * @example
     * // Create one Amitie
     * const Amitie = await prisma.amitie.create({
     *   data: {
     *     // ... data to create a Amitie
     *   }
     * })
     * 
     */
    create<T extends AmitieCreateArgs>(args: SelectSubset<T, AmitieCreateArgs<ExtArgs>>): Prisma__AmitieClient<$Result.GetResult<Prisma.$AmitiePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Amities.
     * @param {AmitieCreateManyArgs} args - Arguments to create many Amities.
     * @example
     * // Create many Amities
     * const amitie = await prisma.amitie.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AmitieCreateManyArgs>(args?: SelectSubset<T, AmitieCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Amities and returns the data saved in the database.
     * @param {AmitieCreateManyAndReturnArgs} args - Arguments to create many Amities.
     * @example
     * // Create many Amities
     * const amitie = await prisma.amitie.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Amities and only return the `id`
     * const amitieWithIdOnly = await prisma.amitie.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AmitieCreateManyAndReturnArgs>(args?: SelectSubset<T, AmitieCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AmitiePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Amitie.
     * @param {AmitieDeleteArgs} args - Arguments to delete one Amitie.
     * @example
     * // Delete one Amitie
     * const Amitie = await prisma.amitie.delete({
     *   where: {
     *     // ... filter to delete one Amitie
     *   }
     * })
     * 
     */
    delete<T extends AmitieDeleteArgs>(args: SelectSubset<T, AmitieDeleteArgs<ExtArgs>>): Prisma__AmitieClient<$Result.GetResult<Prisma.$AmitiePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Amitie.
     * @param {AmitieUpdateArgs} args - Arguments to update one Amitie.
     * @example
     * // Update one Amitie
     * const amitie = await prisma.amitie.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AmitieUpdateArgs>(args: SelectSubset<T, AmitieUpdateArgs<ExtArgs>>): Prisma__AmitieClient<$Result.GetResult<Prisma.$AmitiePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Amities.
     * @param {AmitieDeleteManyArgs} args - Arguments to filter Amities to delete.
     * @example
     * // Delete a few Amities
     * const { count } = await prisma.amitie.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AmitieDeleteManyArgs>(args?: SelectSubset<T, AmitieDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Amities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmitieUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Amities
     * const amitie = await prisma.amitie.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AmitieUpdateManyArgs>(args: SelectSubset<T, AmitieUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Amities and returns the data updated in the database.
     * @param {AmitieUpdateManyAndReturnArgs} args - Arguments to update many Amities.
     * @example
     * // Update many Amities
     * const amitie = await prisma.amitie.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Amities and only return the `id`
     * const amitieWithIdOnly = await prisma.amitie.updateManyAndReturn({
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
    updateManyAndReturn<T extends AmitieUpdateManyAndReturnArgs>(args: SelectSubset<T, AmitieUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AmitiePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Amitie.
     * @param {AmitieUpsertArgs} args - Arguments to update or create a Amitie.
     * @example
     * // Update or create a Amitie
     * const amitie = await prisma.amitie.upsert({
     *   create: {
     *     // ... data to create a Amitie
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Amitie we want to update
     *   }
     * })
     */
    upsert<T extends AmitieUpsertArgs>(args: SelectSubset<T, AmitieUpsertArgs<ExtArgs>>): Prisma__AmitieClient<$Result.GetResult<Prisma.$AmitiePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Amities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmitieCountArgs} args - Arguments to filter Amities to count.
     * @example
     * // Count the number of Amities
     * const count = await prisma.amitie.count({
     *   where: {
     *     // ... the filter for the Amities we want to count
     *   }
     * })
    **/
    count<T extends AmitieCountArgs>(
      args?: Subset<T, AmitieCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AmitieCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Amitie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmitieAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AmitieAggregateArgs>(args: Subset<T, AmitieAggregateArgs>): Prisma.PrismaPromise<GetAmitieAggregateType<T>>

    /**
     * Group by Amitie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmitieGroupByArgs} args - Group by arguments.
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
      T extends AmitieGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AmitieGroupByArgs['orderBy'] }
        : { orderBy?: AmitieGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AmitieGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAmitieGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Amitie model
   */
  readonly fields: AmitieFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Amitie.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AmitieClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    demandeur<T extends EtudiantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EtudiantDefaultArgs<ExtArgs>>): Prisma__EtudiantClient<$Result.GetResult<Prisma.$EtudiantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    receveur<T extends EtudiantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EtudiantDefaultArgs<ExtArgs>>): Prisma__EtudiantClient<$Result.GetResult<Prisma.$EtudiantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Amitie model
   */
  interface AmitieFieldRefs {
    readonly id: FieldRef<"Amitie", 'Int'>
    readonly demandeurId: FieldRef<"Amitie", 'Int'>
    readonly receveurId: FieldRef<"Amitie", 'Int'>
    readonly statut: FieldRef<"Amitie", 'StatutAmitie'>
    readonly dateDemande: FieldRef<"Amitie", 'DateTime'>
    readonly dateAcceptation: FieldRef<"Amitie", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Amitie findUnique
   */
  export type AmitieFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amitie
     */
    select?: AmitieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amitie
     */
    omit?: AmitieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmitieInclude<ExtArgs> | null
    /**
     * Filter, which Amitie to fetch.
     */
    where: AmitieWhereUniqueInput
  }

  /**
   * Amitie findUniqueOrThrow
   */
  export type AmitieFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amitie
     */
    select?: AmitieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amitie
     */
    omit?: AmitieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmitieInclude<ExtArgs> | null
    /**
     * Filter, which Amitie to fetch.
     */
    where: AmitieWhereUniqueInput
  }

  /**
   * Amitie findFirst
   */
  export type AmitieFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amitie
     */
    select?: AmitieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amitie
     */
    omit?: AmitieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmitieInclude<ExtArgs> | null
    /**
     * Filter, which Amitie to fetch.
     */
    where?: AmitieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Amities to fetch.
     */
    orderBy?: AmitieOrderByWithRelationInput | AmitieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Amities.
     */
    cursor?: AmitieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Amities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Amities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Amities.
     */
    distinct?: AmitieScalarFieldEnum | AmitieScalarFieldEnum[]
  }

  /**
   * Amitie findFirstOrThrow
   */
  export type AmitieFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amitie
     */
    select?: AmitieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amitie
     */
    omit?: AmitieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmitieInclude<ExtArgs> | null
    /**
     * Filter, which Amitie to fetch.
     */
    where?: AmitieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Amities to fetch.
     */
    orderBy?: AmitieOrderByWithRelationInput | AmitieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Amities.
     */
    cursor?: AmitieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Amities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Amities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Amities.
     */
    distinct?: AmitieScalarFieldEnum | AmitieScalarFieldEnum[]
  }

  /**
   * Amitie findMany
   */
  export type AmitieFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amitie
     */
    select?: AmitieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amitie
     */
    omit?: AmitieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmitieInclude<ExtArgs> | null
    /**
     * Filter, which Amities to fetch.
     */
    where?: AmitieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Amities to fetch.
     */
    orderBy?: AmitieOrderByWithRelationInput | AmitieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Amities.
     */
    cursor?: AmitieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Amities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Amities.
     */
    skip?: number
    distinct?: AmitieScalarFieldEnum | AmitieScalarFieldEnum[]
  }

  /**
   * Amitie create
   */
  export type AmitieCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amitie
     */
    select?: AmitieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amitie
     */
    omit?: AmitieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmitieInclude<ExtArgs> | null
    /**
     * The data needed to create a Amitie.
     */
    data: XOR<AmitieCreateInput, AmitieUncheckedCreateInput>
  }

  /**
   * Amitie createMany
   */
  export type AmitieCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Amities.
     */
    data: AmitieCreateManyInput | AmitieCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Amitie createManyAndReturn
   */
  export type AmitieCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amitie
     */
    select?: AmitieSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Amitie
     */
    omit?: AmitieOmit<ExtArgs> | null
    /**
     * The data used to create many Amities.
     */
    data: AmitieCreateManyInput | AmitieCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmitieIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Amitie update
   */
  export type AmitieUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amitie
     */
    select?: AmitieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amitie
     */
    omit?: AmitieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmitieInclude<ExtArgs> | null
    /**
     * The data needed to update a Amitie.
     */
    data: XOR<AmitieUpdateInput, AmitieUncheckedUpdateInput>
    /**
     * Choose, which Amitie to update.
     */
    where: AmitieWhereUniqueInput
  }

  /**
   * Amitie updateMany
   */
  export type AmitieUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Amities.
     */
    data: XOR<AmitieUpdateManyMutationInput, AmitieUncheckedUpdateManyInput>
    /**
     * Filter which Amities to update
     */
    where?: AmitieWhereInput
    /**
     * Limit how many Amities to update.
     */
    limit?: number
  }

  /**
   * Amitie updateManyAndReturn
   */
  export type AmitieUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amitie
     */
    select?: AmitieSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Amitie
     */
    omit?: AmitieOmit<ExtArgs> | null
    /**
     * The data used to update Amities.
     */
    data: XOR<AmitieUpdateManyMutationInput, AmitieUncheckedUpdateManyInput>
    /**
     * Filter which Amities to update
     */
    where?: AmitieWhereInput
    /**
     * Limit how many Amities to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmitieIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Amitie upsert
   */
  export type AmitieUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amitie
     */
    select?: AmitieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amitie
     */
    omit?: AmitieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmitieInclude<ExtArgs> | null
    /**
     * The filter to search for the Amitie to update in case it exists.
     */
    where: AmitieWhereUniqueInput
    /**
     * In case the Amitie found by the `where` argument doesn't exist, create a new Amitie with this data.
     */
    create: XOR<AmitieCreateInput, AmitieUncheckedCreateInput>
    /**
     * In case the Amitie was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AmitieUpdateInput, AmitieUncheckedUpdateInput>
  }

  /**
   * Amitie delete
   */
  export type AmitieDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amitie
     */
    select?: AmitieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amitie
     */
    omit?: AmitieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmitieInclude<ExtArgs> | null
    /**
     * Filter which Amitie to delete.
     */
    where: AmitieWhereUniqueInput
  }

  /**
   * Amitie deleteMany
   */
  export type AmitieDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Amities to delete
     */
    where?: AmitieWhereInput
    /**
     * Limit how many Amities to delete.
     */
    limit?: number
  }

  /**
   * Amitie without action
   */
  export type AmitieDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amitie
     */
    select?: AmitieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amitie
     */
    omit?: AmitieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmitieInclude<ExtArgs> | null
  }


  /**
   * Model Groupe
   */

  export type AggregateGroupe = {
    _count: GroupeCountAggregateOutputType | null
    _avg: GroupeAvgAggregateOutputType | null
    _sum: GroupeSumAggregateOutputType | null
    _min: GroupeMinAggregateOutputType | null
    _max: GroupeMaxAggregateOutputType | null
  }

  export type GroupeAvgAggregateOutputType = {
    id: number | null
  }

  export type GroupeSumAggregateOutputType = {
    id: number | null
  }

  export type GroupeMinAggregateOutputType = {
    id: number | null
    nom: string | null
    createdAt: Date | null
  }

  export type GroupeMaxAggregateOutputType = {
    id: number | null
    nom: string | null
    createdAt: Date | null
  }

  export type GroupeCountAggregateOutputType = {
    id: number
    nom: number
    createdAt: number
    _all: number
  }


  export type GroupeAvgAggregateInputType = {
    id?: true
  }

  export type GroupeSumAggregateInputType = {
    id?: true
  }

  export type GroupeMinAggregateInputType = {
    id?: true
    nom?: true
    createdAt?: true
  }

  export type GroupeMaxAggregateInputType = {
    id?: true
    nom?: true
    createdAt?: true
  }

  export type GroupeCountAggregateInputType = {
    id?: true
    nom?: true
    createdAt?: true
    _all?: true
  }

  export type GroupeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Groupe to aggregate.
     */
    where?: GroupeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groupes to fetch.
     */
    orderBy?: GroupeOrderByWithRelationInput | GroupeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GroupeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groupes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groupes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Groupes
    **/
    _count?: true | GroupeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GroupeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GroupeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GroupeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GroupeMaxAggregateInputType
  }

  export type GetGroupeAggregateType<T extends GroupeAggregateArgs> = {
        [P in keyof T & keyof AggregateGroupe]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGroupe[P]>
      : GetScalarType<T[P], AggregateGroupe[P]>
  }




  export type GroupeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupeWhereInput
    orderBy?: GroupeOrderByWithAggregationInput | GroupeOrderByWithAggregationInput[]
    by: GroupeScalarFieldEnum[] | GroupeScalarFieldEnum
    having?: GroupeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GroupeCountAggregateInputType | true
    _avg?: GroupeAvgAggregateInputType
    _sum?: GroupeSumAggregateInputType
    _min?: GroupeMinAggregateInputType
    _max?: GroupeMaxAggregateInputType
  }

  export type GroupeGroupByOutputType = {
    id: number
    nom: string
    createdAt: Date
    _count: GroupeCountAggregateOutputType | null
    _avg: GroupeAvgAggregateOutputType | null
    _sum: GroupeSumAggregateOutputType | null
    _min: GroupeMinAggregateOutputType | null
    _max: GroupeMaxAggregateOutputType | null
  }

  type GetGroupeGroupByPayload<T extends GroupeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GroupeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GroupeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GroupeGroupByOutputType[P]>
            : GetScalarType<T[P], GroupeGroupByOutputType[P]>
        }
      >
    >


  export type GroupeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    createdAt?: boolean
    membres?: boolean | Groupe$membresArgs<ExtArgs>
    messages?: boolean | Groupe$messagesArgs<ExtArgs>
    _count?: boolean | GroupeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["groupe"]>

  export type GroupeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["groupe"]>

  export type GroupeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["groupe"]>

  export type GroupeSelectScalar = {
    id?: boolean
    nom?: boolean
    createdAt?: boolean
  }

  export type GroupeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nom" | "createdAt", ExtArgs["result"]["groupe"]>
  export type GroupeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    membres?: boolean | Groupe$membresArgs<ExtArgs>
    messages?: boolean | Groupe$messagesArgs<ExtArgs>
    _count?: boolean | GroupeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GroupeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type GroupeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $GroupePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Groupe"
    objects: {
      membres: Prisma.$EtudiantGroupePayload<ExtArgs>[]
      messages: Prisma.$MessageGroupePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nom: string
      createdAt: Date
    }, ExtArgs["result"]["groupe"]>
    composites: {}
  }

  type GroupeGetPayload<S extends boolean | null | undefined | GroupeDefaultArgs> = $Result.GetResult<Prisma.$GroupePayload, S>

  type GroupeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GroupeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GroupeCountAggregateInputType | true
    }

  export interface GroupeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Groupe'], meta: { name: 'Groupe' } }
    /**
     * Find zero or one Groupe that matches the filter.
     * @param {GroupeFindUniqueArgs} args - Arguments to find a Groupe
     * @example
     * // Get one Groupe
     * const groupe = await prisma.groupe.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GroupeFindUniqueArgs>(args: SelectSubset<T, GroupeFindUniqueArgs<ExtArgs>>): Prisma__GroupeClient<$Result.GetResult<Prisma.$GroupePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Groupe that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GroupeFindUniqueOrThrowArgs} args - Arguments to find a Groupe
     * @example
     * // Get one Groupe
     * const groupe = await prisma.groupe.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GroupeFindUniqueOrThrowArgs>(args: SelectSubset<T, GroupeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GroupeClient<$Result.GetResult<Prisma.$GroupePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Groupe that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupeFindFirstArgs} args - Arguments to find a Groupe
     * @example
     * // Get one Groupe
     * const groupe = await prisma.groupe.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GroupeFindFirstArgs>(args?: SelectSubset<T, GroupeFindFirstArgs<ExtArgs>>): Prisma__GroupeClient<$Result.GetResult<Prisma.$GroupePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Groupe that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupeFindFirstOrThrowArgs} args - Arguments to find a Groupe
     * @example
     * // Get one Groupe
     * const groupe = await prisma.groupe.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GroupeFindFirstOrThrowArgs>(args?: SelectSubset<T, GroupeFindFirstOrThrowArgs<ExtArgs>>): Prisma__GroupeClient<$Result.GetResult<Prisma.$GroupePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Groupes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Groupes
     * const groupes = await prisma.groupe.findMany()
     * 
     * // Get first 10 Groupes
     * const groupes = await prisma.groupe.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const groupeWithIdOnly = await prisma.groupe.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GroupeFindManyArgs>(args?: SelectSubset<T, GroupeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Groupe.
     * @param {GroupeCreateArgs} args - Arguments to create a Groupe.
     * @example
     * // Create one Groupe
     * const Groupe = await prisma.groupe.create({
     *   data: {
     *     // ... data to create a Groupe
     *   }
     * })
     * 
     */
    create<T extends GroupeCreateArgs>(args: SelectSubset<T, GroupeCreateArgs<ExtArgs>>): Prisma__GroupeClient<$Result.GetResult<Prisma.$GroupePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Groupes.
     * @param {GroupeCreateManyArgs} args - Arguments to create many Groupes.
     * @example
     * // Create many Groupes
     * const groupe = await prisma.groupe.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GroupeCreateManyArgs>(args?: SelectSubset<T, GroupeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Groupes and returns the data saved in the database.
     * @param {GroupeCreateManyAndReturnArgs} args - Arguments to create many Groupes.
     * @example
     * // Create many Groupes
     * const groupe = await prisma.groupe.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Groupes and only return the `id`
     * const groupeWithIdOnly = await prisma.groupe.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GroupeCreateManyAndReturnArgs>(args?: SelectSubset<T, GroupeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Groupe.
     * @param {GroupeDeleteArgs} args - Arguments to delete one Groupe.
     * @example
     * // Delete one Groupe
     * const Groupe = await prisma.groupe.delete({
     *   where: {
     *     // ... filter to delete one Groupe
     *   }
     * })
     * 
     */
    delete<T extends GroupeDeleteArgs>(args: SelectSubset<T, GroupeDeleteArgs<ExtArgs>>): Prisma__GroupeClient<$Result.GetResult<Prisma.$GroupePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Groupe.
     * @param {GroupeUpdateArgs} args - Arguments to update one Groupe.
     * @example
     * // Update one Groupe
     * const groupe = await prisma.groupe.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GroupeUpdateArgs>(args: SelectSubset<T, GroupeUpdateArgs<ExtArgs>>): Prisma__GroupeClient<$Result.GetResult<Prisma.$GroupePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Groupes.
     * @param {GroupeDeleteManyArgs} args - Arguments to filter Groupes to delete.
     * @example
     * // Delete a few Groupes
     * const { count } = await prisma.groupe.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GroupeDeleteManyArgs>(args?: SelectSubset<T, GroupeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Groupes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Groupes
     * const groupe = await prisma.groupe.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GroupeUpdateManyArgs>(args: SelectSubset<T, GroupeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Groupes and returns the data updated in the database.
     * @param {GroupeUpdateManyAndReturnArgs} args - Arguments to update many Groupes.
     * @example
     * // Update many Groupes
     * const groupe = await prisma.groupe.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Groupes and only return the `id`
     * const groupeWithIdOnly = await prisma.groupe.updateManyAndReturn({
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
    updateManyAndReturn<T extends GroupeUpdateManyAndReturnArgs>(args: SelectSubset<T, GroupeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Groupe.
     * @param {GroupeUpsertArgs} args - Arguments to update or create a Groupe.
     * @example
     * // Update or create a Groupe
     * const groupe = await prisma.groupe.upsert({
     *   create: {
     *     // ... data to create a Groupe
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Groupe we want to update
     *   }
     * })
     */
    upsert<T extends GroupeUpsertArgs>(args: SelectSubset<T, GroupeUpsertArgs<ExtArgs>>): Prisma__GroupeClient<$Result.GetResult<Prisma.$GroupePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Groupes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupeCountArgs} args - Arguments to filter Groupes to count.
     * @example
     * // Count the number of Groupes
     * const count = await prisma.groupe.count({
     *   where: {
     *     // ... the filter for the Groupes we want to count
     *   }
     * })
    **/
    count<T extends GroupeCountArgs>(
      args?: Subset<T, GroupeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GroupeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Groupe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GroupeAggregateArgs>(args: Subset<T, GroupeAggregateArgs>): Prisma.PrismaPromise<GetGroupeAggregateType<T>>

    /**
     * Group by Groupe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupeGroupByArgs} args - Group by arguments.
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
      T extends GroupeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GroupeGroupByArgs['orderBy'] }
        : { orderBy?: GroupeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GroupeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroupeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Groupe model
   */
  readonly fields: GroupeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Groupe.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GroupeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    membres<T extends Groupe$membresArgs<ExtArgs> = {}>(args?: Subset<T, Groupe$membresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EtudiantGroupePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    messages<T extends Groupe$messagesArgs<ExtArgs> = {}>(args?: Subset<T, Groupe$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessageGroupePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Groupe model
   */
  interface GroupeFieldRefs {
    readonly id: FieldRef<"Groupe", 'Int'>
    readonly nom: FieldRef<"Groupe", 'String'>
    readonly createdAt: FieldRef<"Groupe", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Groupe findUnique
   */
  export type GroupeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Groupe
     */
    select?: GroupeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Groupe
     */
    omit?: GroupeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupeInclude<ExtArgs> | null
    /**
     * Filter, which Groupe to fetch.
     */
    where: GroupeWhereUniqueInput
  }

  /**
   * Groupe findUniqueOrThrow
   */
  export type GroupeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Groupe
     */
    select?: GroupeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Groupe
     */
    omit?: GroupeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupeInclude<ExtArgs> | null
    /**
     * Filter, which Groupe to fetch.
     */
    where: GroupeWhereUniqueInput
  }

  /**
   * Groupe findFirst
   */
  export type GroupeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Groupe
     */
    select?: GroupeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Groupe
     */
    omit?: GroupeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupeInclude<ExtArgs> | null
    /**
     * Filter, which Groupe to fetch.
     */
    where?: GroupeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groupes to fetch.
     */
    orderBy?: GroupeOrderByWithRelationInput | GroupeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Groupes.
     */
    cursor?: GroupeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groupes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groupes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Groupes.
     */
    distinct?: GroupeScalarFieldEnum | GroupeScalarFieldEnum[]
  }

  /**
   * Groupe findFirstOrThrow
   */
  export type GroupeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Groupe
     */
    select?: GroupeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Groupe
     */
    omit?: GroupeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupeInclude<ExtArgs> | null
    /**
     * Filter, which Groupe to fetch.
     */
    where?: GroupeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groupes to fetch.
     */
    orderBy?: GroupeOrderByWithRelationInput | GroupeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Groupes.
     */
    cursor?: GroupeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groupes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groupes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Groupes.
     */
    distinct?: GroupeScalarFieldEnum | GroupeScalarFieldEnum[]
  }

  /**
   * Groupe findMany
   */
  export type GroupeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Groupe
     */
    select?: GroupeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Groupe
     */
    omit?: GroupeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupeInclude<ExtArgs> | null
    /**
     * Filter, which Groupes to fetch.
     */
    where?: GroupeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groupes to fetch.
     */
    orderBy?: GroupeOrderByWithRelationInput | GroupeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Groupes.
     */
    cursor?: GroupeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groupes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groupes.
     */
    skip?: number
    distinct?: GroupeScalarFieldEnum | GroupeScalarFieldEnum[]
  }

  /**
   * Groupe create
   */
  export type GroupeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Groupe
     */
    select?: GroupeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Groupe
     */
    omit?: GroupeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupeInclude<ExtArgs> | null
    /**
     * The data needed to create a Groupe.
     */
    data: XOR<GroupeCreateInput, GroupeUncheckedCreateInput>
  }

  /**
   * Groupe createMany
   */
  export type GroupeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Groupes.
     */
    data: GroupeCreateManyInput | GroupeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Groupe createManyAndReturn
   */
  export type GroupeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Groupe
     */
    select?: GroupeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Groupe
     */
    omit?: GroupeOmit<ExtArgs> | null
    /**
     * The data used to create many Groupes.
     */
    data: GroupeCreateManyInput | GroupeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Groupe update
   */
  export type GroupeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Groupe
     */
    select?: GroupeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Groupe
     */
    omit?: GroupeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupeInclude<ExtArgs> | null
    /**
     * The data needed to update a Groupe.
     */
    data: XOR<GroupeUpdateInput, GroupeUncheckedUpdateInput>
    /**
     * Choose, which Groupe to update.
     */
    where: GroupeWhereUniqueInput
  }

  /**
   * Groupe updateMany
   */
  export type GroupeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Groupes.
     */
    data: XOR<GroupeUpdateManyMutationInput, GroupeUncheckedUpdateManyInput>
    /**
     * Filter which Groupes to update
     */
    where?: GroupeWhereInput
    /**
     * Limit how many Groupes to update.
     */
    limit?: number
  }

  /**
   * Groupe updateManyAndReturn
   */
  export type GroupeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Groupe
     */
    select?: GroupeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Groupe
     */
    omit?: GroupeOmit<ExtArgs> | null
    /**
     * The data used to update Groupes.
     */
    data: XOR<GroupeUpdateManyMutationInput, GroupeUncheckedUpdateManyInput>
    /**
     * Filter which Groupes to update
     */
    where?: GroupeWhereInput
    /**
     * Limit how many Groupes to update.
     */
    limit?: number
  }

  /**
   * Groupe upsert
   */
  export type GroupeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Groupe
     */
    select?: GroupeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Groupe
     */
    omit?: GroupeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupeInclude<ExtArgs> | null
    /**
     * The filter to search for the Groupe to update in case it exists.
     */
    where: GroupeWhereUniqueInput
    /**
     * In case the Groupe found by the `where` argument doesn't exist, create a new Groupe with this data.
     */
    create: XOR<GroupeCreateInput, GroupeUncheckedCreateInput>
    /**
     * In case the Groupe was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GroupeUpdateInput, GroupeUncheckedUpdateInput>
  }

  /**
   * Groupe delete
   */
  export type GroupeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Groupe
     */
    select?: GroupeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Groupe
     */
    omit?: GroupeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupeInclude<ExtArgs> | null
    /**
     * Filter which Groupe to delete.
     */
    where: GroupeWhereUniqueInput
  }

  /**
   * Groupe deleteMany
   */
  export type GroupeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Groupes to delete
     */
    where?: GroupeWhereInput
    /**
     * Limit how many Groupes to delete.
     */
    limit?: number
  }

  /**
   * Groupe.membres
   */
  export type Groupe$membresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EtudiantGroupe
     */
    select?: EtudiantGroupeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EtudiantGroupe
     */
    omit?: EtudiantGroupeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtudiantGroupeInclude<ExtArgs> | null
    where?: EtudiantGroupeWhereInput
    orderBy?: EtudiantGroupeOrderByWithRelationInput | EtudiantGroupeOrderByWithRelationInput[]
    cursor?: EtudiantGroupeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EtudiantGroupeScalarFieldEnum | EtudiantGroupeScalarFieldEnum[]
  }

  /**
   * Groupe.messages
   */
  export type Groupe$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageGroupe
     */
    select?: MessageGroupeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageGroupe
     */
    omit?: MessageGroupeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageGroupeInclude<ExtArgs> | null
    where?: MessageGroupeWhereInput
    orderBy?: MessageGroupeOrderByWithRelationInput | MessageGroupeOrderByWithRelationInput[]
    cursor?: MessageGroupeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageGroupeScalarFieldEnum | MessageGroupeScalarFieldEnum[]
  }

  /**
   * Groupe without action
   */
  export type GroupeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Groupe
     */
    select?: GroupeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Groupe
     */
    omit?: GroupeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupeInclude<ExtArgs> | null
  }


  /**
   * Model EtudiantGroupe
   */

  export type AggregateEtudiantGroupe = {
    _count: EtudiantGroupeCountAggregateOutputType | null
    _avg: EtudiantGroupeAvgAggregateOutputType | null
    _sum: EtudiantGroupeSumAggregateOutputType | null
    _min: EtudiantGroupeMinAggregateOutputType | null
    _max: EtudiantGroupeMaxAggregateOutputType | null
  }

  export type EtudiantGroupeAvgAggregateOutputType = {
    etudiantId: number | null
    groupeId: number | null
  }

  export type EtudiantGroupeSumAggregateOutputType = {
    etudiantId: number | null
    groupeId: number | null
  }

  export type EtudiantGroupeMinAggregateOutputType = {
    etudiantId: number | null
    groupeId: number | null
  }

  export type EtudiantGroupeMaxAggregateOutputType = {
    etudiantId: number | null
    groupeId: number | null
  }

  export type EtudiantGroupeCountAggregateOutputType = {
    etudiantId: number
    groupeId: number
    _all: number
  }


  export type EtudiantGroupeAvgAggregateInputType = {
    etudiantId?: true
    groupeId?: true
  }

  export type EtudiantGroupeSumAggregateInputType = {
    etudiantId?: true
    groupeId?: true
  }

  export type EtudiantGroupeMinAggregateInputType = {
    etudiantId?: true
    groupeId?: true
  }

  export type EtudiantGroupeMaxAggregateInputType = {
    etudiantId?: true
    groupeId?: true
  }

  export type EtudiantGroupeCountAggregateInputType = {
    etudiantId?: true
    groupeId?: true
    _all?: true
  }

  export type EtudiantGroupeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EtudiantGroupe to aggregate.
     */
    where?: EtudiantGroupeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EtudiantGroupes to fetch.
     */
    orderBy?: EtudiantGroupeOrderByWithRelationInput | EtudiantGroupeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EtudiantGroupeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EtudiantGroupes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EtudiantGroupes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EtudiantGroupes
    **/
    _count?: true | EtudiantGroupeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EtudiantGroupeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EtudiantGroupeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EtudiantGroupeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EtudiantGroupeMaxAggregateInputType
  }

  export type GetEtudiantGroupeAggregateType<T extends EtudiantGroupeAggregateArgs> = {
        [P in keyof T & keyof AggregateEtudiantGroupe]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEtudiantGroupe[P]>
      : GetScalarType<T[P], AggregateEtudiantGroupe[P]>
  }




  export type EtudiantGroupeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EtudiantGroupeWhereInput
    orderBy?: EtudiantGroupeOrderByWithAggregationInput | EtudiantGroupeOrderByWithAggregationInput[]
    by: EtudiantGroupeScalarFieldEnum[] | EtudiantGroupeScalarFieldEnum
    having?: EtudiantGroupeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EtudiantGroupeCountAggregateInputType | true
    _avg?: EtudiantGroupeAvgAggregateInputType
    _sum?: EtudiantGroupeSumAggregateInputType
    _min?: EtudiantGroupeMinAggregateInputType
    _max?: EtudiantGroupeMaxAggregateInputType
  }

  export type EtudiantGroupeGroupByOutputType = {
    etudiantId: number
    groupeId: number
    _count: EtudiantGroupeCountAggregateOutputType | null
    _avg: EtudiantGroupeAvgAggregateOutputType | null
    _sum: EtudiantGroupeSumAggregateOutputType | null
    _min: EtudiantGroupeMinAggregateOutputType | null
    _max: EtudiantGroupeMaxAggregateOutputType | null
  }

  type GetEtudiantGroupeGroupByPayload<T extends EtudiantGroupeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EtudiantGroupeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EtudiantGroupeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EtudiantGroupeGroupByOutputType[P]>
            : GetScalarType<T[P], EtudiantGroupeGroupByOutputType[P]>
        }
      >
    >


  export type EtudiantGroupeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    etudiantId?: boolean
    groupeId?: boolean
    etudiant?: boolean | EtudiantDefaultArgs<ExtArgs>
    groupe?: boolean | GroupeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["etudiantGroupe"]>

  export type EtudiantGroupeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    etudiantId?: boolean
    groupeId?: boolean
    etudiant?: boolean | EtudiantDefaultArgs<ExtArgs>
    groupe?: boolean | GroupeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["etudiantGroupe"]>

  export type EtudiantGroupeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    etudiantId?: boolean
    groupeId?: boolean
    etudiant?: boolean | EtudiantDefaultArgs<ExtArgs>
    groupe?: boolean | GroupeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["etudiantGroupe"]>

  export type EtudiantGroupeSelectScalar = {
    etudiantId?: boolean
    groupeId?: boolean
  }

  export type EtudiantGroupeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"etudiantId" | "groupeId", ExtArgs["result"]["etudiantGroupe"]>
  export type EtudiantGroupeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    etudiant?: boolean | EtudiantDefaultArgs<ExtArgs>
    groupe?: boolean | GroupeDefaultArgs<ExtArgs>
  }
  export type EtudiantGroupeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    etudiant?: boolean | EtudiantDefaultArgs<ExtArgs>
    groupe?: boolean | GroupeDefaultArgs<ExtArgs>
  }
  export type EtudiantGroupeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    etudiant?: boolean | EtudiantDefaultArgs<ExtArgs>
    groupe?: boolean | GroupeDefaultArgs<ExtArgs>
  }

  export type $EtudiantGroupePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EtudiantGroupe"
    objects: {
      etudiant: Prisma.$EtudiantPayload<ExtArgs>
      groupe: Prisma.$GroupePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      etudiantId: number
      groupeId: number
    }, ExtArgs["result"]["etudiantGroupe"]>
    composites: {}
  }

  type EtudiantGroupeGetPayload<S extends boolean | null | undefined | EtudiantGroupeDefaultArgs> = $Result.GetResult<Prisma.$EtudiantGroupePayload, S>

  type EtudiantGroupeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EtudiantGroupeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EtudiantGroupeCountAggregateInputType | true
    }

  export interface EtudiantGroupeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EtudiantGroupe'], meta: { name: 'EtudiantGroupe' } }
    /**
     * Find zero or one EtudiantGroupe that matches the filter.
     * @param {EtudiantGroupeFindUniqueArgs} args - Arguments to find a EtudiantGroupe
     * @example
     * // Get one EtudiantGroupe
     * const etudiantGroupe = await prisma.etudiantGroupe.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EtudiantGroupeFindUniqueArgs>(args: SelectSubset<T, EtudiantGroupeFindUniqueArgs<ExtArgs>>): Prisma__EtudiantGroupeClient<$Result.GetResult<Prisma.$EtudiantGroupePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EtudiantGroupe that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EtudiantGroupeFindUniqueOrThrowArgs} args - Arguments to find a EtudiantGroupe
     * @example
     * // Get one EtudiantGroupe
     * const etudiantGroupe = await prisma.etudiantGroupe.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EtudiantGroupeFindUniqueOrThrowArgs>(args: SelectSubset<T, EtudiantGroupeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EtudiantGroupeClient<$Result.GetResult<Prisma.$EtudiantGroupePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EtudiantGroupe that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtudiantGroupeFindFirstArgs} args - Arguments to find a EtudiantGroupe
     * @example
     * // Get one EtudiantGroupe
     * const etudiantGroupe = await prisma.etudiantGroupe.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EtudiantGroupeFindFirstArgs>(args?: SelectSubset<T, EtudiantGroupeFindFirstArgs<ExtArgs>>): Prisma__EtudiantGroupeClient<$Result.GetResult<Prisma.$EtudiantGroupePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EtudiantGroupe that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtudiantGroupeFindFirstOrThrowArgs} args - Arguments to find a EtudiantGroupe
     * @example
     * // Get one EtudiantGroupe
     * const etudiantGroupe = await prisma.etudiantGroupe.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EtudiantGroupeFindFirstOrThrowArgs>(args?: SelectSubset<T, EtudiantGroupeFindFirstOrThrowArgs<ExtArgs>>): Prisma__EtudiantGroupeClient<$Result.GetResult<Prisma.$EtudiantGroupePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EtudiantGroupes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtudiantGroupeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EtudiantGroupes
     * const etudiantGroupes = await prisma.etudiantGroupe.findMany()
     * 
     * // Get first 10 EtudiantGroupes
     * const etudiantGroupes = await prisma.etudiantGroupe.findMany({ take: 10 })
     * 
     * // Only select the `etudiantId`
     * const etudiantGroupeWithEtudiantIdOnly = await prisma.etudiantGroupe.findMany({ select: { etudiantId: true } })
     * 
     */
    findMany<T extends EtudiantGroupeFindManyArgs>(args?: SelectSubset<T, EtudiantGroupeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EtudiantGroupePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EtudiantGroupe.
     * @param {EtudiantGroupeCreateArgs} args - Arguments to create a EtudiantGroupe.
     * @example
     * // Create one EtudiantGroupe
     * const EtudiantGroupe = await prisma.etudiantGroupe.create({
     *   data: {
     *     // ... data to create a EtudiantGroupe
     *   }
     * })
     * 
     */
    create<T extends EtudiantGroupeCreateArgs>(args: SelectSubset<T, EtudiantGroupeCreateArgs<ExtArgs>>): Prisma__EtudiantGroupeClient<$Result.GetResult<Prisma.$EtudiantGroupePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EtudiantGroupes.
     * @param {EtudiantGroupeCreateManyArgs} args - Arguments to create many EtudiantGroupes.
     * @example
     * // Create many EtudiantGroupes
     * const etudiantGroupe = await prisma.etudiantGroupe.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EtudiantGroupeCreateManyArgs>(args?: SelectSubset<T, EtudiantGroupeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EtudiantGroupes and returns the data saved in the database.
     * @param {EtudiantGroupeCreateManyAndReturnArgs} args - Arguments to create many EtudiantGroupes.
     * @example
     * // Create many EtudiantGroupes
     * const etudiantGroupe = await prisma.etudiantGroupe.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EtudiantGroupes and only return the `etudiantId`
     * const etudiantGroupeWithEtudiantIdOnly = await prisma.etudiantGroupe.createManyAndReturn({
     *   select: { etudiantId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EtudiantGroupeCreateManyAndReturnArgs>(args?: SelectSubset<T, EtudiantGroupeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EtudiantGroupePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EtudiantGroupe.
     * @param {EtudiantGroupeDeleteArgs} args - Arguments to delete one EtudiantGroupe.
     * @example
     * // Delete one EtudiantGroupe
     * const EtudiantGroupe = await prisma.etudiantGroupe.delete({
     *   where: {
     *     // ... filter to delete one EtudiantGroupe
     *   }
     * })
     * 
     */
    delete<T extends EtudiantGroupeDeleteArgs>(args: SelectSubset<T, EtudiantGroupeDeleteArgs<ExtArgs>>): Prisma__EtudiantGroupeClient<$Result.GetResult<Prisma.$EtudiantGroupePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EtudiantGroupe.
     * @param {EtudiantGroupeUpdateArgs} args - Arguments to update one EtudiantGroupe.
     * @example
     * // Update one EtudiantGroupe
     * const etudiantGroupe = await prisma.etudiantGroupe.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EtudiantGroupeUpdateArgs>(args: SelectSubset<T, EtudiantGroupeUpdateArgs<ExtArgs>>): Prisma__EtudiantGroupeClient<$Result.GetResult<Prisma.$EtudiantGroupePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EtudiantGroupes.
     * @param {EtudiantGroupeDeleteManyArgs} args - Arguments to filter EtudiantGroupes to delete.
     * @example
     * // Delete a few EtudiantGroupes
     * const { count } = await prisma.etudiantGroupe.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EtudiantGroupeDeleteManyArgs>(args?: SelectSubset<T, EtudiantGroupeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EtudiantGroupes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtudiantGroupeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EtudiantGroupes
     * const etudiantGroupe = await prisma.etudiantGroupe.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EtudiantGroupeUpdateManyArgs>(args: SelectSubset<T, EtudiantGroupeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EtudiantGroupes and returns the data updated in the database.
     * @param {EtudiantGroupeUpdateManyAndReturnArgs} args - Arguments to update many EtudiantGroupes.
     * @example
     * // Update many EtudiantGroupes
     * const etudiantGroupe = await prisma.etudiantGroupe.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EtudiantGroupes and only return the `etudiantId`
     * const etudiantGroupeWithEtudiantIdOnly = await prisma.etudiantGroupe.updateManyAndReturn({
     *   select: { etudiantId: true },
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
    updateManyAndReturn<T extends EtudiantGroupeUpdateManyAndReturnArgs>(args: SelectSubset<T, EtudiantGroupeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EtudiantGroupePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EtudiantGroupe.
     * @param {EtudiantGroupeUpsertArgs} args - Arguments to update or create a EtudiantGroupe.
     * @example
     * // Update or create a EtudiantGroupe
     * const etudiantGroupe = await prisma.etudiantGroupe.upsert({
     *   create: {
     *     // ... data to create a EtudiantGroupe
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EtudiantGroupe we want to update
     *   }
     * })
     */
    upsert<T extends EtudiantGroupeUpsertArgs>(args: SelectSubset<T, EtudiantGroupeUpsertArgs<ExtArgs>>): Prisma__EtudiantGroupeClient<$Result.GetResult<Prisma.$EtudiantGroupePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EtudiantGroupes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtudiantGroupeCountArgs} args - Arguments to filter EtudiantGroupes to count.
     * @example
     * // Count the number of EtudiantGroupes
     * const count = await prisma.etudiantGroupe.count({
     *   where: {
     *     // ... the filter for the EtudiantGroupes we want to count
     *   }
     * })
    **/
    count<T extends EtudiantGroupeCountArgs>(
      args?: Subset<T, EtudiantGroupeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EtudiantGroupeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EtudiantGroupe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtudiantGroupeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EtudiantGroupeAggregateArgs>(args: Subset<T, EtudiantGroupeAggregateArgs>): Prisma.PrismaPromise<GetEtudiantGroupeAggregateType<T>>

    /**
     * Group by EtudiantGroupe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtudiantGroupeGroupByArgs} args - Group by arguments.
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
      T extends EtudiantGroupeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EtudiantGroupeGroupByArgs['orderBy'] }
        : { orderBy?: EtudiantGroupeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EtudiantGroupeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEtudiantGroupeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EtudiantGroupe model
   */
  readonly fields: EtudiantGroupeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EtudiantGroupe.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EtudiantGroupeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    etudiant<T extends EtudiantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EtudiantDefaultArgs<ExtArgs>>): Prisma__EtudiantClient<$Result.GetResult<Prisma.$EtudiantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    groupe<T extends GroupeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GroupeDefaultArgs<ExtArgs>>): Prisma__GroupeClient<$Result.GetResult<Prisma.$GroupePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the EtudiantGroupe model
   */
  interface EtudiantGroupeFieldRefs {
    readonly etudiantId: FieldRef<"EtudiantGroupe", 'Int'>
    readonly groupeId: FieldRef<"EtudiantGroupe", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * EtudiantGroupe findUnique
   */
  export type EtudiantGroupeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EtudiantGroupe
     */
    select?: EtudiantGroupeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EtudiantGroupe
     */
    omit?: EtudiantGroupeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtudiantGroupeInclude<ExtArgs> | null
    /**
     * Filter, which EtudiantGroupe to fetch.
     */
    where: EtudiantGroupeWhereUniqueInput
  }

  /**
   * EtudiantGroupe findUniqueOrThrow
   */
  export type EtudiantGroupeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EtudiantGroupe
     */
    select?: EtudiantGroupeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EtudiantGroupe
     */
    omit?: EtudiantGroupeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtudiantGroupeInclude<ExtArgs> | null
    /**
     * Filter, which EtudiantGroupe to fetch.
     */
    where: EtudiantGroupeWhereUniqueInput
  }

  /**
   * EtudiantGroupe findFirst
   */
  export type EtudiantGroupeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EtudiantGroupe
     */
    select?: EtudiantGroupeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EtudiantGroupe
     */
    omit?: EtudiantGroupeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtudiantGroupeInclude<ExtArgs> | null
    /**
     * Filter, which EtudiantGroupe to fetch.
     */
    where?: EtudiantGroupeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EtudiantGroupes to fetch.
     */
    orderBy?: EtudiantGroupeOrderByWithRelationInput | EtudiantGroupeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EtudiantGroupes.
     */
    cursor?: EtudiantGroupeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EtudiantGroupes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EtudiantGroupes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EtudiantGroupes.
     */
    distinct?: EtudiantGroupeScalarFieldEnum | EtudiantGroupeScalarFieldEnum[]
  }

  /**
   * EtudiantGroupe findFirstOrThrow
   */
  export type EtudiantGroupeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EtudiantGroupe
     */
    select?: EtudiantGroupeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EtudiantGroupe
     */
    omit?: EtudiantGroupeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtudiantGroupeInclude<ExtArgs> | null
    /**
     * Filter, which EtudiantGroupe to fetch.
     */
    where?: EtudiantGroupeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EtudiantGroupes to fetch.
     */
    orderBy?: EtudiantGroupeOrderByWithRelationInput | EtudiantGroupeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EtudiantGroupes.
     */
    cursor?: EtudiantGroupeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EtudiantGroupes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EtudiantGroupes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EtudiantGroupes.
     */
    distinct?: EtudiantGroupeScalarFieldEnum | EtudiantGroupeScalarFieldEnum[]
  }

  /**
   * EtudiantGroupe findMany
   */
  export type EtudiantGroupeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EtudiantGroupe
     */
    select?: EtudiantGroupeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EtudiantGroupe
     */
    omit?: EtudiantGroupeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtudiantGroupeInclude<ExtArgs> | null
    /**
     * Filter, which EtudiantGroupes to fetch.
     */
    where?: EtudiantGroupeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EtudiantGroupes to fetch.
     */
    orderBy?: EtudiantGroupeOrderByWithRelationInput | EtudiantGroupeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EtudiantGroupes.
     */
    cursor?: EtudiantGroupeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EtudiantGroupes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EtudiantGroupes.
     */
    skip?: number
    distinct?: EtudiantGroupeScalarFieldEnum | EtudiantGroupeScalarFieldEnum[]
  }

  /**
   * EtudiantGroupe create
   */
  export type EtudiantGroupeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EtudiantGroupe
     */
    select?: EtudiantGroupeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EtudiantGroupe
     */
    omit?: EtudiantGroupeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtudiantGroupeInclude<ExtArgs> | null
    /**
     * The data needed to create a EtudiantGroupe.
     */
    data: XOR<EtudiantGroupeCreateInput, EtudiantGroupeUncheckedCreateInput>
  }

  /**
   * EtudiantGroupe createMany
   */
  export type EtudiantGroupeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EtudiantGroupes.
     */
    data: EtudiantGroupeCreateManyInput | EtudiantGroupeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EtudiantGroupe createManyAndReturn
   */
  export type EtudiantGroupeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EtudiantGroupe
     */
    select?: EtudiantGroupeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EtudiantGroupe
     */
    omit?: EtudiantGroupeOmit<ExtArgs> | null
    /**
     * The data used to create many EtudiantGroupes.
     */
    data: EtudiantGroupeCreateManyInput | EtudiantGroupeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtudiantGroupeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EtudiantGroupe update
   */
  export type EtudiantGroupeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EtudiantGroupe
     */
    select?: EtudiantGroupeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EtudiantGroupe
     */
    omit?: EtudiantGroupeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtudiantGroupeInclude<ExtArgs> | null
    /**
     * The data needed to update a EtudiantGroupe.
     */
    data: XOR<EtudiantGroupeUpdateInput, EtudiantGroupeUncheckedUpdateInput>
    /**
     * Choose, which EtudiantGroupe to update.
     */
    where: EtudiantGroupeWhereUniqueInput
  }

  /**
   * EtudiantGroupe updateMany
   */
  export type EtudiantGroupeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EtudiantGroupes.
     */
    data: XOR<EtudiantGroupeUpdateManyMutationInput, EtudiantGroupeUncheckedUpdateManyInput>
    /**
     * Filter which EtudiantGroupes to update
     */
    where?: EtudiantGroupeWhereInput
    /**
     * Limit how many EtudiantGroupes to update.
     */
    limit?: number
  }

  /**
   * EtudiantGroupe updateManyAndReturn
   */
  export type EtudiantGroupeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EtudiantGroupe
     */
    select?: EtudiantGroupeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EtudiantGroupe
     */
    omit?: EtudiantGroupeOmit<ExtArgs> | null
    /**
     * The data used to update EtudiantGroupes.
     */
    data: XOR<EtudiantGroupeUpdateManyMutationInput, EtudiantGroupeUncheckedUpdateManyInput>
    /**
     * Filter which EtudiantGroupes to update
     */
    where?: EtudiantGroupeWhereInput
    /**
     * Limit how many EtudiantGroupes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtudiantGroupeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EtudiantGroupe upsert
   */
  export type EtudiantGroupeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EtudiantGroupe
     */
    select?: EtudiantGroupeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EtudiantGroupe
     */
    omit?: EtudiantGroupeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtudiantGroupeInclude<ExtArgs> | null
    /**
     * The filter to search for the EtudiantGroupe to update in case it exists.
     */
    where: EtudiantGroupeWhereUniqueInput
    /**
     * In case the EtudiantGroupe found by the `where` argument doesn't exist, create a new EtudiantGroupe with this data.
     */
    create: XOR<EtudiantGroupeCreateInput, EtudiantGroupeUncheckedCreateInput>
    /**
     * In case the EtudiantGroupe was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EtudiantGroupeUpdateInput, EtudiantGroupeUncheckedUpdateInput>
  }

  /**
   * EtudiantGroupe delete
   */
  export type EtudiantGroupeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EtudiantGroupe
     */
    select?: EtudiantGroupeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EtudiantGroupe
     */
    omit?: EtudiantGroupeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtudiantGroupeInclude<ExtArgs> | null
    /**
     * Filter which EtudiantGroupe to delete.
     */
    where: EtudiantGroupeWhereUniqueInput
  }

  /**
   * EtudiantGroupe deleteMany
   */
  export type EtudiantGroupeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EtudiantGroupes to delete
     */
    where?: EtudiantGroupeWhereInput
    /**
     * Limit how many EtudiantGroupes to delete.
     */
    limit?: number
  }

  /**
   * EtudiantGroupe without action
   */
  export type EtudiantGroupeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EtudiantGroupe
     */
    select?: EtudiantGroupeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EtudiantGroupe
     */
    omit?: EtudiantGroupeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtudiantGroupeInclude<ExtArgs> | null
  }


  /**
   * Model MessageGroupe
   */

  export type AggregateMessageGroupe = {
    _count: MessageGroupeCountAggregateOutputType | null
    _avg: MessageGroupeAvgAggregateOutputType | null
    _sum: MessageGroupeSumAggregateOutputType | null
    _min: MessageGroupeMinAggregateOutputType | null
    _max: MessageGroupeMaxAggregateOutputType | null
  }

  export type MessageGroupeAvgAggregateOutputType = {
    id: number | null
    auteurId: number | null
    groupeId: number | null
  }

  export type MessageGroupeSumAggregateOutputType = {
    id: number | null
    auteurId: number | null
    groupeId: number | null
  }

  export type MessageGroupeMinAggregateOutputType = {
    id: number | null
    contenu: string | null
    date: Date | null
    auteurId: number | null
    groupeId: number | null
  }

  export type MessageGroupeMaxAggregateOutputType = {
    id: number | null
    contenu: string | null
    date: Date | null
    auteurId: number | null
    groupeId: number | null
  }

  export type MessageGroupeCountAggregateOutputType = {
    id: number
    contenu: number
    date: number
    auteurId: number
    groupeId: number
    _all: number
  }


  export type MessageGroupeAvgAggregateInputType = {
    id?: true
    auteurId?: true
    groupeId?: true
  }

  export type MessageGroupeSumAggregateInputType = {
    id?: true
    auteurId?: true
    groupeId?: true
  }

  export type MessageGroupeMinAggregateInputType = {
    id?: true
    contenu?: true
    date?: true
    auteurId?: true
    groupeId?: true
  }

  export type MessageGroupeMaxAggregateInputType = {
    id?: true
    contenu?: true
    date?: true
    auteurId?: true
    groupeId?: true
  }

  export type MessageGroupeCountAggregateInputType = {
    id?: true
    contenu?: true
    date?: true
    auteurId?: true
    groupeId?: true
    _all?: true
  }

  export type MessageGroupeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MessageGroupe to aggregate.
     */
    where?: MessageGroupeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessageGroupes to fetch.
     */
    orderBy?: MessageGroupeOrderByWithRelationInput | MessageGroupeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessageGroupeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessageGroupes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessageGroupes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MessageGroupes
    **/
    _count?: true | MessageGroupeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MessageGroupeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MessageGroupeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageGroupeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageGroupeMaxAggregateInputType
  }

  export type GetMessageGroupeAggregateType<T extends MessageGroupeAggregateArgs> = {
        [P in keyof T & keyof AggregateMessageGroupe]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessageGroupe[P]>
      : GetScalarType<T[P], AggregateMessageGroupe[P]>
  }




  export type MessageGroupeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageGroupeWhereInput
    orderBy?: MessageGroupeOrderByWithAggregationInput | MessageGroupeOrderByWithAggregationInput[]
    by: MessageGroupeScalarFieldEnum[] | MessageGroupeScalarFieldEnum
    having?: MessageGroupeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageGroupeCountAggregateInputType | true
    _avg?: MessageGroupeAvgAggregateInputType
    _sum?: MessageGroupeSumAggregateInputType
    _min?: MessageGroupeMinAggregateInputType
    _max?: MessageGroupeMaxAggregateInputType
  }

  export type MessageGroupeGroupByOutputType = {
    id: number
    contenu: string
    date: Date
    auteurId: number
    groupeId: number
    _count: MessageGroupeCountAggregateOutputType | null
    _avg: MessageGroupeAvgAggregateOutputType | null
    _sum: MessageGroupeSumAggregateOutputType | null
    _min: MessageGroupeMinAggregateOutputType | null
    _max: MessageGroupeMaxAggregateOutputType | null
  }

  type GetMessageGroupeGroupByPayload<T extends MessageGroupeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessageGroupeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageGroupeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageGroupeGroupByOutputType[P]>
            : GetScalarType<T[P], MessageGroupeGroupByOutputType[P]>
        }
      >
    >


  export type MessageGroupeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contenu?: boolean
    date?: boolean
    auteurId?: boolean
    groupeId?: boolean
    auteur?: boolean | EtudiantDefaultArgs<ExtArgs>
    groupe?: boolean | GroupeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["messageGroupe"]>

  export type MessageGroupeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contenu?: boolean
    date?: boolean
    auteurId?: boolean
    groupeId?: boolean
    auteur?: boolean | EtudiantDefaultArgs<ExtArgs>
    groupe?: boolean | GroupeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["messageGroupe"]>

  export type MessageGroupeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contenu?: boolean
    date?: boolean
    auteurId?: boolean
    groupeId?: boolean
    auteur?: boolean | EtudiantDefaultArgs<ExtArgs>
    groupe?: boolean | GroupeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["messageGroupe"]>

  export type MessageGroupeSelectScalar = {
    id?: boolean
    contenu?: boolean
    date?: boolean
    auteurId?: boolean
    groupeId?: boolean
  }

  export type MessageGroupeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "contenu" | "date" | "auteurId" | "groupeId", ExtArgs["result"]["messageGroupe"]>
  export type MessageGroupeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auteur?: boolean | EtudiantDefaultArgs<ExtArgs>
    groupe?: boolean | GroupeDefaultArgs<ExtArgs>
  }
  export type MessageGroupeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auteur?: boolean | EtudiantDefaultArgs<ExtArgs>
    groupe?: boolean | GroupeDefaultArgs<ExtArgs>
  }
  export type MessageGroupeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auteur?: boolean | EtudiantDefaultArgs<ExtArgs>
    groupe?: boolean | GroupeDefaultArgs<ExtArgs>
  }

  export type $MessageGroupePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MessageGroupe"
    objects: {
      auteur: Prisma.$EtudiantPayload<ExtArgs>
      groupe: Prisma.$GroupePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      contenu: string
      date: Date
      auteurId: number
      groupeId: number
    }, ExtArgs["result"]["messageGroupe"]>
    composites: {}
  }

  type MessageGroupeGetPayload<S extends boolean | null | undefined | MessageGroupeDefaultArgs> = $Result.GetResult<Prisma.$MessageGroupePayload, S>

  type MessageGroupeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MessageGroupeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessageGroupeCountAggregateInputType | true
    }

  export interface MessageGroupeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MessageGroupe'], meta: { name: 'MessageGroupe' } }
    /**
     * Find zero or one MessageGroupe that matches the filter.
     * @param {MessageGroupeFindUniqueArgs} args - Arguments to find a MessageGroupe
     * @example
     * // Get one MessageGroupe
     * const messageGroupe = await prisma.messageGroupe.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MessageGroupeFindUniqueArgs>(args: SelectSubset<T, MessageGroupeFindUniqueArgs<ExtArgs>>): Prisma__MessageGroupeClient<$Result.GetResult<Prisma.$MessageGroupePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MessageGroupe that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MessageGroupeFindUniqueOrThrowArgs} args - Arguments to find a MessageGroupe
     * @example
     * // Get one MessageGroupe
     * const messageGroupe = await prisma.messageGroupe.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MessageGroupeFindUniqueOrThrowArgs>(args: SelectSubset<T, MessageGroupeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MessageGroupeClient<$Result.GetResult<Prisma.$MessageGroupePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MessageGroupe that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageGroupeFindFirstArgs} args - Arguments to find a MessageGroupe
     * @example
     * // Get one MessageGroupe
     * const messageGroupe = await prisma.messageGroupe.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MessageGroupeFindFirstArgs>(args?: SelectSubset<T, MessageGroupeFindFirstArgs<ExtArgs>>): Prisma__MessageGroupeClient<$Result.GetResult<Prisma.$MessageGroupePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MessageGroupe that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageGroupeFindFirstOrThrowArgs} args - Arguments to find a MessageGroupe
     * @example
     * // Get one MessageGroupe
     * const messageGroupe = await prisma.messageGroupe.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MessageGroupeFindFirstOrThrowArgs>(args?: SelectSubset<T, MessageGroupeFindFirstOrThrowArgs<ExtArgs>>): Prisma__MessageGroupeClient<$Result.GetResult<Prisma.$MessageGroupePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MessageGroupes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageGroupeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MessageGroupes
     * const messageGroupes = await prisma.messageGroupe.findMany()
     * 
     * // Get first 10 MessageGroupes
     * const messageGroupes = await prisma.messageGroupe.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messageGroupeWithIdOnly = await prisma.messageGroupe.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MessageGroupeFindManyArgs>(args?: SelectSubset<T, MessageGroupeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessageGroupePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MessageGroupe.
     * @param {MessageGroupeCreateArgs} args - Arguments to create a MessageGroupe.
     * @example
     * // Create one MessageGroupe
     * const MessageGroupe = await prisma.messageGroupe.create({
     *   data: {
     *     // ... data to create a MessageGroupe
     *   }
     * })
     * 
     */
    create<T extends MessageGroupeCreateArgs>(args: SelectSubset<T, MessageGroupeCreateArgs<ExtArgs>>): Prisma__MessageGroupeClient<$Result.GetResult<Prisma.$MessageGroupePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MessageGroupes.
     * @param {MessageGroupeCreateManyArgs} args - Arguments to create many MessageGroupes.
     * @example
     * // Create many MessageGroupes
     * const messageGroupe = await prisma.messageGroupe.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MessageGroupeCreateManyArgs>(args?: SelectSubset<T, MessageGroupeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MessageGroupes and returns the data saved in the database.
     * @param {MessageGroupeCreateManyAndReturnArgs} args - Arguments to create many MessageGroupes.
     * @example
     * // Create many MessageGroupes
     * const messageGroupe = await prisma.messageGroupe.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MessageGroupes and only return the `id`
     * const messageGroupeWithIdOnly = await prisma.messageGroupe.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MessageGroupeCreateManyAndReturnArgs>(args?: SelectSubset<T, MessageGroupeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessageGroupePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MessageGroupe.
     * @param {MessageGroupeDeleteArgs} args - Arguments to delete one MessageGroupe.
     * @example
     * // Delete one MessageGroupe
     * const MessageGroupe = await prisma.messageGroupe.delete({
     *   where: {
     *     // ... filter to delete one MessageGroupe
     *   }
     * })
     * 
     */
    delete<T extends MessageGroupeDeleteArgs>(args: SelectSubset<T, MessageGroupeDeleteArgs<ExtArgs>>): Prisma__MessageGroupeClient<$Result.GetResult<Prisma.$MessageGroupePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MessageGroupe.
     * @param {MessageGroupeUpdateArgs} args - Arguments to update one MessageGroupe.
     * @example
     * // Update one MessageGroupe
     * const messageGroupe = await prisma.messageGroupe.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MessageGroupeUpdateArgs>(args: SelectSubset<T, MessageGroupeUpdateArgs<ExtArgs>>): Prisma__MessageGroupeClient<$Result.GetResult<Prisma.$MessageGroupePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MessageGroupes.
     * @param {MessageGroupeDeleteManyArgs} args - Arguments to filter MessageGroupes to delete.
     * @example
     * // Delete a few MessageGroupes
     * const { count } = await prisma.messageGroupe.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MessageGroupeDeleteManyArgs>(args?: SelectSubset<T, MessageGroupeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MessageGroupes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageGroupeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MessageGroupes
     * const messageGroupe = await prisma.messageGroupe.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MessageGroupeUpdateManyArgs>(args: SelectSubset<T, MessageGroupeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MessageGroupes and returns the data updated in the database.
     * @param {MessageGroupeUpdateManyAndReturnArgs} args - Arguments to update many MessageGroupes.
     * @example
     * // Update many MessageGroupes
     * const messageGroupe = await prisma.messageGroupe.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MessageGroupes and only return the `id`
     * const messageGroupeWithIdOnly = await prisma.messageGroupe.updateManyAndReturn({
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
    updateManyAndReturn<T extends MessageGroupeUpdateManyAndReturnArgs>(args: SelectSubset<T, MessageGroupeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessageGroupePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MessageGroupe.
     * @param {MessageGroupeUpsertArgs} args - Arguments to update or create a MessageGroupe.
     * @example
     * // Update or create a MessageGroupe
     * const messageGroupe = await prisma.messageGroupe.upsert({
     *   create: {
     *     // ... data to create a MessageGroupe
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MessageGroupe we want to update
     *   }
     * })
     */
    upsert<T extends MessageGroupeUpsertArgs>(args: SelectSubset<T, MessageGroupeUpsertArgs<ExtArgs>>): Prisma__MessageGroupeClient<$Result.GetResult<Prisma.$MessageGroupePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MessageGroupes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageGroupeCountArgs} args - Arguments to filter MessageGroupes to count.
     * @example
     * // Count the number of MessageGroupes
     * const count = await prisma.messageGroupe.count({
     *   where: {
     *     // ... the filter for the MessageGroupes we want to count
     *   }
     * })
    **/
    count<T extends MessageGroupeCountArgs>(
      args?: Subset<T, MessageGroupeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageGroupeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MessageGroupe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageGroupeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MessageGroupeAggregateArgs>(args: Subset<T, MessageGroupeAggregateArgs>): Prisma.PrismaPromise<GetMessageGroupeAggregateType<T>>

    /**
     * Group by MessageGroupe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageGroupeGroupByArgs} args - Group by arguments.
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
      T extends MessageGroupeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageGroupeGroupByArgs['orderBy'] }
        : { orderBy?: MessageGroupeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MessageGroupeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageGroupeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MessageGroupe model
   */
  readonly fields: MessageGroupeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MessageGroupe.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessageGroupeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    auteur<T extends EtudiantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EtudiantDefaultArgs<ExtArgs>>): Prisma__EtudiantClient<$Result.GetResult<Prisma.$EtudiantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    groupe<T extends GroupeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GroupeDefaultArgs<ExtArgs>>): Prisma__GroupeClient<$Result.GetResult<Prisma.$GroupePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the MessageGroupe model
   */
  interface MessageGroupeFieldRefs {
    readonly id: FieldRef<"MessageGroupe", 'Int'>
    readonly contenu: FieldRef<"MessageGroupe", 'String'>
    readonly date: FieldRef<"MessageGroupe", 'DateTime'>
    readonly auteurId: FieldRef<"MessageGroupe", 'Int'>
    readonly groupeId: FieldRef<"MessageGroupe", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * MessageGroupe findUnique
   */
  export type MessageGroupeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageGroupe
     */
    select?: MessageGroupeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageGroupe
     */
    omit?: MessageGroupeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageGroupeInclude<ExtArgs> | null
    /**
     * Filter, which MessageGroupe to fetch.
     */
    where: MessageGroupeWhereUniqueInput
  }

  /**
   * MessageGroupe findUniqueOrThrow
   */
  export type MessageGroupeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageGroupe
     */
    select?: MessageGroupeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageGroupe
     */
    omit?: MessageGroupeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageGroupeInclude<ExtArgs> | null
    /**
     * Filter, which MessageGroupe to fetch.
     */
    where: MessageGroupeWhereUniqueInput
  }

  /**
   * MessageGroupe findFirst
   */
  export type MessageGroupeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageGroupe
     */
    select?: MessageGroupeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageGroupe
     */
    omit?: MessageGroupeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageGroupeInclude<ExtArgs> | null
    /**
     * Filter, which MessageGroupe to fetch.
     */
    where?: MessageGroupeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessageGroupes to fetch.
     */
    orderBy?: MessageGroupeOrderByWithRelationInput | MessageGroupeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MessageGroupes.
     */
    cursor?: MessageGroupeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessageGroupes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessageGroupes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MessageGroupes.
     */
    distinct?: MessageGroupeScalarFieldEnum | MessageGroupeScalarFieldEnum[]
  }

  /**
   * MessageGroupe findFirstOrThrow
   */
  export type MessageGroupeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageGroupe
     */
    select?: MessageGroupeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageGroupe
     */
    omit?: MessageGroupeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageGroupeInclude<ExtArgs> | null
    /**
     * Filter, which MessageGroupe to fetch.
     */
    where?: MessageGroupeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessageGroupes to fetch.
     */
    orderBy?: MessageGroupeOrderByWithRelationInput | MessageGroupeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MessageGroupes.
     */
    cursor?: MessageGroupeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessageGroupes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessageGroupes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MessageGroupes.
     */
    distinct?: MessageGroupeScalarFieldEnum | MessageGroupeScalarFieldEnum[]
  }

  /**
   * MessageGroupe findMany
   */
  export type MessageGroupeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageGroupe
     */
    select?: MessageGroupeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageGroupe
     */
    omit?: MessageGroupeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageGroupeInclude<ExtArgs> | null
    /**
     * Filter, which MessageGroupes to fetch.
     */
    where?: MessageGroupeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessageGroupes to fetch.
     */
    orderBy?: MessageGroupeOrderByWithRelationInput | MessageGroupeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MessageGroupes.
     */
    cursor?: MessageGroupeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessageGroupes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessageGroupes.
     */
    skip?: number
    distinct?: MessageGroupeScalarFieldEnum | MessageGroupeScalarFieldEnum[]
  }

  /**
   * MessageGroupe create
   */
  export type MessageGroupeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageGroupe
     */
    select?: MessageGroupeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageGroupe
     */
    omit?: MessageGroupeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageGroupeInclude<ExtArgs> | null
    /**
     * The data needed to create a MessageGroupe.
     */
    data: XOR<MessageGroupeCreateInput, MessageGroupeUncheckedCreateInput>
  }

  /**
   * MessageGroupe createMany
   */
  export type MessageGroupeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MessageGroupes.
     */
    data: MessageGroupeCreateManyInput | MessageGroupeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MessageGroupe createManyAndReturn
   */
  export type MessageGroupeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageGroupe
     */
    select?: MessageGroupeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MessageGroupe
     */
    omit?: MessageGroupeOmit<ExtArgs> | null
    /**
     * The data used to create many MessageGroupes.
     */
    data: MessageGroupeCreateManyInput | MessageGroupeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageGroupeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MessageGroupe update
   */
  export type MessageGroupeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageGroupe
     */
    select?: MessageGroupeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageGroupe
     */
    omit?: MessageGroupeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageGroupeInclude<ExtArgs> | null
    /**
     * The data needed to update a MessageGroupe.
     */
    data: XOR<MessageGroupeUpdateInput, MessageGroupeUncheckedUpdateInput>
    /**
     * Choose, which MessageGroupe to update.
     */
    where: MessageGroupeWhereUniqueInput
  }

  /**
   * MessageGroupe updateMany
   */
  export type MessageGroupeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MessageGroupes.
     */
    data: XOR<MessageGroupeUpdateManyMutationInput, MessageGroupeUncheckedUpdateManyInput>
    /**
     * Filter which MessageGroupes to update
     */
    where?: MessageGroupeWhereInput
    /**
     * Limit how many MessageGroupes to update.
     */
    limit?: number
  }

  /**
   * MessageGroupe updateManyAndReturn
   */
  export type MessageGroupeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageGroupe
     */
    select?: MessageGroupeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MessageGroupe
     */
    omit?: MessageGroupeOmit<ExtArgs> | null
    /**
     * The data used to update MessageGroupes.
     */
    data: XOR<MessageGroupeUpdateManyMutationInput, MessageGroupeUncheckedUpdateManyInput>
    /**
     * Filter which MessageGroupes to update
     */
    where?: MessageGroupeWhereInput
    /**
     * Limit how many MessageGroupes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageGroupeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MessageGroupe upsert
   */
  export type MessageGroupeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageGroupe
     */
    select?: MessageGroupeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageGroupe
     */
    omit?: MessageGroupeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageGroupeInclude<ExtArgs> | null
    /**
     * The filter to search for the MessageGroupe to update in case it exists.
     */
    where: MessageGroupeWhereUniqueInput
    /**
     * In case the MessageGroupe found by the `where` argument doesn't exist, create a new MessageGroupe with this data.
     */
    create: XOR<MessageGroupeCreateInput, MessageGroupeUncheckedCreateInput>
    /**
     * In case the MessageGroupe was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageGroupeUpdateInput, MessageGroupeUncheckedUpdateInput>
  }

  /**
   * MessageGroupe delete
   */
  export type MessageGroupeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageGroupe
     */
    select?: MessageGroupeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageGroupe
     */
    omit?: MessageGroupeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageGroupeInclude<ExtArgs> | null
    /**
     * Filter which MessageGroupe to delete.
     */
    where: MessageGroupeWhereUniqueInput
  }

  /**
   * MessageGroupe deleteMany
   */
  export type MessageGroupeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MessageGroupes to delete
     */
    where?: MessageGroupeWhereInput
    /**
     * Limit how many MessageGroupes to delete.
     */
    limit?: number
  }

  /**
   * MessageGroupe without action
   */
  export type MessageGroupeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageGroupe
     */
    select?: MessageGroupeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageGroupe
     */
    omit?: MessageGroupeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageGroupeInclude<ExtArgs> | null
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


  export const EtudiantScalarFieldEnum: {
    id: 'id',
    prenom: 'prenom',
    nom: 'nom',
    email: 'email',
    motDePasse: 'motDePasse',
    dateInscription: 'dateInscription',
    image: 'image',
    accessToken: 'accessToken',
    refreshToken: 'refreshToken',
    isAuthGoogle: 'isAuthGoogle',
    otpCode: 'otpCode',
    otpExpiresAt: 'otpExpiresAt'
  };

  export type EtudiantScalarFieldEnum = (typeof EtudiantScalarFieldEnum)[keyof typeof EtudiantScalarFieldEnum]


  export const MessageScalarFieldEnum: {
    id: 'id',
    contenu: 'contenu',
    date: 'date',
    etudiantId: 'etudiantId'
  };

  export type MessageScalarFieldEnum = (typeof MessageScalarFieldEnum)[keyof typeof MessageScalarFieldEnum]


  export const RecevoireScalarFieldEnum: {
    etudiantId: 'etudiantId',
    messageId: 'messageId'
  };

  export type RecevoireScalarFieldEnum = (typeof RecevoireScalarFieldEnum)[keyof typeof RecevoireScalarFieldEnum]


  export const AnnonceScalarFieldEnum: {
    id: 'id',
    titre: 'titre',
    contenu: 'contenu',
    image: 'image',
    dateDePublication: 'dateDePublication',
    etudiantId: 'etudiantId'
  };

  export type AnnonceScalarFieldEnum = (typeof AnnonceScalarFieldEnum)[keyof typeof AnnonceScalarFieldEnum]


  export const CommentaireScalarFieldEnum: {
    id: 'id',
    date: 'date',
    etudiantId: 'etudiantId',
    annonceId: 'annonceId',
    contenu: 'contenu'
  };

  export type CommentaireScalarFieldEnum = (typeof CommentaireScalarFieldEnum)[keyof typeof CommentaireScalarFieldEnum]


  export const SignalerScalarFieldEnum: {
    annonceId: 'annonceId',
    etudiantId: 'etudiantId'
  };

  export type SignalerScalarFieldEnum = (typeof SignalerScalarFieldEnum)[keyof typeof SignalerScalarFieldEnum]


  export const AmitieScalarFieldEnum: {
    id: 'id',
    demandeurId: 'demandeurId',
    receveurId: 'receveurId',
    statut: 'statut',
    dateDemande: 'dateDemande',
    dateAcceptation: 'dateAcceptation'
  };

  export type AmitieScalarFieldEnum = (typeof AmitieScalarFieldEnum)[keyof typeof AmitieScalarFieldEnum]


  export const GroupeScalarFieldEnum: {
    id: 'id',
    nom: 'nom',
    createdAt: 'createdAt'
  };

  export type GroupeScalarFieldEnum = (typeof GroupeScalarFieldEnum)[keyof typeof GroupeScalarFieldEnum]


  export const EtudiantGroupeScalarFieldEnum: {
    etudiantId: 'etudiantId',
    groupeId: 'groupeId'
  };

  export type EtudiantGroupeScalarFieldEnum = (typeof EtudiantGroupeScalarFieldEnum)[keyof typeof EtudiantGroupeScalarFieldEnum]


  export const MessageGroupeScalarFieldEnum: {
    id: 'id',
    contenu: 'contenu',
    date: 'date',
    auteurId: 'auteurId',
    groupeId: 'groupeId'
  };

  export type MessageGroupeScalarFieldEnum = (typeof MessageGroupeScalarFieldEnum)[keyof typeof MessageGroupeScalarFieldEnum]


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


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'StatutAmitie'
   */
  export type EnumStatutAmitieFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatutAmitie'>
    


  /**
   * Reference to a field of type 'StatutAmitie[]'
   */
  export type ListEnumStatutAmitieFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatutAmitie[]'>
    


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


  export type EtudiantWhereInput = {
    AND?: EtudiantWhereInput | EtudiantWhereInput[]
    OR?: EtudiantWhereInput[]
    NOT?: EtudiantWhereInput | EtudiantWhereInput[]
    id?: IntFilter<"Etudiant"> | number
    prenom?: StringNullableFilter<"Etudiant"> | string | null
    nom?: StringFilter<"Etudiant"> | string
    email?: StringFilter<"Etudiant"> | string
    motDePasse?: StringFilter<"Etudiant"> | string
    dateInscription?: DateTimeFilter<"Etudiant"> | Date | string
    image?: StringNullableFilter<"Etudiant"> | string | null
    accessToken?: StringNullableFilter<"Etudiant"> | string | null
    refreshToken?: StringNullableFilter<"Etudiant"> | string | null
    isAuthGoogle?: BoolFilter<"Etudiant"> | boolean
    otpCode?: StringNullableFilter<"Etudiant"> | string | null
    otpExpiresAt?: DateTimeNullableFilter<"Etudiant"> | Date | string | null
    messagesEnvoyes?: MessageListRelationFilter
    messagesRecus?: RecevoireListRelationFilter
    annonces?: AnnonceListRelationFilter
    commentaires?: CommentaireListRelationFilter
    signalements?: SignalerListRelationFilter
    demandesEnvoyees?: AmitieListRelationFilter
    demandesRecues?: AmitieListRelationFilter
    groupes?: EtudiantGroupeListRelationFilter
    messagesGroupes?: MessageGroupeListRelationFilter
  }

  export type EtudiantOrderByWithRelationInput = {
    id?: SortOrder
    prenom?: SortOrderInput | SortOrder
    nom?: SortOrder
    email?: SortOrder
    motDePasse?: SortOrder
    dateInscription?: SortOrder
    image?: SortOrderInput | SortOrder
    accessToken?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    isAuthGoogle?: SortOrder
    otpCode?: SortOrderInput | SortOrder
    otpExpiresAt?: SortOrderInput | SortOrder
    messagesEnvoyes?: MessageOrderByRelationAggregateInput
    messagesRecus?: RecevoireOrderByRelationAggregateInput
    annonces?: AnnonceOrderByRelationAggregateInput
    commentaires?: CommentaireOrderByRelationAggregateInput
    signalements?: SignalerOrderByRelationAggregateInput
    demandesEnvoyees?: AmitieOrderByRelationAggregateInput
    demandesRecues?: AmitieOrderByRelationAggregateInput
    groupes?: EtudiantGroupeOrderByRelationAggregateInput
    messagesGroupes?: MessageGroupeOrderByRelationAggregateInput
  }

  export type EtudiantWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: EtudiantWhereInput | EtudiantWhereInput[]
    OR?: EtudiantWhereInput[]
    NOT?: EtudiantWhereInput | EtudiantWhereInput[]
    prenom?: StringNullableFilter<"Etudiant"> | string | null
    nom?: StringFilter<"Etudiant"> | string
    motDePasse?: StringFilter<"Etudiant"> | string
    dateInscription?: DateTimeFilter<"Etudiant"> | Date | string
    image?: StringNullableFilter<"Etudiant"> | string | null
    accessToken?: StringNullableFilter<"Etudiant"> | string | null
    refreshToken?: StringNullableFilter<"Etudiant"> | string | null
    isAuthGoogle?: BoolFilter<"Etudiant"> | boolean
    otpCode?: StringNullableFilter<"Etudiant"> | string | null
    otpExpiresAt?: DateTimeNullableFilter<"Etudiant"> | Date | string | null
    messagesEnvoyes?: MessageListRelationFilter
    messagesRecus?: RecevoireListRelationFilter
    annonces?: AnnonceListRelationFilter
    commentaires?: CommentaireListRelationFilter
    signalements?: SignalerListRelationFilter
    demandesEnvoyees?: AmitieListRelationFilter
    demandesRecues?: AmitieListRelationFilter
    groupes?: EtudiantGroupeListRelationFilter
    messagesGroupes?: MessageGroupeListRelationFilter
  }, "id" | "email">

  export type EtudiantOrderByWithAggregationInput = {
    id?: SortOrder
    prenom?: SortOrderInput | SortOrder
    nom?: SortOrder
    email?: SortOrder
    motDePasse?: SortOrder
    dateInscription?: SortOrder
    image?: SortOrderInput | SortOrder
    accessToken?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    isAuthGoogle?: SortOrder
    otpCode?: SortOrderInput | SortOrder
    otpExpiresAt?: SortOrderInput | SortOrder
    _count?: EtudiantCountOrderByAggregateInput
    _avg?: EtudiantAvgOrderByAggregateInput
    _max?: EtudiantMaxOrderByAggregateInput
    _min?: EtudiantMinOrderByAggregateInput
    _sum?: EtudiantSumOrderByAggregateInput
  }

  export type EtudiantScalarWhereWithAggregatesInput = {
    AND?: EtudiantScalarWhereWithAggregatesInput | EtudiantScalarWhereWithAggregatesInput[]
    OR?: EtudiantScalarWhereWithAggregatesInput[]
    NOT?: EtudiantScalarWhereWithAggregatesInput | EtudiantScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Etudiant"> | number
    prenom?: StringNullableWithAggregatesFilter<"Etudiant"> | string | null
    nom?: StringWithAggregatesFilter<"Etudiant"> | string
    email?: StringWithAggregatesFilter<"Etudiant"> | string
    motDePasse?: StringWithAggregatesFilter<"Etudiant"> | string
    dateInscription?: DateTimeWithAggregatesFilter<"Etudiant"> | Date | string
    image?: StringNullableWithAggregatesFilter<"Etudiant"> | string | null
    accessToken?: StringNullableWithAggregatesFilter<"Etudiant"> | string | null
    refreshToken?: StringNullableWithAggregatesFilter<"Etudiant"> | string | null
    isAuthGoogle?: BoolWithAggregatesFilter<"Etudiant"> | boolean
    otpCode?: StringNullableWithAggregatesFilter<"Etudiant"> | string | null
    otpExpiresAt?: DateTimeNullableWithAggregatesFilter<"Etudiant"> | Date | string | null
  }

  export type MessageWhereInput = {
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    id?: IntFilter<"Message"> | number
    contenu?: StringNullableFilter<"Message"> | string | null
    date?: DateTimeFilter<"Message"> | Date | string
    etudiantId?: IntFilter<"Message"> | number
    etudiant?: XOR<EtudiantScalarRelationFilter, EtudiantWhereInput>
    receveurs?: RecevoireListRelationFilter
  }

  export type MessageOrderByWithRelationInput = {
    id?: SortOrder
    contenu?: SortOrderInput | SortOrder
    date?: SortOrder
    etudiantId?: SortOrder
    etudiant?: EtudiantOrderByWithRelationInput
    receveurs?: RecevoireOrderByRelationAggregateInput
  }

  export type MessageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    contenu?: StringNullableFilter<"Message"> | string | null
    date?: DateTimeFilter<"Message"> | Date | string
    etudiantId?: IntFilter<"Message"> | number
    etudiant?: XOR<EtudiantScalarRelationFilter, EtudiantWhereInput>
    receveurs?: RecevoireListRelationFilter
  }, "id">

  export type MessageOrderByWithAggregationInput = {
    id?: SortOrder
    contenu?: SortOrderInput | SortOrder
    date?: SortOrder
    etudiantId?: SortOrder
    _count?: MessageCountOrderByAggregateInput
    _avg?: MessageAvgOrderByAggregateInput
    _max?: MessageMaxOrderByAggregateInput
    _min?: MessageMinOrderByAggregateInput
    _sum?: MessageSumOrderByAggregateInput
  }

  export type MessageScalarWhereWithAggregatesInput = {
    AND?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    OR?: MessageScalarWhereWithAggregatesInput[]
    NOT?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Message"> | number
    contenu?: StringNullableWithAggregatesFilter<"Message"> | string | null
    date?: DateTimeWithAggregatesFilter<"Message"> | Date | string
    etudiantId?: IntWithAggregatesFilter<"Message"> | number
  }

  export type RecevoireWhereInput = {
    AND?: RecevoireWhereInput | RecevoireWhereInput[]
    OR?: RecevoireWhereInput[]
    NOT?: RecevoireWhereInput | RecevoireWhereInput[]
    etudiantId?: IntFilter<"Recevoire"> | number
    messageId?: IntFilter<"Recevoire"> | number
    etudiant?: XOR<EtudiantScalarRelationFilter, EtudiantWhereInput>
    message?: XOR<MessageScalarRelationFilter, MessageWhereInput>
  }

  export type RecevoireOrderByWithRelationInput = {
    etudiantId?: SortOrder
    messageId?: SortOrder
    etudiant?: EtudiantOrderByWithRelationInput
    message?: MessageOrderByWithRelationInput
  }

  export type RecevoireWhereUniqueInput = Prisma.AtLeast<{
    etudiantId_messageId?: RecevoireEtudiantIdMessageIdCompoundUniqueInput
    AND?: RecevoireWhereInput | RecevoireWhereInput[]
    OR?: RecevoireWhereInput[]
    NOT?: RecevoireWhereInput | RecevoireWhereInput[]
    etudiantId?: IntFilter<"Recevoire"> | number
    messageId?: IntFilter<"Recevoire"> | number
    etudiant?: XOR<EtudiantScalarRelationFilter, EtudiantWhereInput>
    message?: XOR<MessageScalarRelationFilter, MessageWhereInput>
  }, "etudiantId_messageId">

  export type RecevoireOrderByWithAggregationInput = {
    etudiantId?: SortOrder
    messageId?: SortOrder
    _count?: RecevoireCountOrderByAggregateInput
    _avg?: RecevoireAvgOrderByAggregateInput
    _max?: RecevoireMaxOrderByAggregateInput
    _min?: RecevoireMinOrderByAggregateInput
    _sum?: RecevoireSumOrderByAggregateInput
  }

  export type RecevoireScalarWhereWithAggregatesInput = {
    AND?: RecevoireScalarWhereWithAggregatesInput | RecevoireScalarWhereWithAggregatesInput[]
    OR?: RecevoireScalarWhereWithAggregatesInput[]
    NOT?: RecevoireScalarWhereWithAggregatesInput | RecevoireScalarWhereWithAggregatesInput[]
    etudiantId?: IntWithAggregatesFilter<"Recevoire"> | number
    messageId?: IntWithAggregatesFilter<"Recevoire"> | number
  }

  export type AnnonceWhereInput = {
    AND?: AnnonceWhereInput | AnnonceWhereInput[]
    OR?: AnnonceWhereInput[]
    NOT?: AnnonceWhereInput | AnnonceWhereInput[]
    id?: IntFilter<"Annonce"> | number
    titre?: StringFilter<"Annonce"> | string
    contenu?: StringNullableFilter<"Annonce"> | string | null
    image?: StringNullableFilter<"Annonce"> | string | null
    dateDePublication?: DateTimeFilter<"Annonce"> | Date | string
    etudiantId?: IntNullableFilter<"Annonce"> | number | null
    auteur?: XOR<EtudiantNullableScalarRelationFilter, EtudiantWhereInput> | null
    commentaires?: CommentaireListRelationFilter
    signalements?: SignalerListRelationFilter
  }

  export type AnnonceOrderByWithRelationInput = {
    id?: SortOrder
    titre?: SortOrder
    contenu?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    dateDePublication?: SortOrder
    etudiantId?: SortOrderInput | SortOrder
    auteur?: EtudiantOrderByWithRelationInput
    commentaires?: CommentaireOrderByRelationAggregateInput
    signalements?: SignalerOrderByRelationAggregateInput
  }

  export type AnnonceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AnnonceWhereInput | AnnonceWhereInput[]
    OR?: AnnonceWhereInput[]
    NOT?: AnnonceWhereInput | AnnonceWhereInput[]
    titre?: StringFilter<"Annonce"> | string
    contenu?: StringNullableFilter<"Annonce"> | string | null
    image?: StringNullableFilter<"Annonce"> | string | null
    dateDePublication?: DateTimeFilter<"Annonce"> | Date | string
    etudiantId?: IntNullableFilter<"Annonce"> | number | null
    auteur?: XOR<EtudiantNullableScalarRelationFilter, EtudiantWhereInput> | null
    commentaires?: CommentaireListRelationFilter
    signalements?: SignalerListRelationFilter
  }, "id">

  export type AnnonceOrderByWithAggregationInput = {
    id?: SortOrder
    titre?: SortOrder
    contenu?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    dateDePublication?: SortOrder
    etudiantId?: SortOrderInput | SortOrder
    _count?: AnnonceCountOrderByAggregateInput
    _avg?: AnnonceAvgOrderByAggregateInput
    _max?: AnnonceMaxOrderByAggregateInput
    _min?: AnnonceMinOrderByAggregateInput
    _sum?: AnnonceSumOrderByAggregateInput
  }

  export type AnnonceScalarWhereWithAggregatesInput = {
    AND?: AnnonceScalarWhereWithAggregatesInput | AnnonceScalarWhereWithAggregatesInput[]
    OR?: AnnonceScalarWhereWithAggregatesInput[]
    NOT?: AnnonceScalarWhereWithAggregatesInput | AnnonceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Annonce"> | number
    titre?: StringWithAggregatesFilter<"Annonce"> | string
    contenu?: StringNullableWithAggregatesFilter<"Annonce"> | string | null
    image?: StringNullableWithAggregatesFilter<"Annonce"> | string | null
    dateDePublication?: DateTimeWithAggregatesFilter<"Annonce"> | Date | string
    etudiantId?: IntNullableWithAggregatesFilter<"Annonce"> | number | null
  }

  export type CommentaireWhereInput = {
    AND?: CommentaireWhereInput | CommentaireWhereInput[]
    OR?: CommentaireWhereInput[]
    NOT?: CommentaireWhereInput | CommentaireWhereInput[]
    id?: IntFilter<"Commentaire"> | number
    date?: DateTimeFilter<"Commentaire"> | Date | string
    etudiantId?: IntNullableFilter<"Commentaire"> | number | null
    annonceId?: IntNullableFilter<"Commentaire"> | number | null
    contenu?: StringNullableFilter<"Commentaire"> | string | null
    auteur?: XOR<EtudiantNullableScalarRelationFilter, EtudiantWhereInput> | null
    annonce?: XOR<AnnonceNullableScalarRelationFilter, AnnonceWhereInput> | null
  }

  export type CommentaireOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    etudiantId?: SortOrderInput | SortOrder
    annonceId?: SortOrderInput | SortOrder
    contenu?: SortOrderInput | SortOrder
    auteur?: EtudiantOrderByWithRelationInput
    annonce?: AnnonceOrderByWithRelationInput
  }

  export type CommentaireWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CommentaireWhereInput | CommentaireWhereInput[]
    OR?: CommentaireWhereInput[]
    NOT?: CommentaireWhereInput | CommentaireWhereInput[]
    date?: DateTimeFilter<"Commentaire"> | Date | string
    etudiantId?: IntNullableFilter<"Commentaire"> | number | null
    annonceId?: IntNullableFilter<"Commentaire"> | number | null
    contenu?: StringNullableFilter<"Commentaire"> | string | null
    auteur?: XOR<EtudiantNullableScalarRelationFilter, EtudiantWhereInput> | null
    annonce?: XOR<AnnonceNullableScalarRelationFilter, AnnonceWhereInput> | null
  }, "id">

  export type CommentaireOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    etudiantId?: SortOrderInput | SortOrder
    annonceId?: SortOrderInput | SortOrder
    contenu?: SortOrderInput | SortOrder
    _count?: CommentaireCountOrderByAggregateInput
    _avg?: CommentaireAvgOrderByAggregateInput
    _max?: CommentaireMaxOrderByAggregateInput
    _min?: CommentaireMinOrderByAggregateInput
    _sum?: CommentaireSumOrderByAggregateInput
  }

  export type CommentaireScalarWhereWithAggregatesInput = {
    AND?: CommentaireScalarWhereWithAggregatesInput | CommentaireScalarWhereWithAggregatesInput[]
    OR?: CommentaireScalarWhereWithAggregatesInput[]
    NOT?: CommentaireScalarWhereWithAggregatesInput | CommentaireScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Commentaire"> | number
    date?: DateTimeWithAggregatesFilter<"Commentaire"> | Date | string
    etudiantId?: IntNullableWithAggregatesFilter<"Commentaire"> | number | null
    annonceId?: IntNullableWithAggregatesFilter<"Commentaire"> | number | null
    contenu?: StringNullableWithAggregatesFilter<"Commentaire"> | string | null
  }

  export type SignalerWhereInput = {
    AND?: SignalerWhereInput | SignalerWhereInput[]
    OR?: SignalerWhereInput[]
    NOT?: SignalerWhereInput | SignalerWhereInput[]
    annonceId?: IntFilter<"Signaler"> | number
    etudiantId?: IntFilter<"Signaler"> | number
    annonce?: XOR<AnnonceScalarRelationFilter, AnnonceWhereInput>
    etudiant?: XOR<EtudiantScalarRelationFilter, EtudiantWhereInput>
  }

  export type SignalerOrderByWithRelationInput = {
    annonceId?: SortOrder
    etudiantId?: SortOrder
    annonce?: AnnonceOrderByWithRelationInput
    etudiant?: EtudiantOrderByWithRelationInput
  }

  export type SignalerWhereUniqueInput = Prisma.AtLeast<{
    annonceId_etudiantId?: SignalerAnnonceIdEtudiantIdCompoundUniqueInput
    AND?: SignalerWhereInput | SignalerWhereInput[]
    OR?: SignalerWhereInput[]
    NOT?: SignalerWhereInput | SignalerWhereInput[]
    annonceId?: IntFilter<"Signaler"> | number
    etudiantId?: IntFilter<"Signaler"> | number
    annonce?: XOR<AnnonceScalarRelationFilter, AnnonceWhereInput>
    etudiant?: XOR<EtudiantScalarRelationFilter, EtudiantWhereInput>
  }, "annonceId_etudiantId">

  export type SignalerOrderByWithAggregationInput = {
    annonceId?: SortOrder
    etudiantId?: SortOrder
    _count?: SignalerCountOrderByAggregateInput
    _avg?: SignalerAvgOrderByAggregateInput
    _max?: SignalerMaxOrderByAggregateInput
    _min?: SignalerMinOrderByAggregateInput
    _sum?: SignalerSumOrderByAggregateInput
  }

  export type SignalerScalarWhereWithAggregatesInput = {
    AND?: SignalerScalarWhereWithAggregatesInput | SignalerScalarWhereWithAggregatesInput[]
    OR?: SignalerScalarWhereWithAggregatesInput[]
    NOT?: SignalerScalarWhereWithAggregatesInput | SignalerScalarWhereWithAggregatesInput[]
    annonceId?: IntWithAggregatesFilter<"Signaler"> | number
    etudiantId?: IntWithAggregatesFilter<"Signaler"> | number
  }

  export type AmitieWhereInput = {
    AND?: AmitieWhereInput | AmitieWhereInput[]
    OR?: AmitieWhereInput[]
    NOT?: AmitieWhereInput | AmitieWhereInput[]
    id?: IntFilter<"Amitie"> | number
    demandeurId?: IntFilter<"Amitie"> | number
    receveurId?: IntFilter<"Amitie"> | number
    statut?: EnumStatutAmitieFilter<"Amitie"> | $Enums.StatutAmitie
    dateDemande?: DateTimeFilter<"Amitie"> | Date | string
    dateAcceptation?: DateTimeNullableFilter<"Amitie"> | Date | string | null
    demandeur?: XOR<EtudiantScalarRelationFilter, EtudiantWhereInput>
    receveur?: XOR<EtudiantScalarRelationFilter, EtudiantWhereInput>
  }

  export type AmitieOrderByWithRelationInput = {
    id?: SortOrder
    demandeurId?: SortOrder
    receveurId?: SortOrder
    statut?: SortOrder
    dateDemande?: SortOrder
    dateAcceptation?: SortOrderInput | SortOrder
    demandeur?: EtudiantOrderByWithRelationInput
    receveur?: EtudiantOrderByWithRelationInput
  }

  export type AmitieWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    demandeurId_receveurId?: AmitieDemandeurIdReceveurIdCompoundUniqueInput
    AND?: AmitieWhereInput | AmitieWhereInput[]
    OR?: AmitieWhereInput[]
    NOT?: AmitieWhereInput | AmitieWhereInput[]
    demandeurId?: IntFilter<"Amitie"> | number
    receveurId?: IntFilter<"Amitie"> | number
    statut?: EnumStatutAmitieFilter<"Amitie"> | $Enums.StatutAmitie
    dateDemande?: DateTimeFilter<"Amitie"> | Date | string
    dateAcceptation?: DateTimeNullableFilter<"Amitie"> | Date | string | null
    demandeur?: XOR<EtudiantScalarRelationFilter, EtudiantWhereInput>
    receveur?: XOR<EtudiantScalarRelationFilter, EtudiantWhereInput>
  }, "id" | "demandeurId_receveurId">

  export type AmitieOrderByWithAggregationInput = {
    id?: SortOrder
    demandeurId?: SortOrder
    receveurId?: SortOrder
    statut?: SortOrder
    dateDemande?: SortOrder
    dateAcceptation?: SortOrderInput | SortOrder
    _count?: AmitieCountOrderByAggregateInput
    _avg?: AmitieAvgOrderByAggregateInput
    _max?: AmitieMaxOrderByAggregateInput
    _min?: AmitieMinOrderByAggregateInput
    _sum?: AmitieSumOrderByAggregateInput
  }

  export type AmitieScalarWhereWithAggregatesInput = {
    AND?: AmitieScalarWhereWithAggregatesInput | AmitieScalarWhereWithAggregatesInput[]
    OR?: AmitieScalarWhereWithAggregatesInput[]
    NOT?: AmitieScalarWhereWithAggregatesInput | AmitieScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Amitie"> | number
    demandeurId?: IntWithAggregatesFilter<"Amitie"> | number
    receveurId?: IntWithAggregatesFilter<"Amitie"> | number
    statut?: EnumStatutAmitieWithAggregatesFilter<"Amitie"> | $Enums.StatutAmitie
    dateDemande?: DateTimeWithAggregatesFilter<"Amitie"> | Date | string
    dateAcceptation?: DateTimeNullableWithAggregatesFilter<"Amitie"> | Date | string | null
  }

  export type GroupeWhereInput = {
    AND?: GroupeWhereInput | GroupeWhereInput[]
    OR?: GroupeWhereInput[]
    NOT?: GroupeWhereInput | GroupeWhereInput[]
    id?: IntFilter<"Groupe"> | number
    nom?: StringFilter<"Groupe"> | string
    createdAt?: DateTimeFilter<"Groupe"> | Date | string
    membres?: EtudiantGroupeListRelationFilter
    messages?: MessageGroupeListRelationFilter
  }

  export type GroupeOrderByWithRelationInput = {
    id?: SortOrder
    nom?: SortOrder
    createdAt?: SortOrder
    membres?: EtudiantGroupeOrderByRelationAggregateInput
    messages?: MessageGroupeOrderByRelationAggregateInput
  }

  export type GroupeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: GroupeWhereInput | GroupeWhereInput[]
    OR?: GroupeWhereInput[]
    NOT?: GroupeWhereInput | GroupeWhereInput[]
    nom?: StringFilter<"Groupe"> | string
    createdAt?: DateTimeFilter<"Groupe"> | Date | string
    membres?: EtudiantGroupeListRelationFilter
    messages?: MessageGroupeListRelationFilter
  }, "id">

  export type GroupeOrderByWithAggregationInput = {
    id?: SortOrder
    nom?: SortOrder
    createdAt?: SortOrder
    _count?: GroupeCountOrderByAggregateInput
    _avg?: GroupeAvgOrderByAggregateInput
    _max?: GroupeMaxOrderByAggregateInput
    _min?: GroupeMinOrderByAggregateInput
    _sum?: GroupeSumOrderByAggregateInput
  }

  export type GroupeScalarWhereWithAggregatesInput = {
    AND?: GroupeScalarWhereWithAggregatesInput | GroupeScalarWhereWithAggregatesInput[]
    OR?: GroupeScalarWhereWithAggregatesInput[]
    NOT?: GroupeScalarWhereWithAggregatesInput | GroupeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Groupe"> | number
    nom?: StringWithAggregatesFilter<"Groupe"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Groupe"> | Date | string
  }

  export type EtudiantGroupeWhereInput = {
    AND?: EtudiantGroupeWhereInput | EtudiantGroupeWhereInput[]
    OR?: EtudiantGroupeWhereInput[]
    NOT?: EtudiantGroupeWhereInput | EtudiantGroupeWhereInput[]
    etudiantId?: IntFilter<"EtudiantGroupe"> | number
    groupeId?: IntFilter<"EtudiantGroupe"> | number
    etudiant?: XOR<EtudiantScalarRelationFilter, EtudiantWhereInput>
    groupe?: XOR<GroupeScalarRelationFilter, GroupeWhereInput>
  }

  export type EtudiantGroupeOrderByWithRelationInput = {
    etudiantId?: SortOrder
    groupeId?: SortOrder
    etudiant?: EtudiantOrderByWithRelationInput
    groupe?: GroupeOrderByWithRelationInput
  }

  export type EtudiantGroupeWhereUniqueInput = Prisma.AtLeast<{
    etudiantId_groupeId?: EtudiantGroupeEtudiantIdGroupeIdCompoundUniqueInput
    AND?: EtudiantGroupeWhereInput | EtudiantGroupeWhereInput[]
    OR?: EtudiantGroupeWhereInput[]
    NOT?: EtudiantGroupeWhereInput | EtudiantGroupeWhereInput[]
    etudiantId?: IntFilter<"EtudiantGroupe"> | number
    groupeId?: IntFilter<"EtudiantGroupe"> | number
    etudiant?: XOR<EtudiantScalarRelationFilter, EtudiantWhereInput>
    groupe?: XOR<GroupeScalarRelationFilter, GroupeWhereInput>
  }, "etudiantId_groupeId">

  export type EtudiantGroupeOrderByWithAggregationInput = {
    etudiantId?: SortOrder
    groupeId?: SortOrder
    _count?: EtudiantGroupeCountOrderByAggregateInput
    _avg?: EtudiantGroupeAvgOrderByAggregateInput
    _max?: EtudiantGroupeMaxOrderByAggregateInput
    _min?: EtudiantGroupeMinOrderByAggregateInput
    _sum?: EtudiantGroupeSumOrderByAggregateInput
  }

  export type EtudiantGroupeScalarWhereWithAggregatesInput = {
    AND?: EtudiantGroupeScalarWhereWithAggregatesInput | EtudiantGroupeScalarWhereWithAggregatesInput[]
    OR?: EtudiantGroupeScalarWhereWithAggregatesInput[]
    NOT?: EtudiantGroupeScalarWhereWithAggregatesInput | EtudiantGroupeScalarWhereWithAggregatesInput[]
    etudiantId?: IntWithAggregatesFilter<"EtudiantGroupe"> | number
    groupeId?: IntWithAggregatesFilter<"EtudiantGroupe"> | number
  }

  export type MessageGroupeWhereInput = {
    AND?: MessageGroupeWhereInput | MessageGroupeWhereInput[]
    OR?: MessageGroupeWhereInput[]
    NOT?: MessageGroupeWhereInput | MessageGroupeWhereInput[]
    id?: IntFilter<"MessageGroupe"> | number
    contenu?: StringFilter<"MessageGroupe"> | string
    date?: DateTimeFilter<"MessageGroupe"> | Date | string
    auteurId?: IntFilter<"MessageGroupe"> | number
    groupeId?: IntFilter<"MessageGroupe"> | number
    auteur?: XOR<EtudiantScalarRelationFilter, EtudiantWhereInput>
    groupe?: XOR<GroupeScalarRelationFilter, GroupeWhereInput>
  }

  export type MessageGroupeOrderByWithRelationInput = {
    id?: SortOrder
    contenu?: SortOrder
    date?: SortOrder
    auteurId?: SortOrder
    groupeId?: SortOrder
    auteur?: EtudiantOrderByWithRelationInput
    groupe?: GroupeOrderByWithRelationInput
  }

  export type MessageGroupeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MessageGroupeWhereInput | MessageGroupeWhereInput[]
    OR?: MessageGroupeWhereInput[]
    NOT?: MessageGroupeWhereInput | MessageGroupeWhereInput[]
    contenu?: StringFilter<"MessageGroupe"> | string
    date?: DateTimeFilter<"MessageGroupe"> | Date | string
    auteurId?: IntFilter<"MessageGroupe"> | number
    groupeId?: IntFilter<"MessageGroupe"> | number
    auteur?: XOR<EtudiantScalarRelationFilter, EtudiantWhereInput>
    groupe?: XOR<GroupeScalarRelationFilter, GroupeWhereInput>
  }, "id">

  export type MessageGroupeOrderByWithAggregationInput = {
    id?: SortOrder
    contenu?: SortOrder
    date?: SortOrder
    auteurId?: SortOrder
    groupeId?: SortOrder
    _count?: MessageGroupeCountOrderByAggregateInput
    _avg?: MessageGroupeAvgOrderByAggregateInput
    _max?: MessageGroupeMaxOrderByAggregateInput
    _min?: MessageGroupeMinOrderByAggregateInput
    _sum?: MessageGroupeSumOrderByAggregateInput
  }

  export type MessageGroupeScalarWhereWithAggregatesInput = {
    AND?: MessageGroupeScalarWhereWithAggregatesInput | MessageGroupeScalarWhereWithAggregatesInput[]
    OR?: MessageGroupeScalarWhereWithAggregatesInput[]
    NOT?: MessageGroupeScalarWhereWithAggregatesInput | MessageGroupeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MessageGroupe"> | number
    contenu?: StringWithAggregatesFilter<"MessageGroupe"> | string
    date?: DateTimeWithAggregatesFilter<"MessageGroupe"> | Date | string
    auteurId?: IntWithAggregatesFilter<"MessageGroupe"> | number
    groupeId?: IntWithAggregatesFilter<"MessageGroupe"> | number
  }

  export type EtudiantCreateInput = {
    prenom?: string | null
    nom: string
    email: string
    motDePasse: string
    dateInscription?: Date | string
    image?: string | null
    accessToken?: string | null
    refreshToken?: string | null
    isAuthGoogle?: boolean
    otpCode?: string | null
    otpExpiresAt?: Date | string | null
    messagesEnvoyes?: MessageCreateNestedManyWithoutEtudiantInput
    messagesRecus?: RecevoireCreateNestedManyWithoutEtudiantInput
    annonces?: AnnonceCreateNestedManyWithoutAuteurInput
    commentaires?: CommentaireCreateNestedManyWithoutAuteurInput
    signalements?: SignalerCreateNestedManyWithoutEtudiantInput
    demandesEnvoyees?: AmitieCreateNestedManyWithoutDemandeurInput
    demandesRecues?: AmitieCreateNestedManyWithoutReceveurInput
    groupes?: EtudiantGroupeCreateNestedManyWithoutEtudiantInput
    messagesGroupes?: MessageGroupeCreateNestedManyWithoutAuteurInput
  }

  export type EtudiantUncheckedCreateInput = {
    id?: number
    prenom?: string | null
    nom: string
    email: string
    motDePasse: string
    dateInscription?: Date | string
    image?: string | null
    accessToken?: string | null
    refreshToken?: string | null
    isAuthGoogle?: boolean
    otpCode?: string | null
    otpExpiresAt?: Date | string | null
    messagesEnvoyes?: MessageUncheckedCreateNestedManyWithoutEtudiantInput
    messagesRecus?: RecevoireUncheckedCreateNestedManyWithoutEtudiantInput
    annonces?: AnnonceUncheckedCreateNestedManyWithoutAuteurInput
    commentaires?: CommentaireUncheckedCreateNestedManyWithoutAuteurInput
    signalements?: SignalerUncheckedCreateNestedManyWithoutEtudiantInput
    demandesEnvoyees?: AmitieUncheckedCreateNestedManyWithoutDemandeurInput
    demandesRecues?: AmitieUncheckedCreateNestedManyWithoutReceveurInput
    groupes?: EtudiantGroupeUncheckedCreateNestedManyWithoutEtudiantInput
    messagesGroupes?: MessageGroupeUncheckedCreateNestedManyWithoutAuteurInput
  }

  export type EtudiantUpdateInput = {
    prenom?: NullableStringFieldUpdateOperationsInput | string | null
    nom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    motDePasse?: StringFieldUpdateOperationsInput | string
    dateInscription?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    isAuthGoogle?: BoolFieldUpdateOperationsInput | boolean
    otpCode?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    messagesEnvoyes?: MessageUpdateManyWithoutEtudiantNestedInput
    messagesRecus?: RecevoireUpdateManyWithoutEtudiantNestedInput
    annonces?: AnnonceUpdateManyWithoutAuteurNestedInput
    commentaires?: CommentaireUpdateManyWithoutAuteurNestedInput
    signalements?: SignalerUpdateManyWithoutEtudiantNestedInput
    demandesEnvoyees?: AmitieUpdateManyWithoutDemandeurNestedInput
    demandesRecues?: AmitieUpdateManyWithoutReceveurNestedInput
    groupes?: EtudiantGroupeUpdateManyWithoutEtudiantNestedInput
    messagesGroupes?: MessageGroupeUpdateManyWithoutAuteurNestedInput
  }

  export type EtudiantUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    prenom?: NullableStringFieldUpdateOperationsInput | string | null
    nom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    motDePasse?: StringFieldUpdateOperationsInput | string
    dateInscription?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    isAuthGoogle?: BoolFieldUpdateOperationsInput | boolean
    otpCode?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    messagesEnvoyes?: MessageUncheckedUpdateManyWithoutEtudiantNestedInput
    messagesRecus?: RecevoireUncheckedUpdateManyWithoutEtudiantNestedInput
    annonces?: AnnonceUncheckedUpdateManyWithoutAuteurNestedInput
    commentaires?: CommentaireUncheckedUpdateManyWithoutAuteurNestedInput
    signalements?: SignalerUncheckedUpdateManyWithoutEtudiantNestedInput
    demandesEnvoyees?: AmitieUncheckedUpdateManyWithoutDemandeurNestedInput
    demandesRecues?: AmitieUncheckedUpdateManyWithoutReceveurNestedInput
    groupes?: EtudiantGroupeUncheckedUpdateManyWithoutEtudiantNestedInput
    messagesGroupes?: MessageGroupeUncheckedUpdateManyWithoutAuteurNestedInput
  }

  export type EtudiantCreateManyInput = {
    id?: number
    prenom?: string | null
    nom: string
    email: string
    motDePasse: string
    dateInscription?: Date | string
    image?: string | null
    accessToken?: string | null
    refreshToken?: string | null
    isAuthGoogle?: boolean
    otpCode?: string | null
    otpExpiresAt?: Date | string | null
  }

  export type EtudiantUpdateManyMutationInput = {
    prenom?: NullableStringFieldUpdateOperationsInput | string | null
    nom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    motDePasse?: StringFieldUpdateOperationsInput | string
    dateInscription?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    isAuthGoogle?: BoolFieldUpdateOperationsInput | boolean
    otpCode?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EtudiantUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    prenom?: NullableStringFieldUpdateOperationsInput | string | null
    nom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    motDePasse?: StringFieldUpdateOperationsInput | string
    dateInscription?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    isAuthGoogle?: BoolFieldUpdateOperationsInput | boolean
    otpCode?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MessageCreateInput = {
    contenu?: string | null
    date?: Date | string
    etudiant: EtudiantCreateNestedOneWithoutMessagesEnvoyesInput
    receveurs?: RecevoireCreateNestedManyWithoutMessageInput
  }

  export type MessageUncheckedCreateInput = {
    id?: number
    contenu?: string | null
    date?: Date | string
    etudiantId: number
    receveurs?: RecevoireUncheckedCreateNestedManyWithoutMessageInput
  }

  export type MessageUpdateInput = {
    contenu?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    etudiant?: EtudiantUpdateOneRequiredWithoutMessagesEnvoyesNestedInput
    receveurs?: RecevoireUpdateManyWithoutMessageNestedInput
  }

  export type MessageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    contenu?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    etudiantId?: IntFieldUpdateOperationsInput | number
    receveurs?: RecevoireUncheckedUpdateManyWithoutMessageNestedInput
  }

  export type MessageCreateManyInput = {
    id?: number
    contenu?: string | null
    date?: Date | string
    etudiantId: number
  }

  export type MessageUpdateManyMutationInput = {
    contenu?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    contenu?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    etudiantId?: IntFieldUpdateOperationsInput | number
  }

  export type RecevoireCreateInput = {
    etudiant: EtudiantCreateNestedOneWithoutMessagesRecusInput
    message: MessageCreateNestedOneWithoutReceveursInput
  }

  export type RecevoireUncheckedCreateInput = {
    etudiantId: number
    messageId: number
  }

  export type RecevoireUpdateInput = {
    etudiant?: EtudiantUpdateOneRequiredWithoutMessagesRecusNestedInput
    message?: MessageUpdateOneRequiredWithoutReceveursNestedInput
  }

  export type RecevoireUncheckedUpdateInput = {
    etudiantId?: IntFieldUpdateOperationsInput | number
    messageId?: IntFieldUpdateOperationsInput | number
  }

  export type RecevoireCreateManyInput = {
    etudiantId: number
    messageId: number
  }

  export type RecevoireUpdateManyMutationInput = {

  }

  export type RecevoireUncheckedUpdateManyInput = {
    etudiantId?: IntFieldUpdateOperationsInput | number
    messageId?: IntFieldUpdateOperationsInput | number
  }

  export type AnnonceCreateInput = {
    titre: string
    contenu?: string | null
    image?: string | null
    dateDePublication?: Date | string
    auteur?: EtudiantCreateNestedOneWithoutAnnoncesInput
    commentaires?: CommentaireCreateNestedManyWithoutAnnonceInput
    signalements?: SignalerCreateNestedManyWithoutAnnonceInput
  }

  export type AnnonceUncheckedCreateInput = {
    id?: number
    titre: string
    contenu?: string | null
    image?: string | null
    dateDePublication?: Date | string
    etudiantId?: number | null
    commentaires?: CommentaireUncheckedCreateNestedManyWithoutAnnonceInput
    signalements?: SignalerUncheckedCreateNestedManyWithoutAnnonceInput
  }

  export type AnnonceUpdateInput = {
    titre?: StringFieldUpdateOperationsInput | string
    contenu?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    dateDePublication?: DateTimeFieldUpdateOperationsInput | Date | string
    auteur?: EtudiantUpdateOneWithoutAnnoncesNestedInput
    commentaires?: CommentaireUpdateManyWithoutAnnonceNestedInput
    signalements?: SignalerUpdateManyWithoutAnnonceNestedInput
  }

  export type AnnonceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    titre?: StringFieldUpdateOperationsInput | string
    contenu?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    dateDePublication?: DateTimeFieldUpdateOperationsInput | Date | string
    etudiantId?: NullableIntFieldUpdateOperationsInput | number | null
    commentaires?: CommentaireUncheckedUpdateManyWithoutAnnonceNestedInput
    signalements?: SignalerUncheckedUpdateManyWithoutAnnonceNestedInput
  }

  export type AnnonceCreateManyInput = {
    id?: number
    titre: string
    contenu?: string | null
    image?: string | null
    dateDePublication?: Date | string
    etudiantId?: number | null
  }

  export type AnnonceUpdateManyMutationInput = {
    titre?: StringFieldUpdateOperationsInput | string
    contenu?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    dateDePublication?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnnonceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    titre?: StringFieldUpdateOperationsInput | string
    contenu?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    dateDePublication?: DateTimeFieldUpdateOperationsInput | Date | string
    etudiantId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CommentaireCreateInput = {
    date?: Date | string
    contenu?: string | null
    auteur?: EtudiantCreateNestedOneWithoutCommentairesInput
    annonce?: AnnonceCreateNestedOneWithoutCommentairesInput
  }

  export type CommentaireUncheckedCreateInput = {
    id?: number
    date?: Date | string
    etudiantId?: number | null
    annonceId?: number | null
    contenu?: string | null
  }

  export type CommentaireUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    contenu?: NullableStringFieldUpdateOperationsInput | string | null
    auteur?: EtudiantUpdateOneWithoutCommentairesNestedInput
    annonce?: AnnonceUpdateOneWithoutCommentairesNestedInput
  }

  export type CommentaireUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    etudiantId?: NullableIntFieldUpdateOperationsInput | number | null
    annonceId?: NullableIntFieldUpdateOperationsInput | number | null
    contenu?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CommentaireCreateManyInput = {
    id?: number
    date?: Date | string
    etudiantId?: number | null
    annonceId?: number | null
    contenu?: string | null
  }

  export type CommentaireUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    contenu?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CommentaireUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    etudiantId?: NullableIntFieldUpdateOperationsInput | number | null
    annonceId?: NullableIntFieldUpdateOperationsInput | number | null
    contenu?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SignalerCreateInput = {
    annonce: AnnonceCreateNestedOneWithoutSignalementsInput
    etudiant: EtudiantCreateNestedOneWithoutSignalementsInput
  }

  export type SignalerUncheckedCreateInput = {
    annonceId: number
    etudiantId: number
  }

  export type SignalerUpdateInput = {
    annonce?: AnnonceUpdateOneRequiredWithoutSignalementsNestedInput
    etudiant?: EtudiantUpdateOneRequiredWithoutSignalementsNestedInput
  }

  export type SignalerUncheckedUpdateInput = {
    annonceId?: IntFieldUpdateOperationsInput | number
    etudiantId?: IntFieldUpdateOperationsInput | number
  }

  export type SignalerCreateManyInput = {
    annonceId: number
    etudiantId: number
  }

  export type SignalerUpdateManyMutationInput = {

  }

  export type SignalerUncheckedUpdateManyInput = {
    annonceId?: IntFieldUpdateOperationsInput | number
    etudiantId?: IntFieldUpdateOperationsInput | number
  }

  export type AmitieCreateInput = {
    statut?: $Enums.StatutAmitie
    dateDemande?: Date | string
    dateAcceptation?: Date | string | null
    demandeur: EtudiantCreateNestedOneWithoutDemandesEnvoyeesInput
    receveur: EtudiantCreateNestedOneWithoutDemandesRecuesInput
  }

  export type AmitieUncheckedCreateInput = {
    id?: number
    demandeurId: number
    receveurId: number
    statut?: $Enums.StatutAmitie
    dateDemande?: Date | string
    dateAcceptation?: Date | string | null
  }

  export type AmitieUpdateInput = {
    statut?: EnumStatutAmitieFieldUpdateOperationsInput | $Enums.StatutAmitie
    dateDemande?: DateTimeFieldUpdateOperationsInput | Date | string
    dateAcceptation?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    demandeur?: EtudiantUpdateOneRequiredWithoutDemandesEnvoyeesNestedInput
    receveur?: EtudiantUpdateOneRequiredWithoutDemandesRecuesNestedInput
  }

  export type AmitieUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    demandeurId?: IntFieldUpdateOperationsInput | number
    receveurId?: IntFieldUpdateOperationsInput | number
    statut?: EnumStatutAmitieFieldUpdateOperationsInput | $Enums.StatutAmitie
    dateDemande?: DateTimeFieldUpdateOperationsInput | Date | string
    dateAcceptation?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AmitieCreateManyInput = {
    id?: number
    demandeurId: number
    receveurId: number
    statut?: $Enums.StatutAmitie
    dateDemande?: Date | string
    dateAcceptation?: Date | string | null
  }

  export type AmitieUpdateManyMutationInput = {
    statut?: EnumStatutAmitieFieldUpdateOperationsInput | $Enums.StatutAmitie
    dateDemande?: DateTimeFieldUpdateOperationsInput | Date | string
    dateAcceptation?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AmitieUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    demandeurId?: IntFieldUpdateOperationsInput | number
    receveurId?: IntFieldUpdateOperationsInput | number
    statut?: EnumStatutAmitieFieldUpdateOperationsInput | $Enums.StatutAmitie
    dateDemande?: DateTimeFieldUpdateOperationsInput | Date | string
    dateAcceptation?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type GroupeCreateInput = {
    nom: string
    createdAt?: Date | string
    membres?: EtudiantGroupeCreateNestedManyWithoutGroupeInput
    messages?: MessageGroupeCreateNestedManyWithoutGroupeInput
  }

  export type GroupeUncheckedCreateInput = {
    id?: number
    nom: string
    createdAt?: Date | string
    membres?: EtudiantGroupeUncheckedCreateNestedManyWithoutGroupeInput
    messages?: MessageGroupeUncheckedCreateNestedManyWithoutGroupeInput
  }

  export type GroupeUpdateInput = {
    nom?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    membres?: EtudiantGroupeUpdateManyWithoutGroupeNestedInput
    messages?: MessageGroupeUpdateManyWithoutGroupeNestedInput
  }

  export type GroupeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    membres?: EtudiantGroupeUncheckedUpdateManyWithoutGroupeNestedInput
    messages?: MessageGroupeUncheckedUpdateManyWithoutGroupeNestedInput
  }

  export type GroupeCreateManyInput = {
    id?: number
    nom: string
    createdAt?: Date | string
  }

  export type GroupeUpdateManyMutationInput = {
    nom?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EtudiantGroupeCreateInput = {
    etudiant: EtudiantCreateNestedOneWithoutGroupesInput
    groupe: GroupeCreateNestedOneWithoutMembresInput
  }

  export type EtudiantGroupeUncheckedCreateInput = {
    etudiantId: number
    groupeId: number
  }

  export type EtudiantGroupeUpdateInput = {
    etudiant?: EtudiantUpdateOneRequiredWithoutGroupesNestedInput
    groupe?: GroupeUpdateOneRequiredWithoutMembresNestedInput
  }

  export type EtudiantGroupeUncheckedUpdateInput = {
    etudiantId?: IntFieldUpdateOperationsInput | number
    groupeId?: IntFieldUpdateOperationsInput | number
  }

  export type EtudiantGroupeCreateManyInput = {
    etudiantId: number
    groupeId: number
  }

  export type EtudiantGroupeUpdateManyMutationInput = {

  }

  export type EtudiantGroupeUncheckedUpdateManyInput = {
    etudiantId?: IntFieldUpdateOperationsInput | number
    groupeId?: IntFieldUpdateOperationsInput | number
  }

  export type MessageGroupeCreateInput = {
    contenu: string
    date?: Date | string
    auteur: EtudiantCreateNestedOneWithoutMessagesGroupesInput
    groupe: GroupeCreateNestedOneWithoutMessagesInput
  }

  export type MessageGroupeUncheckedCreateInput = {
    id?: number
    contenu: string
    date?: Date | string
    auteurId: number
    groupeId: number
  }

  export type MessageGroupeUpdateInput = {
    contenu?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    auteur?: EtudiantUpdateOneRequiredWithoutMessagesGroupesNestedInput
    groupe?: GroupeUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type MessageGroupeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    contenu?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    auteurId?: IntFieldUpdateOperationsInput | number
    groupeId?: IntFieldUpdateOperationsInput | number
  }

  export type MessageGroupeCreateManyInput = {
    id?: number
    contenu: string
    date?: Date | string
    auteurId: number
    groupeId: number
  }

  export type MessageGroupeUpdateManyMutationInput = {
    contenu?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageGroupeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    contenu?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    auteurId?: IntFieldUpdateOperationsInput | number
    groupeId?: IntFieldUpdateOperationsInput | number
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
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type MessageListRelationFilter = {
    every?: MessageWhereInput
    some?: MessageWhereInput
    none?: MessageWhereInput
  }

  export type RecevoireListRelationFilter = {
    every?: RecevoireWhereInput
    some?: RecevoireWhereInput
    none?: RecevoireWhereInput
  }

  export type AnnonceListRelationFilter = {
    every?: AnnonceWhereInput
    some?: AnnonceWhereInput
    none?: AnnonceWhereInput
  }

  export type CommentaireListRelationFilter = {
    every?: CommentaireWhereInput
    some?: CommentaireWhereInput
    none?: CommentaireWhereInput
  }

  export type SignalerListRelationFilter = {
    every?: SignalerWhereInput
    some?: SignalerWhereInput
    none?: SignalerWhereInput
  }

  export type AmitieListRelationFilter = {
    every?: AmitieWhereInput
    some?: AmitieWhereInput
    none?: AmitieWhereInput
  }

  export type EtudiantGroupeListRelationFilter = {
    every?: EtudiantGroupeWhereInput
    some?: EtudiantGroupeWhereInput
    none?: EtudiantGroupeWhereInput
  }

  export type MessageGroupeListRelationFilter = {
    every?: MessageGroupeWhereInput
    some?: MessageGroupeWhereInput
    none?: MessageGroupeWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type MessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RecevoireOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AnnonceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommentaireOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SignalerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AmitieOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EtudiantGroupeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MessageGroupeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EtudiantCountOrderByAggregateInput = {
    id?: SortOrder
    prenom?: SortOrder
    nom?: SortOrder
    email?: SortOrder
    motDePasse?: SortOrder
    dateInscription?: SortOrder
    image?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    isAuthGoogle?: SortOrder
    otpCode?: SortOrder
    otpExpiresAt?: SortOrder
  }

  export type EtudiantAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EtudiantMaxOrderByAggregateInput = {
    id?: SortOrder
    prenom?: SortOrder
    nom?: SortOrder
    email?: SortOrder
    motDePasse?: SortOrder
    dateInscription?: SortOrder
    image?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    isAuthGoogle?: SortOrder
    otpCode?: SortOrder
    otpExpiresAt?: SortOrder
  }

  export type EtudiantMinOrderByAggregateInput = {
    id?: SortOrder
    prenom?: SortOrder
    nom?: SortOrder
    email?: SortOrder
    motDePasse?: SortOrder
    dateInscription?: SortOrder
    image?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    isAuthGoogle?: SortOrder
    otpCode?: SortOrder
    otpExpiresAt?: SortOrder
  }

  export type EtudiantSumOrderByAggregateInput = {
    id?: SortOrder
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
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EtudiantScalarRelationFilter = {
    is?: EtudiantWhereInput
    isNot?: EtudiantWhereInput
  }

  export type MessageCountOrderByAggregateInput = {
    id?: SortOrder
    contenu?: SortOrder
    date?: SortOrder
    etudiantId?: SortOrder
  }

  export type MessageAvgOrderByAggregateInput = {
    id?: SortOrder
    etudiantId?: SortOrder
  }

  export type MessageMaxOrderByAggregateInput = {
    id?: SortOrder
    contenu?: SortOrder
    date?: SortOrder
    etudiantId?: SortOrder
  }

  export type MessageMinOrderByAggregateInput = {
    id?: SortOrder
    contenu?: SortOrder
    date?: SortOrder
    etudiantId?: SortOrder
  }

  export type MessageSumOrderByAggregateInput = {
    id?: SortOrder
    etudiantId?: SortOrder
  }

  export type MessageScalarRelationFilter = {
    is?: MessageWhereInput
    isNot?: MessageWhereInput
  }

  export type RecevoireEtudiantIdMessageIdCompoundUniqueInput = {
    etudiantId: number
    messageId: number
  }

  export type RecevoireCountOrderByAggregateInput = {
    etudiantId?: SortOrder
    messageId?: SortOrder
  }

  export type RecevoireAvgOrderByAggregateInput = {
    etudiantId?: SortOrder
    messageId?: SortOrder
  }

  export type RecevoireMaxOrderByAggregateInput = {
    etudiantId?: SortOrder
    messageId?: SortOrder
  }

  export type RecevoireMinOrderByAggregateInput = {
    etudiantId?: SortOrder
    messageId?: SortOrder
  }

  export type RecevoireSumOrderByAggregateInput = {
    etudiantId?: SortOrder
    messageId?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EtudiantNullableScalarRelationFilter = {
    is?: EtudiantWhereInput | null
    isNot?: EtudiantWhereInput | null
  }

  export type AnnonceCountOrderByAggregateInput = {
    id?: SortOrder
    titre?: SortOrder
    contenu?: SortOrder
    image?: SortOrder
    dateDePublication?: SortOrder
    etudiantId?: SortOrder
  }

  export type AnnonceAvgOrderByAggregateInput = {
    id?: SortOrder
    etudiantId?: SortOrder
  }

  export type AnnonceMaxOrderByAggregateInput = {
    id?: SortOrder
    titre?: SortOrder
    contenu?: SortOrder
    image?: SortOrder
    dateDePublication?: SortOrder
    etudiantId?: SortOrder
  }

  export type AnnonceMinOrderByAggregateInput = {
    id?: SortOrder
    titre?: SortOrder
    contenu?: SortOrder
    image?: SortOrder
    dateDePublication?: SortOrder
    etudiantId?: SortOrder
  }

  export type AnnonceSumOrderByAggregateInput = {
    id?: SortOrder
    etudiantId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type AnnonceNullableScalarRelationFilter = {
    is?: AnnonceWhereInput | null
    isNot?: AnnonceWhereInput | null
  }

  export type CommentaireCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    etudiantId?: SortOrder
    annonceId?: SortOrder
    contenu?: SortOrder
  }

  export type CommentaireAvgOrderByAggregateInput = {
    id?: SortOrder
    etudiantId?: SortOrder
    annonceId?: SortOrder
  }

  export type CommentaireMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    etudiantId?: SortOrder
    annonceId?: SortOrder
    contenu?: SortOrder
  }

  export type CommentaireMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    etudiantId?: SortOrder
    annonceId?: SortOrder
    contenu?: SortOrder
  }

  export type CommentaireSumOrderByAggregateInput = {
    id?: SortOrder
    etudiantId?: SortOrder
    annonceId?: SortOrder
  }

  export type AnnonceScalarRelationFilter = {
    is?: AnnonceWhereInput
    isNot?: AnnonceWhereInput
  }

  export type SignalerAnnonceIdEtudiantIdCompoundUniqueInput = {
    annonceId: number
    etudiantId: number
  }

  export type SignalerCountOrderByAggregateInput = {
    annonceId?: SortOrder
    etudiantId?: SortOrder
  }

  export type SignalerAvgOrderByAggregateInput = {
    annonceId?: SortOrder
    etudiantId?: SortOrder
  }

  export type SignalerMaxOrderByAggregateInput = {
    annonceId?: SortOrder
    etudiantId?: SortOrder
  }

  export type SignalerMinOrderByAggregateInput = {
    annonceId?: SortOrder
    etudiantId?: SortOrder
  }

  export type SignalerSumOrderByAggregateInput = {
    annonceId?: SortOrder
    etudiantId?: SortOrder
  }

  export type EnumStatutAmitieFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutAmitie | EnumStatutAmitieFieldRefInput<$PrismaModel>
    in?: $Enums.StatutAmitie[] | ListEnumStatutAmitieFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatutAmitie[] | ListEnumStatutAmitieFieldRefInput<$PrismaModel>
    not?: NestedEnumStatutAmitieFilter<$PrismaModel> | $Enums.StatutAmitie
  }

  export type AmitieDemandeurIdReceveurIdCompoundUniqueInput = {
    demandeurId: number
    receveurId: number
  }

  export type AmitieCountOrderByAggregateInput = {
    id?: SortOrder
    demandeurId?: SortOrder
    receveurId?: SortOrder
    statut?: SortOrder
    dateDemande?: SortOrder
    dateAcceptation?: SortOrder
  }

  export type AmitieAvgOrderByAggregateInput = {
    id?: SortOrder
    demandeurId?: SortOrder
    receveurId?: SortOrder
  }

  export type AmitieMaxOrderByAggregateInput = {
    id?: SortOrder
    demandeurId?: SortOrder
    receveurId?: SortOrder
    statut?: SortOrder
    dateDemande?: SortOrder
    dateAcceptation?: SortOrder
  }

  export type AmitieMinOrderByAggregateInput = {
    id?: SortOrder
    demandeurId?: SortOrder
    receveurId?: SortOrder
    statut?: SortOrder
    dateDemande?: SortOrder
    dateAcceptation?: SortOrder
  }

  export type AmitieSumOrderByAggregateInput = {
    id?: SortOrder
    demandeurId?: SortOrder
    receveurId?: SortOrder
  }

  export type EnumStatutAmitieWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutAmitie | EnumStatutAmitieFieldRefInput<$PrismaModel>
    in?: $Enums.StatutAmitie[] | ListEnumStatutAmitieFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatutAmitie[] | ListEnumStatutAmitieFieldRefInput<$PrismaModel>
    not?: NestedEnumStatutAmitieWithAggregatesFilter<$PrismaModel> | $Enums.StatutAmitie
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatutAmitieFilter<$PrismaModel>
    _max?: NestedEnumStatutAmitieFilter<$PrismaModel>
  }

  export type GroupeCountOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    createdAt?: SortOrder
  }

  export type GroupeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type GroupeMaxOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    createdAt?: SortOrder
  }

  export type GroupeMinOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    createdAt?: SortOrder
  }

  export type GroupeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type GroupeScalarRelationFilter = {
    is?: GroupeWhereInput
    isNot?: GroupeWhereInput
  }

  export type EtudiantGroupeEtudiantIdGroupeIdCompoundUniqueInput = {
    etudiantId: number
    groupeId: number
  }

  export type EtudiantGroupeCountOrderByAggregateInput = {
    etudiantId?: SortOrder
    groupeId?: SortOrder
  }

  export type EtudiantGroupeAvgOrderByAggregateInput = {
    etudiantId?: SortOrder
    groupeId?: SortOrder
  }

  export type EtudiantGroupeMaxOrderByAggregateInput = {
    etudiantId?: SortOrder
    groupeId?: SortOrder
  }

  export type EtudiantGroupeMinOrderByAggregateInput = {
    etudiantId?: SortOrder
    groupeId?: SortOrder
  }

  export type EtudiantGroupeSumOrderByAggregateInput = {
    etudiantId?: SortOrder
    groupeId?: SortOrder
  }

  export type MessageGroupeCountOrderByAggregateInput = {
    id?: SortOrder
    contenu?: SortOrder
    date?: SortOrder
    auteurId?: SortOrder
    groupeId?: SortOrder
  }

  export type MessageGroupeAvgOrderByAggregateInput = {
    id?: SortOrder
    auteurId?: SortOrder
    groupeId?: SortOrder
  }

  export type MessageGroupeMaxOrderByAggregateInput = {
    id?: SortOrder
    contenu?: SortOrder
    date?: SortOrder
    auteurId?: SortOrder
    groupeId?: SortOrder
  }

  export type MessageGroupeMinOrderByAggregateInput = {
    id?: SortOrder
    contenu?: SortOrder
    date?: SortOrder
    auteurId?: SortOrder
    groupeId?: SortOrder
  }

  export type MessageGroupeSumOrderByAggregateInput = {
    id?: SortOrder
    auteurId?: SortOrder
    groupeId?: SortOrder
  }

  export type MessageCreateNestedManyWithoutEtudiantInput = {
    create?: XOR<MessageCreateWithoutEtudiantInput, MessageUncheckedCreateWithoutEtudiantInput> | MessageCreateWithoutEtudiantInput[] | MessageUncheckedCreateWithoutEtudiantInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutEtudiantInput | MessageCreateOrConnectWithoutEtudiantInput[]
    createMany?: MessageCreateManyEtudiantInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type RecevoireCreateNestedManyWithoutEtudiantInput = {
    create?: XOR<RecevoireCreateWithoutEtudiantInput, RecevoireUncheckedCreateWithoutEtudiantInput> | RecevoireCreateWithoutEtudiantInput[] | RecevoireUncheckedCreateWithoutEtudiantInput[]
    connectOrCreate?: RecevoireCreateOrConnectWithoutEtudiantInput | RecevoireCreateOrConnectWithoutEtudiantInput[]
    createMany?: RecevoireCreateManyEtudiantInputEnvelope
    connect?: RecevoireWhereUniqueInput | RecevoireWhereUniqueInput[]
  }

  export type AnnonceCreateNestedManyWithoutAuteurInput = {
    create?: XOR<AnnonceCreateWithoutAuteurInput, AnnonceUncheckedCreateWithoutAuteurInput> | AnnonceCreateWithoutAuteurInput[] | AnnonceUncheckedCreateWithoutAuteurInput[]
    connectOrCreate?: AnnonceCreateOrConnectWithoutAuteurInput | AnnonceCreateOrConnectWithoutAuteurInput[]
    createMany?: AnnonceCreateManyAuteurInputEnvelope
    connect?: AnnonceWhereUniqueInput | AnnonceWhereUniqueInput[]
  }

  export type CommentaireCreateNestedManyWithoutAuteurInput = {
    create?: XOR<CommentaireCreateWithoutAuteurInput, CommentaireUncheckedCreateWithoutAuteurInput> | CommentaireCreateWithoutAuteurInput[] | CommentaireUncheckedCreateWithoutAuteurInput[]
    connectOrCreate?: CommentaireCreateOrConnectWithoutAuteurInput | CommentaireCreateOrConnectWithoutAuteurInput[]
    createMany?: CommentaireCreateManyAuteurInputEnvelope
    connect?: CommentaireWhereUniqueInput | CommentaireWhereUniqueInput[]
  }

  export type SignalerCreateNestedManyWithoutEtudiantInput = {
    create?: XOR<SignalerCreateWithoutEtudiantInput, SignalerUncheckedCreateWithoutEtudiantInput> | SignalerCreateWithoutEtudiantInput[] | SignalerUncheckedCreateWithoutEtudiantInput[]
    connectOrCreate?: SignalerCreateOrConnectWithoutEtudiantInput | SignalerCreateOrConnectWithoutEtudiantInput[]
    createMany?: SignalerCreateManyEtudiantInputEnvelope
    connect?: SignalerWhereUniqueInput | SignalerWhereUniqueInput[]
  }

  export type AmitieCreateNestedManyWithoutDemandeurInput = {
    create?: XOR<AmitieCreateWithoutDemandeurInput, AmitieUncheckedCreateWithoutDemandeurInput> | AmitieCreateWithoutDemandeurInput[] | AmitieUncheckedCreateWithoutDemandeurInput[]
    connectOrCreate?: AmitieCreateOrConnectWithoutDemandeurInput | AmitieCreateOrConnectWithoutDemandeurInput[]
    createMany?: AmitieCreateManyDemandeurInputEnvelope
    connect?: AmitieWhereUniqueInput | AmitieWhereUniqueInput[]
  }

  export type AmitieCreateNestedManyWithoutReceveurInput = {
    create?: XOR<AmitieCreateWithoutReceveurInput, AmitieUncheckedCreateWithoutReceveurInput> | AmitieCreateWithoutReceveurInput[] | AmitieUncheckedCreateWithoutReceveurInput[]
    connectOrCreate?: AmitieCreateOrConnectWithoutReceveurInput | AmitieCreateOrConnectWithoutReceveurInput[]
    createMany?: AmitieCreateManyReceveurInputEnvelope
    connect?: AmitieWhereUniqueInput | AmitieWhereUniqueInput[]
  }

  export type EtudiantGroupeCreateNestedManyWithoutEtudiantInput = {
    create?: XOR<EtudiantGroupeCreateWithoutEtudiantInput, EtudiantGroupeUncheckedCreateWithoutEtudiantInput> | EtudiantGroupeCreateWithoutEtudiantInput[] | EtudiantGroupeUncheckedCreateWithoutEtudiantInput[]
    connectOrCreate?: EtudiantGroupeCreateOrConnectWithoutEtudiantInput | EtudiantGroupeCreateOrConnectWithoutEtudiantInput[]
    createMany?: EtudiantGroupeCreateManyEtudiantInputEnvelope
    connect?: EtudiantGroupeWhereUniqueInput | EtudiantGroupeWhereUniqueInput[]
  }

  export type MessageGroupeCreateNestedManyWithoutAuteurInput = {
    create?: XOR<MessageGroupeCreateWithoutAuteurInput, MessageGroupeUncheckedCreateWithoutAuteurInput> | MessageGroupeCreateWithoutAuteurInput[] | MessageGroupeUncheckedCreateWithoutAuteurInput[]
    connectOrCreate?: MessageGroupeCreateOrConnectWithoutAuteurInput | MessageGroupeCreateOrConnectWithoutAuteurInput[]
    createMany?: MessageGroupeCreateManyAuteurInputEnvelope
    connect?: MessageGroupeWhereUniqueInput | MessageGroupeWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutEtudiantInput = {
    create?: XOR<MessageCreateWithoutEtudiantInput, MessageUncheckedCreateWithoutEtudiantInput> | MessageCreateWithoutEtudiantInput[] | MessageUncheckedCreateWithoutEtudiantInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutEtudiantInput | MessageCreateOrConnectWithoutEtudiantInput[]
    createMany?: MessageCreateManyEtudiantInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type RecevoireUncheckedCreateNestedManyWithoutEtudiantInput = {
    create?: XOR<RecevoireCreateWithoutEtudiantInput, RecevoireUncheckedCreateWithoutEtudiantInput> | RecevoireCreateWithoutEtudiantInput[] | RecevoireUncheckedCreateWithoutEtudiantInput[]
    connectOrCreate?: RecevoireCreateOrConnectWithoutEtudiantInput | RecevoireCreateOrConnectWithoutEtudiantInput[]
    createMany?: RecevoireCreateManyEtudiantInputEnvelope
    connect?: RecevoireWhereUniqueInput | RecevoireWhereUniqueInput[]
  }

  export type AnnonceUncheckedCreateNestedManyWithoutAuteurInput = {
    create?: XOR<AnnonceCreateWithoutAuteurInput, AnnonceUncheckedCreateWithoutAuteurInput> | AnnonceCreateWithoutAuteurInput[] | AnnonceUncheckedCreateWithoutAuteurInput[]
    connectOrCreate?: AnnonceCreateOrConnectWithoutAuteurInput | AnnonceCreateOrConnectWithoutAuteurInput[]
    createMany?: AnnonceCreateManyAuteurInputEnvelope
    connect?: AnnonceWhereUniqueInput | AnnonceWhereUniqueInput[]
  }

  export type CommentaireUncheckedCreateNestedManyWithoutAuteurInput = {
    create?: XOR<CommentaireCreateWithoutAuteurInput, CommentaireUncheckedCreateWithoutAuteurInput> | CommentaireCreateWithoutAuteurInput[] | CommentaireUncheckedCreateWithoutAuteurInput[]
    connectOrCreate?: CommentaireCreateOrConnectWithoutAuteurInput | CommentaireCreateOrConnectWithoutAuteurInput[]
    createMany?: CommentaireCreateManyAuteurInputEnvelope
    connect?: CommentaireWhereUniqueInput | CommentaireWhereUniqueInput[]
  }

  export type SignalerUncheckedCreateNestedManyWithoutEtudiantInput = {
    create?: XOR<SignalerCreateWithoutEtudiantInput, SignalerUncheckedCreateWithoutEtudiantInput> | SignalerCreateWithoutEtudiantInput[] | SignalerUncheckedCreateWithoutEtudiantInput[]
    connectOrCreate?: SignalerCreateOrConnectWithoutEtudiantInput | SignalerCreateOrConnectWithoutEtudiantInput[]
    createMany?: SignalerCreateManyEtudiantInputEnvelope
    connect?: SignalerWhereUniqueInput | SignalerWhereUniqueInput[]
  }

  export type AmitieUncheckedCreateNestedManyWithoutDemandeurInput = {
    create?: XOR<AmitieCreateWithoutDemandeurInput, AmitieUncheckedCreateWithoutDemandeurInput> | AmitieCreateWithoutDemandeurInput[] | AmitieUncheckedCreateWithoutDemandeurInput[]
    connectOrCreate?: AmitieCreateOrConnectWithoutDemandeurInput | AmitieCreateOrConnectWithoutDemandeurInput[]
    createMany?: AmitieCreateManyDemandeurInputEnvelope
    connect?: AmitieWhereUniqueInput | AmitieWhereUniqueInput[]
  }

  export type AmitieUncheckedCreateNestedManyWithoutReceveurInput = {
    create?: XOR<AmitieCreateWithoutReceveurInput, AmitieUncheckedCreateWithoutReceveurInput> | AmitieCreateWithoutReceveurInput[] | AmitieUncheckedCreateWithoutReceveurInput[]
    connectOrCreate?: AmitieCreateOrConnectWithoutReceveurInput | AmitieCreateOrConnectWithoutReceveurInput[]
    createMany?: AmitieCreateManyReceveurInputEnvelope
    connect?: AmitieWhereUniqueInput | AmitieWhereUniqueInput[]
  }

  export type EtudiantGroupeUncheckedCreateNestedManyWithoutEtudiantInput = {
    create?: XOR<EtudiantGroupeCreateWithoutEtudiantInput, EtudiantGroupeUncheckedCreateWithoutEtudiantInput> | EtudiantGroupeCreateWithoutEtudiantInput[] | EtudiantGroupeUncheckedCreateWithoutEtudiantInput[]
    connectOrCreate?: EtudiantGroupeCreateOrConnectWithoutEtudiantInput | EtudiantGroupeCreateOrConnectWithoutEtudiantInput[]
    createMany?: EtudiantGroupeCreateManyEtudiantInputEnvelope
    connect?: EtudiantGroupeWhereUniqueInput | EtudiantGroupeWhereUniqueInput[]
  }

  export type MessageGroupeUncheckedCreateNestedManyWithoutAuteurInput = {
    create?: XOR<MessageGroupeCreateWithoutAuteurInput, MessageGroupeUncheckedCreateWithoutAuteurInput> | MessageGroupeCreateWithoutAuteurInput[] | MessageGroupeUncheckedCreateWithoutAuteurInput[]
    connectOrCreate?: MessageGroupeCreateOrConnectWithoutAuteurInput | MessageGroupeCreateOrConnectWithoutAuteurInput[]
    createMany?: MessageGroupeCreateManyAuteurInputEnvelope
    connect?: MessageGroupeWhereUniqueInput | MessageGroupeWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type MessageUpdateManyWithoutEtudiantNestedInput = {
    create?: XOR<MessageCreateWithoutEtudiantInput, MessageUncheckedCreateWithoutEtudiantInput> | MessageCreateWithoutEtudiantInput[] | MessageUncheckedCreateWithoutEtudiantInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutEtudiantInput | MessageCreateOrConnectWithoutEtudiantInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutEtudiantInput | MessageUpsertWithWhereUniqueWithoutEtudiantInput[]
    createMany?: MessageCreateManyEtudiantInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutEtudiantInput | MessageUpdateWithWhereUniqueWithoutEtudiantInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutEtudiantInput | MessageUpdateManyWithWhereWithoutEtudiantInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type RecevoireUpdateManyWithoutEtudiantNestedInput = {
    create?: XOR<RecevoireCreateWithoutEtudiantInput, RecevoireUncheckedCreateWithoutEtudiantInput> | RecevoireCreateWithoutEtudiantInput[] | RecevoireUncheckedCreateWithoutEtudiantInput[]
    connectOrCreate?: RecevoireCreateOrConnectWithoutEtudiantInput | RecevoireCreateOrConnectWithoutEtudiantInput[]
    upsert?: RecevoireUpsertWithWhereUniqueWithoutEtudiantInput | RecevoireUpsertWithWhereUniqueWithoutEtudiantInput[]
    createMany?: RecevoireCreateManyEtudiantInputEnvelope
    set?: RecevoireWhereUniqueInput | RecevoireWhereUniqueInput[]
    disconnect?: RecevoireWhereUniqueInput | RecevoireWhereUniqueInput[]
    delete?: RecevoireWhereUniqueInput | RecevoireWhereUniqueInput[]
    connect?: RecevoireWhereUniqueInput | RecevoireWhereUniqueInput[]
    update?: RecevoireUpdateWithWhereUniqueWithoutEtudiantInput | RecevoireUpdateWithWhereUniqueWithoutEtudiantInput[]
    updateMany?: RecevoireUpdateManyWithWhereWithoutEtudiantInput | RecevoireUpdateManyWithWhereWithoutEtudiantInput[]
    deleteMany?: RecevoireScalarWhereInput | RecevoireScalarWhereInput[]
  }

  export type AnnonceUpdateManyWithoutAuteurNestedInput = {
    create?: XOR<AnnonceCreateWithoutAuteurInput, AnnonceUncheckedCreateWithoutAuteurInput> | AnnonceCreateWithoutAuteurInput[] | AnnonceUncheckedCreateWithoutAuteurInput[]
    connectOrCreate?: AnnonceCreateOrConnectWithoutAuteurInput | AnnonceCreateOrConnectWithoutAuteurInput[]
    upsert?: AnnonceUpsertWithWhereUniqueWithoutAuteurInput | AnnonceUpsertWithWhereUniqueWithoutAuteurInput[]
    createMany?: AnnonceCreateManyAuteurInputEnvelope
    set?: AnnonceWhereUniqueInput | AnnonceWhereUniqueInput[]
    disconnect?: AnnonceWhereUniqueInput | AnnonceWhereUniqueInput[]
    delete?: AnnonceWhereUniqueInput | AnnonceWhereUniqueInput[]
    connect?: AnnonceWhereUniqueInput | AnnonceWhereUniqueInput[]
    update?: AnnonceUpdateWithWhereUniqueWithoutAuteurInput | AnnonceUpdateWithWhereUniqueWithoutAuteurInput[]
    updateMany?: AnnonceUpdateManyWithWhereWithoutAuteurInput | AnnonceUpdateManyWithWhereWithoutAuteurInput[]
    deleteMany?: AnnonceScalarWhereInput | AnnonceScalarWhereInput[]
  }

  export type CommentaireUpdateManyWithoutAuteurNestedInput = {
    create?: XOR<CommentaireCreateWithoutAuteurInput, CommentaireUncheckedCreateWithoutAuteurInput> | CommentaireCreateWithoutAuteurInput[] | CommentaireUncheckedCreateWithoutAuteurInput[]
    connectOrCreate?: CommentaireCreateOrConnectWithoutAuteurInput | CommentaireCreateOrConnectWithoutAuteurInput[]
    upsert?: CommentaireUpsertWithWhereUniqueWithoutAuteurInput | CommentaireUpsertWithWhereUniqueWithoutAuteurInput[]
    createMany?: CommentaireCreateManyAuteurInputEnvelope
    set?: CommentaireWhereUniqueInput | CommentaireWhereUniqueInput[]
    disconnect?: CommentaireWhereUniqueInput | CommentaireWhereUniqueInput[]
    delete?: CommentaireWhereUniqueInput | CommentaireWhereUniqueInput[]
    connect?: CommentaireWhereUniqueInput | CommentaireWhereUniqueInput[]
    update?: CommentaireUpdateWithWhereUniqueWithoutAuteurInput | CommentaireUpdateWithWhereUniqueWithoutAuteurInput[]
    updateMany?: CommentaireUpdateManyWithWhereWithoutAuteurInput | CommentaireUpdateManyWithWhereWithoutAuteurInput[]
    deleteMany?: CommentaireScalarWhereInput | CommentaireScalarWhereInput[]
  }

  export type SignalerUpdateManyWithoutEtudiantNestedInput = {
    create?: XOR<SignalerCreateWithoutEtudiantInput, SignalerUncheckedCreateWithoutEtudiantInput> | SignalerCreateWithoutEtudiantInput[] | SignalerUncheckedCreateWithoutEtudiantInput[]
    connectOrCreate?: SignalerCreateOrConnectWithoutEtudiantInput | SignalerCreateOrConnectWithoutEtudiantInput[]
    upsert?: SignalerUpsertWithWhereUniqueWithoutEtudiantInput | SignalerUpsertWithWhereUniqueWithoutEtudiantInput[]
    createMany?: SignalerCreateManyEtudiantInputEnvelope
    set?: SignalerWhereUniqueInput | SignalerWhereUniqueInput[]
    disconnect?: SignalerWhereUniqueInput | SignalerWhereUniqueInput[]
    delete?: SignalerWhereUniqueInput | SignalerWhereUniqueInput[]
    connect?: SignalerWhereUniqueInput | SignalerWhereUniqueInput[]
    update?: SignalerUpdateWithWhereUniqueWithoutEtudiantInput | SignalerUpdateWithWhereUniqueWithoutEtudiantInput[]
    updateMany?: SignalerUpdateManyWithWhereWithoutEtudiantInput | SignalerUpdateManyWithWhereWithoutEtudiantInput[]
    deleteMany?: SignalerScalarWhereInput | SignalerScalarWhereInput[]
  }

  export type AmitieUpdateManyWithoutDemandeurNestedInput = {
    create?: XOR<AmitieCreateWithoutDemandeurInput, AmitieUncheckedCreateWithoutDemandeurInput> | AmitieCreateWithoutDemandeurInput[] | AmitieUncheckedCreateWithoutDemandeurInput[]
    connectOrCreate?: AmitieCreateOrConnectWithoutDemandeurInput | AmitieCreateOrConnectWithoutDemandeurInput[]
    upsert?: AmitieUpsertWithWhereUniqueWithoutDemandeurInput | AmitieUpsertWithWhereUniqueWithoutDemandeurInput[]
    createMany?: AmitieCreateManyDemandeurInputEnvelope
    set?: AmitieWhereUniqueInput | AmitieWhereUniqueInput[]
    disconnect?: AmitieWhereUniqueInput | AmitieWhereUniqueInput[]
    delete?: AmitieWhereUniqueInput | AmitieWhereUniqueInput[]
    connect?: AmitieWhereUniqueInput | AmitieWhereUniqueInput[]
    update?: AmitieUpdateWithWhereUniqueWithoutDemandeurInput | AmitieUpdateWithWhereUniqueWithoutDemandeurInput[]
    updateMany?: AmitieUpdateManyWithWhereWithoutDemandeurInput | AmitieUpdateManyWithWhereWithoutDemandeurInput[]
    deleteMany?: AmitieScalarWhereInput | AmitieScalarWhereInput[]
  }

  export type AmitieUpdateManyWithoutReceveurNestedInput = {
    create?: XOR<AmitieCreateWithoutReceveurInput, AmitieUncheckedCreateWithoutReceveurInput> | AmitieCreateWithoutReceveurInput[] | AmitieUncheckedCreateWithoutReceveurInput[]
    connectOrCreate?: AmitieCreateOrConnectWithoutReceveurInput | AmitieCreateOrConnectWithoutReceveurInput[]
    upsert?: AmitieUpsertWithWhereUniqueWithoutReceveurInput | AmitieUpsertWithWhereUniqueWithoutReceveurInput[]
    createMany?: AmitieCreateManyReceveurInputEnvelope
    set?: AmitieWhereUniqueInput | AmitieWhereUniqueInput[]
    disconnect?: AmitieWhereUniqueInput | AmitieWhereUniqueInput[]
    delete?: AmitieWhereUniqueInput | AmitieWhereUniqueInput[]
    connect?: AmitieWhereUniqueInput | AmitieWhereUniqueInput[]
    update?: AmitieUpdateWithWhereUniqueWithoutReceveurInput | AmitieUpdateWithWhereUniqueWithoutReceveurInput[]
    updateMany?: AmitieUpdateManyWithWhereWithoutReceveurInput | AmitieUpdateManyWithWhereWithoutReceveurInput[]
    deleteMany?: AmitieScalarWhereInput | AmitieScalarWhereInput[]
  }

  export type EtudiantGroupeUpdateManyWithoutEtudiantNestedInput = {
    create?: XOR<EtudiantGroupeCreateWithoutEtudiantInput, EtudiantGroupeUncheckedCreateWithoutEtudiantInput> | EtudiantGroupeCreateWithoutEtudiantInput[] | EtudiantGroupeUncheckedCreateWithoutEtudiantInput[]
    connectOrCreate?: EtudiantGroupeCreateOrConnectWithoutEtudiantInput | EtudiantGroupeCreateOrConnectWithoutEtudiantInput[]
    upsert?: EtudiantGroupeUpsertWithWhereUniqueWithoutEtudiantInput | EtudiantGroupeUpsertWithWhereUniqueWithoutEtudiantInput[]
    createMany?: EtudiantGroupeCreateManyEtudiantInputEnvelope
    set?: EtudiantGroupeWhereUniqueInput | EtudiantGroupeWhereUniqueInput[]
    disconnect?: EtudiantGroupeWhereUniqueInput | EtudiantGroupeWhereUniqueInput[]
    delete?: EtudiantGroupeWhereUniqueInput | EtudiantGroupeWhereUniqueInput[]
    connect?: EtudiantGroupeWhereUniqueInput | EtudiantGroupeWhereUniqueInput[]
    update?: EtudiantGroupeUpdateWithWhereUniqueWithoutEtudiantInput | EtudiantGroupeUpdateWithWhereUniqueWithoutEtudiantInput[]
    updateMany?: EtudiantGroupeUpdateManyWithWhereWithoutEtudiantInput | EtudiantGroupeUpdateManyWithWhereWithoutEtudiantInput[]
    deleteMany?: EtudiantGroupeScalarWhereInput | EtudiantGroupeScalarWhereInput[]
  }

  export type MessageGroupeUpdateManyWithoutAuteurNestedInput = {
    create?: XOR<MessageGroupeCreateWithoutAuteurInput, MessageGroupeUncheckedCreateWithoutAuteurInput> | MessageGroupeCreateWithoutAuteurInput[] | MessageGroupeUncheckedCreateWithoutAuteurInput[]
    connectOrCreate?: MessageGroupeCreateOrConnectWithoutAuteurInput | MessageGroupeCreateOrConnectWithoutAuteurInput[]
    upsert?: MessageGroupeUpsertWithWhereUniqueWithoutAuteurInput | MessageGroupeUpsertWithWhereUniqueWithoutAuteurInput[]
    createMany?: MessageGroupeCreateManyAuteurInputEnvelope
    set?: MessageGroupeWhereUniqueInput | MessageGroupeWhereUniqueInput[]
    disconnect?: MessageGroupeWhereUniqueInput | MessageGroupeWhereUniqueInput[]
    delete?: MessageGroupeWhereUniqueInput | MessageGroupeWhereUniqueInput[]
    connect?: MessageGroupeWhereUniqueInput | MessageGroupeWhereUniqueInput[]
    update?: MessageGroupeUpdateWithWhereUniqueWithoutAuteurInput | MessageGroupeUpdateWithWhereUniqueWithoutAuteurInput[]
    updateMany?: MessageGroupeUpdateManyWithWhereWithoutAuteurInput | MessageGroupeUpdateManyWithWhereWithoutAuteurInput[]
    deleteMany?: MessageGroupeScalarWhereInput | MessageGroupeScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MessageUncheckedUpdateManyWithoutEtudiantNestedInput = {
    create?: XOR<MessageCreateWithoutEtudiantInput, MessageUncheckedCreateWithoutEtudiantInput> | MessageCreateWithoutEtudiantInput[] | MessageUncheckedCreateWithoutEtudiantInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutEtudiantInput | MessageCreateOrConnectWithoutEtudiantInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutEtudiantInput | MessageUpsertWithWhereUniqueWithoutEtudiantInput[]
    createMany?: MessageCreateManyEtudiantInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutEtudiantInput | MessageUpdateWithWhereUniqueWithoutEtudiantInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutEtudiantInput | MessageUpdateManyWithWhereWithoutEtudiantInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type RecevoireUncheckedUpdateManyWithoutEtudiantNestedInput = {
    create?: XOR<RecevoireCreateWithoutEtudiantInput, RecevoireUncheckedCreateWithoutEtudiantInput> | RecevoireCreateWithoutEtudiantInput[] | RecevoireUncheckedCreateWithoutEtudiantInput[]
    connectOrCreate?: RecevoireCreateOrConnectWithoutEtudiantInput | RecevoireCreateOrConnectWithoutEtudiantInput[]
    upsert?: RecevoireUpsertWithWhereUniqueWithoutEtudiantInput | RecevoireUpsertWithWhereUniqueWithoutEtudiantInput[]
    createMany?: RecevoireCreateManyEtudiantInputEnvelope
    set?: RecevoireWhereUniqueInput | RecevoireWhereUniqueInput[]
    disconnect?: RecevoireWhereUniqueInput | RecevoireWhereUniqueInput[]
    delete?: RecevoireWhereUniqueInput | RecevoireWhereUniqueInput[]
    connect?: RecevoireWhereUniqueInput | RecevoireWhereUniqueInput[]
    update?: RecevoireUpdateWithWhereUniqueWithoutEtudiantInput | RecevoireUpdateWithWhereUniqueWithoutEtudiantInput[]
    updateMany?: RecevoireUpdateManyWithWhereWithoutEtudiantInput | RecevoireUpdateManyWithWhereWithoutEtudiantInput[]
    deleteMany?: RecevoireScalarWhereInput | RecevoireScalarWhereInput[]
  }

  export type AnnonceUncheckedUpdateManyWithoutAuteurNestedInput = {
    create?: XOR<AnnonceCreateWithoutAuteurInput, AnnonceUncheckedCreateWithoutAuteurInput> | AnnonceCreateWithoutAuteurInput[] | AnnonceUncheckedCreateWithoutAuteurInput[]
    connectOrCreate?: AnnonceCreateOrConnectWithoutAuteurInput | AnnonceCreateOrConnectWithoutAuteurInput[]
    upsert?: AnnonceUpsertWithWhereUniqueWithoutAuteurInput | AnnonceUpsertWithWhereUniqueWithoutAuteurInput[]
    createMany?: AnnonceCreateManyAuteurInputEnvelope
    set?: AnnonceWhereUniqueInput | AnnonceWhereUniqueInput[]
    disconnect?: AnnonceWhereUniqueInput | AnnonceWhereUniqueInput[]
    delete?: AnnonceWhereUniqueInput | AnnonceWhereUniqueInput[]
    connect?: AnnonceWhereUniqueInput | AnnonceWhereUniqueInput[]
    update?: AnnonceUpdateWithWhereUniqueWithoutAuteurInput | AnnonceUpdateWithWhereUniqueWithoutAuteurInput[]
    updateMany?: AnnonceUpdateManyWithWhereWithoutAuteurInput | AnnonceUpdateManyWithWhereWithoutAuteurInput[]
    deleteMany?: AnnonceScalarWhereInput | AnnonceScalarWhereInput[]
  }

  export type CommentaireUncheckedUpdateManyWithoutAuteurNestedInput = {
    create?: XOR<CommentaireCreateWithoutAuteurInput, CommentaireUncheckedCreateWithoutAuteurInput> | CommentaireCreateWithoutAuteurInput[] | CommentaireUncheckedCreateWithoutAuteurInput[]
    connectOrCreate?: CommentaireCreateOrConnectWithoutAuteurInput | CommentaireCreateOrConnectWithoutAuteurInput[]
    upsert?: CommentaireUpsertWithWhereUniqueWithoutAuteurInput | CommentaireUpsertWithWhereUniqueWithoutAuteurInput[]
    createMany?: CommentaireCreateManyAuteurInputEnvelope
    set?: CommentaireWhereUniqueInput | CommentaireWhereUniqueInput[]
    disconnect?: CommentaireWhereUniqueInput | CommentaireWhereUniqueInput[]
    delete?: CommentaireWhereUniqueInput | CommentaireWhereUniqueInput[]
    connect?: CommentaireWhereUniqueInput | CommentaireWhereUniqueInput[]
    update?: CommentaireUpdateWithWhereUniqueWithoutAuteurInput | CommentaireUpdateWithWhereUniqueWithoutAuteurInput[]
    updateMany?: CommentaireUpdateManyWithWhereWithoutAuteurInput | CommentaireUpdateManyWithWhereWithoutAuteurInput[]
    deleteMany?: CommentaireScalarWhereInput | CommentaireScalarWhereInput[]
  }

  export type SignalerUncheckedUpdateManyWithoutEtudiantNestedInput = {
    create?: XOR<SignalerCreateWithoutEtudiantInput, SignalerUncheckedCreateWithoutEtudiantInput> | SignalerCreateWithoutEtudiantInput[] | SignalerUncheckedCreateWithoutEtudiantInput[]
    connectOrCreate?: SignalerCreateOrConnectWithoutEtudiantInput | SignalerCreateOrConnectWithoutEtudiantInput[]
    upsert?: SignalerUpsertWithWhereUniqueWithoutEtudiantInput | SignalerUpsertWithWhereUniqueWithoutEtudiantInput[]
    createMany?: SignalerCreateManyEtudiantInputEnvelope
    set?: SignalerWhereUniqueInput | SignalerWhereUniqueInput[]
    disconnect?: SignalerWhereUniqueInput | SignalerWhereUniqueInput[]
    delete?: SignalerWhereUniqueInput | SignalerWhereUniqueInput[]
    connect?: SignalerWhereUniqueInput | SignalerWhereUniqueInput[]
    update?: SignalerUpdateWithWhereUniqueWithoutEtudiantInput | SignalerUpdateWithWhereUniqueWithoutEtudiantInput[]
    updateMany?: SignalerUpdateManyWithWhereWithoutEtudiantInput | SignalerUpdateManyWithWhereWithoutEtudiantInput[]
    deleteMany?: SignalerScalarWhereInput | SignalerScalarWhereInput[]
  }

  export type AmitieUncheckedUpdateManyWithoutDemandeurNestedInput = {
    create?: XOR<AmitieCreateWithoutDemandeurInput, AmitieUncheckedCreateWithoutDemandeurInput> | AmitieCreateWithoutDemandeurInput[] | AmitieUncheckedCreateWithoutDemandeurInput[]
    connectOrCreate?: AmitieCreateOrConnectWithoutDemandeurInput | AmitieCreateOrConnectWithoutDemandeurInput[]
    upsert?: AmitieUpsertWithWhereUniqueWithoutDemandeurInput | AmitieUpsertWithWhereUniqueWithoutDemandeurInput[]
    createMany?: AmitieCreateManyDemandeurInputEnvelope
    set?: AmitieWhereUniqueInput | AmitieWhereUniqueInput[]
    disconnect?: AmitieWhereUniqueInput | AmitieWhereUniqueInput[]
    delete?: AmitieWhereUniqueInput | AmitieWhereUniqueInput[]
    connect?: AmitieWhereUniqueInput | AmitieWhereUniqueInput[]
    update?: AmitieUpdateWithWhereUniqueWithoutDemandeurInput | AmitieUpdateWithWhereUniqueWithoutDemandeurInput[]
    updateMany?: AmitieUpdateManyWithWhereWithoutDemandeurInput | AmitieUpdateManyWithWhereWithoutDemandeurInput[]
    deleteMany?: AmitieScalarWhereInput | AmitieScalarWhereInput[]
  }

  export type AmitieUncheckedUpdateManyWithoutReceveurNestedInput = {
    create?: XOR<AmitieCreateWithoutReceveurInput, AmitieUncheckedCreateWithoutReceveurInput> | AmitieCreateWithoutReceveurInput[] | AmitieUncheckedCreateWithoutReceveurInput[]
    connectOrCreate?: AmitieCreateOrConnectWithoutReceveurInput | AmitieCreateOrConnectWithoutReceveurInput[]
    upsert?: AmitieUpsertWithWhereUniqueWithoutReceveurInput | AmitieUpsertWithWhereUniqueWithoutReceveurInput[]
    createMany?: AmitieCreateManyReceveurInputEnvelope
    set?: AmitieWhereUniqueInput | AmitieWhereUniqueInput[]
    disconnect?: AmitieWhereUniqueInput | AmitieWhereUniqueInput[]
    delete?: AmitieWhereUniqueInput | AmitieWhereUniqueInput[]
    connect?: AmitieWhereUniqueInput | AmitieWhereUniqueInput[]
    update?: AmitieUpdateWithWhereUniqueWithoutReceveurInput | AmitieUpdateWithWhereUniqueWithoutReceveurInput[]
    updateMany?: AmitieUpdateManyWithWhereWithoutReceveurInput | AmitieUpdateManyWithWhereWithoutReceveurInput[]
    deleteMany?: AmitieScalarWhereInput | AmitieScalarWhereInput[]
  }

  export type EtudiantGroupeUncheckedUpdateManyWithoutEtudiantNestedInput = {
    create?: XOR<EtudiantGroupeCreateWithoutEtudiantInput, EtudiantGroupeUncheckedCreateWithoutEtudiantInput> | EtudiantGroupeCreateWithoutEtudiantInput[] | EtudiantGroupeUncheckedCreateWithoutEtudiantInput[]
    connectOrCreate?: EtudiantGroupeCreateOrConnectWithoutEtudiantInput | EtudiantGroupeCreateOrConnectWithoutEtudiantInput[]
    upsert?: EtudiantGroupeUpsertWithWhereUniqueWithoutEtudiantInput | EtudiantGroupeUpsertWithWhereUniqueWithoutEtudiantInput[]
    createMany?: EtudiantGroupeCreateManyEtudiantInputEnvelope
    set?: EtudiantGroupeWhereUniqueInput | EtudiantGroupeWhereUniqueInput[]
    disconnect?: EtudiantGroupeWhereUniqueInput | EtudiantGroupeWhereUniqueInput[]
    delete?: EtudiantGroupeWhereUniqueInput | EtudiantGroupeWhereUniqueInput[]
    connect?: EtudiantGroupeWhereUniqueInput | EtudiantGroupeWhereUniqueInput[]
    update?: EtudiantGroupeUpdateWithWhereUniqueWithoutEtudiantInput | EtudiantGroupeUpdateWithWhereUniqueWithoutEtudiantInput[]
    updateMany?: EtudiantGroupeUpdateManyWithWhereWithoutEtudiantInput | EtudiantGroupeUpdateManyWithWhereWithoutEtudiantInput[]
    deleteMany?: EtudiantGroupeScalarWhereInput | EtudiantGroupeScalarWhereInput[]
  }

  export type MessageGroupeUncheckedUpdateManyWithoutAuteurNestedInput = {
    create?: XOR<MessageGroupeCreateWithoutAuteurInput, MessageGroupeUncheckedCreateWithoutAuteurInput> | MessageGroupeCreateWithoutAuteurInput[] | MessageGroupeUncheckedCreateWithoutAuteurInput[]
    connectOrCreate?: MessageGroupeCreateOrConnectWithoutAuteurInput | MessageGroupeCreateOrConnectWithoutAuteurInput[]
    upsert?: MessageGroupeUpsertWithWhereUniqueWithoutAuteurInput | MessageGroupeUpsertWithWhereUniqueWithoutAuteurInput[]
    createMany?: MessageGroupeCreateManyAuteurInputEnvelope
    set?: MessageGroupeWhereUniqueInput | MessageGroupeWhereUniqueInput[]
    disconnect?: MessageGroupeWhereUniqueInput | MessageGroupeWhereUniqueInput[]
    delete?: MessageGroupeWhereUniqueInput | MessageGroupeWhereUniqueInput[]
    connect?: MessageGroupeWhereUniqueInput | MessageGroupeWhereUniqueInput[]
    update?: MessageGroupeUpdateWithWhereUniqueWithoutAuteurInput | MessageGroupeUpdateWithWhereUniqueWithoutAuteurInput[]
    updateMany?: MessageGroupeUpdateManyWithWhereWithoutAuteurInput | MessageGroupeUpdateManyWithWhereWithoutAuteurInput[]
    deleteMany?: MessageGroupeScalarWhereInput | MessageGroupeScalarWhereInput[]
  }

  export type EtudiantCreateNestedOneWithoutMessagesEnvoyesInput = {
    create?: XOR<EtudiantCreateWithoutMessagesEnvoyesInput, EtudiantUncheckedCreateWithoutMessagesEnvoyesInput>
    connectOrCreate?: EtudiantCreateOrConnectWithoutMessagesEnvoyesInput
    connect?: EtudiantWhereUniqueInput
  }

  export type RecevoireCreateNestedManyWithoutMessageInput = {
    create?: XOR<RecevoireCreateWithoutMessageInput, RecevoireUncheckedCreateWithoutMessageInput> | RecevoireCreateWithoutMessageInput[] | RecevoireUncheckedCreateWithoutMessageInput[]
    connectOrCreate?: RecevoireCreateOrConnectWithoutMessageInput | RecevoireCreateOrConnectWithoutMessageInput[]
    createMany?: RecevoireCreateManyMessageInputEnvelope
    connect?: RecevoireWhereUniqueInput | RecevoireWhereUniqueInput[]
  }

  export type RecevoireUncheckedCreateNestedManyWithoutMessageInput = {
    create?: XOR<RecevoireCreateWithoutMessageInput, RecevoireUncheckedCreateWithoutMessageInput> | RecevoireCreateWithoutMessageInput[] | RecevoireUncheckedCreateWithoutMessageInput[]
    connectOrCreate?: RecevoireCreateOrConnectWithoutMessageInput | RecevoireCreateOrConnectWithoutMessageInput[]
    createMany?: RecevoireCreateManyMessageInputEnvelope
    connect?: RecevoireWhereUniqueInput | RecevoireWhereUniqueInput[]
  }

  export type EtudiantUpdateOneRequiredWithoutMessagesEnvoyesNestedInput = {
    create?: XOR<EtudiantCreateWithoutMessagesEnvoyesInput, EtudiantUncheckedCreateWithoutMessagesEnvoyesInput>
    connectOrCreate?: EtudiantCreateOrConnectWithoutMessagesEnvoyesInput
    upsert?: EtudiantUpsertWithoutMessagesEnvoyesInput
    connect?: EtudiantWhereUniqueInput
    update?: XOR<XOR<EtudiantUpdateToOneWithWhereWithoutMessagesEnvoyesInput, EtudiantUpdateWithoutMessagesEnvoyesInput>, EtudiantUncheckedUpdateWithoutMessagesEnvoyesInput>
  }

  export type RecevoireUpdateManyWithoutMessageNestedInput = {
    create?: XOR<RecevoireCreateWithoutMessageInput, RecevoireUncheckedCreateWithoutMessageInput> | RecevoireCreateWithoutMessageInput[] | RecevoireUncheckedCreateWithoutMessageInput[]
    connectOrCreate?: RecevoireCreateOrConnectWithoutMessageInput | RecevoireCreateOrConnectWithoutMessageInput[]
    upsert?: RecevoireUpsertWithWhereUniqueWithoutMessageInput | RecevoireUpsertWithWhereUniqueWithoutMessageInput[]
    createMany?: RecevoireCreateManyMessageInputEnvelope
    set?: RecevoireWhereUniqueInput | RecevoireWhereUniqueInput[]
    disconnect?: RecevoireWhereUniqueInput | RecevoireWhereUniqueInput[]
    delete?: RecevoireWhereUniqueInput | RecevoireWhereUniqueInput[]
    connect?: RecevoireWhereUniqueInput | RecevoireWhereUniqueInput[]
    update?: RecevoireUpdateWithWhereUniqueWithoutMessageInput | RecevoireUpdateWithWhereUniqueWithoutMessageInput[]
    updateMany?: RecevoireUpdateManyWithWhereWithoutMessageInput | RecevoireUpdateManyWithWhereWithoutMessageInput[]
    deleteMany?: RecevoireScalarWhereInput | RecevoireScalarWhereInput[]
  }

  export type RecevoireUncheckedUpdateManyWithoutMessageNestedInput = {
    create?: XOR<RecevoireCreateWithoutMessageInput, RecevoireUncheckedCreateWithoutMessageInput> | RecevoireCreateWithoutMessageInput[] | RecevoireUncheckedCreateWithoutMessageInput[]
    connectOrCreate?: RecevoireCreateOrConnectWithoutMessageInput | RecevoireCreateOrConnectWithoutMessageInput[]
    upsert?: RecevoireUpsertWithWhereUniqueWithoutMessageInput | RecevoireUpsertWithWhereUniqueWithoutMessageInput[]
    createMany?: RecevoireCreateManyMessageInputEnvelope
    set?: RecevoireWhereUniqueInput | RecevoireWhereUniqueInput[]
    disconnect?: RecevoireWhereUniqueInput | RecevoireWhereUniqueInput[]
    delete?: RecevoireWhereUniqueInput | RecevoireWhereUniqueInput[]
    connect?: RecevoireWhereUniqueInput | RecevoireWhereUniqueInput[]
    update?: RecevoireUpdateWithWhereUniqueWithoutMessageInput | RecevoireUpdateWithWhereUniqueWithoutMessageInput[]
    updateMany?: RecevoireUpdateManyWithWhereWithoutMessageInput | RecevoireUpdateManyWithWhereWithoutMessageInput[]
    deleteMany?: RecevoireScalarWhereInput | RecevoireScalarWhereInput[]
  }

  export type EtudiantCreateNestedOneWithoutMessagesRecusInput = {
    create?: XOR<EtudiantCreateWithoutMessagesRecusInput, EtudiantUncheckedCreateWithoutMessagesRecusInput>
    connectOrCreate?: EtudiantCreateOrConnectWithoutMessagesRecusInput
    connect?: EtudiantWhereUniqueInput
  }

  export type MessageCreateNestedOneWithoutReceveursInput = {
    create?: XOR<MessageCreateWithoutReceveursInput, MessageUncheckedCreateWithoutReceveursInput>
    connectOrCreate?: MessageCreateOrConnectWithoutReceveursInput
    connect?: MessageWhereUniqueInput
  }

  export type EtudiantUpdateOneRequiredWithoutMessagesRecusNestedInput = {
    create?: XOR<EtudiantCreateWithoutMessagesRecusInput, EtudiantUncheckedCreateWithoutMessagesRecusInput>
    connectOrCreate?: EtudiantCreateOrConnectWithoutMessagesRecusInput
    upsert?: EtudiantUpsertWithoutMessagesRecusInput
    connect?: EtudiantWhereUniqueInput
    update?: XOR<XOR<EtudiantUpdateToOneWithWhereWithoutMessagesRecusInput, EtudiantUpdateWithoutMessagesRecusInput>, EtudiantUncheckedUpdateWithoutMessagesRecusInput>
  }

  export type MessageUpdateOneRequiredWithoutReceveursNestedInput = {
    create?: XOR<MessageCreateWithoutReceveursInput, MessageUncheckedCreateWithoutReceveursInput>
    connectOrCreate?: MessageCreateOrConnectWithoutReceveursInput
    upsert?: MessageUpsertWithoutReceveursInput
    connect?: MessageWhereUniqueInput
    update?: XOR<XOR<MessageUpdateToOneWithWhereWithoutReceveursInput, MessageUpdateWithoutReceveursInput>, MessageUncheckedUpdateWithoutReceveursInput>
  }

  export type EtudiantCreateNestedOneWithoutAnnoncesInput = {
    create?: XOR<EtudiantCreateWithoutAnnoncesInput, EtudiantUncheckedCreateWithoutAnnoncesInput>
    connectOrCreate?: EtudiantCreateOrConnectWithoutAnnoncesInput
    connect?: EtudiantWhereUniqueInput
  }

  export type CommentaireCreateNestedManyWithoutAnnonceInput = {
    create?: XOR<CommentaireCreateWithoutAnnonceInput, CommentaireUncheckedCreateWithoutAnnonceInput> | CommentaireCreateWithoutAnnonceInput[] | CommentaireUncheckedCreateWithoutAnnonceInput[]
    connectOrCreate?: CommentaireCreateOrConnectWithoutAnnonceInput | CommentaireCreateOrConnectWithoutAnnonceInput[]
    createMany?: CommentaireCreateManyAnnonceInputEnvelope
    connect?: CommentaireWhereUniqueInput | CommentaireWhereUniqueInput[]
  }

  export type SignalerCreateNestedManyWithoutAnnonceInput = {
    create?: XOR<SignalerCreateWithoutAnnonceInput, SignalerUncheckedCreateWithoutAnnonceInput> | SignalerCreateWithoutAnnonceInput[] | SignalerUncheckedCreateWithoutAnnonceInput[]
    connectOrCreate?: SignalerCreateOrConnectWithoutAnnonceInput | SignalerCreateOrConnectWithoutAnnonceInput[]
    createMany?: SignalerCreateManyAnnonceInputEnvelope
    connect?: SignalerWhereUniqueInput | SignalerWhereUniqueInput[]
  }

  export type CommentaireUncheckedCreateNestedManyWithoutAnnonceInput = {
    create?: XOR<CommentaireCreateWithoutAnnonceInput, CommentaireUncheckedCreateWithoutAnnonceInput> | CommentaireCreateWithoutAnnonceInput[] | CommentaireUncheckedCreateWithoutAnnonceInput[]
    connectOrCreate?: CommentaireCreateOrConnectWithoutAnnonceInput | CommentaireCreateOrConnectWithoutAnnonceInput[]
    createMany?: CommentaireCreateManyAnnonceInputEnvelope
    connect?: CommentaireWhereUniqueInput | CommentaireWhereUniqueInput[]
  }

  export type SignalerUncheckedCreateNestedManyWithoutAnnonceInput = {
    create?: XOR<SignalerCreateWithoutAnnonceInput, SignalerUncheckedCreateWithoutAnnonceInput> | SignalerCreateWithoutAnnonceInput[] | SignalerUncheckedCreateWithoutAnnonceInput[]
    connectOrCreate?: SignalerCreateOrConnectWithoutAnnonceInput | SignalerCreateOrConnectWithoutAnnonceInput[]
    createMany?: SignalerCreateManyAnnonceInputEnvelope
    connect?: SignalerWhereUniqueInput | SignalerWhereUniqueInput[]
  }

  export type EtudiantUpdateOneWithoutAnnoncesNestedInput = {
    create?: XOR<EtudiantCreateWithoutAnnoncesInput, EtudiantUncheckedCreateWithoutAnnoncesInput>
    connectOrCreate?: EtudiantCreateOrConnectWithoutAnnoncesInput
    upsert?: EtudiantUpsertWithoutAnnoncesInput
    disconnect?: EtudiantWhereInput | boolean
    delete?: EtudiantWhereInput | boolean
    connect?: EtudiantWhereUniqueInput
    update?: XOR<XOR<EtudiantUpdateToOneWithWhereWithoutAnnoncesInput, EtudiantUpdateWithoutAnnoncesInput>, EtudiantUncheckedUpdateWithoutAnnoncesInput>
  }

  export type CommentaireUpdateManyWithoutAnnonceNestedInput = {
    create?: XOR<CommentaireCreateWithoutAnnonceInput, CommentaireUncheckedCreateWithoutAnnonceInput> | CommentaireCreateWithoutAnnonceInput[] | CommentaireUncheckedCreateWithoutAnnonceInput[]
    connectOrCreate?: CommentaireCreateOrConnectWithoutAnnonceInput | CommentaireCreateOrConnectWithoutAnnonceInput[]
    upsert?: CommentaireUpsertWithWhereUniqueWithoutAnnonceInput | CommentaireUpsertWithWhereUniqueWithoutAnnonceInput[]
    createMany?: CommentaireCreateManyAnnonceInputEnvelope
    set?: CommentaireWhereUniqueInput | CommentaireWhereUniqueInput[]
    disconnect?: CommentaireWhereUniqueInput | CommentaireWhereUniqueInput[]
    delete?: CommentaireWhereUniqueInput | CommentaireWhereUniqueInput[]
    connect?: CommentaireWhereUniqueInput | CommentaireWhereUniqueInput[]
    update?: CommentaireUpdateWithWhereUniqueWithoutAnnonceInput | CommentaireUpdateWithWhereUniqueWithoutAnnonceInput[]
    updateMany?: CommentaireUpdateManyWithWhereWithoutAnnonceInput | CommentaireUpdateManyWithWhereWithoutAnnonceInput[]
    deleteMany?: CommentaireScalarWhereInput | CommentaireScalarWhereInput[]
  }

  export type SignalerUpdateManyWithoutAnnonceNestedInput = {
    create?: XOR<SignalerCreateWithoutAnnonceInput, SignalerUncheckedCreateWithoutAnnonceInput> | SignalerCreateWithoutAnnonceInput[] | SignalerUncheckedCreateWithoutAnnonceInput[]
    connectOrCreate?: SignalerCreateOrConnectWithoutAnnonceInput | SignalerCreateOrConnectWithoutAnnonceInput[]
    upsert?: SignalerUpsertWithWhereUniqueWithoutAnnonceInput | SignalerUpsertWithWhereUniqueWithoutAnnonceInput[]
    createMany?: SignalerCreateManyAnnonceInputEnvelope
    set?: SignalerWhereUniqueInput | SignalerWhereUniqueInput[]
    disconnect?: SignalerWhereUniqueInput | SignalerWhereUniqueInput[]
    delete?: SignalerWhereUniqueInput | SignalerWhereUniqueInput[]
    connect?: SignalerWhereUniqueInput | SignalerWhereUniqueInput[]
    update?: SignalerUpdateWithWhereUniqueWithoutAnnonceInput | SignalerUpdateWithWhereUniqueWithoutAnnonceInput[]
    updateMany?: SignalerUpdateManyWithWhereWithoutAnnonceInput | SignalerUpdateManyWithWhereWithoutAnnonceInput[]
    deleteMany?: SignalerScalarWhereInput | SignalerScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CommentaireUncheckedUpdateManyWithoutAnnonceNestedInput = {
    create?: XOR<CommentaireCreateWithoutAnnonceInput, CommentaireUncheckedCreateWithoutAnnonceInput> | CommentaireCreateWithoutAnnonceInput[] | CommentaireUncheckedCreateWithoutAnnonceInput[]
    connectOrCreate?: CommentaireCreateOrConnectWithoutAnnonceInput | CommentaireCreateOrConnectWithoutAnnonceInput[]
    upsert?: CommentaireUpsertWithWhereUniqueWithoutAnnonceInput | CommentaireUpsertWithWhereUniqueWithoutAnnonceInput[]
    createMany?: CommentaireCreateManyAnnonceInputEnvelope
    set?: CommentaireWhereUniqueInput | CommentaireWhereUniqueInput[]
    disconnect?: CommentaireWhereUniqueInput | CommentaireWhereUniqueInput[]
    delete?: CommentaireWhereUniqueInput | CommentaireWhereUniqueInput[]
    connect?: CommentaireWhereUniqueInput | CommentaireWhereUniqueInput[]
    update?: CommentaireUpdateWithWhereUniqueWithoutAnnonceInput | CommentaireUpdateWithWhereUniqueWithoutAnnonceInput[]
    updateMany?: CommentaireUpdateManyWithWhereWithoutAnnonceInput | CommentaireUpdateManyWithWhereWithoutAnnonceInput[]
    deleteMany?: CommentaireScalarWhereInput | CommentaireScalarWhereInput[]
  }

  export type SignalerUncheckedUpdateManyWithoutAnnonceNestedInput = {
    create?: XOR<SignalerCreateWithoutAnnonceInput, SignalerUncheckedCreateWithoutAnnonceInput> | SignalerCreateWithoutAnnonceInput[] | SignalerUncheckedCreateWithoutAnnonceInput[]
    connectOrCreate?: SignalerCreateOrConnectWithoutAnnonceInput | SignalerCreateOrConnectWithoutAnnonceInput[]
    upsert?: SignalerUpsertWithWhereUniqueWithoutAnnonceInput | SignalerUpsertWithWhereUniqueWithoutAnnonceInput[]
    createMany?: SignalerCreateManyAnnonceInputEnvelope
    set?: SignalerWhereUniqueInput | SignalerWhereUniqueInput[]
    disconnect?: SignalerWhereUniqueInput | SignalerWhereUniqueInput[]
    delete?: SignalerWhereUniqueInput | SignalerWhereUniqueInput[]
    connect?: SignalerWhereUniqueInput | SignalerWhereUniqueInput[]
    update?: SignalerUpdateWithWhereUniqueWithoutAnnonceInput | SignalerUpdateWithWhereUniqueWithoutAnnonceInput[]
    updateMany?: SignalerUpdateManyWithWhereWithoutAnnonceInput | SignalerUpdateManyWithWhereWithoutAnnonceInput[]
    deleteMany?: SignalerScalarWhereInput | SignalerScalarWhereInput[]
  }

  export type EtudiantCreateNestedOneWithoutCommentairesInput = {
    create?: XOR<EtudiantCreateWithoutCommentairesInput, EtudiantUncheckedCreateWithoutCommentairesInput>
    connectOrCreate?: EtudiantCreateOrConnectWithoutCommentairesInput
    connect?: EtudiantWhereUniqueInput
  }

  export type AnnonceCreateNestedOneWithoutCommentairesInput = {
    create?: XOR<AnnonceCreateWithoutCommentairesInput, AnnonceUncheckedCreateWithoutCommentairesInput>
    connectOrCreate?: AnnonceCreateOrConnectWithoutCommentairesInput
    connect?: AnnonceWhereUniqueInput
  }

  export type EtudiantUpdateOneWithoutCommentairesNestedInput = {
    create?: XOR<EtudiantCreateWithoutCommentairesInput, EtudiantUncheckedCreateWithoutCommentairesInput>
    connectOrCreate?: EtudiantCreateOrConnectWithoutCommentairesInput
    upsert?: EtudiantUpsertWithoutCommentairesInput
    disconnect?: EtudiantWhereInput | boolean
    delete?: EtudiantWhereInput | boolean
    connect?: EtudiantWhereUniqueInput
    update?: XOR<XOR<EtudiantUpdateToOneWithWhereWithoutCommentairesInput, EtudiantUpdateWithoutCommentairesInput>, EtudiantUncheckedUpdateWithoutCommentairesInput>
  }

  export type AnnonceUpdateOneWithoutCommentairesNestedInput = {
    create?: XOR<AnnonceCreateWithoutCommentairesInput, AnnonceUncheckedCreateWithoutCommentairesInput>
    connectOrCreate?: AnnonceCreateOrConnectWithoutCommentairesInput
    upsert?: AnnonceUpsertWithoutCommentairesInput
    disconnect?: AnnonceWhereInput | boolean
    delete?: AnnonceWhereInput | boolean
    connect?: AnnonceWhereUniqueInput
    update?: XOR<XOR<AnnonceUpdateToOneWithWhereWithoutCommentairesInput, AnnonceUpdateWithoutCommentairesInput>, AnnonceUncheckedUpdateWithoutCommentairesInput>
  }

  export type AnnonceCreateNestedOneWithoutSignalementsInput = {
    create?: XOR<AnnonceCreateWithoutSignalementsInput, AnnonceUncheckedCreateWithoutSignalementsInput>
    connectOrCreate?: AnnonceCreateOrConnectWithoutSignalementsInput
    connect?: AnnonceWhereUniqueInput
  }

  export type EtudiantCreateNestedOneWithoutSignalementsInput = {
    create?: XOR<EtudiantCreateWithoutSignalementsInput, EtudiantUncheckedCreateWithoutSignalementsInput>
    connectOrCreate?: EtudiantCreateOrConnectWithoutSignalementsInput
    connect?: EtudiantWhereUniqueInput
  }

  export type AnnonceUpdateOneRequiredWithoutSignalementsNestedInput = {
    create?: XOR<AnnonceCreateWithoutSignalementsInput, AnnonceUncheckedCreateWithoutSignalementsInput>
    connectOrCreate?: AnnonceCreateOrConnectWithoutSignalementsInput
    upsert?: AnnonceUpsertWithoutSignalementsInput
    connect?: AnnonceWhereUniqueInput
    update?: XOR<XOR<AnnonceUpdateToOneWithWhereWithoutSignalementsInput, AnnonceUpdateWithoutSignalementsInput>, AnnonceUncheckedUpdateWithoutSignalementsInput>
  }

  export type EtudiantUpdateOneRequiredWithoutSignalementsNestedInput = {
    create?: XOR<EtudiantCreateWithoutSignalementsInput, EtudiantUncheckedCreateWithoutSignalementsInput>
    connectOrCreate?: EtudiantCreateOrConnectWithoutSignalementsInput
    upsert?: EtudiantUpsertWithoutSignalementsInput
    connect?: EtudiantWhereUniqueInput
    update?: XOR<XOR<EtudiantUpdateToOneWithWhereWithoutSignalementsInput, EtudiantUpdateWithoutSignalementsInput>, EtudiantUncheckedUpdateWithoutSignalementsInput>
  }

  export type EtudiantCreateNestedOneWithoutDemandesEnvoyeesInput = {
    create?: XOR<EtudiantCreateWithoutDemandesEnvoyeesInput, EtudiantUncheckedCreateWithoutDemandesEnvoyeesInput>
    connectOrCreate?: EtudiantCreateOrConnectWithoutDemandesEnvoyeesInput
    connect?: EtudiantWhereUniqueInput
  }

  export type EtudiantCreateNestedOneWithoutDemandesRecuesInput = {
    create?: XOR<EtudiantCreateWithoutDemandesRecuesInput, EtudiantUncheckedCreateWithoutDemandesRecuesInput>
    connectOrCreate?: EtudiantCreateOrConnectWithoutDemandesRecuesInput
    connect?: EtudiantWhereUniqueInput
  }

  export type EnumStatutAmitieFieldUpdateOperationsInput = {
    set?: $Enums.StatutAmitie
  }

  export type EtudiantUpdateOneRequiredWithoutDemandesEnvoyeesNestedInput = {
    create?: XOR<EtudiantCreateWithoutDemandesEnvoyeesInput, EtudiantUncheckedCreateWithoutDemandesEnvoyeesInput>
    connectOrCreate?: EtudiantCreateOrConnectWithoutDemandesEnvoyeesInput
    upsert?: EtudiantUpsertWithoutDemandesEnvoyeesInput
    connect?: EtudiantWhereUniqueInput
    update?: XOR<XOR<EtudiantUpdateToOneWithWhereWithoutDemandesEnvoyeesInput, EtudiantUpdateWithoutDemandesEnvoyeesInput>, EtudiantUncheckedUpdateWithoutDemandesEnvoyeesInput>
  }

  export type EtudiantUpdateOneRequiredWithoutDemandesRecuesNestedInput = {
    create?: XOR<EtudiantCreateWithoutDemandesRecuesInput, EtudiantUncheckedCreateWithoutDemandesRecuesInput>
    connectOrCreate?: EtudiantCreateOrConnectWithoutDemandesRecuesInput
    upsert?: EtudiantUpsertWithoutDemandesRecuesInput
    connect?: EtudiantWhereUniqueInput
    update?: XOR<XOR<EtudiantUpdateToOneWithWhereWithoutDemandesRecuesInput, EtudiantUpdateWithoutDemandesRecuesInput>, EtudiantUncheckedUpdateWithoutDemandesRecuesInput>
  }

  export type EtudiantGroupeCreateNestedManyWithoutGroupeInput = {
    create?: XOR<EtudiantGroupeCreateWithoutGroupeInput, EtudiantGroupeUncheckedCreateWithoutGroupeInput> | EtudiantGroupeCreateWithoutGroupeInput[] | EtudiantGroupeUncheckedCreateWithoutGroupeInput[]
    connectOrCreate?: EtudiantGroupeCreateOrConnectWithoutGroupeInput | EtudiantGroupeCreateOrConnectWithoutGroupeInput[]
    createMany?: EtudiantGroupeCreateManyGroupeInputEnvelope
    connect?: EtudiantGroupeWhereUniqueInput | EtudiantGroupeWhereUniqueInput[]
  }

  export type MessageGroupeCreateNestedManyWithoutGroupeInput = {
    create?: XOR<MessageGroupeCreateWithoutGroupeInput, MessageGroupeUncheckedCreateWithoutGroupeInput> | MessageGroupeCreateWithoutGroupeInput[] | MessageGroupeUncheckedCreateWithoutGroupeInput[]
    connectOrCreate?: MessageGroupeCreateOrConnectWithoutGroupeInput | MessageGroupeCreateOrConnectWithoutGroupeInput[]
    createMany?: MessageGroupeCreateManyGroupeInputEnvelope
    connect?: MessageGroupeWhereUniqueInput | MessageGroupeWhereUniqueInput[]
  }

  export type EtudiantGroupeUncheckedCreateNestedManyWithoutGroupeInput = {
    create?: XOR<EtudiantGroupeCreateWithoutGroupeInput, EtudiantGroupeUncheckedCreateWithoutGroupeInput> | EtudiantGroupeCreateWithoutGroupeInput[] | EtudiantGroupeUncheckedCreateWithoutGroupeInput[]
    connectOrCreate?: EtudiantGroupeCreateOrConnectWithoutGroupeInput | EtudiantGroupeCreateOrConnectWithoutGroupeInput[]
    createMany?: EtudiantGroupeCreateManyGroupeInputEnvelope
    connect?: EtudiantGroupeWhereUniqueInput | EtudiantGroupeWhereUniqueInput[]
  }

  export type MessageGroupeUncheckedCreateNestedManyWithoutGroupeInput = {
    create?: XOR<MessageGroupeCreateWithoutGroupeInput, MessageGroupeUncheckedCreateWithoutGroupeInput> | MessageGroupeCreateWithoutGroupeInput[] | MessageGroupeUncheckedCreateWithoutGroupeInput[]
    connectOrCreate?: MessageGroupeCreateOrConnectWithoutGroupeInput | MessageGroupeCreateOrConnectWithoutGroupeInput[]
    createMany?: MessageGroupeCreateManyGroupeInputEnvelope
    connect?: MessageGroupeWhereUniqueInput | MessageGroupeWhereUniqueInput[]
  }

  export type EtudiantGroupeUpdateManyWithoutGroupeNestedInput = {
    create?: XOR<EtudiantGroupeCreateWithoutGroupeInput, EtudiantGroupeUncheckedCreateWithoutGroupeInput> | EtudiantGroupeCreateWithoutGroupeInput[] | EtudiantGroupeUncheckedCreateWithoutGroupeInput[]
    connectOrCreate?: EtudiantGroupeCreateOrConnectWithoutGroupeInput | EtudiantGroupeCreateOrConnectWithoutGroupeInput[]
    upsert?: EtudiantGroupeUpsertWithWhereUniqueWithoutGroupeInput | EtudiantGroupeUpsertWithWhereUniqueWithoutGroupeInput[]
    createMany?: EtudiantGroupeCreateManyGroupeInputEnvelope
    set?: EtudiantGroupeWhereUniqueInput | EtudiantGroupeWhereUniqueInput[]
    disconnect?: EtudiantGroupeWhereUniqueInput | EtudiantGroupeWhereUniqueInput[]
    delete?: EtudiantGroupeWhereUniqueInput | EtudiantGroupeWhereUniqueInput[]
    connect?: EtudiantGroupeWhereUniqueInput | EtudiantGroupeWhereUniqueInput[]
    update?: EtudiantGroupeUpdateWithWhereUniqueWithoutGroupeInput | EtudiantGroupeUpdateWithWhereUniqueWithoutGroupeInput[]
    updateMany?: EtudiantGroupeUpdateManyWithWhereWithoutGroupeInput | EtudiantGroupeUpdateManyWithWhereWithoutGroupeInput[]
    deleteMany?: EtudiantGroupeScalarWhereInput | EtudiantGroupeScalarWhereInput[]
  }

  export type MessageGroupeUpdateManyWithoutGroupeNestedInput = {
    create?: XOR<MessageGroupeCreateWithoutGroupeInput, MessageGroupeUncheckedCreateWithoutGroupeInput> | MessageGroupeCreateWithoutGroupeInput[] | MessageGroupeUncheckedCreateWithoutGroupeInput[]
    connectOrCreate?: MessageGroupeCreateOrConnectWithoutGroupeInput | MessageGroupeCreateOrConnectWithoutGroupeInput[]
    upsert?: MessageGroupeUpsertWithWhereUniqueWithoutGroupeInput | MessageGroupeUpsertWithWhereUniqueWithoutGroupeInput[]
    createMany?: MessageGroupeCreateManyGroupeInputEnvelope
    set?: MessageGroupeWhereUniqueInput | MessageGroupeWhereUniqueInput[]
    disconnect?: MessageGroupeWhereUniqueInput | MessageGroupeWhereUniqueInput[]
    delete?: MessageGroupeWhereUniqueInput | MessageGroupeWhereUniqueInput[]
    connect?: MessageGroupeWhereUniqueInput | MessageGroupeWhereUniqueInput[]
    update?: MessageGroupeUpdateWithWhereUniqueWithoutGroupeInput | MessageGroupeUpdateWithWhereUniqueWithoutGroupeInput[]
    updateMany?: MessageGroupeUpdateManyWithWhereWithoutGroupeInput | MessageGroupeUpdateManyWithWhereWithoutGroupeInput[]
    deleteMany?: MessageGroupeScalarWhereInput | MessageGroupeScalarWhereInput[]
  }

  export type EtudiantGroupeUncheckedUpdateManyWithoutGroupeNestedInput = {
    create?: XOR<EtudiantGroupeCreateWithoutGroupeInput, EtudiantGroupeUncheckedCreateWithoutGroupeInput> | EtudiantGroupeCreateWithoutGroupeInput[] | EtudiantGroupeUncheckedCreateWithoutGroupeInput[]
    connectOrCreate?: EtudiantGroupeCreateOrConnectWithoutGroupeInput | EtudiantGroupeCreateOrConnectWithoutGroupeInput[]
    upsert?: EtudiantGroupeUpsertWithWhereUniqueWithoutGroupeInput | EtudiantGroupeUpsertWithWhereUniqueWithoutGroupeInput[]
    createMany?: EtudiantGroupeCreateManyGroupeInputEnvelope
    set?: EtudiantGroupeWhereUniqueInput | EtudiantGroupeWhereUniqueInput[]
    disconnect?: EtudiantGroupeWhereUniqueInput | EtudiantGroupeWhereUniqueInput[]
    delete?: EtudiantGroupeWhereUniqueInput | EtudiantGroupeWhereUniqueInput[]
    connect?: EtudiantGroupeWhereUniqueInput | EtudiantGroupeWhereUniqueInput[]
    update?: EtudiantGroupeUpdateWithWhereUniqueWithoutGroupeInput | EtudiantGroupeUpdateWithWhereUniqueWithoutGroupeInput[]
    updateMany?: EtudiantGroupeUpdateManyWithWhereWithoutGroupeInput | EtudiantGroupeUpdateManyWithWhereWithoutGroupeInput[]
    deleteMany?: EtudiantGroupeScalarWhereInput | EtudiantGroupeScalarWhereInput[]
  }

  export type MessageGroupeUncheckedUpdateManyWithoutGroupeNestedInput = {
    create?: XOR<MessageGroupeCreateWithoutGroupeInput, MessageGroupeUncheckedCreateWithoutGroupeInput> | MessageGroupeCreateWithoutGroupeInput[] | MessageGroupeUncheckedCreateWithoutGroupeInput[]
    connectOrCreate?: MessageGroupeCreateOrConnectWithoutGroupeInput | MessageGroupeCreateOrConnectWithoutGroupeInput[]
    upsert?: MessageGroupeUpsertWithWhereUniqueWithoutGroupeInput | MessageGroupeUpsertWithWhereUniqueWithoutGroupeInput[]
    createMany?: MessageGroupeCreateManyGroupeInputEnvelope
    set?: MessageGroupeWhereUniqueInput | MessageGroupeWhereUniqueInput[]
    disconnect?: MessageGroupeWhereUniqueInput | MessageGroupeWhereUniqueInput[]
    delete?: MessageGroupeWhereUniqueInput | MessageGroupeWhereUniqueInput[]
    connect?: MessageGroupeWhereUniqueInput | MessageGroupeWhereUniqueInput[]
    update?: MessageGroupeUpdateWithWhereUniqueWithoutGroupeInput | MessageGroupeUpdateWithWhereUniqueWithoutGroupeInput[]
    updateMany?: MessageGroupeUpdateManyWithWhereWithoutGroupeInput | MessageGroupeUpdateManyWithWhereWithoutGroupeInput[]
    deleteMany?: MessageGroupeScalarWhereInput | MessageGroupeScalarWhereInput[]
  }

  export type EtudiantCreateNestedOneWithoutGroupesInput = {
    create?: XOR<EtudiantCreateWithoutGroupesInput, EtudiantUncheckedCreateWithoutGroupesInput>
    connectOrCreate?: EtudiantCreateOrConnectWithoutGroupesInput
    connect?: EtudiantWhereUniqueInput
  }

  export type GroupeCreateNestedOneWithoutMembresInput = {
    create?: XOR<GroupeCreateWithoutMembresInput, GroupeUncheckedCreateWithoutMembresInput>
    connectOrCreate?: GroupeCreateOrConnectWithoutMembresInput
    connect?: GroupeWhereUniqueInput
  }

  export type EtudiantUpdateOneRequiredWithoutGroupesNestedInput = {
    create?: XOR<EtudiantCreateWithoutGroupesInput, EtudiantUncheckedCreateWithoutGroupesInput>
    connectOrCreate?: EtudiantCreateOrConnectWithoutGroupesInput
    upsert?: EtudiantUpsertWithoutGroupesInput
    connect?: EtudiantWhereUniqueInput
    update?: XOR<XOR<EtudiantUpdateToOneWithWhereWithoutGroupesInput, EtudiantUpdateWithoutGroupesInput>, EtudiantUncheckedUpdateWithoutGroupesInput>
  }

  export type GroupeUpdateOneRequiredWithoutMembresNestedInput = {
    create?: XOR<GroupeCreateWithoutMembresInput, GroupeUncheckedCreateWithoutMembresInput>
    connectOrCreate?: GroupeCreateOrConnectWithoutMembresInput
    upsert?: GroupeUpsertWithoutMembresInput
    connect?: GroupeWhereUniqueInput
    update?: XOR<XOR<GroupeUpdateToOneWithWhereWithoutMembresInput, GroupeUpdateWithoutMembresInput>, GroupeUncheckedUpdateWithoutMembresInput>
  }

  export type EtudiantCreateNestedOneWithoutMessagesGroupesInput = {
    create?: XOR<EtudiantCreateWithoutMessagesGroupesInput, EtudiantUncheckedCreateWithoutMessagesGroupesInput>
    connectOrCreate?: EtudiantCreateOrConnectWithoutMessagesGroupesInput
    connect?: EtudiantWhereUniqueInput
  }

  export type GroupeCreateNestedOneWithoutMessagesInput = {
    create?: XOR<GroupeCreateWithoutMessagesInput, GroupeUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: GroupeCreateOrConnectWithoutMessagesInput
    connect?: GroupeWhereUniqueInput
  }

  export type EtudiantUpdateOneRequiredWithoutMessagesGroupesNestedInput = {
    create?: XOR<EtudiantCreateWithoutMessagesGroupesInput, EtudiantUncheckedCreateWithoutMessagesGroupesInput>
    connectOrCreate?: EtudiantCreateOrConnectWithoutMessagesGroupesInput
    upsert?: EtudiantUpsertWithoutMessagesGroupesInput
    connect?: EtudiantWhereUniqueInput
    update?: XOR<XOR<EtudiantUpdateToOneWithWhereWithoutMessagesGroupesInput, EtudiantUpdateWithoutMessagesGroupesInput>, EtudiantUncheckedUpdateWithoutMessagesGroupesInput>
  }

  export type GroupeUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<GroupeCreateWithoutMessagesInput, GroupeUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: GroupeCreateOrConnectWithoutMessagesInput
    upsert?: GroupeUpsertWithoutMessagesInput
    connect?: GroupeWhereUniqueInput
    update?: XOR<XOR<GroupeUpdateToOneWithWhereWithoutMessagesInput, GroupeUpdateWithoutMessagesInput>, GroupeUncheckedUpdateWithoutMessagesInput>
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
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
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

  export type NestedEnumStatutAmitieFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutAmitie | EnumStatutAmitieFieldRefInput<$PrismaModel>
    in?: $Enums.StatutAmitie[] | ListEnumStatutAmitieFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatutAmitie[] | ListEnumStatutAmitieFieldRefInput<$PrismaModel>
    not?: NestedEnumStatutAmitieFilter<$PrismaModel> | $Enums.StatutAmitie
  }

  export type NestedEnumStatutAmitieWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutAmitie | EnumStatutAmitieFieldRefInput<$PrismaModel>
    in?: $Enums.StatutAmitie[] | ListEnumStatutAmitieFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatutAmitie[] | ListEnumStatutAmitieFieldRefInput<$PrismaModel>
    not?: NestedEnumStatutAmitieWithAggregatesFilter<$PrismaModel> | $Enums.StatutAmitie
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatutAmitieFilter<$PrismaModel>
    _max?: NestedEnumStatutAmitieFilter<$PrismaModel>
  }

  export type MessageCreateWithoutEtudiantInput = {
    contenu?: string | null
    date?: Date | string
    receveurs?: RecevoireCreateNestedManyWithoutMessageInput
  }

  export type MessageUncheckedCreateWithoutEtudiantInput = {
    id?: number
    contenu?: string | null
    date?: Date | string
    receveurs?: RecevoireUncheckedCreateNestedManyWithoutMessageInput
  }

  export type MessageCreateOrConnectWithoutEtudiantInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutEtudiantInput, MessageUncheckedCreateWithoutEtudiantInput>
  }

  export type MessageCreateManyEtudiantInputEnvelope = {
    data: MessageCreateManyEtudiantInput | MessageCreateManyEtudiantInput[]
    skipDuplicates?: boolean
  }

  export type RecevoireCreateWithoutEtudiantInput = {
    message: MessageCreateNestedOneWithoutReceveursInput
  }

  export type RecevoireUncheckedCreateWithoutEtudiantInput = {
    messageId: number
  }

  export type RecevoireCreateOrConnectWithoutEtudiantInput = {
    where: RecevoireWhereUniqueInput
    create: XOR<RecevoireCreateWithoutEtudiantInput, RecevoireUncheckedCreateWithoutEtudiantInput>
  }

  export type RecevoireCreateManyEtudiantInputEnvelope = {
    data: RecevoireCreateManyEtudiantInput | RecevoireCreateManyEtudiantInput[]
    skipDuplicates?: boolean
  }

  export type AnnonceCreateWithoutAuteurInput = {
    titre: string
    contenu?: string | null
    image?: string | null
    dateDePublication?: Date | string
    commentaires?: CommentaireCreateNestedManyWithoutAnnonceInput
    signalements?: SignalerCreateNestedManyWithoutAnnonceInput
  }

  export type AnnonceUncheckedCreateWithoutAuteurInput = {
    id?: number
    titre: string
    contenu?: string | null
    image?: string | null
    dateDePublication?: Date | string
    commentaires?: CommentaireUncheckedCreateNestedManyWithoutAnnonceInput
    signalements?: SignalerUncheckedCreateNestedManyWithoutAnnonceInput
  }

  export type AnnonceCreateOrConnectWithoutAuteurInput = {
    where: AnnonceWhereUniqueInput
    create: XOR<AnnonceCreateWithoutAuteurInput, AnnonceUncheckedCreateWithoutAuteurInput>
  }

  export type AnnonceCreateManyAuteurInputEnvelope = {
    data: AnnonceCreateManyAuteurInput | AnnonceCreateManyAuteurInput[]
    skipDuplicates?: boolean
  }

  export type CommentaireCreateWithoutAuteurInput = {
    date?: Date | string
    contenu?: string | null
    annonce?: AnnonceCreateNestedOneWithoutCommentairesInput
  }

  export type CommentaireUncheckedCreateWithoutAuteurInput = {
    id?: number
    date?: Date | string
    annonceId?: number | null
    contenu?: string | null
  }

  export type CommentaireCreateOrConnectWithoutAuteurInput = {
    where: CommentaireWhereUniqueInput
    create: XOR<CommentaireCreateWithoutAuteurInput, CommentaireUncheckedCreateWithoutAuteurInput>
  }

  export type CommentaireCreateManyAuteurInputEnvelope = {
    data: CommentaireCreateManyAuteurInput | CommentaireCreateManyAuteurInput[]
    skipDuplicates?: boolean
  }

  export type SignalerCreateWithoutEtudiantInput = {
    annonce: AnnonceCreateNestedOneWithoutSignalementsInput
  }

  export type SignalerUncheckedCreateWithoutEtudiantInput = {
    annonceId: number
  }

  export type SignalerCreateOrConnectWithoutEtudiantInput = {
    where: SignalerWhereUniqueInput
    create: XOR<SignalerCreateWithoutEtudiantInput, SignalerUncheckedCreateWithoutEtudiantInput>
  }

  export type SignalerCreateManyEtudiantInputEnvelope = {
    data: SignalerCreateManyEtudiantInput | SignalerCreateManyEtudiantInput[]
    skipDuplicates?: boolean
  }

  export type AmitieCreateWithoutDemandeurInput = {
    statut?: $Enums.StatutAmitie
    dateDemande?: Date | string
    dateAcceptation?: Date | string | null
    receveur: EtudiantCreateNestedOneWithoutDemandesRecuesInput
  }

  export type AmitieUncheckedCreateWithoutDemandeurInput = {
    id?: number
    receveurId: number
    statut?: $Enums.StatutAmitie
    dateDemande?: Date | string
    dateAcceptation?: Date | string | null
  }

  export type AmitieCreateOrConnectWithoutDemandeurInput = {
    where: AmitieWhereUniqueInput
    create: XOR<AmitieCreateWithoutDemandeurInput, AmitieUncheckedCreateWithoutDemandeurInput>
  }

  export type AmitieCreateManyDemandeurInputEnvelope = {
    data: AmitieCreateManyDemandeurInput | AmitieCreateManyDemandeurInput[]
    skipDuplicates?: boolean
  }

  export type AmitieCreateWithoutReceveurInput = {
    statut?: $Enums.StatutAmitie
    dateDemande?: Date | string
    dateAcceptation?: Date | string | null
    demandeur: EtudiantCreateNestedOneWithoutDemandesEnvoyeesInput
  }

  export type AmitieUncheckedCreateWithoutReceveurInput = {
    id?: number
    demandeurId: number
    statut?: $Enums.StatutAmitie
    dateDemande?: Date | string
    dateAcceptation?: Date | string | null
  }

  export type AmitieCreateOrConnectWithoutReceveurInput = {
    where: AmitieWhereUniqueInput
    create: XOR<AmitieCreateWithoutReceveurInput, AmitieUncheckedCreateWithoutReceveurInput>
  }

  export type AmitieCreateManyReceveurInputEnvelope = {
    data: AmitieCreateManyReceveurInput | AmitieCreateManyReceveurInput[]
    skipDuplicates?: boolean
  }

  export type EtudiantGroupeCreateWithoutEtudiantInput = {
    groupe: GroupeCreateNestedOneWithoutMembresInput
  }

  export type EtudiantGroupeUncheckedCreateWithoutEtudiantInput = {
    groupeId: number
  }

  export type EtudiantGroupeCreateOrConnectWithoutEtudiantInput = {
    where: EtudiantGroupeWhereUniqueInput
    create: XOR<EtudiantGroupeCreateWithoutEtudiantInput, EtudiantGroupeUncheckedCreateWithoutEtudiantInput>
  }

  export type EtudiantGroupeCreateManyEtudiantInputEnvelope = {
    data: EtudiantGroupeCreateManyEtudiantInput | EtudiantGroupeCreateManyEtudiantInput[]
    skipDuplicates?: boolean
  }

  export type MessageGroupeCreateWithoutAuteurInput = {
    contenu: string
    date?: Date | string
    groupe: GroupeCreateNestedOneWithoutMessagesInput
  }

  export type MessageGroupeUncheckedCreateWithoutAuteurInput = {
    id?: number
    contenu: string
    date?: Date | string
    groupeId: number
  }

  export type MessageGroupeCreateOrConnectWithoutAuteurInput = {
    where: MessageGroupeWhereUniqueInput
    create: XOR<MessageGroupeCreateWithoutAuteurInput, MessageGroupeUncheckedCreateWithoutAuteurInput>
  }

  export type MessageGroupeCreateManyAuteurInputEnvelope = {
    data: MessageGroupeCreateManyAuteurInput | MessageGroupeCreateManyAuteurInput[]
    skipDuplicates?: boolean
  }

  export type MessageUpsertWithWhereUniqueWithoutEtudiantInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutEtudiantInput, MessageUncheckedUpdateWithoutEtudiantInput>
    create: XOR<MessageCreateWithoutEtudiantInput, MessageUncheckedCreateWithoutEtudiantInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutEtudiantInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutEtudiantInput, MessageUncheckedUpdateWithoutEtudiantInput>
  }

  export type MessageUpdateManyWithWhereWithoutEtudiantInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutEtudiantInput>
  }

  export type MessageScalarWhereInput = {
    AND?: MessageScalarWhereInput | MessageScalarWhereInput[]
    OR?: MessageScalarWhereInput[]
    NOT?: MessageScalarWhereInput | MessageScalarWhereInput[]
    id?: IntFilter<"Message"> | number
    contenu?: StringNullableFilter<"Message"> | string | null
    date?: DateTimeFilter<"Message"> | Date | string
    etudiantId?: IntFilter<"Message"> | number
  }

  export type RecevoireUpsertWithWhereUniqueWithoutEtudiantInput = {
    where: RecevoireWhereUniqueInput
    update: XOR<RecevoireUpdateWithoutEtudiantInput, RecevoireUncheckedUpdateWithoutEtudiantInput>
    create: XOR<RecevoireCreateWithoutEtudiantInput, RecevoireUncheckedCreateWithoutEtudiantInput>
  }

  export type RecevoireUpdateWithWhereUniqueWithoutEtudiantInput = {
    where: RecevoireWhereUniqueInput
    data: XOR<RecevoireUpdateWithoutEtudiantInput, RecevoireUncheckedUpdateWithoutEtudiantInput>
  }

  export type RecevoireUpdateManyWithWhereWithoutEtudiantInput = {
    where: RecevoireScalarWhereInput
    data: XOR<RecevoireUpdateManyMutationInput, RecevoireUncheckedUpdateManyWithoutEtudiantInput>
  }

  export type RecevoireScalarWhereInput = {
    AND?: RecevoireScalarWhereInput | RecevoireScalarWhereInput[]
    OR?: RecevoireScalarWhereInput[]
    NOT?: RecevoireScalarWhereInput | RecevoireScalarWhereInput[]
    etudiantId?: IntFilter<"Recevoire"> | number
    messageId?: IntFilter<"Recevoire"> | number
  }

  export type AnnonceUpsertWithWhereUniqueWithoutAuteurInput = {
    where: AnnonceWhereUniqueInput
    update: XOR<AnnonceUpdateWithoutAuteurInput, AnnonceUncheckedUpdateWithoutAuteurInput>
    create: XOR<AnnonceCreateWithoutAuteurInput, AnnonceUncheckedCreateWithoutAuteurInput>
  }

  export type AnnonceUpdateWithWhereUniqueWithoutAuteurInput = {
    where: AnnonceWhereUniqueInput
    data: XOR<AnnonceUpdateWithoutAuteurInput, AnnonceUncheckedUpdateWithoutAuteurInput>
  }

  export type AnnonceUpdateManyWithWhereWithoutAuteurInput = {
    where: AnnonceScalarWhereInput
    data: XOR<AnnonceUpdateManyMutationInput, AnnonceUncheckedUpdateManyWithoutAuteurInput>
  }

  export type AnnonceScalarWhereInput = {
    AND?: AnnonceScalarWhereInput | AnnonceScalarWhereInput[]
    OR?: AnnonceScalarWhereInput[]
    NOT?: AnnonceScalarWhereInput | AnnonceScalarWhereInput[]
    id?: IntFilter<"Annonce"> | number
    titre?: StringFilter<"Annonce"> | string
    contenu?: StringNullableFilter<"Annonce"> | string | null
    image?: StringNullableFilter<"Annonce"> | string | null
    dateDePublication?: DateTimeFilter<"Annonce"> | Date | string
    etudiantId?: IntNullableFilter<"Annonce"> | number | null
  }

  export type CommentaireUpsertWithWhereUniqueWithoutAuteurInput = {
    where: CommentaireWhereUniqueInput
    update: XOR<CommentaireUpdateWithoutAuteurInput, CommentaireUncheckedUpdateWithoutAuteurInput>
    create: XOR<CommentaireCreateWithoutAuteurInput, CommentaireUncheckedCreateWithoutAuteurInput>
  }

  export type CommentaireUpdateWithWhereUniqueWithoutAuteurInput = {
    where: CommentaireWhereUniqueInput
    data: XOR<CommentaireUpdateWithoutAuteurInput, CommentaireUncheckedUpdateWithoutAuteurInput>
  }

  export type CommentaireUpdateManyWithWhereWithoutAuteurInput = {
    where: CommentaireScalarWhereInput
    data: XOR<CommentaireUpdateManyMutationInput, CommentaireUncheckedUpdateManyWithoutAuteurInput>
  }

  export type CommentaireScalarWhereInput = {
    AND?: CommentaireScalarWhereInput | CommentaireScalarWhereInput[]
    OR?: CommentaireScalarWhereInput[]
    NOT?: CommentaireScalarWhereInput | CommentaireScalarWhereInput[]
    id?: IntFilter<"Commentaire"> | number
    date?: DateTimeFilter<"Commentaire"> | Date | string
    etudiantId?: IntNullableFilter<"Commentaire"> | number | null
    annonceId?: IntNullableFilter<"Commentaire"> | number | null
    contenu?: StringNullableFilter<"Commentaire"> | string | null
  }

  export type SignalerUpsertWithWhereUniqueWithoutEtudiantInput = {
    where: SignalerWhereUniqueInput
    update: XOR<SignalerUpdateWithoutEtudiantInput, SignalerUncheckedUpdateWithoutEtudiantInput>
    create: XOR<SignalerCreateWithoutEtudiantInput, SignalerUncheckedCreateWithoutEtudiantInput>
  }

  export type SignalerUpdateWithWhereUniqueWithoutEtudiantInput = {
    where: SignalerWhereUniqueInput
    data: XOR<SignalerUpdateWithoutEtudiantInput, SignalerUncheckedUpdateWithoutEtudiantInput>
  }

  export type SignalerUpdateManyWithWhereWithoutEtudiantInput = {
    where: SignalerScalarWhereInput
    data: XOR<SignalerUpdateManyMutationInput, SignalerUncheckedUpdateManyWithoutEtudiantInput>
  }

  export type SignalerScalarWhereInput = {
    AND?: SignalerScalarWhereInput | SignalerScalarWhereInput[]
    OR?: SignalerScalarWhereInput[]
    NOT?: SignalerScalarWhereInput | SignalerScalarWhereInput[]
    annonceId?: IntFilter<"Signaler"> | number
    etudiantId?: IntFilter<"Signaler"> | number
  }

  export type AmitieUpsertWithWhereUniqueWithoutDemandeurInput = {
    where: AmitieWhereUniqueInput
    update: XOR<AmitieUpdateWithoutDemandeurInput, AmitieUncheckedUpdateWithoutDemandeurInput>
    create: XOR<AmitieCreateWithoutDemandeurInput, AmitieUncheckedCreateWithoutDemandeurInput>
  }

  export type AmitieUpdateWithWhereUniqueWithoutDemandeurInput = {
    where: AmitieWhereUniqueInput
    data: XOR<AmitieUpdateWithoutDemandeurInput, AmitieUncheckedUpdateWithoutDemandeurInput>
  }

  export type AmitieUpdateManyWithWhereWithoutDemandeurInput = {
    where: AmitieScalarWhereInput
    data: XOR<AmitieUpdateManyMutationInput, AmitieUncheckedUpdateManyWithoutDemandeurInput>
  }

  export type AmitieScalarWhereInput = {
    AND?: AmitieScalarWhereInput | AmitieScalarWhereInput[]
    OR?: AmitieScalarWhereInput[]
    NOT?: AmitieScalarWhereInput | AmitieScalarWhereInput[]
    id?: IntFilter<"Amitie"> | number
    demandeurId?: IntFilter<"Amitie"> | number
    receveurId?: IntFilter<"Amitie"> | number
    statut?: EnumStatutAmitieFilter<"Amitie"> | $Enums.StatutAmitie
    dateDemande?: DateTimeFilter<"Amitie"> | Date | string
    dateAcceptation?: DateTimeNullableFilter<"Amitie"> | Date | string | null
  }

  export type AmitieUpsertWithWhereUniqueWithoutReceveurInput = {
    where: AmitieWhereUniqueInput
    update: XOR<AmitieUpdateWithoutReceveurInput, AmitieUncheckedUpdateWithoutReceveurInput>
    create: XOR<AmitieCreateWithoutReceveurInput, AmitieUncheckedCreateWithoutReceveurInput>
  }

  export type AmitieUpdateWithWhereUniqueWithoutReceveurInput = {
    where: AmitieWhereUniqueInput
    data: XOR<AmitieUpdateWithoutReceveurInput, AmitieUncheckedUpdateWithoutReceveurInput>
  }

  export type AmitieUpdateManyWithWhereWithoutReceveurInput = {
    where: AmitieScalarWhereInput
    data: XOR<AmitieUpdateManyMutationInput, AmitieUncheckedUpdateManyWithoutReceveurInput>
  }

  export type EtudiantGroupeUpsertWithWhereUniqueWithoutEtudiantInput = {
    where: EtudiantGroupeWhereUniqueInput
    update: XOR<EtudiantGroupeUpdateWithoutEtudiantInput, EtudiantGroupeUncheckedUpdateWithoutEtudiantInput>
    create: XOR<EtudiantGroupeCreateWithoutEtudiantInput, EtudiantGroupeUncheckedCreateWithoutEtudiantInput>
  }

  export type EtudiantGroupeUpdateWithWhereUniqueWithoutEtudiantInput = {
    where: EtudiantGroupeWhereUniqueInput
    data: XOR<EtudiantGroupeUpdateWithoutEtudiantInput, EtudiantGroupeUncheckedUpdateWithoutEtudiantInput>
  }

  export type EtudiantGroupeUpdateManyWithWhereWithoutEtudiantInput = {
    where: EtudiantGroupeScalarWhereInput
    data: XOR<EtudiantGroupeUpdateManyMutationInput, EtudiantGroupeUncheckedUpdateManyWithoutEtudiantInput>
  }

  export type EtudiantGroupeScalarWhereInput = {
    AND?: EtudiantGroupeScalarWhereInput | EtudiantGroupeScalarWhereInput[]
    OR?: EtudiantGroupeScalarWhereInput[]
    NOT?: EtudiantGroupeScalarWhereInput | EtudiantGroupeScalarWhereInput[]
    etudiantId?: IntFilter<"EtudiantGroupe"> | number
    groupeId?: IntFilter<"EtudiantGroupe"> | number
  }

  export type MessageGroupeUpsertWithWhereUniqueWithoutAuteurInput = {
    where: MessageGroupeWhereUniqueInput
    update: XOR<MessageGroupeUpdateWithoutAuteurInput, MessageGroupeUncheckedUpdateWithoutAuteurInput>
    create: XOR<MessageGroupeCreateWithoutAuteurInput, MessageGroupeUncheckedCreateWithoutAuteurInput>
  }

  export type MessageGroupeUpdateWithWhereUniqueWithoutAuteurInput = {
    where: MessageGroupeWhereUniqueInput
    data: XOR<MessageGroupeUpdateWithoutAuteurInput, MessageGroupeUncheckedUpdateWithoutAuteurInput>
  }

  export type MessageGroupeUpdateManyWithWhereWithoutAuteurInput = {
    where: MessageGroupeScalarWhereInput
    data: XOR<MessageGroupeUpdateManyMutationInput, MessageGroupeUncheckedUpdateManyWithoutAuteurInput>
  }

  export type MessageGroupeScalarWhereInput = {
    AND?: MessageGroupeScalarWhereInput | MessageGroupeScalarWhereInput[]
    OR?: MessageGroupeScalarWhereInput[]
    NOT?: MessageGroupeScalarWhereInput | MessageGroupeScalarWhereInput[]
    id?: IntFilter<"MessageGroupe"> | number
    contenu?: StringFilter<"MessageGroupe"> | string
    date?: DateTimeFilter<"MessageGroupe"> | Date | string
    auteurId?: IntFilter<"MessageGroupe"> | number
    groupeId?: IntFilter<"MessageGroupe"> | number
  }

  export type EtudiantCreateWithoutMessagesEnvoyesInput = {
    prenom?: string | null
    nom: string
    email: string
    motDePasse: string
    dateInscription?: Date | string
    image?: string | null
    accessToken?: string | null
    refreshToken?: string | null
    isAuthGoogle?: boolean
    otpCode?: string | null
    otpExpiresAt?: Date | string | null
    messagesRecus?: RecevoireCreateNestedManyWithoutEtudiantInput
    annonces?: AnnonceCreateNestedManyWithoutAuteurInput
    commentaires?: CommentaireCreateNestedManyWithoutAuteurInput
    signalements?: SignalerCreateNestedManyWithoutEtudiantInput
    demandesEnvoyees?: AmitieCreateNestedManyWithoutDemandeurInput
    demandesRecues?: AmitieCreateNestedManyWithoutReceveurInput
    groupes?: EtudiantGroupeCreateNestedManyWithoutEtudiantInput
    messagesGroupes?: MessageGroupeCreateNestedManyWithoutAuteurInput
  }

  export type EtudiantUncheckedCreateWithoutMessagesEnvoyesInput = {
    id?: number
    prenom?: string | null
    nom: string
    email: string
    motDePasse: string
    dateInscription?: Date | string
    image?: string | null
    accessToken?: string | null
    refreshToken?: string | null
    isAuthGoogle?: boolean
    otpCode?: string | null
    otpExpiresAt?: Date | string | null
    messagesRecus?: RecevoireUncheckedCreateNestedManyWithoutEtudiantInput
    annonces?: AnnonceUncheckedCreateNestedManyWithoutAuteurInput
    commentaires?: CommentaireUncheckedCreateNestedManyWithoutAuteurInput
    signalements?: SignalerUncheckedCreateNestedManyWithoutEtudiantInput
    demandesEnvoyees?: AmitieUncheckedCreateNestedManyWithoutDemandeurInput
    demandesRecues?: AmitieUncheckedCreateNestedManyWithoutReceveurInput
    groupes?: EtudiantGroupeUncheckedCreateNestedManyWithoutEtudiantInput
    messagesGroupes?: MessageGroupeUncheckedCreateNestedManyWithoutAuteurInput
  }

  export type EtudiantCreateOrConnectWithoutMessagesEnvoyesInput = {
    where: EtudiantWhereUniqueInput
    create: XOR<EtudiantCreateWithoutMessagesEnvoyesInput, EtudiantUncheckedCreateWithoutMessagesEnvoyesInput>
  }

  export type RecevoireCreateWithoutMessageInput = {
    etudiant: EtudiantCreateNestedOneWithoutMessagesRecusInput
  }

  export type RecevoireUncheckedCreateWithoutMessageInput = {
    etudiantId: number
  }

  export type RecevoireCreateOrConnectWithoutMessageInput = {
    where: RecevoireWhereUniqueInput
    create: XOR<RecevoireCreateWithoutMessageInput, RecevoireUncheckedCreateWithoutMessageInput>
  }

  export type RecevoireCreateManyMessageInputEnvelope = {
    data: RecevoireCreateManyMessageInput | RecevoireCreateManyMessageInput[]
    skipDuplicates?: boolean
  }

  export type EtudiantUpsertWithoutMessagesEnvoyesInput = {
    update: XOR<EtudiantUpdateWithoutMessagesEnvoyesInput, EtudiantUncheckedUpdateWithoutMessagesEnvoyesInput>
    create: XOR<EtudiantCreateWithoutMessagesEnvoyesInput, EtudiantUncheckedCreateWithoutMessagesEnvoyesInput>
    where?: EtudiantWhereInput
  }

  export type EtudiantUpdateToOneWithWhereWithoutMessagesEnvoyesInput = {
    where?: EtudiantWhereInput
    data: XOR<EtudiantUpdateWithoutMessagesEnvoyesInput, EtudiantUncheckedUpdateWithoutMessagesEnvoyesInput>
  }

  export type EtudiantUpdateWithoutMessagesEnvoyesInput = {
    prenom?: NullableStringFieldUpdateOperationsInput | string | null
    nom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    motDePasse?: StringFieldUpdateOperationsInput | string
    dateInscription?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    isAuthGoogle?: BoolFieldUpdateOperationsInput | boolean
    otpCode?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    messagesRecus?: RecevoireUpdateManyWithoutEtudiantNestedInput
    annonces?: AnnonceUpdateManyWithoutAuteurNestedInput
    commentaires?: CommentaireUpdateManyWithoutAuteurNestedInput
    signalements?: SignalerUpdateManyWithoutEtudiantNestedInput
    demandesEnvoyees?: AmitieUpdateManyWithoutDemandeurNestedInput
    demandesRecues?: AmitieUpdateManyWithoutReceveurNestedInput
    groupes?: EtudiantGroupeUpdateManyWithoutEtudiantNestedInput
    messagesGroupes?: MessageGroupeUpdateManyWithoutAuteurNestedInput
  }

  export type EtudiantUncheckedUpdateWithoutMessagesEnvoyesInput = {
    id?: IntFieldUpdateOperationsInput | number
    prenom?: NullableStringFieldUpdateOperationsInput | string | null
    nom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    motDePasse?: StringFieldUpdateOperationsInput | string
    dateInscription?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    isAuthGoogle?: BoolFieldUpdateOperationsInput | boolean
    otpCode?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    messagesRecus?: RecevoireUncheckedUpdateManyWithoutEtudiantNestedInput
    annonces?: AnnonceUncheckedUpdateManyWithoutAuteurNestedInput
    commentaires?: CommentaireUncheckedUpdateManyWithoutAuteurNestedInput
    signalements?: SignalerUncheckedUpdateManyWithoutEtudiantNestedInput
    demandesEnvoyees?: AmitieUncheckedUpdateManyWithoutDemandeurNestedInput
    demandesRecues?: AmitieUncheckedUpdateManyWithoutReceveurNestedInput
    groupes?: EtudiantGroupeUncheckedUpdateManyWithoutEtudiantNestedInput
    messagesGroupes?: MessageGroupeUncheckedUpdateManyWithoutAuteurNestedInput
  }

  export type RecevoireUpsertWithWhereUniqueWithoutMessageInput = {
    where: RecevoireWhereUniqueInput
    update: XOR<RecevoireUpdateWithoutMessageInput, RecevoireUncheckedUpdateWithoutMessageInput>
    create: XOR<RecevoireCreateWithoutMessageInput, RecevoireUncheckedCreateWithoutMessageInput>
  }

  export type RecevoireUpdateWithWhereUniqueWithoutMessageInput = {
    where: RecevoireWhereUniqueInput
    data: XOR<RecevoireUpdateWithoutMessageInput, RecevoireUncheckedUpdateWithoutMessageInput>
  }

  export type RecevoireUpdateManyWithWhereWithoutMessageInput = {
    where: RecevoireScalarWhereInput
    data: XOR<RecevoireUpdateManyMutationInput, RecevoireUncheckedUpdateManyWithoutMessageInput>
  }

  export type EtudiantCreateWithoutMessagesRecusInput = {
    prenom?: string | null
    nom: string
    email: string
    motDePasse: string
    dateInscription?: Date | string
    image?: string | null
    accessToken?: string | null
    refreshToken?: string | null
    isAuthGoogle?: boolean
    otpCode?: string | null
    otpExpiresAt?: Date | string | null
    messagesEnvoyes?: MessageCreateNestedManyWithoutEtudiantInput
    annonces?: AnnonceCreateNestedManyWithoutAuteurInput
    commentaires?: CommentaireCreateNestedManyWithoutAuteurInput
    signalements?: SignalerCreateNestedManyWithoutEtudiantInput
    demandesEnvoyees?: AmitieCreateNestedManyWithoutDemandeurInput
    demandesRecues?: AmitieCreateNestedManyWithoutReceveurInput
    groupes?: EtudiantGroupeCreateNestedManyWithoutEtudiantInput
    messagesGroupes?: MessageGroupeCreateNestedManyWithoutAuteurInput
  }

  export type EtudiantUncheckedCreateWithoutMessagesRecusInput = {
    id?: number
    prenom?: string | null
    nom: string
    email: string
    motDePasse: string
    dateInscription?: Date | string
    image?: string | null
    accessToken?: string | null
    refreshToken?: string | null
    isAuthGoogle?: boolean
    otpCode?: string | null
    otpExpiresAt?: Date | string | null
    messagesEnvoyes?: MessageUncheckedCreateNestedManyWithoutEtudiantInput
    annonces?: AnnonceUncheckedCreateNestedManyWithoutAuteurInput
    commentaires?: CommentaireUncheckedCreateNestedManyWithoutAuteurInput
    signalements?: SignalerUncheckedCreateNestedManyWithoutEtudiantInput
    demandesEnvoyees?: AmitieUncheckedCreateNestedManyWithoutDemandeurInput
    demandesRecues?: AmitieUncheckedCreateNestedManyWithoutReceveurInput
    groupes?: EtudiantGroupeUncheckedCreateNestedManyWithoutEtudiantInput
    messagesGroupes?: MessageGroupeUncheckedCreateNestedManyWithoutAuteurInput
  }

  export type EtudiantCreateOrConnectWithoutMessagesRecusInput = {
    where: EtudiantWhereUniqueInput
    create: XOR<EtudiantCreateWithoutMessagesRecusInput, EtudiantUncheckedCreateWithoutMessagesRecusInput>
  }

  export type MessageCreateWithoutReceveursInput = {
    contenu?: string | null
    date?: Date | string
    etudiant: EtudiantCreateNestedOneWithoutMessagesEnvoyesInput
  }

  export type MessageUncheckedCreateWithoutReceveursInput = {
    id?: number
    contenu?: string | null
    date?: Date | string
    etudiantId: number
  }

  export type MessageCreateOrConnectWithoutReceveursInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutReceveursInput, MessageUncheckedCreateWithoutReceveursInput>
  }

  export type EtudiantUpsertWithoutMessagesRecusInput = {
    update: XOR<EtudiantUpdateWithoutMessagesRecusInput, EtudiantUncheckedUpdateWithoutMessagesRecusInput>
    create: XOR<EtudiantCreateWithoutMessagesRecusInput, EtudiantUncheckedCreateWithoutMessagesRecusInput>
    where?: EtudiantWhereInput
  }

  export type EtudiantUpdateToOneWithWhereWithoutMessagesRecusInput = {
    where?: EtudiantWhereInput
    data: XOR<EtudiantUpdateWithoutMessagesRecusInput, EtudiantUncheckedUpdateWithoutMessagesRecusInput>
  }

  export type EtudiantUpdateWithoutMessagesRecusInput = {
    prenom?: NullableStringFieldUpdateOperationsInput | string | null
    nom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    motDePasse?: StringFieldUpdateOperationsInput | string
    dateInscription?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    isAuthGoogle?: BoolFieldUpdateOperationsInput | boolean
    otpCode?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    messagesEnvoyes?: MessageUpdateManyWithoutEtudiantNestedInput
    annonces?: AnnonceUpdateManyWithoutAuteurNestedInput
    commentaires?: CommentaireUpdateManyWithoutAuteurNestedInput
    signalements?: SignalerUpdateManyWithoutEtudiantNestedInput
    demandesEnvoyees?: AmitieUpdateManyWithoutDemandeurNestedInput
    demandesRecues?: AmitieUpdateManyWithoutReceveurNestedInput
    groupes?: EtudiantGroupeUpdateManyWithoutEtudiantNestedInput
    messagesGroupes?: MessageGroupeUpdateManyWithoutAuteurNestedInput
  }

  export type EtudiantUncheckedUpdateWithoutMessagesRecusInput = {
    id?: IntFieldUpdateOperationsInput | number
    prenom?: NullableStringFieldUpdateOperationsInput | string | null
    nom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    motDePasse?: StringFieldUpdateOperationsInput | string
    dateInscription?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    isAuthGoogle?: BoolFieldUpdateOperationsInput | boolean
    otpCode?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    messagesEnvoyes?: MessageUncheckedUpdateManyWithoutEtudiantNestedInput
    annonces?: AnnonceUncheckedUpdateManyWithoutAuteurNestedInput
    commentaires?: CommentaireUncheckedUpdateManyWithoutAuteurNestedInput
    signalements?: SignalerUncheckedUpdateManyWithoutEtudiantNestedInput
    demandesEnvoyees?: AmitieUncheckedUpdateManyWithoutDemandeurNestedInput
    demandesRecues?: AmitieUncheckedUpdateManyWithoutReceveurNestedInput
    groupes?: EtudiantGroupeUncheckedUpdateManyWithoutEtudiantNestedInput
    messagesGroupes?: MessageGroupeUncheckedUpdateManyWithoutAuteurNestedInput
  }

  export type MessageUpsertWithoutReceveursInput = {
    update: XOR<MessageUpdateWithoutReceveursInput, MessageUncheckedUpdateWithoutReceveursInput>
    create: XOR<MessageCreateWithoutReceveursInput, MessageUncheckedCreateWithoutReceveursInput>
    where?: MessageWhereInput
  }

  export type MessageUpdateToOneWithWhereWithoutReceveursInput = {
    where?: MessageWhereInput
    data: XOR<MessageUpdateWithoutReceveursInput, MessageUncheckedUpdateWithoutReceveursInput>
  }

  export type MessageUpdateWithoutReceveursInput = {
    contenu?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    etudiant?: EtudiantUpdateOneRequiredWithoutMessagesEnvoyesNestedInput
  }

  export type MessageUncheckedUpdateWithoutReceveursInput = {
    id?: IntFieldUpdateOperationsInput | number
    contenu?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    etudiantId?: IntFieldUpdateOperationsInput | number
  }

  export type EtudiantCreateWithoutAnnoncesInput = {
    prenom?: string | null
    nom: string
    email: string
    motDePasse: string
    dateInscription?: Date | string
    image?: string | null
    accessToken?: string | null
    refreshToken?: string | null
    isAuthGoogle?: boolean
    otpCode?: string | null
    otpExpiresAt?: Date | string | null
    messagesEnvoyes?: MessageCreateNestedManyWithoutEtudiantInput
    messagesRecus?: RecevoireCreateNestedManyWithoutEtudiantInput
    commentaires?: CommentaireCreateNestedManyWithoutAuteurInput
    signalements?: SignalerCreateNestedManyWithoutEtudiantInput
    demandesEnvoyees?: AmitieCreateNestedManyWithoutDemandeurInput
    demandesRecues?: AmitieCreateNestedManyWithoutReceveurInput
    groupes?: EtudiantGroupeCreateNestedManyWithoutEtudiantInput
    messagesGroupes?: MessageGroupeCreateNestedManyWithoutAuteurInput
  }

  export type EtudiantUncheckedCreateWithoutAnnoncesInput = {
    id?: number
    prenom?: string | null
    nom: string
    email: string
    motDePasse: string
    dateInscription?: Date | string
    image?: string | null
    accessToken?: string | null
    refreshToken?: string | null
    isAuthGoogle?: boolean
    otpCode?: string | null
    otpExpiresAt?: Date | string | null
    messagesEnvoyes?: MessageUncheckedCreateNestedManyWithoutEtudiantInput
    messagesRecus?: RecevoireUncheckedCreateNestedManyWithoutEtudiantInput
    commentaires?: CommentaireUncheckedCreateNestedManyWithoutAuteurInput
    signalements?: SignalerUncheckedCreateNestedManyWithoutEtudiantInput
    demandesEnvoyees?: AmitieUncheckedCreateNestedManyWithoutDemandeurInput
    demandesRecues?: AmitieUncheckedCreateNestedManyWithoutReceveurInput
    groupes?: EtudiantGroupeUncheckedCreateNestedManyWithoutEtudiantInput
    messagesGroupes?: MessageGroupeUncheckedCreateNestedManyWithoutAuteurInput
  }

  export type EtudiantCreateOrConnectWithoutAnnoncesInput = {
    where: EtudiantWhereUniqueInput
    create: XOR<EtudiantCreateWithoutAnnoncesInput, EtudiantUncheckedCreateWithoutAnnoncesInput>
  }

  export type CommentaireCreateWithoutAnnonceInput = {
    date?: Date | string
    contenu?: string | null
    auteur?: EtudiantCreateNestedOneWithoutCommentairesInput
  }

  export type CommentaireUncheckedCreateWithoutAnnonceInput = {
    id?: number
    date?: Date | string
    etudiantId?: number | null
    contenu?: string | null
  }

  export type CommentaireCreateOrConnectWithoutAnnonceInput = {
    where: CommentaireWhereUniqueInput
    create: XOR<CommentaireCreateWithoutAnnonceInput, CommentaireUncheckedCreateWithoutAnnonceInput>
  }

  export type CommentaireCreateManyAnnonceInputEnvelope = {
    data: CommentaireCreateManyAnnonceInput | CommentaireCreateManyAnnonceInput[]
    skipDuplicates?: boolean
  }

  export type SignalerCreateWithoutAnnonceInput = {
    etudiant: EtudiantCreateNestedOneWithoutSignalementsInput
  }

  export type SignalerUncheckedCreateWithoutAnnonceInput = {
    etudiantId: number
  }

  export type SignalerCreateOrConnectWithoutAnnonceInput = {
    where: SignalerWhereUniqueInput
    create: XOR<SignalerCreateWithoutAnnonceInput, SignalerUncheckedCreateWithoutAnnonceInput>
  }

  export type SignalerCreateManyAnnonceInputEnvelope = {
    data: SignalerCreateManyAnnonceInput | SignalerCreateManyAnnonceInput[]
    skipDuplicates?: boolean
  }

  export type EtudiantUpsertWithoutAnnoncesInput = {
    update: XOR<EtudiantUpdateWithoutAnnoncesInput, EtudiantUncheckedUpdateWithoutAnnoncesInput>
    create: XOR<EtudiantCreateWithoutAnnoncesInput, EtudiantUncheckedCreateWithoutAnnoncesInput>
    where?: EtudiantWhereInput
  }

  export type EtudiantUpdateToOneWithWhereWithoutAnnoncesInput = {
    where?: EtudiantWhereInput
    data: XOR<EtudiantUpdateWithoutAnnoncesInput, EtudiantUncheckedUpdateWithoutAnnoncesInput>
  }

  export type EtudiantUpdateWithoutAnnoncesInput = {
    prenom?: NullableStringFieldUpdateOperationsInput | string | null
    nom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    motDePasse?: StringFieldUpdateOperationsInput | string
    dateInscription?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    isAuthGoogle?: BoolFieldUpdateOperationsInput | boolean
    otpCode?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    messagesEnvoyes?: MessageUpdateManyWithoutEtudiantNestedInput
    messagesRecus?: RecevoireUpdateManyWithoutEtudiantNestedInput
    commentaires?: CommentaireUpdateManyWithoutAuteurNestedInput
    signalements?: SignalerUpdateManyWithoutEtudiantNestedInput
    demandesEnvoyees?: AmitieUpdateManyWithoutDemandeurNestedInput
    demandesRecues?: AmitieUpdateManyWithoutReceveurNestedInput
    groupes?: EtudiantGroupeUpdateManyWithoutEtudiantNestedInput
    messagesGroupes?: MessageGroupeUpdateManyWithoutAuteurNestedInput
  }

  export type EtudiantUncheckedUpdateWithoutAnnoncesInput = {
    id?: IntFieldUpdateOperationsInput | number
    prenom?: NullableStringFieldUpdateOperationsInput | string | null
    nom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    motDePasse?: StringFieldUpdateOperationsInput | string
    dateInscription?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    isAuthGoogle?: BoolFieldUpdateOperationsInput | boolean
    otpCode?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    messagesEnvoyes?: MessageUncheckedUpdateManyWithoutEtudiantNestedInput
    messagesRecus?: RecevoireUncheckedUpdateManyWithoutEtudiantNestedInput
    commentaires?: CommentaireUncheckedUpdateManyWithoutAuteurNestedInput
    signalements?: SignalerUncheckedUpdateManyWithoutEtudiantNestedInput
    demandesEnvoyees?: AmitieUncheckedUpdateManyWithoutDemandeurNestedInput
    demandesRecues?: AmitieUncheckedUpdateManyWithoutReceveurNestedInput
    groupes?: EtudiantGroupeUncheckedUpdateManyWithoutEtudiantNestedInput
    messagesGroupes?: MessageGroupeUncheckedUpdateManyWithoutAuteurNestedInput
  }

  export type CommentaireUpsertWithWhereUniqueWithoutAnnonceInput = {
    where: CommentaireWhereUniqueInput
    update: XOR<CommentaireUpdateWithoutAnnonceInput, CommentaireUncheckedUpdateWithoutAnnonceInput>
    create: XOR<CommentaireCreateWithoutAnnonceInput, CommentaireUncheckedCreateWithoutAnnonceInput>
  }

  export type CommentaireUpdateWithWhereUniqueWithoutAnnonceInput = {
    where: CommentaireWhereUniqueInput
    data: XOR<CommentaireUpdateWithoutAnnonceInput, CommentaireUncheckedUpdateWithoutAnnonceInput>
  }

  export type CommentaireUpdateManyWithWhereWithoutAnnonceInput = {
    where: CommentaireScalarWhereInput
    data: XOR<CommentaireUpdateManyMutationInput, CommentaireUncheckedUpdateManyWithoutAnnonceInput>
  }

  export type SignalerUpsertWithWhereUniqueWithoutAnnonceInput = {
    where: SignalerWhereUniqueInput
    update: XOR<SignalerUpdateWithoutAnnonceInput, SignalerUncheckedUpdateWithoutAnnonceInput>
    create: XOR<SignalerCreateWithoutAnnonceInput, SignalerUncheckedCreateWithoutAnnonceInput>
  }

  export type SignalerUpdateWithWhereUniqueWithoutAnnonceInput = {
    where: SignalerWhereUniqueInput
    data: XOR<SignalerUpdateWithoutAnnonceInput, SignalerUncheckedUpdateWithoutAnnonceInput>
  }

  export type SignalerUpdateManyWithWhereWithoutAnnonceInput = {
    where: SignalerScalarWhereInput
    data: XOR<SignalerUpdateManyMutationInput, SignalerUncheckedUpdateManyWithoutAnnonceInput>
  }

  export type EtudiantCreateWithoutCommentairesInput = {
    prenom?: string | null
    nom: string
    email: string
    motDePasse: string
    dateInscription?: Date | string
    image?: string | null
    accessToken?: string | null
    refreshToken?: string | null
    isAuthGoogle?: boolean
    otpCode?: string | null
    otpExpiresAt?: Date | string | null
    messagesEnvoyes?: MessageCreateNestedManyWithoutEtudiantInput
    messagesRecus?: RecevoireCreateNestedManyWithoutEtudiantInput
    annonces?: AnnonceCreateNestedManyWithoutAuteurInput
    signalements?: SignalerCreateNestedManyWithoutEtudiantInput
    demandesEnvoyees?: AmitieCreateNestedManyWithoutDemandeurInput
    demandesRecues?: AmitieCreateNestedManyWithoutReceveurInput
    groupes?: EtudiantGroupeCreateNestedManyWithoutEtudiantInput
    messagesGroupes?: MessageGroupeCreateNestedManyWithoutAuteurInput
  }

  export type EtudiantUncheckedCreateWithoutCommentairesInput = {
    id?: number
    prenom?: string | null
    nom: string
    email: string
    motDePasse: string
    dateInscription?: Date | string
    image?: string | null
    accessToken?: string | null
    refreshToken?: string | null
    isAuthGoogle?: boolean
    otpCode?: string | null
    otpExpiresAt?: Date | string | null
    messagesEnvoyes?: MessageUncheckedCreateNestedManyWithoutEtudiantInput
    messagesRecus?: RecevoireUncheckedCreateNestedManyWithoutEtudiantInput
    annonces?: AnnonceUncheckedCreateNestedManyWithoutAuteurInput
    signalements?: SignalerUncheckedCreateNestedManyWithoutEtudiantInput
    demandesEnvoyees?: AmitieUncheckedCreateNestedManyWithoutDemandeurInput
    demandesRecues?: AmitieUncheckedCreateNestedManyWithoutReceveurInput
    groupes?: EtudiantGroupeUncheckedCreateNestedManyWithoutEtudiantInput
    messagesGroupes?: MessageGroupeUncheckedCreateNestedManyWithoutAuteurInput
  }

  export type EtudiantCreateOrConnectWithoutCommentairesInput = {
    where: EtudiantWhereUniqueInput
    create: XOR<EtudiantCreateWithoutCommentairesInput, EtudiantUncheckedCreateWithoutCommentairesInput>
  }

  export type AnnonceCreateWithoutCommentairesInput = {
    titre: string
    contenu?: string | null
    image?: string | null
    dateDePublication?: Date | string
    auteur?: EtudiantCreateNestedOneWithoutAnnoncesInput
    signalements?: SignalerCreateNestedManyWithoutAnnonceInput
  }

  export type AnnonceUncheckedCreateWithoutCommentairesInput = {
    id?: number
    titre: string
    contenu?: string | null
    image?: string | null
    dateDePublication?: Date | string
    etudiantId?: number | null
    signalements?: SignalerUncheckedCreateNestedManyWithoutAnnonceInput
  }

  export type AnnonceCreateOrConnectWithoutCommentairesInput = {
    where: AnnonceWhereUniqueInput
    create: XOR<AnnonceCreateWithoutCommentairesInput, AnnonceUncheckedCreateWithoutCommentairesInput>
  }

  export type EtudiantUpsertWithoutCommentairesInput = {
    update: XOR<EtudiantUpdateWithoutCommentairesInput, EtudiantUncheckedUpdateWithoutCommentairesInput>
    create: XOR<EtudiantCreateWithoutCommentairesInput, EtudiantUncheckedCreateWithoutCommentairesInput>
    where?: EtudiantWhereInput
  }

  export type EtudiantUpdateToOneWithWhereWithoutCommentairesInput = {
    where?: EtudiantWhereInput
    data: XOR<EtudiantUpdateWithoutCommentairesInput, EtudiantUncheckedUpdateWithoutCommentairesInput>
  }

  export type EtudiantUpdateWithoutCommentairesInput = {
    prenom?: NullableStringFieldUpdateOperationsInput | string | null
    nom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    motDePasse?: StringFieldUpdateOperationsInput | string
    dateInscription?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    isAuthGoogle?: BoolFieldUpdateOperationsInput | boolean
    otpCode?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    messagesEnvoyes?: MessageUpdateManyWithoutEtudiantNestedInput
    messagesRecus?: RecevoireUpdateManyWithoutEtudiantNestedInput
    annonces?: AnnonceUpdateManyWithoutAuteurNestedInput
    signalements?: SignalerUpdateManyWithoutEtudiantNestedInput
    demandesEnvoyees?: AmitieUpdateManyWithoutDemandeurNestedInput
    demandesRecues?: AmitieUpdateManyWithoutReceveurNestedInput
    groupes?: EtudiantGroupeUpdateManyWithoutEtudiantNestedInput
    messagesGroupes?: MessageGroupeUpdateManyWithoutAuteurNestedInput
  }

  export type EtudiantUncheckedUpdateWithoutCommentairesInput = {
    id?: IntFieldUpdateOperationsInput | number
    prenom?: NullableStringFieldUpdateOperationsInput | string | null
    nom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    motDePasse?: StringFieldUpdateOperationsInput | string
    dateInscription?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    isAuthGoogle?: BoolFieldUpdateOperationsInput | boolean
    otpCode?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    messagesEnvoyes?: MessageUncheckedUpdateManyWithoutEtudiantNestedInput
    messagesRecus?: RecevoireUncheckedUpdateManyWithoutEtudiantNestedInput
    annonces?: AnnonceUncheckedUpdateManyWithoutAuteurNestedInput
    signalements?: SignalerUncheckedUpdateManyWithoutEtudiantNestedInput
    demandesEnvoyees?: AmitieUncheckedUpdateManyWithoutDemandeurNestedInput
    demandesRecues?: AmitieUncheckedUpdateManyWithoutReceveurNestedInput
    groupes?: EtudiantGroupeUncheckedUpdateManyWithoutEtudiantNestedInput
    messagesGroupes?: MessageGroupeUncheckedUpdateManyWithoutAuteurNestedInput
  }

  export type AnnonceUpsertWithoutCommentairesInput = {
    update: XOR<AnnonceUpdateWithoutCommentairesInput, AnnonceUncheckedUpdateWithoutCommentairesInput>
    create: XOR<AnnonceCreateWithoutCommentairesInput, AnnonceUncheckedCreateWithoutCommentairesInput>
    where?: AnnonceWhereInput
  }

  export type AnnonceUpdateToOneWithWhereWithoutCommentairesInput = {
    where?: AnnonceWhereInput
    data: XOR<AnnonceUpdateWithoutCommentairesInput, AnnonceUncheckedUpdateWithoutCommentairesInput>
  }

  export type AnnonceUpdateWithoutCommentairesInput = {
    titre?: StringFieldUpdateOperationsInput | string
    contenu?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    dateDePublication?: DateTimeFieldUpdateOperationsInput | Date | string
    auteur?: EtudiantUpdateOneWithoutAnnoncesNestedInput
    signalements?: SignalerUpdateManyWithoutAnnonceNestedInput
  }

  export type AnnonceUncheckedUpdateWithoutCommentairesInput = {
    id?: IntFieldUpdateOperationsInput | number
    titre?: StringFieldUpdateOperationsInput | string
    contenu?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    dateDePublication?: DateTimeFieldUpdateOperationsInput | Date | string
    etudiantId?: NullableIntFieldUpdateOperationsInput | number | null
    signalements?: SignalerUncheckedUpdateManyWithoutAnnonceNestedInput
  }

  export type AnnonceCreateWithoutSignalementsInput = {
    titre: string
    contenu?: string | null
    image?: string | null
    dateDePublication?: Date | string
    auteur?: EtudiantCreateNestedOneWithoutAnnoncesInput
    commentaires?: CommentaireCreateNestedManyWithoutAnnonceInput
  }

  export type AnnonceUncheckedCreateWithoutSignalementsInput = {
    id?: number
    titre: string
    contenu?: string | null
    image?: string | null
    dateDePublication?: Date | string
    etudiantId?: number | null
    commentaires?: CommentaireUncheckedCreateNestedManyWithoutAnnonceInput
  }

  export type AnnonceCreateOrConnectWithoutSignalementsInput = {
    where: AnnonceWhereUniqueInput
    create: XOR<AnnonceCreateWithoutSignalementsInput, AnnonceUncheckedCreateWithoutSignalementsInput>
  }

  export type EtudiantCreateWithoutSignalementsInput = {
    prenom?: string | null
    nom: string
    email: string
    motDePasse: string
    dateInscription?: Date | string
    image?: string | null
    accessToken?: string | null
    refreshToken?: string | null
    isAuthGoogle?: boolean
    otpCode?: string | null
    otpExpiresAt?: Date | string | null
    messagesEnvoyes?: MessageCreateNestedManyWithoutEtudiantInput
    messagesRecus?: RecevoireCreateNestedManyWithoutEtudiantInput
    annonces?: AnnonceCreateNestedManyWithoutAuteurInput
    commentaires?: CommentaireCreateNestedManyWithoutAuteurInput
    demandesEnvoyees?: AmitieCreateNestedManyWithoutDemandeurInput
    demandesRecues?: AmitieCreateNestedManyWithoutReceveurInput
    groupes?: EtudiantGroupeCreateNestedManyWithoutEtudiantInput
    messagesGroupes?: MessageGroupeCreateNestedManyWithoutAuteurInput
  }

  export type EtudiantUncheckedCreateWithoutSignalementsInput = {
    id?: number
    prenom?: string | null
    nom: string
    email: string
    motDePasse: string
    dateInscription?: Date | string
    image?: string | null
    accessToken?: string | null
    refreshToken?: string | null
    isAuthGoogle?: boolean
    otpCode?: string | null
    otpExpiresAt?: Date | string | null
    messagesEnvoyes?: MessageUncheckedCreateNestedManyWithoutEtudiantInput
    messagesRecus?: RecevoireUncheckedCreateNestedManyWithoutEtudiantInput
    annonces?: AnnonceUncheckedCreateNestedManyWithoutAuteurInput
    commentaires?: CommentaireUncheckedCreateNestedManyWithoutAuteurInput
    demandesEnvoyees?: AmitieUncheckedCreateNestedManyWithoutDemandeurInput
    demandesRecues?: AmitieUncheckedCreateNestedManyWithoutReceveurInput
    groupes?: EtudiantGroupeUncheckedCreateNestedManyWithoutEtudiantInput
    messagesGroupes?: MessageGroupeUncheckedCreateNestedManyWithoutAuteurInput
  }

  export type EtudiantCreateOrConnectWithoutSignalementsInput = {
    where: EtudiantWhereUniqueInput
    create: XOR<EtudiantCreateWithoutSignalementsInput, EtudiantUncheckedCreateWithoutSignalementsInput>
  }

  export type AnnonceUpsertWithoutSignalementsInput = {
    update: XOR<AnnonceUpdateWithoutSignalementsInput, AnnonceUncheckedUpdateWithoutSignalementsInput>
    create: XOR<AnnonceCreateWithoutSignalementsInput, AnnonceUncheckedCreateWithoutSignalementsInput>
    where?: AnnonceWhereInput
  }

  export type AnnonceUpdateToOneWithWhereWithoutSignalementsInput = {
    where?: AnnonceWhereInput
    data: XOR<AnnonceUpdateWithoutSignalementsInput, AnnonceUncheckedUpdateWithoutSignalementsInput>
  }

  export type AnnonceUpdateWithoutSignalementsInput = {
    titre?: StringFieldUpdateOperationsInput | string
    contenu?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    dateDePublication?: DateTimeFieldUpdateOperationsInput | Date | string
    auteur?: EtudiantUpdateOneWithoutAnnoncesNestedInput
    commentaires?: CommentaireUpdateManyWithoutAnnonceNestedInput
  }

  export type AnnonceUncheckedUpdateWithoutSignalementsInput = {
    id?: IntFieldUpdateOperationsInput | number
    titre?: StringFieldUpdateOperationsInput | string
    contenu?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    dateDePublication?: DateTimeFieldUpdateOperationsInput | Date | string
    etudiantId?: NullableIntFieldUpdateOperationsInput | number | null
    commentaires?: CommentaireUncheckedUpdateManyWithoutAnnonceNestedInput
  }

  export type EtudiantUpsertWithoutSignalementsInput = {
    update: XOR<EtudiantUpdateWithoutSignalementsInput, EtudiantUncheckedUpdateWithoutSignalementsInput>
    create: XOR<EtudiantCreateWithoutSignalementsInput, EtudiantUncheckedCreateWithoutSignalementsInput>
    where?: EtudiantWhereInput
  }

  export type EtudiantUpdateToOneWithWhereWithoutSignalementsInput = {
    where?: EtudiantWhereInput
    data: XOR<EtudiantUpdateWithoutSignalementsInput, EtudiantUncheckedUpdateWithoutSignalementsInput>
  }

  export type EtudiantUpdateWithoutSignalementsInput = {
    prenom?: NullableStringFieldUpdateOperationsInput | string | null
    nom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    motDePasse?: StringFieldUpdateOperationsInput | string
    dateInscription?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    isAuthGoogle?: BoolFieldUpdateOperationsInput | boolean
    otpCode?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    messagesEnvoyes?: MessageUpdateManyWithoutEtudiantNestedInput
    messagesRecus?: RecevoireUpdateManyWithoutEtudiantNestedInput
    annonces?: AnnonceUpdateManyWithoutAuteurNestedInput
    commentaires?: CommentaireUpdateManyWithoutAuteurNestedInput
    demandesEnvoyees?: AmitieUpdateManyWithoutDemandeurNestedInput
    demandesRecues?: AmitieUpdateManyWithoutReceveurNestedInput
    groupes?: EtudiantGroupeUpdateManyWithoutEtudiantNestedInput
    messagesGroupes?: MessageGroupeUpdateManyWithoutAuteurNestedInput
  }

  export type EtudiantUncheckedUpdateWithoutSignalementsInput = {
    id?: IntFieldUpdateOperationsInput | number
    prenom?: NullableStringFieldUpdateOperationsInput | string | null
    nom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    motDePasse?: StringFieldUpdateOperationsInput | string
    dateInscription?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    isAuthGoogle?: BoolFieldUpdateOperationsInput | boolean
    otpCode?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    messagesEnvoyes?: MessageUncheckedUpdateManyWithoutEtudiantNestedInput
    messagesRecus?: RecevoireUncheckedUpdateManyWithoutEtudiantNestedInput
    annonces?: AnnonceUncheckedUpdateManyWithoutAuteurNestedInput
    commentaires?: CommentaireUncheckedUpdateManyWithoutAuteurNestedInput
    demandesEnvoyees?: AmitieUncheckedUpdateManyWithoutDemandeurNestedInput
    demandesRecues?: AmitieUncheckedUpdateManyWithoutReceveurNestedInput
    groupes?: EtudiantGroupeUncheckedUpdateManyWithoutEtudiantNestedInput
    messagesGroupes?: MessageGroupeUncheckedUpdateManyWithoutAuteurNestedInput
  }

  export type EtudiantCreateWithoutDemandesEnvoyeesInput = {
    prenom?: string | null
    nom: string
    email: string
    motDePasse: string
    dateInscription?: Date | string
    image?: string | null
    accessToken?: string | null
    refreshToken?: string | null
    isAuthGoogle?: boolean
    otpCode?: string | null
    otpExpiresAt?: Date | string | null
    messagesEnvoyes?: MessageCreateNestedManyWithoutEtudiantInput
    messagesRecus?: RecevoireCreateNestedManyWithoutEtudiantInput
    annonces?: AnnonceCreateNestedManyWithoutAuteurInput
    commentaires?: CommentaireCreateNestedManyWithoutAuteurInput
    signalements?: SignalerCreateNestedManyWithoutEtudiantInput
    demandesRecues?: AmitieCreateNestedManyWithoutReceveurInput
    groupes?: EtudiantGroupeCreateNestedManyWithoutEtudiantInput
    messagesGroupes?: MessageGroupeCreateNestedManyWithoutAuteurInput
  }

  export type EtudiantUncheckedCreateWithoutDemandesEnvoyeesInput = {
    id?: number
    prenom?: string | null
    nom: string
    email: string
    motDePasse: string
    dateInscription?: Date | string
    image?: string | null
    accessToken?: string | null
    refreshToken?: string | null
    isAuthGoogle?: boolean
    otpCode?: string | null
    otpExpiresAt?: Date | string | null
    messagesEnvoyes?: MessageUncheckedCreateNestedManyWithoutEtudiantInput
    messagesRecus?: RecevoireUncheckedCreateNestedManyWithoutEtudiantInput
    annonces?: AnnonceUncheckedCreateNestedManyWithoutAuteurInput
    commentaires?: CommentaireUncheckedCreateNestedManyWithoutAuteurInput
    signalements?: SignalerUncheckedCreateNestedManyWithoutEtudiantInput
    demandesRecues?: AmitieUncheckedCreateNestedManyWithoutReceveurInput
    groupes?: EtudiantGroupeUncheckedCreateNestedManyWithoutEtudiantInput
    messagesGroupes?: MessageGroupeUncheckedCreateNestedManyWithoutAuteurInput
  }

  export type EtudiantCreateOrConnectWithoutDemandesEnvoyeesInput = {
    where: EtudiantWhereUniqueInput
    create: XOR<EtudiantCreateWithoutDemandesEnvoyeesInput, EtudiantUncheckedCreateWithoutDemandesEnvoyeesInput>
  }

  export type EtudiantCreateWithoutDemandesRecuesInput = {
    prenom?: string | null
    nom: string
    email: string
    motDePasse: string
    dateInscription?: Date | string
    image?: string | null
    accessToken?: string | null
    refreshToken?: string | null
    isAuthGoogle?: boolean
    otpCode?: string | null
    otpExpiresAt?: Date | string | null
    messagesEnvoyes?: MessageCreateNestedManyWithoutEtudiantInput
    messagesRecus?: RecevoireCreateNestedManyWithoutEtudiantInput
    annonces?: AnnonceCreateNestedManyWithoutAuteurInput
    commentaires?: CommentaireCreateNestedManyWithoutAuteurInput
    signalements?: SignalerCreateNestedManyWithoutEtudiantInput
    demandesEnvoyees?: AmitieCreateNestedManyWithoutDemandeurInput
    groupes?: EtudiantGroupeCreateNestedManyWithoutEtudiantInput
    messagesGroupes?: MessageGroupeCreateNestedManyWithoutAuteurInput
  }

  export type EtudiantUncheckedCreateWithoutDemandesRecuesInput = {
    id?: number
    prenom?: string | null
    nom: string
    email: string
    motDePasse: string
    dateInscription?: Date | string
    image?: string | null
    accessToken?: string | null
    refreshToken?: string | null
    isAuthGoogle?: boolean
    otpCode?: string | null
    otpExpiresAt?: Date | string | null
    messagesEnvoyes?: MessageUncheckedCreateNestedManyWithoutEtudiantInput
    messagesRecus?: RecevoireUncheckedCreateNestedManyWithoutEtudiantInput
    annonces?: AnnonceUncheckedCreateNestedManyWithoutAuteurInput
    commentaires?: CommentaireUncheckedCreateNestedManyWithoutAuteurInput
    signalements?: SignalerUncheckedCreateNestedManyWithoutEtudiantInput
    demandesEnvoyees?: AmitieUncheckedCreateNestedManyWithoutDemandeurInput
    groupes?: EtudiantGroupeUncheckedCreateNestedManyWithoutEtudiantInput
    messagesGroupes?: MessageGroupeUncheckedCreateNestedManyWithoutAuteurInput
  }

  export type EtudiantCreateOrConnectWithoutDemandesRecuesInput = {
    where: EtudiantWhereUniqueInput
    create: XOR<EtudiantCreateWithoutDemandesRecuesInput, EtudiantUncheckedCreateWithoutDemandesRecuesInput>
  }

  export type EtudiantUpsertWithoutDemandesEnvoyeesInput = {
    update: XOR<EtudiantUpdateWithoutDemandesEnvoyeesInput, EtudiantUncheckedUpdateWithoutDemandesEnvoyeesInput>
    create: XOR<EtudiantCreateWithoutDemandesEnvoyeesInput, EtudiantUncheckedCreateWithoutDemandesEnvoyeesInput>
    where?: EtudiantWhereInput
  }

  export type EtudiantUpdateToOneWithWhereWithoutDemandesEnvoyeesInput = {
    where?: EtudiantWhereInput
    data: XOR<EtudiantUpdateWithoutDemandesEnvoyeesInput, EtudiantUncheckedUpdateWithoutDemandesEnvoyeesInput>
  }

  export type EtudiantUpdateWithoutDemandesEnvoyeesInput = {
    prenom?: NullableStringFieldUpdateOperationsInput | string | null
    nom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    motDePasse?: StringFieldUpdateOperationsInput | string
    dateInscription?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    isAuthGoogle?: BoolFieldUpdateOperationsInput | boolean
    otpCode?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    messagesEnvoyes?: MessageUpdateManyWithoutEtudiantNestedInput
    messagesRecus?: RecevoireUpdateManyWithoutEtudiantNestedInput
    annonces?: AnnonceUpdateManyWithoutAuteurNestedInput
    commentaires?: CommentaireUpdateManyWithoutAuteurNestedInput
    signalements?: SignalerUpdateManyWithoutEtudiantNestedInput
    demandesRecues?: AmitieUpdateManyWithoutReceveurNestedInput
    groupes?: EtudiantGroupeUpdateManyWithoutEtudiantNestedInput
    messagesGroupes?: MessageGroupeUpdateManyWithoutAuteurNestedInput
  }

  export type EtudiantUncheckedUpdateWithoutDemandesEnvoyeesInput = {
    id?: IntFieldUpdateOperationsInput | number
    prenom?: NullableStringFieldUpdateOperationsInput | string | null
    nom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    motDePasse?: StringFieldUpdateOperationsInput | string
    dateInscription?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    isAuthGoogle?: BoolFieldUpdateOperationsInput | boolean
    otpCode?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    messagesEnvoyes?: MessageUncheckedUpdateManyWithoutEtudiantNestedInput
    messagesRecus?: RecevoireUncheckedUpdateManyWithoutEtudiantNestedInput
    annonces?: AnnonceUncheckedUpdateManyWithoutAuteurNestedInput
    commentaires?: CommentaireUncheckedUpdateManyWithoutAuteurNestedInput
    signalements?: SignalerUncheckedUpdateManyWithoutEtudiantNestedInput
    demandesRecues?: AmitieUncheckedUpdateManyWithoutReceveurNestedInput
    groupes?: EtudiantGroupeUncheckedUpdateManyWithoutEtudiantNestedInput
    messagesGroupes?: MessageGroupeUncheckedUpdateManyWithoutAuteurNestedInput
  }

  export type EtudiantUpsertWithoutDemandesRecuesInput = {
    update: XOR<EtudiantUpdateWithoutDemandesRecuesInput, EtudiantUncheckedUpdateWithoutDemandesRecuesInput>
    create: XOR<EtudiantCreateWithoutDemandesRecuesInput, EtudiantUncheckedCreateWithoutDemandesRecuesInput>
    where?: EtudiantWhereInput
  }

  export type EtudiantUpdateToOneWithWhereWithoutDemandesRecuesInput = {
    where?: EtudiantWhereInput
    data: XOR<EtudiantUpdateWithoutDemandesRecuesInput, EtudiantUncheckedUpdateWithoutDemandesRecuesInput>
  }

  export type EtudiantUpdateWithoutDemandesRecuesInput = {
    prenom?: NullableStringFieldUpdateOperationsInput | string | null
    nom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    motDePasse?: StringFieldUpdateOperationsInput | string
    dateInscription?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    isAuthGoogle?: BoolFieldUpdateOperationsInput | boolean
    otpCode?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    messagesEnvoyes?: MessageUpdateManyWithoutEtudiantNestedInput
    messagesRecus?: RecevoireUpdateManyWithoutEtudiantNestedInput
    annonces?: AnnonceUpdateManyWithoutAuteurNestedInput
    commentaires?: CommentaireUpdateManyWithoutAuteurNestedInput
    signalements?: SignalerUpdateManyWithoutEtudiantNestedInput
    demandesEnvoyees?: AmitieUpdateManyWithoutDemandeurNestedInput
    groupes?: EtudiantGroupeUpdateManyWithoutEtudiantNestedInput
    messagesGroupes?: MessageGroupeUpdateManyWithoutAuteurNestedInput
  }

  export type EtudiantUncheckedUpdateWithoutDemandesRecuesInput = {
    id?: IntFieldUpdateOperationsInput | number
    prenom?: NullableStringFieldUpdateOperationsInput | string | null
    nom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    motDePasse?: StringFieldUpdateOperationsInput | string
    dateInscription?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    isAuthGoogle?: BoolFieldUpdateOperationsInput | boolean
    otpCode?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    messagesEnvoyes?: MessageUncheckedUpdateManyWithoutEtudiantNestedInput
    messagesRecus?: RecevoireUncheckedUpdateManyWithoutEtudiantNestedInput
    annonces?: AnnonceUncheckedUpdateManyWithoutAuteurNestedInput
    commentaires?: CommentaireUncheckedUpdateManyWithoutAuteurNestedInput
    signalements?: SignalerUncheckedUpdateManyWithoutEtudiantNestedInput
    demandesEnvoyees?: AmitieUncheckedUpdateManyWithoutDemandeurNestedInput
    groupes?: EtudiantGroupeUncheckedUpdateManyWithoutEtudiantNestedInput
    messagesGroupes?: MessageGroupeUncheckedUpdateManyWithoutAuteurNestedInput
  }

  export type EtudiantGroupeCreateWithoutGroupeInput = {
    etudiant: EtudiantCreateNestedOneWithoutGroupesInput
  }

  export type EtudiantGroupeUncheckedCreateWithoutGroupeInput = {
    etudiantId: number
  }

  export type EtudiantGroupeCreateOrConnectWithoutGroupeInput = {
    where: EtudiantGroupeWhereUniqueInput
    create: XOR<EtudiantGroupeCreateWithoutGroupeInput, EtudiantGroupeUncheckedCreateWithoutGroupeInput>
  }

  export type EtudiantGroupeCreateManyGroupeInputEnvelope = {
    data: EtudiantGroupeCreateManyGroupeInput | EtudiantGroupeCreateManyGroupeInput[]
    skipDuplicates?: boolean
  }

  export type MessageGroupeCreateWithoutGroupeInput = {
    contenu: string
    date?: Date | string
    auteur: EtudiantCreateNestedOneWithoutMessagesGroupesInput
  }

  export type MessageGroupeUncheckedCreateWithoutGroupeInput = {
    id?: number
    contenu: string
    date?: Date | string
    auteurId: number
  }

  export type MessageGroupeCreateOrConnectWithoutGroupeInput = {
    where: MessageGroupeWhereUniqueInput
    create: XOR<MessageGroupeCreateWithoutGroupeInput, MessageGroupeUncheckedCreateWithoutGroupeInput>
  }

  export type MessageGroupeCreateManyGroupeInputEnvelope = {
    data: MessageGroupeCreateManyGroupeInput | MessageGroupeCreateManyGroupeInput[]
    skipDuplicates?: boolean
  }

  export type EtudiantGroupeUpsertWithWhereUniqueWithoutGroupeInput = {
    where: EtudiantGroupeWhereUniqueInput
    update: XOR<EtudiantGroupeUpdateWithoutGroupeInput, EtudiantGroupeUncheckedUpdateWithoutGroupeInput>
    create: XOR<EtudiantGroupeCreateWithoutGroupeInput, EtudiantGroupeUncheckedCreateWithoutGroupeInput>
  }

  export type EtudiantGroupeUpdateWithWhereUniqueWithoutGroupeInput = {
    where: EtudiantGroupeWhereUniqueInput
    data: XOR<EtudiantGroupeUpdateWithoutGroupeInput, EtudiantGroupeUncheckedUpdateWithoutGroupeInput>
  }

  export type EtudiantGroupeUpdateManyWithWhereWithoutGroupeInput = {
    where: EtudiantGroupeScalarWhereInput
    data: XOR<EtudiantGroupeUpdateManyMutationInput, EtudiantGroupeUncheckedUpdateManyWithoutGroupeInput>
  }

  export type MessageGroupeUpsertWithWhereUniqueWithoutGroupeInput = {
    where: MessageGroupeWhereUniqueInput
    update: XOR<MessageGroupeUpdateWithoutGroupeInput, MessageGroupeUncheckedUpdateWithoutGroupeInput>
    create: XOR<MessageGroupeCreateWithoutGroupeInput, MessageGroupeUncheckedCreateWithoutGroupeInput>
  }

  export type MessageGroupeUpdateWithWhereUniqueWithoutGroupeInput = {
    where: MessageGroupeWhereUniqueInput
    data: XOR<MessageGroupeUpdateWithoutGroupeInput, MessageGroupeUncheckedUpdateWithoutGroupeInput>
  }

  export type MessageGroupeUpdateManyWithWhereWithoutGroupeInput = {
    where: MessageGroupeScalarWhereInput
    data: XOR<MessageGroupeUpdateManyMutationInput, MessageGroupeUncheckedUpdateManyWithoutGroupeInput>
  }

  export type EtudiantCreateWithoutGroupesInput = {
    prenom?: string | null
    nom: string
    email: string
    motDePasse: string
    dateInscription?: Date | string
    image?: string | null
    accessToken?: string | null
    refreshToken?: string | null
    isAuthGoogle?: boolean
    otpCode?: string | null
    otpExpiresAt?: Date | string | null
    messagesEnvoyes?: MessageCreateNestedManyWithoutEtudiantInput
    messagesRecus?: RecevoireCreateNestedManyWithoutEtudiantInput
    annonces?: AnnonceCreateNestedManyWithoutAuteurInput
    commentaires?: CommentaireCreateNestedManyWithoutAuteurInput
    signalements?: SignalerCreateNestedManyWithoutEtudiantInput
    demandesEnvoyees?: AmitieCreateNestedManyWithoutDemandeurInput
    demandesRecues?: AmitieCreateNestedManyWithoutReceveurInput
    messagesGroupes?: MessageGroupeCreateNestedManyWithoutAuteurInput
  }

  export type EtudiantUncheckedCreateWithoutGroupesInput = {
    id?: number
    prenom?: string | null
    nom: string
    email: string
    motDePasse: string
    dateInscription?: Date | string
    image?: string | null
    accessToken?: string | null
    refreshToken?: string | null
    isAuthGoogle?: boolean
    otpCode?: string | null
    otpExpiresAt?: Date | string | null
    messagesEnvoyes?: MessageUncheckedCreateNestedManyWithoutEtudiantInput
    messagesRecus?: RecevoireUncheckedCreateNestedManyWithoutEtudiantInput
    annonces?: AnnonceUncheckedCreateNestedManyWithoutAuteurInput
    commentaires?: CommentaireUncheckedCreateNestedManyWithoutAuteurInput
    signalements?: SignalerUncheckedCreateNestedManyWithoutEtudiantInput
    demandesEnvoyees?: AmitieUncheckedCreateNestedManyWithoutDemandeurInput
    demandesRecues?: AmitieUncheckedCreateNestedManyWithoutReceveurInput
    messagesGroupes?: MessageGroupeUncheckedCreateNestedManyWithoutAuteurInput
  }

  export type EtudiantCreateOrConnectWithoutGroupesInput = {
    where: EtudiantWhereUniqueInput
    create: XOR<EtudiantCreateWithoutGroupesInput, EtudiantUncheckedCreateWithoutGroupesInput>
  }

  export type GroupeCreateWithoutMembresInput = {
    nom: string
    createdAt?: Date | string
    messages?: MessageGroupeCreateNestedManyWithoutGroupeInput
  }

  export type GroupeUncheckedCreateWithoutMembresInput = {
    id?: number
    nom: string
    createdAt?: Date | string
    messages?: MessageGroupeUncheckedCreateNestedManyWithoutGroupeInput
  }

  export type GroupeCreateOrConnectWithoutMembresInput = {
    where: GroupeWhereUniqueInput
    create: XOR<GroupeCreateWithoutMembresInput, GroupeUncheckedCreateWithoutMembresInput>
  }

  export type EtudiantUpsertWithoutGroupesInput = {
    update: XOR<EtudiantUpdateWithoutGroupesInput, EtudiantUncheckedUpdateWithoutGroupesInput>
    create: XOR<EtudiantCreateWithoutGroupesInput, EtudiantUncheckedCreateWithoutGroupesInput>
    where?: EtudiantWhereInput
  }

  export type EtudiantUpdateToOneWithWhereWithoutGroupesInput = {
    where?: EtudiantWhereInput
    data: XOR<EtudiantUpdateWithoutGroupesInput, EtudiantUncheckedUpdateWithoutGroupesInput>
  }

  export type EtudiantUpdateWithoutGroupesInput = {
    prenom?: NullableStringFieldUpdateOperationsInput | string | null
    nom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    motDePasse?: StringFieldUpdateOperationsInput | string
    dateInscription?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    isAuthGoogle?: BoolFieldUpdateOperationsInput | boolean
    otpCode?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    messagesEnvoyes?: MessageUpdateManyWithoutEtudiantNestedInput
    messagesRecus?: RecevoireUpdateManyWithoutEtudiantNestedInput
    annonces?: AnnonceUpdateManyWithoutAuteurNestedInput
    commentaires?: CommentaireUpdateManyWithoutAuteurNestedInput
    signalements?: SignalerUpdateManyWithoutEtudiantNestedInput
    demandesEnvoyees?: AmitieUpdateManyWithoutDemandeurNestedInput
    demandesRecues?: AmitieUpdateManyWithoutReceveurNestedInput
    messagesGroupes?: MessageGroupeUpdateManyWithoutAuteurNestedInput
  }

  export type EtudiantUncheckedUpdateWithoutGroupesInput = {
    id?: IntFieldUpdateOperationsInput | number
    prenom?: NullableStringFieldUpdateOperationsInput | string | null
    nom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    motDePasse?: StringFieldUpdateOperationsInput | string
    dateInscription?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    isAuthGoogle?: BoolFieldUpdateOperationsInput | boolean
    otpCode?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    messagesEnvoyes?: MessageUncheckedUpdateManyWithoutEtudiantNestedInput
    messagesRecus?: RecevoireUncheckedUpdateManyWithoutEtudiantNestedInput
    annonces?: AnnonceUncheckedUpdateManyWithoutAuteurNestedInput
    commentaires?: CommentaireUncheckedUpdateManyWithoutAuteurNestedInput
    signalements?: SignalerUncheckedUpdateManyWithoutEtudiantNestedInput
    demandesEnvoyees?: AmitieUncheckedUpdateManyWithoutDemandeurNestedInput
    demandesRecues?: AmitieUncheckedUpdateManyWithoutReceveurNestedInput
    messagesGroupes?: MessageGroupeUncheckedUpdateManyWithoutAuteurNestedInput
  }

  export type GroupeUpsertWithoutMembresInput = {
    update: XOR<GroupeUpdateWithoutMembresInput, GroupeUncheckedUpdateWithoutMembresInput>
    create: XOR<GroupeCreateWithoutMembresInput, GroupeUncheckedCreateWithoutMembresInput>
    where?: GroupeWhereInput
  }

  export type GroupeUpdateToOneWithWhereWithoutMembresInput = {
    where?: GroupeWhereInput
    data: XOR<GroupeUpdateWithoutMembresInput, GroupeUncheckedUpdateWithoutMembresInput>
  }

  export type GroupeUpdateWithoutMembresInput = {
    nom?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessageGroupeUpdateManyWithoutGroupeNestedInput
  }

  export type GroupeUncheckedUpdateWithoutMembresInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessageGroupeUncheckedUpdateManyWithoutGroupeNestedInput
  }

  export type EtudiantCreateWithoutMessagesGroupesInput = {
    prenom?: string | null
    nom: string
    email: string
    motDePasse: string
    dateInscription?: Date | string
    image?: string | null
    accessToken?: string | null
    refreshToken?: string | null
    isAuthGoogle?: boolean
    otpCode?: string | null
    otpExpiresAt?: Date | string | null
    messagesEnvoyes?: MessageCreateNestedManyWithoutEtudiantInput
    messagesRecus?: RecevoireCreateNestedManyWithoutEtudiantInput
    annonces?: AnnonceCreateNestedManyWithoutAuteurInput
    commentaires?: CommentaireCreateNestedManyWithoutAuteurInput
    signalements?: SignalerCreateNestedManyWithoutEtudiantInput
    demandesEnvoyees?: AmitieCreateNestedManyWithoutDemandeurInput
    demandesRecues?: AmitieCreateNestedManyWithoutReceveurInput
    groupes?: EtudiantGroupeCreateNestedManyWithoutEtudiantInput
  }

  export type EtudiantUncheckedCreateWithoutMessagesGroupesInput = {
    id?: number
    prenom?: string | null
    nom: string
    email: string
    motDePasse: string
    dateInscription?: Date | string
    image?: string | null
    accessToken?: string | null
    refreshToken?: string | null
    isAuthGoogle?: boolean
    otpCode?: string | null
    otpExpiresAt?: Date | string | null
    messagesEnvoyes?: MessageUncheckedCreateNestedManyWithoutEtudiantInput
    messagesRecus?: RecevoireUncheckedCreateNestedManyWithoutEtudiantInput
    annonces?: AnnonceUncheckedCreateNestedManyWithoutAuteurInput
    commentaires?: CommentaireUncheckedCreateNestedManyWithoutAuteurInput
    signalements?: SignalerUncheckedCreateNestedManyWithoutEtudiantInput
    demandesEnvoyees?: AmitieUncheckedCreateNestedManyWithoutDemandeurInput
    demandesRecues?: AmitieUncheckedCreateNestedManyWithoutReceveurInput
    groupes?: EtudiantGroupeUncheckedCreateNestedManyWithoutEtudiantInput
  }

  export type EtudiantCreateOrConnectWithoutMessagesGroupesInput = {
    where: EtudiantWhereUniqueInput
    create: XOR<EtudiantCreateWithoutMessagesGroupesInput, EtudiantUncheckedCreateWithoutMessagesGroupesInput>
  }

  export type GroupeCreateWithoutMessagesInput = {
    nom: string
    createdAt?: Date | string
    membres?: EtudiantGroupeCreateNestedManyWithoutGroupeInput
  }

  export type GroupeUncheckedCreateWithoutMessagesInput = {
    id?: number
    nom: string
    createdAt?: Date | string
    membres?: EtudiantGroupeUncheckedCreateNestedManyWithoutGroupeInput
  }

  export type GroupeCreateOrConnectWithoutMessagesInput = {
    where: GroupeWhereUniqueInput
    create: XOR<GroupeCreateWithoutMessagesInput, GroupeUncheckedCreateWithoutMessagesInput>
  }

  export type EtudiantUpsertWithoutMessagesGroupesInput = {
    update: XOR<EtudiantUpdateWithoutMessagesGroupesInput, EtudiantUncheckedUpdateWithoutMessagesGroupesInput>
    create: XOR<EtudiantCreateWithoutMessagesGroupesInput, EtudiantUncheckedCreateWithoutMessagesGroupesInput>
    where?: EtudiantWhereInput
  }

  export type EtudiantUpdateToOneWithWhereWithoutMessagesGroupesInput = {
    where?: EtudiantWhereInput
    data: XOR<EtudiantUpdateWithoutMessagesGroupesInput, EtudiantUncheckedUpdateWithoutMessagesGroupesInput>
  }

  export type EtudiantUpdateWithoutMessagesGroupesInput = {
    prenom?: NullableStringFieldUpdateOperationsInput | string | null
    nom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    motDePasse?: StringFieldUpdateOperationsInput | string
    dateInscription?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    isAuthGoogle?: BoolFieldUpdateOperationsInput | boolean
    otpCode?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    messagesEnvoyes?: MessageUpdateManyWithoutEtudiantNestedInput
    messagesRecus?: RecevoireUpdateManyWithoutEtudiantNestedInput
    annonces?: AnnonceUpdateManyWithoutAuteurNestedInput
    commentaires?: CommentaireUpdateManyWithoutAuteurNestedInput
    signalements?: SignalerUpdateManyWithoutEtudiantNestedInput
    demandesEnvoyees?: AmitieUpdateManyWithoutDemandeurNestedInput
    demandesRecues?: AmitieUpdateManyWithoutReceveurNestedInput
    groupes?: EtudiantGroupeUpdateManyWithoutEtudiantNestedInput
  }

  export type EtudiantUncheckedUpdateWithoutMessagesGroupesInput = {
    id?: IntFieldUpdateOperationsInput | number
    prenom?: NullableStringFieldUpdateOperationsInput | string | null
    nom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    motDePasse?: StringFieldUpdateOperationsInput | string
    dateInscription?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    isAuthGoogle?: BoolFieldUpdateOperationsInput | boolean
    otpCode?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    messagesEnvoyes?: MessageUncheckedUpdateManyWithoutEtudiantNestedInput
    messagesRecus?: RecevoireUncheckedUpdateManyWithoutEtudiantNestedInput
    annonces?: AnnonceUncheckedUpdateManyWithoutAuteurNestedInput
    commentaires?: CommentaireUncheckedUpdateManyWithoutAuteurNestedInput
    signalements?: SignalerUncheckedUpdateManyWithoutEtudiantNestedInput
    demandesEnvoyees?: AmitieUncheckedUpdateManyWithoutDemandeurNestedInput
    demandesRecues?: AmitieUncheckedUpdateManyWithoutReceveurNestedInput
    groupes?: EtudiantGroupeUncheckedUpdateManyWithoutEtudiantNestedInput
  }

  export type GroupeUpsertWithoutMessagesInput = {
    update: XOR<GroupeUpdateWithoutMessagesInput, GroupeUncheckedUpdateWithoutMessagesInput>
    create: XOR<GroupeCreateWithoutMessagesInput, GroupeUncheckedCreateWithoutMessagesInput>
    where?: GroupeWhereInput
  }

  export type GroupeUpdateToOneWithWhereWithoutMessagesInput = {
    where?: GroupeWhereInput
    data: XOR<GroupeUpdateWithoutMessagesInput, GroupeUncheckedUpdateWithoutMessagesInput>
  }

  export type GroupeUpdateWithoutMessagesInput = {
    nom?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    membres?: EtudiantGroupeUpdateManyWithoutGroupeNestedInput
  }

  export type GroupeUncheckedUpdateWithoutMessagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    membres?: EtudiantGroupeUncheckedUpdateManyWithoutGroupeNestedInput
  }

  export type MessageCreateManyEtudiantInput = {
    id?: number
    contenu?: string | null
    date?: Date | string
  }

  export type RecevoireCreateManyEtudiantInput = {
    messageId: number
  }

  export type AnnonceCreateManyAuteurInput = {
    id?: number
    titre: string
    contenu?: string | null
    image?: string | null
    dateDePublication?: Date | string
  }

  export type CommentaireCreateManyAuteurInput = {
    id?: number
    date?: Date | string
    annonceId?: number | null
    contenu?: string | null
  }

  export type SignalerCreateManyEtudiantInput = {
    annonceId: number
  }

  export type AmitieCreateManyDemandeurInput = {
    id?: number
    receveurId: number
    statut?: $Enums.StatutAmitie
    dateDemande?: Date | string
    dateAcceptation?: Date | string | null
  }

  export type AmitieCreateManyReceveurInput = {
    id?: number
    demandeurId: number
    statut?: $Enums.StatutAmitie
    dateDemande?: Date | string
    dateAcceptation?: Date | string | null
  }

  export type EtudiantGroupeCreateManyEtudiantInput = {
    groupeId: number
  }

  export type MessageGroupeCreateManyAuteurInput = {
    id?: number
    contenu: string
    date?: Date | string
    groupeId: number
  }

  export type MessageUpdateWithoutEtudiantInput = {
    contenu?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    receveurs?: RecevoireUpdateManyWithoutMessageNestedInput
  }

  export type MessageUncheckedUpdateWithoutEtudiantInput = {
    id?: IntFieldUpdateOperationsInput | number
    contenu?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    receveurs?: RecevoireUncheckedUpdateManyWithoutMessageNestedInput
  }

  export type MessageUncheckedUpdateManyWithoutEtudiantInput = {
    id?: IntFieldUpdateOperationsInput | number
    contenu?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecevoireUpdateWithoutEtudiantInput = {
    message?: MessageUpdateOneRequiredWithoutReceveursNestedInput
  }

  export type RecevoireUncheckedUpdateWithoutEtudiantInput = {
    messageId?: IntFieldUpdateOperationsInput | number
  }

  export type RecevoireUncheckedUpdateManyWithoutEtudiantInput = {
    messageId?: IntFieldUpdateOperationsInput | number
  }

  export type AnnonceUpdateWithoutAuteurInput = {
    titre?: StringFieldUpdateOperationsInput | string
    contenu?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    dateDePublication?: DateTimeFieldUpdateOperationsInput | Date | string
    commentaires?: CommentaireUpdateManyWithoutAnnonceNestedInput
    signalements?: SignalerUpdateManyWithoutAnnonceNestedInput
  }

  export type AnnonceUncheckedUpdateWithoutAuteurInput = {
    id?: IntFieldUpdateOperationsInput | number
    titre?: StringFieldUpdateOperationsInput | string
    contenu?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    dateDePublication?: DateTimeFieldUpdateOperationsInput | Date | string
    commentaires?: CommentaireUncheckedUpdateManyWithoutAnnonceNestedInput
    signalements?: SignalerUncheckedUpdateManyWithoutAnnonceNestedInput
  }

  export type AnnonceUncheckedUpdateManyWithoutAuteurInput = {
    id?: IntFieldUpdateOperationsInput | number
    titre?: StringFieldUpdateOperationsInput | string
    contenu?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    dateDePublication?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentaireUpdateWithoutAuteurInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    contenu?: NullableStringFieldUpdateOperationsInput | string | null
    annonce?: AnnonceUpdateOneWithoutCommentairesNestedInput
  }

  export type CommentaireUncheckedUpdateWithoutAuteurInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    annonceId?: NullableIntFieldUpdateOperationsInput | number | null
    contenu?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CommentaireUncheckedUpdateManyWithoutAuteurInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    annonceId?: NullableIntFieldUpdateOperationsInput | number | null
    contenu?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SignalerUpdateWithoutEtudiantInput = {
    annonce?: AnnonceUpdateOneRequiredWithoutSignalementsNestedInput
  }

  export type SignalerUncheckedUpdateWithoutEtudiantInput = {
    annonceId?: IntFieldUpdateOperationsInput | number
  }

  export type SignalerUncheckedUpdateManyWithoutEtudiantInput = {
    annonceId?: IntFieldUpdateOperationsInput | number
  }

  export type AmitieUpdateWithoutDemandeurInput = {
    statut?: EnumStatutAmitieFieldUpdateOperationsInput | $Enums.StatutAmitie
    dateDemande?: DateTimeFieldUpdateOperationsInput | Date | string
    dateAcceptation?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    receveur?: EtudiantUpdateOneRequiredWithoutDemandesRecuesNestedInput
  }

  export type AmitieUncheckedUpdateWithoutDemandeurInput = {
    id?: IntFieldUpdateOperationsInput | number
    receveurId?: IntFieldUpdateOperationsInput | number
    statut?: EnumStatutAmitieFieldUpdateOperationsInput | $Enums.StatutAmitie
    dateDemande?: DateTimeFieldUpdateOperationsInput | Date | string
    dateAcceptation?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AmitieUncheckedUpdateManyWithoutDemandeurInput = {
    id?: IntFieldUpdateOperationsInput | number
    receveurId?: IntFieldUpdateOperationsInput | number
    statut?: EnumStatutAmitieFieldUpdateOperationsInput | $Enums.StatutAmitie
    dateDemande?: DateTimeFieldUpdateOperationsInput | Date | string
    dateAcceptation?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AmitieUpdateWithoutReceveurInput = {
    statut?: EnumStatutAmitieFieldUpdateOperationsInput | $Enums.StatutAmitie
    dateDemande?: DateTimeFieldUpdateOperationsInput | Date | string
    dateAcceptation?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    demandeur?: EtudiantUpdateOneRequiredWithoutDemandesEnvoyeesNestedInput
  }

  export type AmitieUncheckedUpdateWithoutReceveurInput = {
    id?: IntFieldUpdateOperationsInput | number
    demandeurId?: IntFieldUpdateOperationsInput | number
    statut?: EnumStatutAmitieFieldUpdateOperationsInput | $Enums.StatutAmitie
    dateDemande?: DateTimeFieldUpdateOperationsInput | Date | string
    dateAcceptation?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AmitieUncheckedUpdateManyWithoutReceveurInput = {
    id?: IntFieldUpdateOperationsInput | number
    demandeurId?: IntFieldUpdateOperationsInput | number
    statut?: EnumStatutAmitieFieldUpdateOperationsInput | $Enums.StatutAmitie
    dateDemande?: DateTimeFieldUpdateOperationsInput | Date | string
    dateAcceptation?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EtudiantGroupeUpdateWithoutEtudiantInput = {
    groupe?: GroupeUpdateOneRequiredWithoutMembresNestedInput
  }

  export type EtudiantGroupeUncheckedUpdateWithoutEtudiantInput = {
    groupeId?: IntFieldUpdateOperationsInput | number
  }

  export type EtudiantGroupeUncheckedUpdateManyWithoutEtudiantInput = {
    groupeId?: IntFieldUpdateOperationsInput | number
  }

  export type MessageGroupeUpdateWithoutAuteurInput = {
    contenu?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    groupe?: GroupeUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type MessageGroupeUncheckedUpdateWithoutAuteurInput = {
    id?: IntFieldUpdateOperationsInput | number
    contenu?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    groupeId?: IntFieldUpdateOperationsInput | number
  }

  export type MessageGroupeUncheckedUpdateManyWithoutAuteurInput = {
    id?: IntFieldUpdateOperationsInput | number
    contenu?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    groupeId?: IntFieldUpdateOperationsInput | number
  }

  export type RecevoireCreateManyMessageInput = {
    etudiantId: number
  }

  export type RecevoireUpdateWithoutMessageInput = {
    etudiant?: EtudiantUpdateOneRequiredWithoutMessagesRecusNestedInput
  }

  export type RecevoireUncheckedUpdateWithoutMessageInput = {
    etudiantId?: IntFieldUpdateOperationsInput | number
  }

  export type RecevoireUncheckedUpdateManyWithoutMessageInput = {
    etudiantId?: IntFieldUpdateOperationsInput | number
  }

  export type CommentaireCreateManyAnnonceInput = {
    id?: number
    date?: Date | string
    etudiantId?: number | null
    contenu?: string | null
  }

  export type SignalerCreateManyAnnonceInput = {
    etudiantId: number
  }

  export type CommentaireUpdateWithoutAnnonceInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    contenu?: NullableStringFieldUpdateOperationsInput | string | null
    auteur?: EtudiantUpdateOneWithoutCommentairesNestedInput
  }

  export type CommentaireUncheckedUpdateWithoutAnnonceInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    etudiantId?: NullableIntFieldUpdateOperationsInput | number | null
    contenu?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CommentaireUncheckedUpdateManyWithoutAnnonceInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    etudiantId?: NullableIntFieldUpdateOperationsInput | number | null
    contenu?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SignalerUpdateWithoutAnnonceInput = {
    etudiant?: EtudiantUpdateOneRequiredWithoutSignalementsNestedInput
  }

  export type SignalerUncheckedUpdateWithoutAnnonceInput = {
    etudiantId?: IntFieldUpdateOperationsInput | number
  }

  export type SignalerUncheckedUpdateManyWithoutAnnonceInput = {
    etudiantId?: IntFieldUpdateOperationsInput | number
  }

  export type EtudiantGroupeCreateManyGroupeInput = {
    etudiantId: number
  }

  export type MessageGroupeCreateManyGroupeInput = {
    id?: number
    contenu: string
    date?: Date | string
    auteurId: number
  }

  export type EtudiantGroupeUpdateWithoutGroupeInput = {
    etudiant?: EtudiantUpdateOneRequiredWithoutGroupesNestedInput
  }

  export type EtudiantGroupeUncheckedUpdateWithoutGroupeInput = {
    etudiantId?: IntFieldUpdateOperationsInput | number
  }

  export type EtudiantGroupeUncheckedUpdateManyWithoutGroupeInput = {
    etudiantId?: IntFieldUpdateOperationsInput | number
  }

  export type MessageGroupeUpdateWithoutGroupeInput = {
    contenu?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    auteur?: EtudiantUpdateOneRequiredWithoutMessagesGroupesNestedInput
  }

  export type MessageGroupeUncheckedUpdateWithoutGroupeInput = {
    id?: IntFieldUpdateOperationsInput | number
    contenu?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    auteurId?: IntFieldUpdateOperationsInput | number
  }

  export type MessageGroupeUncheckedUpdateManyWithoutGroupeInput = {
    id?: IntFieldUpdateOperationsInput | number
    contenu?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    auteurId?: IntFieldUpdateOperationsInput | number
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