import React from 'react';
import { getImages } from './API';
import Button from './Button/Button';

export class App extends Component {
  state = {
    target: '',
    data: [],
    totalPages: 0,
    page: 1,
    isLoading: false,
  };
}
