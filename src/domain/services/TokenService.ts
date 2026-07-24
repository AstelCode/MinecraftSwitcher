export interface TokenService {
  generate(payload: { id: number; nickname: string }): Promise<string>;

  verify(token: string): Promise<{
    id: number;
    nickname: string;
  }>;
}
