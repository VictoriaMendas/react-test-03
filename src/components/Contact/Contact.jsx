export default function Contact({ contact }) {
  return (
    <div>
      <div>
        <span>Name: {contact.name}</span>
        <span>Number: {contact.number}</span>
      </div>
      <div>
        <button type="button">Delete</button>
      </div>
    </div>
  );
}
