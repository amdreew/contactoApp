export interface IEnvironment {
  production: boolean;
  security: boolean;
  encriptionConfig: IEncriptionConfig;
}

export interface IEncriptionConfig {
  encriptionKey: string;
  encriptionType: IEncriptionType;
  encrypt: string;
  decrypt: string;
}

interface IEncriptionType {
  base46: string;
  aes: string;
  des: string;
  rabbit: string;
  rc4: string;
  empty: string;
}
