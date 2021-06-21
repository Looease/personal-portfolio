const contentful = require("contentful");
const client = contentful.createClient({
  space: process.env.CTFL_SPACE,
  accessToken: process.env.CTFL_ACCESSTOKEN
});

// module.exports = function() {
//   return client.getEntries({ content_type: 'Projects', order: 'sys.createdAt' })
//   .then(function(response) {
//     const project = response.items
//     .map(function(project) {
//         project.fields.date= new Date(project.sys.updatedAt);
//       return paprojectge.fields;
//     });
//     return project;
//   })
//   .catch(console.error);
// };

// module.exports = [
//     "Hello",
//     "Hello"
//   ];
  

module.exports = async () => {
    console.log("Louise")
    return client.getEntries({ content_type: 'projects', order: 'sys.createdAt' }).then(function(response) {
            console.log(response);
            const page = response.items
                .map(function(page) {
                    page.fields.date= new Date(page.sys.updatedAt);
                    return page.fields;
                });
            return page;
        })
        .catch(console.error);
};