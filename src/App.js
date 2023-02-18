import './App.css';

import Button from './Components/Button';
import Breadcrumbs, { Crumb } from './Components/Breadcrumbs';
import ProgressBar from './Components/ProgressBar';
import Select from './Components/Select';
import IconInput from './Components/IconInput';

import styled from 'styled-components/macro';
import GlobalStyles from './GlobalStyles';

function App() {
  return (
    <>
      <IconInput id='search' />
      {/* <Select /> */}
      {/* <ProgressBar /> */}

      {/* <Breadcrumbs>
        <Crumb href='/'>Home</Crumb>
        <Crumb href='/living'>Living Room</Crumb>
        <Crumb href='/living/couch'>Couches</Crumb>
        <Crumb href='/living/couch/sectional' isCurrentPage={true}>
          Sectionals
        </Crumb>
      </Breadcrumbs>
      <Button size='small' variant='fill'>
        Button
      </Button>
      <Button size='medium' variant='fill'>
        Button
      </Button>
      <Button size='large' variant='fill'>
        Button
      </Button>
      <Button size='small' variant='outline'>
        Button
      </Button>
      <Button size='medium' variant='outline'>
        Button
      </Button>
      <Button size='large' variant='outline'>
        Button
      </Button>
      <Button size='small' variant='ghost'>
        Button
      </Button>
      <Button size='medium' variant='ghost'>
        Button
      </Button>
      <Button size='large' variant='ghost'>
        Button
      </Button> */}
      <GlobalStyles />
    </>
  );
}

export default App;
