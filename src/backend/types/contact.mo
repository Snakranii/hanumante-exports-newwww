module {
  public type ContactFormInput = {
    name : Text;
    email : Text;
    phone : Text;
    productInterest : Text;
    message : Text;
    companyName : Text;
    country : Text;
  };

  public type ContactSubmission = {
    id : Nat;
    name : Text;
    email : Text;
    phone : Text;
    productInterest : Text;
    message : Text;
    companyName : Text;
    country : Text;
    submittedAt : Int;
  };
};
