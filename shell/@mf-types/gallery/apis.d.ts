
    export type RemoteKeys = 'gallery/button';
    type PackageType<T> = T extends 'gallery/button' ? typeof import('gallery/button') :any;