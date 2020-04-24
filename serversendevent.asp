<%
Response.ContentType="text/event-stream"
Response.Expires=-1
Response.Write("data: " & now()+"\n\n")
Response.Flush()
%>