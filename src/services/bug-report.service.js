export async function reportBugRequest(props) {
    const { title, body } = props;
    var xhttp = new XMLHttpRequest();

    xhttp.open('POST', 'https://api.github.com/repos/victormgarciao/easyrecipe/issues', true);
    xhttp.setRequestHeader("Authorization", "token f21443e6f00960d5559c999980c0611f2e808360");
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.send(JSON.stringify({ title: title, body: body, "labels": ["bug"] }))
}
