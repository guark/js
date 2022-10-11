declare namespace Guark {

    type EnvObject = { [Key: string]: string }

     const env = ():Promise<EnvObject> => {}
      /** Call exported Go functions. */
     const call = (funcName: string, args?: any): Promise<any> => {}
      /** Send desktop notification. */
     const notify = (message: string, args?: any): Promise<any> => {}
      /** Exit the app. */
     const exit = (): Promise<any> => {}
      /** Invoke a hook. */
     const hook = (name: string): Promise<any> => {}

}

export = Guark
export as namespace Guark
