exports.create_new_form = async function (req, res, connection) {
  connection.getConnection(function (err, connection) {
    // Create form
    connection.query(
      "INSERT INTO forms (users_id,name) VALUES (" +
        "'" +
        req.session.user_id +
        "'" +
        "," +
        "'" +
        req.body.title +
        "'" +
        ");",
      function (sql_error, results, fields) {
        // If some error occurs, we throw an error.
        if (sql_error) {
          res.send("false");
          connection.release();
        }
        for (let i = 0; i < req.body.content.length; i++) {
          // Create question linked to form
          connection.query(
            "INSERT INTO questions (forms_id, text, type, required) VALUES ( '" +
              results.insertId +
              "', '" +
              req.body.content[i].title +
              "', '" +
              req.body.content[i].type +
              "', '1');",
            function (sql_error, results, fields) {
              // If some error occurs, we throw an error.
              if (sql_error) {
                res.send("false");
                connection.release();
              }

              // Create answer linked to the current question

              if (req.body.content[i].type === "text") {
                connection.query(
                  "INSERT INTO answers ( question_id, text , checked) VALUES ( '" +
                    results.insertId +
                    "', '" +
                    req.body.content[i].p_answer +
                    "','1');",
                  function (sql_error, results, fields) {
                    // If some error occurs, we throw an error.
                    if (sql_error) {
                      res.send("false");
                      connection.release();
                    }
                  }
                );
              }

              if (req.body.content[i].type === "radio") {
                for (let j = 0; j < req.body.content[i].p_answer.length; j++) {
                  connection.query(
                    "INSERT INTO answers ( question_id, text , checked) VALUES ( '" +
                      results.insertId +
                      "', '" +
                      req.body.content[i].p_answer[j].text +
                      "','" +
                      (req.body.content[i].p_answer[j].checked | 0) +
                      "');",
                    function (sql_error, results, fields) {
                      // If some error occurs, we throw an error.
                      if (sql_error) {
                        res.send("false");
                        connection.release();
                      }
                    }
                  );
                }
              }
            }
          );
        }
      }
    );
    res.send("true");
    connection.release();
  });
};

exports.get_form_content = async function (req, res, connection) {
  var Formcontent = { title: "", content: [] };
  var FormID = req.path.substr(req.path.lastIndexOf("/") + 1);
  connection.getConnection(function (err, connection) {
    // Create form
    connection.query(
      "SELECT name  FROM `forms` WHERE id= " + "'" + FormID + "'" + ";",
      function (sql_error, results, fields) {
        // If some error occurs, we throw an error.
        if (sql_error) {
          res.send("false");
          connection.release();
        }
        if (results.length == 0) {
          // if form doesn't exist
          res.send("false");
          connection.release();
          return;
        }
        Formcontent.title = results[0].name;
        connection.query(
          "SELECT * FROM `questions` WHERE forms_id= " +
            "'" +
            FormID +
            "'" +
            ";",
          function (sql_error, results, fields) {
            // If some error occurs, we throw an error.
            if (sql_error) {
              res.send("false");
              connection.release();
            }
            for (let i = 0; i < results.length; i++) {
              // create new item
              let item = {};
              item.index = i;
              item.title = results[i].text;
              item.type = results[i].type;
              Formcontent.content.push(item);
            }
            var nb_questions = results.length;
            for (let i = 0; i < nb_questions; i++) {
              connection.query(
                "SELECT * FROM `answers` WHERE `question_id`= " +
                  "'" +
                  results[i].id +
                  "'" +
                  ";",
                function (sql_error, results, fields) {
                  // If some error occurs, we throw an error.
                  if (sql_error) {
                    res.send("false");
                    connection.release();
                  }
                  Formcontent.content[i].p_answer = [];
                  for (let j = 0; j < results.length; j++) {
                    Formcontent.content[i].p_answer.push({
                      text: results[j].text,
                      checked: results[j].checked,
                    });
                  }
                  if (i + 1 == nb_questions) {
                    res.send(Formcontent);
                    connection.release();
                  }
                }
              );
            }
          }
        );
      }
    );
  });
};
