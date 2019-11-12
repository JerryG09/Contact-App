/// <reference types="react-scripts" />

interface FSA<T> {
  type: string;
  payload?: any;
  error?: typeof Error;
}
