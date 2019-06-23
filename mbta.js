/*const Red = {
    stations : ["South Station","Park Street","Kendall","Central","Harvard","Porter","Davis","Alewife"]}
    
const Green = {
    stations : ["Government Center","Park Street","Boylston","Arlington","Copley","Hynes","Kenmore"]}
    
const Orange = {
    stations : ["North Station","Haymarket","Park Street","State","Downtown Crossing","Chinatown","Back Bay","Forest Hills"]}
    
    var start = 0 ;
    var end = 0;
const stopsBetweenStations = function (startLine,startStation,endLine,endStation) {
    switch (startLine){
        case "Red":   for( var i =0 ; i< Red.stations.length ; i++){
                        if (startStation === Red.stations[i]){
                            start = i+1;}}
    
        case "Green": for( var i =0 ; i< Green.stations.length ; i++){
                        if (startStation === Green.stations[i]){
                            start = i+1;}}
    
        case "Orange": for( var i =0 ; i< Orange.stations.length ; i++){
                        if (startStation === Orange.stations[i]){
                           start = i+1;}}}
    switch (endLine){
        case "Red": if(startLine !== endLine){
                      for( var i =0 ; i< Red.stations.length ; i++){
                        if (endStation === Red.stations[i] && endStation !=="South Station"){
                            end = i+1;}
                        else{end = i;}}}
                    else {for( var i =0 ; i< Red.stations.length ; i++){
                            if (endStation === Red.stations[i]){
                                end = i+1;}}}
    
        case "Green": if(startLine !== endLine){
                       for( var i =0 ; i< Green.stations.length ; i++){
                        if (endStation === Green.stations[i] && endStation !=="Government Center"){
                            end = i+1;}
                        else{end = i;}}}
                    else {for( var i =0 ; i< Green.stations.length ; i++){
                                if (endStation === Green.stations[i]){
                                    end = i+1;}}}
        case "Orange":  if(startLine !== endLine){
                       for( var i =0 ; i< Orange.stations.length ; i++){
                        if (endStation === Orange.stations[i] && endStation !=="North Station" && endStation !=="Haymarket"){
                            end = i+1;}
                        else{end = i;}}}
                    else {for( var i =0 ; i< Orange.stations.length ; i++){
                                if (endStation === Orange.stations[i]){
                                    end = i+1;}}}
    }}
*/
const Red = {
    stations : ["South Station","Park Street","Kendall","Central","Harvard","Porter","Davis","Alewife"]}
    
    const Green = {
    stations : ["Government Center","Park Street","Boylston","Arlington","Copley","Hynes","Kenmore"]}
    
    const Orange = {
    stations : ["North Station","Haymarket","Park Street","State","Downtown Crossing","Chinatown","Back Bay","Forest Hills"]}
    
    var start = 0 ;
    var end = 0;
    var flag = false;
    var flag2 = false;
    const stopsBetweenStations = function (startLine,startStation,endLine,endStation) {
    switch (startLine){
        case "Red": for( var i =0 ; i< Red.stations.length ; i++){
                        if (startStation === Red.stations[i]){
                            start = i+1;
                            flag = true;}}
                       if (!flag) {
                        return "Please re-enter valid name of the start station "}
                    break;
        case "Green": for( var i =0 ; i< Green.stations.length ; i++){
                        if (startStation === Green.stations[i]){
                            start = i+1;
                            flag = true;}}
                        if (!flag) {
                         return "Please re-enter valid name of the start station "}
                    break;
        case "Orange": for( var i =0 ; i< Orange.stations.length ; i++){
                        if (startStation === Orange.stations[i]){
                           start = i+1;
                           flag = true;}}
                        if (!flag) {
                         return "Please re-enter valid name of the start station "}
                    break;
         default: return "Please re-enter valid start line it should be Red , Green or Ornage " ; }
    switch (endLine){
        case "Red": for( var i =0 ; i< Red.stations.length ; i++){
                        if (endStation === Red.stations[i]){
                            end = i+1;
                            flag2 = true;}}
                        if (!flag2) {
                         return "Please re-enter valid name of the end station "}
                    break;
        case "Green": for( var i =0 ; i< Green.stations.length ; i++){
                        if (endStation === Green.stations[i]){
                            end = i+1;
                            flag2 = true;}}
                        if (!flag2) {
                         return "Please re-enter valid name of the end station "}
                    break;
        case "Orange": for( var i =0 ; i<Orange.stations.length; i++){
                        if (endStation === Orange.stations[i]){
                            end = i+1;
                            flag2 = true;}}
                        if (!flag2) {
                          return "Please re-enter valid name of the end station "}
                    break;

         default: return "Please re-enter valid end line it should be Red , Green or Ornage " ;}
                           return Math.abs(start-end) ;}
                             stopsBetweenStations('Red', 'South Station', 'Green', 'Copley') 
                          
/*
      console.log("Rider boards the train a "+startLine+" Line and "+startStation);
      if(startLine=="Red")
      startLine = "Red";
      if (startLine =="Green")
            startLine = "Green";
      if(startLine =="Orange")
     startLine = "Orange";


      for (var i= start ; i<startLine.stations.length;i++){
      if (startLine != endLine && startLine.stations[i-1]== "Park Street"){
      console.log("Rider transfers from "+startLine+" Line to "+endLine+" Line at Park Street.");
      break;}
      else{
      console.log("Rider arrives at "+startLine+" Line and "+startLine.stations[i]);
      }
    }
    if (startLine != endLine && startLine.stations== "Park Street"){
        for(var i = endLine.indexOf("Park Street") ; i<endLine.stations.length();i++) {
            if(endLine.stations[i]==endStation){
         console.log("Rider exits the train at "+endLine+"Line and "+endStation);
            }
            else{
        console.log("Rider arrives at "+endLine+" Line and "+endLine.stations[i]);
            }

    }
    }
    }
    
 stopsBetweenStations('Red', 'South Station', 'Green', 'Copley') 
*/
 
 
   
   /* const riderStatus = function (startLine, startStation, endLine, endStation){
      console.log("Rider boards the train a "+startLine+" Line and "+startStation);
      stopsBetweenStations(startLine, startStation, endLine, endStation);
      for (var i= start ; i<startLine.stations.length;i++){
      if (startLine != endLine && startLine.stations[i-1]== "Park Street"){
      console.log("Rider transfers from "+startLine+" Line to "+endLine+" Line at Park Street.");
      break;}
      else{
      console.log("Rider arrives at "+startLine+" Line and "+startLine.stations[i]);
      }
    }
    if (startLine != endLine && startLine.stations== "Park Street"){
        for(var i = endLine.indexOf("Park Street") ; i<endLine.stations.length();i++) {
            if(endLine.stations[i]==endStation){
         console.log("Rider exits the train at "+endLine+"Line and "+endStation);
            }
            else{
        console.log("Rider arrives at "+endLine+" Line and "+endLine.stations[i]);
            }

    }
    }

}
riderStatus('Red', 'South Station', 'Green', 'Copley') 
*/
