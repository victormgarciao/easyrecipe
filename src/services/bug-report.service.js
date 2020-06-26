export async function reportBugRequest(props) {
    const { title, body } = props;
    var xhttp = new XMLHttpRequest();

    xhttp.open('POST', 'https://api.github.com/repos/victormgarciao/easyrecipe/issues', true);
    xhttp.setRequestHeader("Authorization", "token d43246961e5df02e2553712a3c56407b51de3724");
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.send(JSON.stringify({ title: title, body: body, "labels": ["bug"] }))
}
