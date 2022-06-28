
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';

//!components
import SideDrawer from './SideDrawer';
import Notes from './notes/Notes';
import Archives from './archives/Archives';
import DeleteNotes from './deleteNotes/DeleteNotes';

const Home = () => {
  return (
    <Box style={{ display: 'flex', width: '100%' }}>
      <Router>
        <SideDrawer />
        <Routes>
          <Route path='/' element={<Notes />} />
          <Route path='/archive' element={<Archives />} />
          <Route path='/delete' element={<DeleteNotes />} />
        </Routes>
      </Router>
    </Box>
  )
}

export default Home;