import * as React from 'react';
import Button from '@mui/material/Button';

export default function TaskButton({ addRandomTask }) {
  return (
    <Button variant="contained" disableElevation onClick={addRandomTask}>
      Add Random Task
    </Button>
  );
}