
chk_local_storage();

function chk_local_storage(){
console.log(typeof localStorage.getItem('hasData'));

if(localStorage.getItem('hasData')===null)
{
    $('#api_view_detail').hide();
    return;
}
// Check if the localStorage has any item or not
if(localStorage.getItem('hasData')==='true'){
console.log("Removing Save api Url Page");
$('#api_detail').hide();
$('#api_view_detail').show();
show_api_view_detail();

//fetchData();
}else{
    console.log("Showing apidetail");
$('#api_detail').show();
$('#api_view_detail').hide();


}
}

function save_api_id()
{
   
    var api_id=document.getElementById('api_id').value;
    if(api_id=="")
    return;
  
    var api_url=api_id; 

    localStorage.setItem("api_id",api_id);
    localStorage.setItem("api_url",api_url);
    localStorage.setItem('hasData','true');
    chk_local_storage();

}

function clear_api_id()
{
    localStorage.setItem('hasData','false');
    localStorage.removeItem('api_id');
    localStorage.removeItem('api_url');
    chk_local_storage();


}

// Sample Testing with Four Players. 

var datas=[];
datas.push({name:'Test1',vote:9});
datas.push({name:'Test2',vote:1});
datas.push({name:'Test3',vote:2});
datas.push({name:'Test4',vote:6});

insert_player_data(datas);




function insert_player_data(n)
{


    for(var i=0;i<n.length;i++)
    {
         $('#player_data').append("<div class='player'><span class='name'>"+n[i].name+" </span><span class='vote'>"+n[i].vote+"</span></div>");
    }
    
}

function show_api_view_detail()
{
    var api_url=localStorage.getItem('api_url');
    $('#api_vID').text("Api: "+api_url);
}

function fetchData()
{
    var url=localStorage.getItem('api_url');
    var players=[];
console.log("Finding for "+url);
    fetch(url)
.then((resp)=> {

    if (!resp.ok) {
        throw Error(response.statusText);

      }else
      console.log("Fetched Res");
return resp.json();
})
.then((jsonData)=>{
    console.log(jsonData);




}).catch(function(e){
    console.error(e);
});



}