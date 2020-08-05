# == Schema Information
#
# Table name: reviews
#
#  id          :bigint           not null, primary key
#  author_id   :integer          not null
#  game_id     :integer          not null
#  recommended :boolean          not null
#  body        :text             not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Review < ApplicationRecord
end
