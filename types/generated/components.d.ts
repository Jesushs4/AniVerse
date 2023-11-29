import type { Schema, Attribute } from '@strapi/strapi';

export interface GenreGenre extends Schema.Component {
  collectionName: 'components_genre_genres';
  info: {
    displayName: 'genre';
  };
  attributes: {};
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'genre.genre': GenreGenre;
    }
  }
}
