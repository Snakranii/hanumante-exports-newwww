import Types "../types/contact";
import List "mo:core/List";
import Time "mo:core/Time";

module {
  public func submit(
    submissions : List.List<Types.ContactSubmission>,
    nextId : Nat,
    input : Types.ContactFormInput,
  ) : Types.ContactSubmission {
    let submission : Types.ContactSubmission = {
      id = nextId;
      name = input.name;
      email = input.email;
      phone = input.phone;
      productInterest = input.productInterest;
      message = input.message;
      companyName = input.companyName;
      country = input.country;
      submittedAt = Time.now();
    };
    submissions.add(submission);
    submission;
  };

  public func getAll(submissions : List.List<Types.ContactSubmission>) : [Types.ContactSubmission] {
    submissions.toArray();
  };
};
