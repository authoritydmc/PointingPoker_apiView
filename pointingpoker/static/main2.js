



if(localStorage.getItem('autoRefresh')==="1")
{   
   
    console.log("auto refresh is active");
    console.log("Will reload after 5 sec");
    setTimeout(() => {  
        location.reload(); }, 5000);
}else
{
    console.log("auto refresh is not active");
    document.getElementById('isAutoRefresh').checked=false;
}

function chk_local_storage(){
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
    window.location.href = '/';

}

function clear_api_id()
{
    localStorage.setItem('hasData','false');
    localStorage.removeItem('api_id');
    localStorage.removeItem('api_url');
    localStorage.removeItem('redirect');
    chk_local_storage();



}

function show_api_view_detail()
{
    var api_url=localStorage.getItem('api_url');
    $('#api_vID').text("Api: "+api_url);
}


function hc()
{
    
    if($('#isAutoRefresh').is(":checked"))
   {
       //Save this in Local Storage
       localStorage.setItem('autoRefresh','1');
       console.log("Auto Refresh Activated");
       refresh();
   }
   else
   {
       localStorage.setItem('autoRefresh','0');
       console.log("Will not autorefresh now");
   }


}
function refresh()
{
    location.reload();
}
chk_local_storage();