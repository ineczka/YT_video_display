import React, {Component} from 'react' ;

  const key = 'AIzaSyAAKZRzEiuuqBHTJHrFt_sQQbg89JZV2D4';
  const channelID = 'UCzhR1HIAh0aLtFIVPjXW9xQ';
  //const channelID = 'UCXgGY0wkg0zynnHvSEVmE3A';
  const maxResults = 10;
  var finalUrl = `https://www.googleapis.com/youtube/v3/search?key=${key}&channelId=${channelID}&maxResults=${maxResults}&part=snippet&type=video`;

  class Youtube extends Component {

   constructor(props){
     super(props);
     this.state = {
       results: []
     };
     this.clicked = this.clicked.bind(this);
   }

  clicked(){
    console.log("Are you looking for me?");
    fetch(finalUrl)
        .then(data => data.json())
        .then((datajson) => {

          const videoyt = datajson.items.map(object => 'https://www.youtube.com/embed/' + object.id.videoId);
          console.log(videoyt);

          this.setState({results: videoyt});
        })
        .catch(error => {
          console.error(error);
        });
    }

  render(){

    let videoID = this.state.results;
    console.log(videoID);
    var iframes = videoID.map(link=>{
        return <div className='youtube'> <iframe width="560" height="315" src={link} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
        </iframe></div>;
});



    return(

      <div>
       <button onClick={this.clicked}>Get video</button>
       <div className="youtube">
         <iframe width="560" height="315" src="https://www.youtube.com/embed/9yV3R0fj988" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
       {iframes}

     </div>
      </div>
    );
  }
}


export default Youtube;
