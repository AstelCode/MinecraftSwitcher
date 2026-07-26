export interface TokenService {
  generate(payload: { id: bigint; email: string }): Promise<string>;

  verify(token: string): Promise<{
    id: bigint;
    email: string;
  }>;
}
