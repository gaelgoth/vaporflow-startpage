import PropTypes from "prop-types";

interface Bookmark {
  href: string;
  icon: JSX.Element;
  text: string;
}

interface BookmarkSectionProps {
  title?: string;
  bookmarks: Bookmark[];
}

const BookmarkSection = ({
  title = "Bookmarks",
  bookmarks,
}: BookmarkSectionProps) => {
  return (
    <div className="text-center">
      <h3 className="text-accent text-xl font-semibold">{title}</h3>
      <ul className="mt-6 Link-list list-none">
        {bookmarks.map((bookmark, index) => (
          <li key={index}>
            <a
              role="button"
              className="btn btn-ghost btn-sm gap-2 truncate  lowercase font-medium text-base"
              href={bookmark.href}
            >
              {bookmark.icon}
              {bookmark.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

BookmarkSection.propTypes = {
  title: PropTypes.string,
  bookmarks: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      icon: PropTypes.element.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default BookmarkSection;
