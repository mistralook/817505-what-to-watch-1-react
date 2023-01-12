import { createAction } from '@reduxjs/toolkit';
import { Genre } from '../types/main-page.types';

export const changeGenre = createAction<{genre: Genre}>('changeGenre');
