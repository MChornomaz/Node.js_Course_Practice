declare module '*.json' {
    const value: any;
    export default value;
  }
  
  declare module 'swaggerOptions.json' {
    const value: {
      definition: {
        openapi: string;
        info: {
          title: string;
          version: string;
          description: string;
        };
        servers: {
          url: string;
        }[];
      };
      apis: string[];
    };
    export = value;
  }