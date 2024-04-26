interface NotFoundError extends Error {
    name: string
    message: string
}

export class NotFound implements NotFoundError{
    constructor(
        public name: string = 'Not Found Error',
        public message: string = 'Page Not Found. 404 Error'
      ) {
        this.name, 
        this.message
      }
}

interface NotSuchFileOrDirError extends Error {
    name: string
    message: string
}


export class Enoent implements NotSuchFileOrDirError{
    constructor(
        public name: string = 'ENOENT: Not such file or directory Node error',
        public message: string = 'Not such file or directory '
      ) {
        this.name,
        this.message
      }
}


