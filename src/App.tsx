import React from 'react';
import './App.css';
import {Tabs, Box, Text, Button} from '@radix-ui/themes';

function App() {
  const [val, setVal]=React.useState("1");
  function backFn(){
    setVal((Number(val)-1).toString());
  }
  function nextFn(){
    setVal((Number(val)+1).toString());
  }
  return (
    <div className="App">
      
    <Tabs.Root defaultValue="1" value={val}>
      <Tabs.List >
        <Tabs.Trigger value="1" onClick={()=>{setVal("1")}} >Account</Tabs.Trigger>
        <Tabs.Trigger value="2" onClick={()=>{setVal("2")}}>Documents</Tabs.Trigger>
        <Tabs.Trigger value="3" onClick={()=>{setVal("3")}}>Settings</Tabs.Trigger>
        <Tabs.Trigger value="4" onClick={()=>{setVal("4")}}>Settings</Tabs.Trigger>
      </Tabs.List>
      <Box pt="3">
        <Tabs.Content value="1">
          <Text size="2">Make changes to your account.</Text>
        </Tabs.Content>

        <Tabs.Content value="2">
          <Text size="2">Access and update your documents.</Text>
        </Tabs.Content>

        <Tabs.Content value="3">
          <Text size="2">Edit your profile or update contact information.</Text>
        </Tabs.Content>

        <Tabs.Content value="4">
          <Text size="2">Tab 4.</Text>
        </Tabs.Content>
      </Box>
      
    </Tabs.Root>
    
    <Button onClick={backFn}>backward</Button>
    <Button onClick={nextFn}>forward</Button>
    </div>
  );
}

export default App;
