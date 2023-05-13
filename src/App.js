import logo from './logo.svg';
import './App.css';
import Airpa from './components/Airpa';

function App() {
  return (
    <div className="App">
      <b><h1 className='mainhead'>Let's Collaborate</h1></b>
      <Airpa 
      heading='AI + RPA is what we do' 
      img = "https://www.xivtech.io./rp2.jpg"
      para2 ='Future-Proof your business. Drive efficiency, profitability and deliver on customer experience'
      para = 'Future-Proof your business. Drive efficiency, profitability and deliver on customer experience'
      alink = 'AI + RPA Automation'
      />
       <Airpa 
      heading='Make Bolder Choices' 
      img = "https://www.xivtech.io./p1.png"
      para2='Digital focused strategies to realize market-changing ideas'
      para = 'Digital focused strategies to realize market-changing ideas'
      alink = 'Build Better Apps'
      />
      <Airpa 
      heading='Innovate with Speed' 
      img = "https://www.xivtech.io./p2.jpg"
      para2='Create higher quality software, deliver on customer expectations and business goals'
      para = 'Create higher quality software, deliver on customer expectations and business goals'
      alink = 'DevOps'
      />
      <Airpa 
      heading='Embrace Cloud' 
      img = "https://www.xivtech.io./p3.jpg"
      para2='With Cloud-First accelerate innovation and optimize performance'
      para = 'With Cloud-First accelerate innovation and optimize performance'
      alink = 'Cloud Services'
      /><br/>
      <br/>
      <span className='get'>      <a href="" >Get Touch</a>
</span>
<br />
<br />
    </div>
  );
}

export default App;
