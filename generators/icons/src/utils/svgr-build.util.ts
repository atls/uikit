import type { Replacements } from '../icons.interfaces'

import glob                  from 'glob-promise'

import { compileIcons }      from './compile-icons.util'
import { createFiles }       from './create-files.util'
import { readFiles }         from './read-files.util'

export const svgrBuild = async (
  iconsPath: string,
  targetDir: string,
  replacements: Replacements
): Promise<void> => {
  const prettifyIconsPath = (): string => {
    const parts = iconsPath.split('')
    if (parts[parts.length - 1] === '/') {
      parts.pop()
      return parts.join('')
    }

    return iconsPath
  }

  const files = await glob(`${prettifyIconsPath()}/*.svg`)
  const icons = await readFiles(files)

  const sources = await compileIcons(
    icons.filter((icon) => icon.source),
    replacements
  )

  await createFiles(sources, targetDir)
}