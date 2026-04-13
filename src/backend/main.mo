import Types "types/contact";
import List "mo:core/List";
import ContactMixin "mixins/contact-api";

actor {
  let submissions = List.empty<Types.ContactSubmission>();

  include ContactMixin(submissions);
};
