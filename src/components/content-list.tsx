import type { ContentItem } from "@/components/data/site-content";

export default function ContentList({ items }: { items: ContentItem[] }) {
  return (
    <div className="content-list">
      {items.map((item, index) => (
        <article
          className={`content-item${item.enabled ? "" : " content-item-disabled"}`}
          key={item.title}
        >
          <span className="content-index">
            {item.enabled ? String(index + 1).padStart(2, "0") : "--"}
          </span>
          <div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
