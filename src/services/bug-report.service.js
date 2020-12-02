export async function reportBugRequest(props) {
    const { title, body } = props;
    var xhttp = new XMLHttpRequest();

    xhttp.open('POST', 'https://api.github.com/repos/victormgarciao/easyrecipe/issues', true);
    xhttp.setRequestHeader("Authorization", "token 774a93b5f60e6a4d4a32ba722e40cf201c2c4814");
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.send(JSON.stringify({ title: title, body: body, "labels": ["bug"] }));
    return xhttp;
}
