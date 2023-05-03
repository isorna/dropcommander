export interface PageData {
  relativePath: string
  title: string
  titleTemplate?: string | boolean
  description: string
  headers: Header[]
  frontmatter: Record<string, any>
  params?: Record<string, any>
  isNotFound?: boolean
  lastUpdated?: number
}

type BreadcrumbItem = {
  path: string
  text: string
}

export interface FrontmatterData {
  categoryTitle: string
  excerpt: string
  position: number
  breadcrumb: BreadcrumbItem[]
}

export interface Page extends FrontmatterData {
  href: string
}

export interface Options {
  contentRoot?: string;
  contentDirs?: string[] | null;
  collapsible?: boolean;
  collapsed?: boolean;
}

export interface Header {
  /**
   * The level of the header
   *
   * `1` to `6` for `<h1>` to `<h6>`
   */
  level: number
  /**
   * The title of the header
   */
  title: string
  /**
   * The slug of the header
   *
   * Typically the `id` attr of the header anchor
   */
  slug: string
  /**
   * Link of the header
   *
   * Typically using `#${slug}` as the anchor hash
   */
  link: string
  /**
   * The children of the header
   */
  children: Header[]
}

// sidebar -------------------------------------------------------------------

export type Sidebar = SidebarItem[] | SidebarMulti

export interface SidebarMulti {
  [path: string]: SidebarItem[]
}

export type SidebarItem = {
  /**
   * The text label of the item.
   */
  text?: string

  /**
   * The link of the item.
   */
  link?: string

  /**
   * The children of the item.
   */
  items?: SidebarItem[]

  /**
   * If not specified, group is not collapsible.
   *
   * If `true`, group is collapsible and collapsed by default
   *
   * If `false`, group is collapsible but expanded by default
   */
  collapsed?: boolean

  /**
   * Position order in the sidebar.
   *
   * /docs/[lang]/[system]/index.md should be equal to 0.
   *
   * /docs/[lang]/[system]/[folder]/index.md should be equal to its position under [system] folder.
   */
  position?: number
}