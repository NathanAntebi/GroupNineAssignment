/*--------------- Begin API #1:---------------*/

<li><strong>URL</strong></li>

&emsp; /video

<li><strong>Method:</strong></li>

&emsp; POST

<li><strong>URL Params</strong></li>

&emsp; None

<li><strong>Data Params</strong></li>

&emsp; published_status=[String]

&emsp; name=[String]

<li><strong>Success Response:</strong></li>

&emsp; <strong>Code:</strong> 200

&emsp; <strong>Content:</strong> {"status": "success", videoId: 12 }

<li><strong>Sample Call:</strong></li>

    $.ajax({
      url: "/video",
      dataType: "json",
      type : "POST",
      data: "published_status=published&name=test" 
      success : function(r) { 
      console.log(r); 
      }
    })
  
/*---------------END API #1:---------------*/




/*--------------- Begin API #2:---------------*/
<li><strong>URL</strong></li>

&emsp; /video/:id

<li><strong>Method:</strong></li>

&emsp; PUT

<li><strong>URL Params</strong></li>

&emsp; <strong>Required:</strong>

&emsp;id=[integer]

<li><strong>Data Params</strong></li>

&emsp;published_status=[String]

&emsp;name=[String]


<li><strong>Success Response:</strong></li>

&emsp; <strong>Code:</strong> 200

&emsp; Content: {"status": "success", videoId: 12, name: test, published_status: published}

<li><strong>Sample Call:</strong></li>

    $.ajax({
        url: "/video/:id",
        dataType: "json",
        type : "PUT",
        data: "published_status=published&name=test"
        success : function(r) {
        console.log(r);
        }
      })
/*---------------END API #2:---------------*/



/*--------------- Begin API #3:---------------*/
<li><strong>URL</strong></li>

&emsp; /video/track/:id

<li><strong>Method:</strong></li>

&emsp; GET

<li><strong>URL Params</strong></li>

&emsp; Required:

&emsp; id=[integer]

<li><strong>Data Params</strong></li>

&emsp; NONE

<li><strong>Success Response:</strong></li>

&emsp; <strong>Code:</strong> 200

&emsp; Content: {"status": "success", videoId: 12, view_id: 23}

<li><strong>Sample Call:</strong></li>

    $.ajax({
        url: "/video/track/12",
        dataType: "json",
        type : "GET",
        success : function(r) {
        console.log(r);
      }
    })
/*---------------END API #3:---------------*/


/*--------------- Begin API #4:---------------*/
<li><strong>URL</strong></li>

&emsp; /video/viewcount/:id

<li><strong>Method:</strong></li>

&emsp; GET

<li><strong>URL Params</strong></li>

&emsp; Required:

&emsp; id=[integer]

<li><strong>QUERY Params</strong></li>

&emsp;Optional:

&emsp; start_date=[date] (yyyy-mm-dd)

&emsp; end_date=[date] (yyyy-mm-dd)

<li><strong>Data Params</strong></li>

&emsp;NONE

<li><strong>Success Response:</strong></li>

&emsp; <strong>Code:</strong> 200

&emsp; <strong>Content:</strong> {videoId: 12, view_count: 2}

<li><strong>Sample Call:</strong></li>

    $.ajax({
        url: "/video/viewcount/12",
        dataType: "json",
        type : "POST",
        success : function(r) {
        console.log(r);
        }
     })
/*---------------END API #4:---------------*/
