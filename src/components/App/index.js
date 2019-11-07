import React from 'react'
import { Box, Container } from '@material-ui/core'
import MyComponent from 'components/MyComponent'

function App() {
  return (
    <Container>
      <Box
        my={20}
        display='flex'
        justifyContent='center'
        alignItems='center'
        flexDirection='row'
      >
        <MyComponent />
      </Box>
    </Container>
  );
}

export default App;
