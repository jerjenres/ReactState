import * as React from 'react';
import Button from '@mui/material/Button';

export default function AdmitTaskButton({ admitTask }) {
  return (
    <Button variant="contained" disableElevation onClick={admitTask}>
      Admit Task
    </Button>
  );
}