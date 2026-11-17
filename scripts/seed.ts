import bcrypt from 'bcryptjs'
import { upsertUser } from '../netlify/functions/_shared/users.js'

async function main() {
  const username = process.env.ADMIN_USERNAME
  const name = process.env.ADMIN_NAME
  const password = process.env.ADMIN_PASSWORD

  if (!username || !name || !password) {
    throw new Error('ADMIN_USERNAME, ADMIN_NAME and ADMIN_PASSWORD must be set in .env')
  }

  const passwordHash = await bcrypt.hash(password, 12)
  const user = await upsertUser({ username, name, passwordHash, role: 'admin' })

  console.log(`Seeded teacher login into R2: ${user.username} (${user.name})`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
