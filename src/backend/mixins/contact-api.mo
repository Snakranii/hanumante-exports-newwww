import Types "../types/contact";
import ContactLib "../lib/contact";
import List "mo:core/List";

mixin (
  submissions : List.List<Types.ContactSubmission>,
) {
  public func submitContactForm(input : Types.ContactFormInput) : async Types.ContactSubmission {
    let nextId = submissions.size();
    ContactLib.submit(submissions, nextId, input);
  };

  public query func getContactSubmissions() : async [Types.ContactSubmission] {
    ContactLib.getAll(submissions);
  };
};
