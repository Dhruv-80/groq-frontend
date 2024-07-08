import React, { useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import LayoutComponent from './LayoutComponent';
import ModelButton from './ModelButton';
import PerformanceTable from './PerformanceTable';
import ChatInterface from './ChatInterface';
import Perf from './Perf';
import Doc from './Doc';

function App() {
  const [model, setModel] = useState('gemma-7b-it');
  const [clearMessages, setClearMessages] = useState(false);

  const handleModelChange = (selectedModel) => {
    setModel(selectedModel);
    setClearMessages(true);
  };

  const handleSubmit = async (question) => {
    const result = await axios.post('http://localhost:8080/get-completion', {
      message: question,
      model: model,
    });

    console.log('Server response:', result.data);
    return result.data;
  };

  return (
    <Router>
      <LayoutComponent>
        <Routes>
          <Route path="/" element={
            <div className="App">
              <h1>Ask a Question</h1>
              <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0', gap: '30px' }}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '30px', marginRight: '-100px' }}>
                  <ModelButton
                    model="gemma-7b-it"
                    selectedModel={model}
                    onClick={(selectedModel) => {
                      handleModelChange(selectedModel);
                      setClearMessages(false);
                    }}
                    imageSrc="https://cdn.vox-cdn.com/thumbor/7GFnnpOnzDbWEsG8HS6tKo_Sdl0=/0x0:2040x1360/1400x1050/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/25297209/STK258_GOOGLE_GEMMA__B.jpg"
                  />
                  <ModelButton
                    model="mixtral-8x7b-32768"
                    selectedModel={model}
                    onClick={(selectedModel) => {
                      handleModelChange(selectedModel);
                      setClearMessages(false);
                    }}
                    imageSrc="https://azure.microsoft.com/en-us/blog/wp-content/uploads/2024/02/MSFT_Azure_FEB12_319938_Blog_BlogHeader_240226_600x600_V1.jpg"
                  />
                  <ModelButton
                    model="llama3-8b-8192"
                    selectedModel={model}
                    onClick={(selectedModel) => {
                      handleModelChange(selectedModel);
                      setClearMessages(false);
                    }}
                    imageSrc="https://media.licdn.com/dms/image/D4D12AQGSDHcylNVfcA/article-cover_image-shrink_600_2000/0/1713710970597?e=2147483647&v=beta&t=FV__dZLzmCHa6Fm6-eqDzGa4KNLie6MFDC6SQ1FGiQI"
                  />
                </div>
              </div>
              <ChatInterface 
                onSubmit={handleSubmit} 
                clearMessages={clearMessages} 
                model={model} 
                setClearMessages={setClearMessages} 
              />
              <PerformanceTable />
            </div>
          } />
          <Route path="/Perf" element={<Perf />} />
          <Route path="/Doc" element={<Doc />} />
        </Routes>
      </LayoutComponent>
    </Router>
  );
}

export default App;
