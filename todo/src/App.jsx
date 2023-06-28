import './style.scss'
import {
  Button,
  TextField,
  Checkbox,
  FormControlLabel,
  Stack,
} from '@mui/material';


function App() {

  return (
      <div className="container">
        <header>
          <h1 className="title">Tasked</h1>
        </header>
        <main>
          
        <TextField id="outlined-basic" label="Task" variant="outlined" />          
        <Button variant="contained">Adicionar</Button>

        <Stack   direction="row" >
        <FormControlLabel control={<Checkbox defaultChecked /> } label="Task" />
        <Button variant="contained">excluir</Button>
        </Stack>
        

        </main>

      </div>
  )
}

export default App
