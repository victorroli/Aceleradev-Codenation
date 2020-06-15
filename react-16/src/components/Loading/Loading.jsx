import React from 'react';

import './Loading.scss';

const Loading = () => (
  <div className="loading" data-testid="loading">
    <div className='preloader' data-testid='preloader'>
      <span />
      <span />
      <span />
      <span />
      <span />
      <span />
    </div>

    Carregando
  </div>
);

export default Loading;
