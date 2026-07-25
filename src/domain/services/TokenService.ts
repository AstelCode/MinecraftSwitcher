export interface TokenService {
  generate(payload: { id: bigint; nickname: string }): Promise<string>;

  verify(token: string): Promise<{
    id: bigint;
    nickname: string;
  }>;
}
