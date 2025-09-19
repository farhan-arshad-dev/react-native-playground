// props will be received as a object that way need to use {} / OR can use directly the object name like props
// destructuring syntax
export default function Profile({ person, size = 100 }) {   // its a JSX function
    return (
        <img
            className="avatar"
            src={person.imageUrl}
            alt={person.name}
            width={size}
            height={size}
        />
    )
}
